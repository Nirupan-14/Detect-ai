"use client";

const students = [
  {
    name: "NIRUPAN.M",
    id: "ICT/20/895",
    role: "Final year student",
    faculty: "Faculty of Technology",
    university: "University of Sri Jayewardenepura",
    image: "/team/nirupan.jpeg",
  },
  {
    name: "MERINA.M",
    id: "ICT/20/887",
    role: "Final year student",
    faculty: "Faculty of Technology",
    university: "University of Sri Jayewardenepura",
    image: "/team/merina.jpeg",
  },
  {
    name: "PRIYASALINI.S",
    id: "ICT/20/902",
    role: "Final year student",
    faculty: "Faculty of Technology",
    university: "University of Sri Jayewardenepura",
    image: "/team/priya.jpeg",
  },
];

export default function Team() {
  return (
    <main className="bg-[#0D1117] min-h-screen text-[#FAFAFA]  md:py-16 py-8 px-4">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Meet the team behind{" "}
          <span className="text-[#2E90FA] underline">Detect AI</span>
        </h1>
        <p className="mt-4 text-sm md:text-lg text-[#808080]">
          Revolutionizing Insights with AI-Powered Detection and Analysis
        </p>
      </header>

      {/* Supervisor Section */}
      <section className="pt-8">
        <h3 className="text-3xl font-bold text-center">Our Supervisor</h3>
        <div className="flex justify-center mt-6">
          <div className="max-w-sm bg-white rounded-3xl p-3 text-black">
            <img
              src="/team/Dr.nalaka.png"
              alt="Dr. Nalaka Lankasena"
              className="h-60 w-full object-cover rounded-t-3xl filter grayscale"
            />
            <div className="py-4">
              <p className="text-lg font-bold">Dr. Nalaka Lankasena</p>
              <p className="text-sm py-1">Senior Lecturer (Grade II)</p>
              <p className="text-sm">
                Faculty of Technology, University of Sri Jayewardenepura
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="mt-12">
        <h3 className="text-3xl font-bold text-center md:text-start md:px-32">
          Our Members
        </h3>
        <div className="grid gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3 md:px-32">
          {students.map((student, index) => (
            <div key={index} className="bg-white rounded-3xl p-3 text-black">
              <img
                src={student.image}
                alt={student.name}
                className="h-60 w-full object-cover rounded-t-3xl filter grayscale"
              />
              <div className="py-4">
                <p className="text-lg font-bold">{student.name}</p>
                <p className="text-sm py-1">{student.id}</p>
                <p className="text-sm">
                  {student.role}, {student.faculty}, {student.university}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
