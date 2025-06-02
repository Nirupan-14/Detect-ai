"use client";

import { useState, useRef } from "react";
import React from 'react';

export default function Detect() {
  const [selectedFileType, setSelectedFileType] = useState("audio");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<ResultsType | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  interface DetailedAnalysis {
    eye_movement: {
      natural: number;
      ai: number;
    };
    audio_emotion: {
      natural: number;
      ai: number;
    };
    lip_sync: {
      natural: number;
      ai: number;
    };
  }
  
  interface ModelWeights {
    eye: number;
    lip: number;
    emotion: number;
  }
  
  interface ResultsType {
    filename: string;
    analysis_type: string;
    prediction: 'ai' | 'natural';
    confidence: number;
    ai_probability?: number;
    natural_probability?: number;
    probabilities?: {
      ai: number;
      natural: number;
    };
    detailed_analysis?: DetailedAnalysis;
    model_weights?: ModelWeights;
  }
  

  // API endpoint - Update with your ngrok URL
  const API_BASE_URL = "https://d85c-35-199-183-149.ngrok-free.app";

  const handleSelectAudio = () => {
    setSelectedFileType("audio");
    setResults(null);
    setError(null);
    setSelectedFile(null);
  };

  const handleSelectVideo = () => {
    setSelectedFileType("video");
    setResults(null);
    setError(null);
    setSelectedFile(null);
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 
    if (file) {
      setSelectedFile(file);
      setResults(null);
      setError(null);
    }
  };
  

  const handleAnalyze = async (): Promise<void> => {
    if (!selectedFile) {
      setError("Please select a file first");
      return;
    }
  
    setIsAnalyzing(true);
    setError(null);
    setResults(null);
  
    try {
      const formData = new FormData();
      let endpoint: string;
  
      if (selectedFileType === "audio") {
        formData.append("audio", selectedFile);
        endpoint = `${API_BASE_URL}/predict-voice`;
      } else {
        formData.append("video", selectedFile);
        endpoint = `${API_BASE_URL}/predict-video`;
      }
  
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }
  
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error);
      }
  
      setResults(data);
    } catch (err: unknown) {
      console.error("Analysis error:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Analysis failed. Please try again.");
      }
    } finally {
      setIsAnalyzing(false);
    }
  };
  

  const formatPercentage = (value: number): string => {
    return (value * 100).toFixed(2) + "%";
  };
  

  const renderResults = () => {
    if (!results) return null;

    // Handle different result formats from backend
    const isVideoAnalysis = results.analysis_type === "comprehensive_video";
    const prediction = results.prediction;
    const confidence = results.confidence;
    
    // Get probabilities - handle both formats
    let aiProb, naturalProb;
if (results.probabilities) {
  aiProb = results.probabilities.ai;
  naturalProb = results.probabilities.natural;
} else {
  aiProb = (results.ai_probability ?? 0) * 100;
  naturalProb = (results.natural_probability ?? 0) * 100;
}


    return (
      <div className="mb-6 p-4 bg-[#2A2A2A] rounded-lg">
        <h4 className="text-[#FDFDFD] font-bold mb-3">Analysis Results:</h4>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[#808080]">File:</span>
            <span className="text-[#2E90FA] text-sm">{results.filename}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#808080]">Analysis Type:</span>
            <span className="text-[#FDFDFD] text-sm capitalize">
              {isVideoAnalysis ? "Comprehensive Video" : "Voice Only"}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#808080]">Prediction:</span>
            <span className={`font-bold px-3 py-1 rounded-full text-sm ${
              prediction === 'ai' 
                ? 'bg-red-900/30 text-red-400 border border-red-500' 
                : 'bg-green-900/30 text-green-400 border border-green-500'
            }`}>
              {prediction === 'ai' ? 'AI Generated' : 'Natural'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#808080]">Confidence:</span>
            <span className="text-[#2E90FA] font-bold">
              {formatPercentage(confidence)}%
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[#808080]">AI Probability:</span>
              <span className="text-red-400 font-bold">
                {formatPercentage(aiProb)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-red-500 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min(aiProb, 100)}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[#808080]">Natural Probability:</span>
              <span className="text-green-400 font-bold">
                {formatPercentage(naturalProb)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min(naturalProb, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Detailed Analysis for Video */}
          {isVideoAnalysis && results.detailed_analysis && (
            <div className="mt-4 p-3 bg-[#1A1A1A] rounded-lg">
              <h5 className="text-[#FDFDFD] font-semibold mb-2">Detailed Analysis:</h5>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#808080]">Eye Movement:</span>
                  <span className="text-[#FDFDFD]">
                    Natural: {formatPercentage(results.detailed_analysis.eye_movement.natural)}% | 
                    AI: {formatPercentage(results.detailed_analysis.eye_movement.ai)}%
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-[#808080]">Audio/Emotion:</span>
                  <span className="text-[#FDFDFD]">
                    Natural: {formatPercentage(results.detailed_analysis.audio_emotion.natural)}% | 
                    AI: {formatPercentage(results.detailed_analysis.audio_emotion.ai)}%
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-[#808080]">Lip Sync:</span>
                  <span className="text-[#FDFDFD]">
                    Natural: {formatPercentage(results.detailed_analysis.lip_sync.natural)}% | 
                    AI: {formatPercentage(results.detailed_analysis.lip_sync.ai)}%
                  </span>
                </div>
              </div>

              {results.model_weights && (
                <div className="mt-3 pt-2 border-t border-gray-600">
                  <span className="text-[#808080] text-xs">Model Weights:</span>
                  <div className="text-xs text-[#FDFDFD] mt-1">
                    Eye: {results.model_weights.eye} | 
                    Lip: {results.model_weights.lip} | 
                    Emotion: {results.model_weights.emotion}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="pb-16 px-6 md:px-0 min-h-screen bg-[#0A0A0A]">
      <div className="text-center md:py-[92px] sm:py-10 py-14 text-[#FAFAFA] md:mx-20">
        <h3 className="text-[#FAFAFA] xl:text-[48px] md:text-[34px] text-[28px] font-bold">
          Detect AI Generated{" "}
          <span className="text-[#2E90FA] underline">Audio & Video</span> Files
        </h3>
        <div className="xl:px-[200px] lg:mx-32 md:mx-22 sm:mx-12 mx-4">
          <p className="pt-6 md:pt-4 text-[15px] md:text-[20px]">
            Upload your audio or video files and uncover their authenticity with
            our advanced AI analysis.
          </p>
        </div>
      </div>

      <div className="text-[#FDFDFD] xl:px-[420px] lg:px-44 md:px-40 sm:px-12 px-4 pt-8 md:pt-6 py-6 md:text-[16px] text-[14px]">
        <div className="border border-1 border-[#535862] flex justify-center items-center text-center p-1 rounded-full">
          {/* Audio Section */}
          <div
            className={`${
              selectedFileType === "audio" ? "bg-[#2E90FA]" : "hover:bg-[#1A1A1A]"
            } rounded-full flex justify-center items-center gap-2 md:py-4 py-3 px-auto w-full cursor-pointer transition-colors`}
            onClick={handleSelectAudio}
          >
            <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path d="M3.5 4.5C2.67162 4.5 2 5.17153 2 6V18C2 18.8284 2.67162 19.5 3.5 19.5C4.32838 19.5 5 18.8284 5 18V6C5 5.17153 4.32838 4.5 3.5 4.5Z" fill="#FDFDFD"/>
              <path d="M8 7.5C7.17162 7.5 6.5 8.17153 6.5 9V15C6.5 15.8284 7.17162 16.5 8 16.5C8.82838 16.5 9.5 15.8284 9.5 15V9C9.5 8.17153 8.82838 7.5 8 7.5Z" fill="#FDFDFD"/>
              <path d="M12.5 0C11.6716 0 11 0.671531 11 1.5V22.5C11 23.3284 11.6716 24 12.5 24C13.3284 24 14 23.3284 14 22.5V1.5C14 0.671531 13.3284 0 12.5 0Z" fill="#FDFDFD"/>
              <path d="M17 3.75C16.1716 3.75 15.5 4.42153 15.5 5.25V18.75C15.5 19.5784 16.1716 20.25 17 20.25C17.8284 20.25 18.5 19.5784 18.5 18.75V5.25C18.5 4.42153 17.8284 3.75 17 3.75Z" fill="#FDFDFD"/>
              <path d="M21.5 7.5C20.6716 7.5 20 8.17153 20 9V15C20 15.8284 20.6716 16.5 21.5 16.5C22.3284 16.5 23 15.8284 23 15V9C23 8.17153 22.3284 7.5 21.5 7.5Z" fill="#FDFDFD"/>
            </svg>
            <p className="font-bold flex justify-center items-center text-center">Audio</p>
          </div>

          {/* Video Section */}
          <div
            className={`${
              selectedFileType === "video" ? "bg-[#2E90FA]" : "hover:bg-[#1A1A1A]"
            } rounded-full flex justify-center items-center gap-2 md:py-4 py-3 px-auto w-full cursor-pointer transition-colors`}
            onClick={handleSelectVideo}
          >
            <svg
              viewBox="0 0 25 24"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-5 w-5"
            >
              <path d="M5.86558 3.14573L9.577 6.85716H3.14843C3.27961 6.06916 3.59377 5.3229 4.06566 4.67833C4.53755 4.03376 5.15403 3.50884 5.86558 3.14573ZM10.8541 2.57144H8.21415C8.05129 2.57144 7.88843 2.58001 7.72557 2.58858L11.9941 6.85716H15.1399L10.8541 2.57144ZM16.7856 2.57144H13.2884L17.5741 6.85716H21.8513C21.6505 5.65893 21.0313 4.57074 20.1038 3.78603C19.1762 3.00133 18.0005 2.57096 16.7856 2.57144ZM11.1986 16.8223L15.4843 14.4652C15.6189 14.3913 15.7312 14.2827 15.8094 14.1506C15.8876 14.0185 15.9288 13.8678 15.9288 13.7143C15.9288 13.5608 15.8876 13.4101 15.8094 13.278C15.7312 13.1459 15.6189 13.0373 15.4843 12.9634L11.1986 10.6063C11.0681 10.5345 10.9212 10.498 10.7723 10.5003C10.6234 10.5026 10.4776 10.5437 10.3494 10.6195C10.2212 10.6953 10.1149 10.8032 10.0411 10.9325C9.96731 11.0619 9.92847 11.2082 9.92843 11.3572V16.0714C9.92847 16.2204 9.96731 16.3667 10.0411 16.4961C10.1149 16.6254 10.2212 16.7333 10.3494 16.8091C10.4776 16.8849 10.6234 16.926 10.7723 16.9283C10.9212 16.9306 11.0681 16.8941 11.1986 16.8223Z" fill="#FDFDFD"/>
            </svg>
            <p className="font-bold text-center">Video</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] p-6 sm:p-6 md:p-6 lg:p-6 xl:mx-72 lg:mx-32 md:mx-24 sm:mx-12 mx-2 rounded-3xl md:text-[16px] text-[14px]">
        <p className="text-[#808080] pb-8 scroll-pb-36 text-[15px] md:text-[18px]">
          <span className="block md:hidden">
            Drag and drop your {selectedFileType} file or click to upload.
          </span>
          <span className="hidden md:block">
            Drag and drop your {selectedFileType} file or click to upload. 
            {selectedFileType === "audio" 
              ? " (Supported formats: MP3, WAV, etc. Max size: 50MB.)" 
              : " (Supported formats: MP4, AVI, MOV, etc. Video analysis available!)"}
          </span>
        </p>

        {/* Selected file display */}
        {selectedFile && (
          <div className="mb-4 p-3 bg-[#2A2A2A] rounded-lg">
            <p className="text-[#FDFDFD] text-sm">
              Selected file: <span className="text-[#2E90FA]">{selectedFile.name}</span>
            </p>
            <p className="text-[#808080] text-xs">
              Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
            <p className="text-[#808080] text-xs">Type: {selectedFile.type}</p>
          </div>
        )}

        {/* Error display */}
        {error && (
          <div className="mb-4 p-3 bg-red-900/20 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Results display */}
        {renderResults()}

        {/* Hidden File Input */}
        <input
          type="file"
          accept={selectedFileType === "audio" ? "audio/*" : "video/*"}
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />

        {/* Upload Icon and Analysis Button */}
        <div className="flex justify-between items-center">
          <div 
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleIconClick}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="#2A2A2A"/>
              <path d="M34 25C33.7348 25 33.4804 25.1054 33.2929 25.2929C33.1054 25.4804 33 25.7348 33 26V30.213C32.9992 30.9519 32.7053 31.6603 32.1828 32.1828C31.6603 32.7053 30.9519 32.9992 30.213 33H17.787C17.0481 32.9992 16.3397 32.7053 15.8172 32.1828C15.2947 31.6603 15.0008 30.9519 15 30.213V26C15 25.7348 14.8946 25.4804 14.7071 25.2929C14.5196 25.1054 14.2652 25 14 25C13.7348 25 13.4804 25.1054 13.2929 25.2929C13.1054 25.4804 13 25.7348 13 26V30.213C13.0013 31.4822 13.5061 32.699 14.4035 33.5965C15.301 34.4939 16.5178 34.9987 17.787 35H30.213C31.4822 34.9987 32.699 34.4939 33.5965 33.5965C34.4939 32.699 34.9987 31.4822 35 30.213V26C35 25.7348 34.8946 25.4804 34.7071 25.2929C34.5196 25.1054 34.2652 25 34 25Z" fill="#FDFDFD"/>
              <path d="M18.7069 20.707L22.9999 16.414V29C22.9999 29.2652 23.1053 29.5195 23.2928 29.7071C23.4803 29.8946 23.7347 30 23.9999 30C24.2651 30 24.5195 29.8946 24.707 29.7071C24.8946 29.5195 24.9999 29.2652 24.9999 29V16.414L29.2929 20.707C29.4815 20.8891 29.7341 20.9899 29.9963 20.9876C30.2585 20.9854 30.5093 20.8802 30.6947 20.6948C30.8801 20.5094 30.9853 20.2586 30.9876 19.9964C30.9899 19.7342 30.8891 19.4816 30.7069 19.293L24.7069 13.293C24.5194 13.1055 24.2651 13.0002 23.9999 13.0002C23.7348 13.0002 23.4804 13.1055 23.2929 13.293L17.2929 19.293C17.1108 19.4816 17.01 19.7342 17.0122 19.9964C17.0145 20.2586 17.1197 20.5094 17.3051 20.6948C17.4905 20.8802 17.7413 20.9854 18.0035 20.9876C18.2657 20.9899 18.5183 20.8891 18.7069 20.707Z" fill="#FDFDFD"/>
            </svg>
          </div>

          {/* Analysis Button */}
          <button
            type="button"
            className={`font-bold py-2 px-6 rounded-full flex gap-2 items-center transition-all ${
              isAnalyzing 
                ? 'bg-[#4A4A4A] text-gray-300 cursor-not-allowed' 
                : 'bg-[#2E90FA] text-white hover:bg-[#1E70D0]'
            }`}
            onClick={handleAnalyze}
            disabled={isAnalyzing || !selectedFile}
          >
            {isAnalyzing && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            )}
            {isAnalyzing ? 'Analyzing...' : 'Analyze'} 
            <span className="hidden md:block">
              {!isAnalyzing && selectedFileType}
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}