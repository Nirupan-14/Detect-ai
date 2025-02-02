"use client";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#FAFAFA] md:py-16  py-8 px-6 sm:px-32">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Get in <span className="text-[#2E90FA] underline">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-[#808080]">
         We would love to hear from you! Please fill out the form below or contact
          us directly. 
        </p>
      </header>

      {/* Contact Form and Info */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          className="bg-[#252525] p-8 rounded-3xl shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#808080] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-[#1A1A1A] text-[#FAFAFA] rounded-lg border border-[#535862] focus:outline-none focus:ring-2 focus:ring-[#2E90FA]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#808080] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#1A1A1A] text-[#FAFAFA] rounded-lg border border-[#535862] focus:outline-none focus:ring-2 focus:ring-[#2E90FA]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#808080] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows ={6} 
              placeholder="Write your message here..."
              className="w-full p-3 bg-[#1A1A1A] text-[#FAFAFA] rounded-lg border border-[#535862] focus:outline-none focus:ring-2 focus:ring-[#2E90FA]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2E90FA] hover:bg-[#256ecc] text-white font-bold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="flex flex-col justify-center bg-[#252525] p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="text-[#808080] mb-4">
            Have questions or need help? Feel free to reach out to us directly.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-[#2E90FA] flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.36v6.42a2.25 2.25 0 01-2.25 2.25h-13.5A2.25 2.25 0 013 18.78v-6.42m9-7.86l6.37 6.37M12 4.5v15m0-15L5.63 10.87"
                />
              </svg>
            </div>
            <p className="text-lg text-[#FAFAFA]">Faulty of Technology </p>
            
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-[#2E90FA] flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25 21.75 6.615 21.75 12z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12l-3-3m0 0l-3 3m3-3v6"
                />
              </svg>
            </div>
            <p className="text-lg text-[#FAFAFA]">info@example.com</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#2E90FA] flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9a4.5 4.5 0 019 0v4.5a4.5 4.5 0 01-9 0V9zM3.75 9a7.5 7.5 0 1115 0v4.5a7.5 7.5 0 11-15 0V9zm7.5 9v3"
                />
              </svg>
            </div>
            <p className="text-lg text-[#FAFAFA]">+123 456 789</p>
          </div>
        </div>
      </section>
    </main>
  );
}
