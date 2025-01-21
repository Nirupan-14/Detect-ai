import Link from 'next/link';
export default function Header() {
  return (
    <div className='bg-[#0D0D0D] my-8 px-12 text-[#FFFFFF] text-[18px] '>
        <div className='flex justify-between  '>

       
        <div className=''>
            © 2024 Detect AI. Developed by Students of University of Sri Jayewardenapra.
        </div>
        <div>
            <nav className='flex  items-center space-x-4'>
                <Link href="/about" className='hover:underline'>About</Link>
                <div
            className="w-2 h-2 bg-[#535862] rounded-full"
            aria-hidden="true"
          ></div>
                <Link href="/team"className='hover:underline'>Team</Link>

                <div
            className="w-2 h-2 bg-[#535862] rounded-full"
            aria-hidden="true"
          ></div>
                <Link href="/contact" className='hover:underline'>Contact us</Link>
                 


            </nav>
        </div>
    </div>
     </div>
  )}