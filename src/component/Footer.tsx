import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] py-6 px-6 md:px-12 text-[#FFFFFF] text-[16px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          © 2024 Detect AI. Developed by Students of University of Sri Jayewardenepura.
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <div className="hidden md:block w-2 h-2 bg-[#535862] rounded-full" aria-hidden="true"></div>

          <Link href="/team" className="hover:underline">
            Team
          </Link>
          <div className="hidden md:block w-2 h-2 bg-[#535862] rounded-full" aria-hidden="true"></div>

          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
