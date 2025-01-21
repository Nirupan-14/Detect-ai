"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#FAFAFA] py-16 px-6 sm:px-32">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          About <span className="text-[#2E90FA] underline">Us</span>
        </h1>
        <p className="mt-4 text-lg text-[#808080]">
          Learn more about our mission, vision, and the people behind the scenes.
        </p>
      </header>

      {/* About Content */}
      <section className="space-y-16">
        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-[#808080]">
              Our mission is to revolutionize the way people interact with AI-generated
              audio and video content. We aim to provide cutting-edge tools that ensure
              transparency, authenticity, and trust in the digital world.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/mission-image.jpg"
              alt="Mission"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-[#808080]">
              We envision a future where AI technologies are used responsibly and
              ethically. By empowering individuals with tools to detect AI-generated
              content, we hope to foster a more trustworthy digital ecosystem.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/vision-image.jpg"
              alt="Vision"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-[#252525] p-6 rounded-3xl shadow-lg text-center">
              <img
                src="/team-member1.jpg"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-[#808080]">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-[#252525] p-6 rounded-3xl shadow-lg text-center">
              <img
                src="/team-member2.jpg"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-[#808080]">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-[#252525] p-6 rounded-3xl shadow-lg text-center">
              <img
                src="/team-member3.jpg"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Alice Brown</h3>
              <p className="text-[#808080]">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
