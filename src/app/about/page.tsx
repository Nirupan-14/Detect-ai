"use client";
import Button from '@/component/Button';
import { useState } from 'react';
import { FaMicrophoneAlt, FaEye,  FaChartLine } from "react-icons/fa";
import { MdOutlineVideoLibrary, MdPsychology, MdAnalytics } from "react-icons/md";


export default function About() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeSection, setActiveSection] = useState('objectives');

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] text-[#FAFAFA] relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2E90FA] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 py-16 px-6 sm:px-16 lg:px-32">
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#2E90FA] via-[#4F46E5] to-[#2E90FA] bg-clip-text text-transparent animate-pulse">
              Detect AI
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2E90FA] to-transparent"></div>
          </div>
          <p className="text-xl text-[#B0B0B0] max-w-4xl mx-auto mt-8 leading-relaxed">
            Pioneering the future of digital authenticity through advanced AI detection models that analyze voice, visual, and behavioral patterns with unprecedented precision.
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#2A2A2A]/80 backdrop-blur-sm rounded-2xl p-2 border border-[#404040]">
            <button
              onClick={() => setActiveSection('objectives')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === 'objectives'
                  ? 'bg-[#2E90FA] text-white shadow-lg shadow-[#2E90FA]/30'
                  : 'text-[#B0B0B0] hover:text-white hover:bg-[#404040]'
              }`}
            >
              Our Objectives
            </button>
            <button
              onClick={() => setActiveSection('models')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ml-2 ${
                activeSection === 'models'
                  ? 'bg-[#2E90FA] text-white shadow-lg shadow-[#2E90FA]/30'
                  : 'text-[#B0B0B0] hover:text-white hover:bg-[#404040]'
              }`}
            >
              Technical Models
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <section className="space-y-20">
          {/* Objectives Section */}
          {activeSection === 'objectives' && (
            <div className="space-y-16 animate-fadeIn">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-[#B0B0B0] bg-clip-text text-transparent">
                  Revolutionary AI Detection Technology
                </h2>
                <p className="text-[#B0B0B0] text-lg max-w-4xl mx-auto leading-relaxed">
                  We harness cutting-edge artificial intelligence to detect synthetic content across multiple modalities, 
                  ensuring digital authenticity through sophisticated behavioral and technical analysis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Emotional Voice Analysis */}
                <div
                  className={`bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:scale-105 hover:shadow-[#2E90FA]/20 hover:shadow-2xl cursor-pointer ${
                    activeCard === 'voice' ? 'border-[#2E90FA] shadow-[#2E90FA]/30' : 'border-[#404040]'
                  }`}
                  onMouseEnter={() => handleCardHover('voice')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${
                      activeCard === 'voice' ? 'bg-[#2E90FA] shadow-lg shadow-[#2E90FA]/30' : 'bg-[#404040]'
                    }`}>
                      <FaMicrophoneAlt className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">Emotional Voice Analysis</h3>
                  </div>
                  <p className="text-[#B0B0B0] leading-relaxed">
                    Scrutinizes intricate auditory characteristics including Mel-Frequency Cepstral Coefficients (MFCCs), 
                    pitch trajectories, and spectral nuances. Our LSTM networks capture temporal emotional transitions, 
                    identifying synthetic vocal patterns lacking spontaneity and emotional authenticity.
                  </p>
                  {activeCard === 'voice' && (
                    <div className="mt-4 p-4 bg-[#2E90FA]/10 rounded-xl border border-[#2E90FA]/30">
                      <p className="text-sm text-[#2E90FA] font-semibold">
                        Technologies: LSTM Networks, MFCC Analysis, Spectral Processing
                      </p>
                    </div>
                  )}
                </div>

                {/* Lip Movement Analysis */}
                <div
                  className={`bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:scale-105 hover:shadow-[#4F46E5]/20 hover:shadow-2xl cursor-pointer ${
                    activeCard === 'lip' ? 'border-[#4F46E5] shadow-[#4F46E5]/30' : 'border-[#404040]'
                  }`}
                  onMouseEnter={() => handleCardHover('lip')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${
                      activeCard === 'lip' ? 'bg-[#4F46E5] shadow-lg shadow-[#4F46E5]/30' : 'bg-[#404040]'
                    }`}>
                      <MdOutlineVideoLibrary className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">Lip Movement Analysis</h3>
                  </div>
                  <p className="text-[#B0B0B0] leading-relaxed">
                    Multi-Stream LSTM architecture deciphers spatiotemporal dynamics of lip motion across video sequences. 
                    Detects temporal mismatches and distinguishes genuine speech synchronization from AI-induced anomalies, 
                    including misaligned lip gestures and inconsistent visual phoneme transitions.
                  </p>
                  {activeCard === 'lip' && (
                    <div className="mt-4 p-4 bg-[#4F46E5]/10 rounded-xl border border-[#4F46E5]/30">
                      <p className="text-sm text-[#4F46E5] font-semibold">
                        Technologies: Multi-Stream LSTM, Motion Vector Analysis, Temporal Segmentation
                      </p>
                    </div>
                  )}
                </div>

                {/* Eye Movement Analysis */}
                <div
                  className={`bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:scale-105 hover:shadow-[#10B981]/20 hover:shadow-2xl cursor-pointer ${
                    activeCard === 'eye' ? 'border-[#10B981] shadow-[#10B981]/30' : 'border-[#404040]'
                  }`}
                  onMouseEnter={() => handleCardHover('eye')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${
                      activeCard === 'eye' ? 'bg-[#10B981] shadow-lg shadow-[#10B981]/30' : 'bg-[#404040]'
                    }`}>
                      <FaEye className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">Eye Movement Analysis</h3>
                  </div>
                  <p className="text-[#B0B0B0] leading-relaxed">
                    Transforms high-resolution eye-tracking data into behavioral metrics capturing gaze stability, 
                    blink cadence, and ocular motion entropy. Random Forest classifiers detect deviations from natural 
                    human visual behavior, identifying machine-generated gaze simulations in synthetic avatars.
                  </p>
                  {activeCard === 'eye' && (
                    <div className="mt-4 p-4 bg-[#10B981]/10 rounded-xl border border-[#10B981]/30">
                      <p className="text-sm text-[#10B981] font-semibold">
                        Technologies: Random Forest, Gaze Tracking, Behavioral Metrics
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Technical Models Section */}
          {activeSection === 'models' && (
            <div className="space-y-16 animate-fadeIn">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-[#B0B0B0] bg-clip-text text-transparent">
                  Advanced Feature Engineering
                </h2>
                <p className="text-[#B0B0B0] text-lg max-w-4xl mx-auto leading-relaxed">
                  Deep dive into our sophisticated feature extraction and analysis methodologies that power 
                  our state-of-the-art detection capabilities across audio, visual, and behavioral domains.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Audio Emotional Features */}
                <div
                  className={`bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:scale-105 hover:shadow-[#F59E0B]/20 hover:shadow-2xl cursor-pointer ${
                    activeCard === 'audio' ? 'border-[#F59E0B] shadow-[#F59E0B]/30' : 'border-[#404040]'
                  }`}
                  onMouseEnter={() => handleCardHover('audio')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${
                      activeCard === 'audio' ? 'bg-[#F59E0B] shadow-lg shadow-[#F59E0B]/30' : 'bg-[#404040]'
                    }`}>
                      <MdPsychology className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">Audio Emotional Features</h3>
                  </div>
                  <p className="text-[#B0B0B0] leading-relaxed">
                    Comprehensive feature extraction focusing on prosodic rhythm, vocal intonation, and tonal contouring. 
                    LSTM frameworks interpret time-dependent acoustic signals to discern genuine emotional inflection 
                    from artificial vocal flatness, providing critical authenticity verification.
                  </p>
                  {activeCard === 'audio' && (
                    <div className="mt-4 p-4 bg-[#F59E0B]/10 rounded-xl border border-[#F59E0B]/30">
                      <p className="text-sm text-[#F59E0B] font-semibold">
                        Features: Prosodic Analysis, Vocal Intonation, Tonal Contouring
                      </p>
                    </div>
                  )}
                </div>

                {/* Lip Movement Features */}
                <div
                  className={`bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:scale-105 hover:shadow-[#EF4444]/20 hover:shadow-2xl cursor-pointer ${
                    activeCard === 'lipfeatures' ? 'border-[#EF4444] shadow-[#EF4444]/30' : 'border-[#404040]'
                  }`}
                  onMouseEnter={() => handleCardHover('lipfeatures')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${
                      activeCard === 'lipfeatures' ? 'bg-[#EF4444] shadow-lg shadow-[#EF4444]/30' : 'bg-[#404040]'
                    }`}>
                      <MdAnalytics className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">Lip Movement Features</h3>
                  </div>
                  <p className="text-[#B0B0B0] leading-relaxed">
                    Precise motion vector analysis and temporal segmentation evaluate lip region evolution throughout speech. 
                    Multi-Stream LSTM identifies patterns including lip trajectory smoothness, frame continuity, 
                    and articulatory symmetry, detecting subtle disruptions in AI-generated content.
                  </p>
                  {activeCard === 'lipfeatures' && (
                    <div className="mt-4 p-4 bg-[#EF4444]/10 rounded-xl border border-[#EF4444]/30">
                      <p className="text-sm text-[#EF4444] font-semibold">
                        Features: Motion Vectors, Trajectory Analysis, Frame Continuity
                      </p>
                    </div>
                  )}
                </div>

                {/* Eye Movement Features */}
                <div
                  className={`bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:scale-105 hover:shadow-[#8B5CF6]/20 hover:shadow-2xl cursor-pointer ${
                    activeCard === 'eyefeatures' ? 'border-[#8B5CF6] shadow-[#8B5CF6]/30' : 'border-[#404040]'
                  }`}
                  onMouseEnter={() => handleCardHover('eyefeatures')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${
                      activeCard === 'eyefeatures' ? 'bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/30' : 'bg-[#404040]'
                    }`}>
                      <FaChartLine className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">Eye Movement Features</h3>
                  </div>
                  <p className="text-[#B0B0B0] leading-relaxed">
                    Statistical descriptors and dynamic profiles from raw gaze data quantify fixation distribution, 
                    saccadic irregularities, and blink rate variability. Random Forest models reliably distinguish 
                    organic eye behavior from computer-synthesized ocular movements.
                  </p>
                  {activeCard === 'eyefeatures' && (
                    <div className="mt-4 p-4 bg-[#8B5CF6]/10 rounded-xl border border-[#8B5CF6]/30">
                      <p className="text-sm text-[#8B5CF6] font-semibold">
                        Features: Fixation Analysis, Saccadic Patterns, Blink Variability
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>

      <Button/>

        
        
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}