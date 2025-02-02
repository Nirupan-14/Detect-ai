"use client";
import { FaMicrophoneAlt, FaEye, } from "react-icons/fa"; // Importing icons
import { MdOutlineVideoLibrary } from "react-icons/md";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#FAFAFA] py-16 px-6 sm:px-16 lg:px-32">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4 text-[#2E90FA]">
          About <span className="underline">Detect AI</span>
        </h1>
        <p className="text-lg text-[#808080] max-w-3xl mx-auto">
          Discover how we combine cutting-edge AI models to ensure authenticity in digital media.
        </p>
      </header>

      {/* About Content */}
      <section className="space-y-20">
        {/* Objectives Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Our Objectives</h2>
          <p className="text-[#808080] text-center max-w-3xl mx-auto">
            At Detect AI, we harness the power of advanced AI models to detect and analyze digital content for transparency and authenticity. Here&apos;s what we&apos;re working on:
          </p>

          {/* Objective Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#2A2A2A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaMicrophoneAlt className="text-[#2E90FA] text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-[#2E90FA]">Emotional Voice Analysis</h3>
              </div>
              <p className="text-[#808080]">
                By analyzing audio features like pitch and tone with LSTM networks, we capture emotional patterns in speech. AI-generated voices often lack authentic emotional flow.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#2A2A2A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                < FaMicrophoneAlt  className="text-[#2E90FA] text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-[#2E90FA]">Lip Movement Analysis</h3>
              </div>
              <p className="text-[#808080]">
                Using 3D Convolutional Neural Networks, we analyze lip movements to detect inconsistencies between lip gestures and AI-generated speech.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#2A2A2A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaEye className="text-[#2E90FA] text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-[#2E90FA]">Eye Movement Analysis</h3>
              </div>
              <p className="text-[#808080]">
                We use CNN models to track eye movements and identify anomalies, such as unnatural blinking and gaze behavior, which can signal AI-generated avatars or deepfakes.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Models Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">How Our Models Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#2A2A2A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaMicrophoneAlt className="text-[#2E90FA] text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-[#2E90FA]">Audio Emotional Analysis</h3>
              </div>
              <p className="text-[#808080]">
                We split audio from videos and analyze features like pitch, tone, and speech patterns to capture authentic or synthetic emotional signals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#2A2A2A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <MdOutlineVideoLibrary className="text-[#2E90FA] text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-[#2E90FA]">Lip Movement Features</h3>
              </div>
              <p className="text-[#808080]">
                3D CNN models extract patterns from video frames, tracking lip synchronization and timing for AI-generated detection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#2A2A2A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaEye className="text-[#2E90FA] text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-[#2E90FA]">Eye Movement Features</h3>
              </div>
              <p className="text-[#808080]">
                CNN models track blinking patterns and gaze shifts to spot AI-generated inconsistencies in visual content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
