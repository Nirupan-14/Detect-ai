import Link from 'next/link';

export default function Header() {
  return (
  <header 
  className="bg-[#0D0D0D] text-[#FDFDFD] py-6 px-12 text-[18px] relative"
>
  <div
  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] h-6 rounded-lg"
  style={{
    boxShadow: '0 20px 50px 10px rgba(46, 144, 250, 0.4)', // Enhanced shadow
    background: 'radial-gradient(ellipse at center, rgba(46, 144, 250, 0.4) 50%, rgba(46, 144, 250, 0) 100%)',
    width: '70%', // Wider shadow span
    height: '8px', // Thin height for a subtle line
    borderRadius: '50%', // Smooth curvature for the shadow
  }}
></div>

      <div className="  flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.0324 17.2287C36.6483 18.1381 37.4562 18.5929 37.7274 19.1865C37.9639 19.7043 37.9639 20.2956 37.7274 20.8135C37.4562 21.4071 36.6483 21.8618 35.0324 22.7713L20.2601 31.0851C18.6442 31.9945 17.8363 32.4493 17.1733 32.3813C16.595 32.3221 16.0697 32.0264 15.7279 31.5679C15.3361 31.0421 15.3361 30.1327 15.3361 28.3138V11.6861C15.3361 9.86728 15.3361 8.95784 15.7279 8.43211C16.0697 7.97355 16.595 7.67789 17.1733 7.61864C17.8363 7.55071 18.6442 8.00543 20.2601 8.91486L35.0324 17.2287Z"
              fill="#2E90FA"
            />
            <path
              d="M9.69388 7C10.5437 7 11.2327 7.67157 11.2327 8.5V31.5C11.2327 32.3284 10.5437 33 9.69388 33C8.84404 33 8.1551 32.3284 8.1551 31.5V8.5C8.1551 7.67157 8.84404 7 9.69388 7Z"
              fill="#2E90FA"
            />
            <path
              d="M3.53878 13C4.38862 13 5.07755 13.6716 5.07755 14.5V26.5C5.07755 27.3284 4.38862 28 3.53878 28C2.68893 28 2 27.3284 2 26.5V14.5C2 13.6716 2.68893 13 3.53878 13Z"
              fill="#2E90FA"
            />
          </svg>

          <Link href="/" className="font-extrabold text-2xl text-[#FDFDFD]">
            Detect AI
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <div
            className="w-2 h-2 bg-[#535862] rounded-full"
            aria-hidden="true"
          ></div>
          <Link href="/team" className="hover:underline">
            Team
          </Link>
        </nav>

        {/* Contact Us Button */}
        <div>
          <Link
            href="/contact"
            className="border border-[#FDFDFD] rounded-full px-6 py-2 hover:bg-[#FDFDFD] hover:text-[#0D0D0D] transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
