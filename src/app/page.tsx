"use client";
import Link from 'next/link';
import { useState, useRef } from "react";

export default function Home() {
  const [selectedFileType, setSelectedFileType] = useState("audio"); // default to audio
  const fileInputRef = useRef(null); // Create a reference for the file input
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectAudio = () => {
    setSelectedFileType("audio");
  };

  const handleSelectVideo = () => {
    setSelectedFileType("video");
  };

  const handleIconClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the selected file
      console.log(`File selected:`, file);
    }
  };

  return (
    <main className="pb-16">
      <div className="text-center py-[92px] text-[#FAFAFA]">
        <h3 className="text-[#FAFAFA] text-[48px] font-bold">
          Detect AI Generated{" "}
          <span className="text-[#2E90FA] underline">Audio & Video</span> Files
        </h3>
        <div className="px-[420px]">
          <p className="pt-4 text-[20px]">
            Upload your audio or video files and uncover their authenticity with
            our advanced AI analysis.
          </p>
        </div>
      </div>

      <div className="text-[#FDFDFD] px-[420px] pt-4 py-6">
        <div className="border border-1 border-[#535862] flex justify-center p-1 rounded-full">
          {/* Audio Section */}
          <div
            className={`${
              selectedFileType === "audio" ? "bg-[#2E90FA]" : "hover:bg-[#1A1A1A]"
            } rounded-full flex justify-center items-center gap-2 py-4 px-auto w-full cursor-pointer`}
            onClick={handleSelectAudio}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Audio SVG Path */}
            </svg>
            <p className="font-bold">Audio</p>
          </div>

          {/* Video Section */}
          <div
            className={`${
              selectedFileType === "video" ? "bg-[#2E90FA]" : "hover:bg-[#1A1A1A]"
            } rounded-full flex justify-center items-center gap-2 py-4 px-auto w-full cursor-pointer`}
            onClick={handleSelectVideo}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Video SVG Path */}
            </svg>
            <p className="font-bold">Video</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] p-6 mx-[300px] rounded-3xl text-[16px]">
        <p className="text-[#808080] pb-8 text-[18px]">
          Drag and drop your {selectedFileType} file or click to upload.
          (Supported formats: MP3, WAV. Max size: 50MB.)
        </p>

        {/* Hidden File Input */}
        <input
          type="file"
          accept={selectedFileType === "audio" ? "audio/*" : "video/*"}
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* Upload Icon and Analysis Button */}
        <div className="flex justify-between items-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleIconClick}>
            
<rect width="48" height="48" rx="24" fill="#1A1A1A"/>
<path d="M34 25C33.7348 25 33.4804 25.1054 33.2929 25.2929C33.1054 25.4804 33 25.7348 33 26V30.213C32.9992 30.9519 32.7053 31.6603 32.1828 32.1828C31.6603 32.7053 30.9519 32.9992 30.213 33H17.787C17.0481 32.9992 16.3397 32.7053 15.8172 32.1828C15.2947 31.6603 15.0008 30.9519 15 30.213V26C15 25.7348 14.8946 25.4804 14.7071 25.2929C14.5196 25.1054 14.2652 25 14 25C13.7348 25 13.4804 25.1054 13.2929 25.2929C13.1054 25.4804 13 25.7348 13 26V30.213C13.0013 31.4822 13.5061 32.699 14.4035 33.5965C15.301 34.4939 16.5178 34.9987 17.787 35H30.213C31.4822 34.9987 32.699 34.4939 33.5965 33.5965C34.4939 32.699 34.9987 31.4822 35 30.213V26C35 25.7348 34.8946 25.4804 34.7071 25.2929C34.5196 25.1054 34.2652 25 34 25Z" fill="#FDFDFD"/>
<path d="M18.7069 20.707L22.9999 16.414V29C22.9999 29.2652 23.1053 29.5195 23.2928 29.7071C23.4803 29.8946 23.7347 30 23.9999 30C24.2651 30 24.5195 29.8946 24.707 29.7071C24.8946 29.5195 24.9999 29.2652 24.9999 29V16.414L29.2929 20.707C29.4815 20.8891 29.7341 20.9899 29.9963 20.9876C30.2585 20.9854 30.5093 20.8802 30.6947 20.6948C30.8801 20.5094 30.9853 20.2586 30.9876 19.9964C30.9899 19.7342 30.8891 19.4816 30.7069 19.293L24.7069 13.293C24.5194 13.1055 24.2651 13.0002 23.9999 13.0002C23.7348 13.0002 23.4804 13.1055 23.2929 13.293L17.2929 19.293C17.1108 19.4816 17.01 19.7342 17.0122 19.9964C17.0145 20.2586 17.1197 20.5094 17.3051 20.6948C17.4905 20.8802 17.7413 20.9854 18.0035 20.9876C18.2657 20.9899 18.5183 20.8891 18.7069 20.707Z" fill="#FDFDFD"/>
</svg>

          {/* Analysis Button */}
          <button
            type="button"
            className="bg-[#666666] text-white font-bold py-2 px-6 rounded-full"
          >
            Analyze {selectedFileType}
          </button>
        </div>
      </div>
      

    </main>
  );
}
