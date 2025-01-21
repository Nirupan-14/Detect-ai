"use client";

export default function Team() {
  return (
    <main className="bg-[#0D1117] min-h-screen text-[#FAFAFA]">
      {/* Header Section */}
      <section className="text-center py-12">
        <h1 className="text-[48px] font-extrabold text-[#FAFAFA]">
          Meet Our Team
        </h1>
        <p className="text-[20px] text-[#B3B3B3] mt-4">
          Faculty of Technology, University of Sri Jayewardenepura - BICT Honors.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="py-12 px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Supervisor */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg text-center">
          <img
            src="https://picsum.photos/200"
            alt="Dr. Nalaka Lankasena"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-[20px] font-bold">Dr. Nalaka Lankasena</h2>
          <p className="text-[#B3B3B3] text-sm mt-2">Supervisor</p>
          <p className="text-[#B3B3B3] text-sm mt-2">
            Faculty of Technology, University of Sri Jayewardenepura
          </p>
          <p className="text-[#B3B3B3] text-sm mt-2">
            PhD in Machine Learning
          </p>
          <p className="text-[#2E90FA] text-sm mt-2">
            <a href="mailto:nalaka.lankasena@sjp.ac.lk">
              nalaka.lankasena@sjp.ac.lk
            </a>
          </p>
        </div>

        {/* Team Member 1 */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg text-center">
          <img
            src="https://picsum.photos/200"
            alt="M. Nirupan"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-[20px] font-bold">M. Nirupan</h2>
          <p className="text-[#B3B3B3] text-sm mt-2">Index No: 20001234</p>
          <p className="text-[#B3B3B3] text-sm mt-2">
            Faculty of Technology, University of Sri Jayewardenepura
          </p>
          <p className="text-[#2E90FA] text-sm mt-2">
            <a href="mailto:nirupan.m@sjp.ac.lk">nirupan.m@sjp.ac.lk</a>
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg text-center">
          <img
            src="https://picsum.photos/200"
            alt="Merina"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-[20px] font-bold">Merina</h2>
          <p className="text-[#B3B3B3] text-sm mt-2">Index No: 20005678</p>
          <p className="text-[#B3B3B3] text-sm mt-2">
            Faculty of Technology, University of Sri Jayewardenepura
          </p>
          <p className="text-[#2E90FA] text-sm mt-2">
            <a href="mailto:merina@sjp.ac.lk">merina@sjp.ac.lk</a>
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg text-center">
          <img
            src="https://picsum.photos/200"
            alt="Priyasalini"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-[20px] font-bold">Priyasalini</h2>
          <p className="text-[#B3B3B3] text-sm mt-2">Index No: 20009876</p>
          <p className="text-[#B3B3B3] text-sm mt-2">
            Faculty of Technology, University of Sri Jayewardenepura
          </p>
          <p className="text-[#2E90FA] text-sm mt-2">
            <a href="mailto:priyasalini@sjp.ac.lk">priyasalini@sjp.ac.lk</a>
          </p>
        </div>
      </section>
    </main>
  );
}
