"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  type ButtonVariants = {
  hover: {
    scale: number;
    transition: {
      duration: number;
    };
  };
  tap: {
    scale: number;
  };
};

const buttonVariants: ButtonVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.98
  }
};


  // Clear feedback message after 5 seconds
  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        setFeedbackMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [feedbackMessage]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setFeedbackMessage("");
    setIsError(false);
  
    try {
      if (!form.current) throw new Error("Form ref not available");
  
      // Send main email
      await emailjs.sendForm(
        "service_p32bigd",
        "template_gxadxlt",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
  
      // Extract user details from FormData
      const formData = new FormData(form.current);
      const userEmail = formData.get("email");
      const userName = formData.get("name");
  
      if (typeof userEmail !== "string" || typeof userName !== "string") {
        throw new Error("Invalid form data");
      }
  
      // Send auto-reply email
      await emailjs.send(
        "service_p32bigd",
        "template_vjgf0vt",
        { email: userEmail, name: userName },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
  
      setFeedbackMessage("Message sent successfully!");
      form.current.reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Email send error:", error.message);
        setFeedbackMessage("Failed to send message. Please try again.");
      } else {
        console.error("Unknown error", error);
        setFeedbackMessage("An unknown error occurred.");
      }
      setIsError(true);
    } finally {
      setIsSending(false);
    }
  };
  
  

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0D0D0D] text-[#FAFAFA] md:py-16 py-8 px-6 sm:px-32"
    >
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">
          Get in <span className="text-[#2E90FA] underline">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-[#808080]">
          We would love to hear from you! Please fill out the form below or contact us directly.
        </p>
      </motion.header>

      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <motion.form
          variants={itemVariants}
          ref={form}
          className="bg-[#252525] p-8 rounded-3xl shadow-lg"
          onSubmit={sendEmail}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-[#808080] mb-2">
              Name
            </label>
            <motion.input
              whileFocus={{ 
                scale: 1.01,
                boxShadow: "0 0 0 2px #2E90FA"
              }}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-[#1A1A1A] text-[#FAFAFA] rounded-lg border border-[#535862] focus:outline-none focus:ring-2 focus:ring-[#2E90FA]"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-[#808080] mb-2">
              Email
            </label>
            <motion.input
              whileFocus={{ 
                scale: 1.01,
                boxShadow: "0 0 0 2px #2E90FA"
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#1A1A1A] text-[#FAFAFA] rounded-lg border border-[#535862] focus:outline-none focus:ring-2 focus:ring-[#2E90FA]"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-[#808080] mb-2">
              Message
            </label>
            <motion.textarea
              whileFocus={{ 
                scale: 1.01,
                boxShadow: "0 0 0 2px #2E90FA"
              }}
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message here..."
              className="w-full p-3 bg-[#1A1A1A] text-[#FAFAFA] rounded-lg border border-[#535862] focus:outline-none focus:ring-2 focus:ring-[#2E90FA]"
              required
            ></motion.textarea>
          </motion.div>

          {feedbackMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`my-4 text-center text-sm font-medium ${
                isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {feedbackMessage}
            </motion.p>
          )}

          <motion.button
            variants={buttonVariants} 
            whileHover="hover"
            whileTap="tap"
            type="submit"
            disabled={isSending}
            className="w-full bg-[#2E90FA] hover:bg-[#256ecc] text-white font-bold py-3 rounded-lg transition-colors duration-300"
          >
            {isSending ? (
              <motion.span
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                  transition: { repeat: Infinity, duration: 1.5 }
                }}
              >
                Sending...
              </motion.span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col justify-center bg-[#252525] p-8 rounded-3xl shadow-lg"
        >
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-bold mb-6"
          >
            Contact Information
          </motion.h2>
          <p className="text-[#808080] mb-4">
            Have questions or need help? Feel free to reach out to us directly.
          </p>

          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 mb-4"
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 bg-[#2E90FA] flex justify-center items-center rounded-full"
            >
              <svg
                aria-label="Location"
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
            </motion.div>
            <p className="text-lg text-[#FAFAFA]">Faculty of Technology</p>
          </motion.div>

          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 mb-4"
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 bg-[#2E90FA] flex justify-center items-center rounded-full"
            >
              <svg
                aria-label="Email"
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
            </motion.div>
            <p className="text-lg text-[#FAFAFA]">info@example.com</p>
          </motion.div>

          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4"
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 bg-[#2E90FA] flex justify-center items-center rounded-full"
            >
              <svg
                aria-label="Phone"
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
                  d="M3.75 9a4.5 4.5 0 019 0v4.5a4.5 4.5 0 01-9 0V9zM3.75 9a7.5 7.5 0 1115 0v4.5a7.5 7.5 0 11-15 0V9zm7.5 9v3m-3-3h6"
                />
              </svg>
            </motion.div>
            <p className="text-lg text-[#FAFAFA]">+94 777 77 77 77</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}