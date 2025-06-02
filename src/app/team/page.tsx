"use client";
import { useState } from 'react';
import { FaGraduationCap, FaUniversity, FaUserTie } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import Image from "next/image";

const students = [
  {
    name: "NIRUPAN.M",
    id: "ICT/20/895",
    role: "Final year student",
    faculty: "Faculty of Technology",
    university: "University of Sri Jayewardenepura",
    image: "/team/nirupan.jpeg",
    specialization: "Software Technology",
    
  },
  {
    name: "MERINA.M",
    id: "ICT/20/887",
    role: "Final year student",
    faculty: "Faculty of Technology",
    university: "University of Sri Jayewardenepura",
    image: "/team/merina.jpeg",
    specialization: "Software Technology",
    
  },
  {
    name: "PRIYASALINI.S",
    id: "ICT/20/902",
    role: "Final year student",
    faculty: "Faculty of Technology",
    university: "University of Sri Jayewardenepura",
    image: "/team/priya.jpeg",
    specialization: "Software Technology",
    
  },
];

const supervisor = {
  name: "Dr. Nalaka Lankasena",
  title: "Senior Lecturer (Grade II)",
  faculty: "Faculty of Technology",
  university: "University of Sri Jayewardenepura",
  image: "/team/Dr.nalaka.png",
};

export default function Team() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <main className="bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] min-h-screen text-[#FAFAFA] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-[#2E90FA] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-[#10B981] rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-16 px-6 sm:px-16 lg:px-32">
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="inline-block mb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Meet the Team Behind{" "}
              <span className="bg-gradient-to-r from-[#2E90FA] via-[#4F46E5] to-[#2E90FA] bg-clip-text text-transparent">
                Detect AI
              </span>
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2E90FA] to-transparent"></div>
          </div>
          <p className="text-xl text-[#B0B0B0] max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of AI detection through innovative research, cutting-edge technology,
            and collaborative excellence in artificial intelligence and machine learning.
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#2A2A2A]/80 backdrop-blur-sm rounded-2xl p-2 border border-[#404040]">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === 'overview'
                  ? 'bg-[#2E90FA] text-white shadow-lg shadow-[#2E90FA]/30'
                  : 'text-[#B0B0B0] hover:text-white hover:bg-[#404040]'
              }`}
            >
              Team Overview
            </button>
            <button
              onClick={() => setActiveSection('supervisor')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ml-2 ${
                activeSection === 'supervisor'
                  ? 'bg-[#2E90FA] text-white shadow-lg shadow-[#2E90FA]/30'
                  : 'text-[#B0B0B0] hover:text-white hover:bg-[#404040]'
              }`}
            >
              Supervisor
            </button>
            <button
              onClick={() => setActiveSection('members')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ml-2 ${
                activeSection === 'members'
                  ? 'bg-[#2E90FA] text-white shadow-lg shadow-[#2E90FA]/30'
                  : 'text-[#B0B0B0] hover:text-white hover:bg-[#404040]'
              }`}
            >
              Team Members
            </button>
          </div>
        </div>

        {/* Content Sections */}
        {activeSection === 'overview' && (
          <section className="space-y-16 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-[#B0B0B0] bg-clip-text text-transparent">
                Research Excellence & Innovation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 border border-[#404040] hover:border-[#2E90FA] transition-all duration-300">
                  <FaGraduationCap className="text-[#2E90FA] text-4xl mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
                  <p className="text-[#B0B0B0]">Final year ICT students from the prestigious University of Sri Jayewardenepura, specializing in Software Technology.</p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 border border-[#404040] hover:border-[#4F46E5] transition-all duration-300">
                  <MdSchool className="text-[#4F46E5] text-4xl mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-4">Research Focus</h3>
                  <p className="text-[#B0B0B0]">Specialized in AI detection, computer vision, and machine learning with hands-on experience in real-world applications.</p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl p-8 border border-[#404040] hover:border-[#10B981] transition-all duration-300">
                  <FaUserTie className="text-[#10B981] text-4xl mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
                  <p className="text-[#B0B0B0]">Supervised by Dr. Nalaka Lankasena, a renowned expert in AI research with extensive industry and academic experience.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Supervisor Section */}
        {activeSection === 'supervisor' && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#B0B0B0] bg-clip-text text-transparent">
                Research Supervisor
              </h2>
              <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto">
                Leading AI research with academic excellence and industry expertise
              </p>
            </div>
            
            <div className="flex justify-center">
              <div 
                className="max-w-2xl bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl overflow-hidden shadow-2xl border border-[#404040] hover:border-[#2E90FA] transition-all duration-500 transform hover:scale-105"
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative">
                  <Image
                    src={supervisor.image}
                    alt={supervisor.name}
                    className="w-full h-80 object-cover transition-all duration-500 hover:grayscale-0 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{supervisor.name}</h3>
                    <p className="text-[#2E90FA] text-lg font-semibold mb-1">{supervisor.title}</p>
                    <div className="flex items-center justify-center text-[#B0B0B0] mb-2">
                      <FaUniversity className="mr-2" />
                      <span className="text-sm">{supervisor.faculty}</span>
                    </div>
                    <p className="text-[#B0B0B0] text-sm">{supervisor.university}</p>
                  </div>
                  
                  {hoveredCard === 'supervisor' && (
                    <div className="space-y-4 animate-fadeIn">
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Team Members Section */}
        {activeSection === 'members' && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#B0B0B0] bg-clip-text text-transparent">
                Our Research Team
              </h2>
              <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto">
                Talented final-year ICT students specializing in AI detection and machine learning technologies
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {students.map((student, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] rounded-3xl overflow-hidden shadow-2xl border border-[#404040] hover:border-[#2E90FA] transition-all duration-500 transform hover:scale-105"
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative">
                    <Image
                      src={student.image}
                      alt={student.name}
                      className="w-full h-64 object-cover transition-all duration-500 hover:grayscale-0 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{student.name}</h3>
                      <p className="text-[#2E90FA] text-sm font-semibold mb-1">{student.id}</p>
                      <p className="text-[#B0B0B0] text-sm mb-2">{student.role}</p>
                      <div className="flex items-center justify-center text-[#B0B0B0] text-xs">
                        <FaUniversity className="mr-1" />
                        <span>{student.faculty}</span>
                      </div>
                    </div>
                    
                    {hoveredCard === `student-${index}` && (
                      <div className="space-y-3 animate-fadeIn">
                        <div className="bg-[#2E90FA]/10 rounded-xl p-3 border border-[#2E90FA]/30">
                          <h4 className="text-[#2E90FA] font-semibold text-sm mb-1">Specialization</h4>
                          <p className="text-xs text-[#B0B0B0]">{student.specialization}</p>
                        </div>
                        
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Section */}
        <section className="text-center mt-24 p-12 bg-gradient-to-r from-[#2E90FA]/10 to-[#4F46E5]/10 rounded-3xl border border-[#2E90FA]/20 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#2E90FA] to-[#4F46E5] bg-clip-text text-transparent">
            Collaborative Innovation
          </h3>
          <p className="text-[#B0B0B0] text-lg mb-8 max-w-3xl mx-auto">
            Our diverse team combines academic rigor with practical innovation, creating groundbreaking solutions 
            in AI detection technology through collaborative research and development.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2E90FA]">4</div>
              <div className="text-sm text-[#B0B0B0]">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4F46E5]">3</div>
              <div className="text-sm text-[#B0B0B0]">AI Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#10B981]">1</div>
              <div className="text-sm text-[#B0B0B0]">Breakthrough Project</div>
            </div>
          </div>
        </section>
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