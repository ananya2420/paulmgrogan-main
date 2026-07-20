import Link from 'next/link'; 
import Image from 'next/image'; 
import logo from '../../../assets/logo.png'; 
import paulImage from '../../../assets/paul.png'; 

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top Navbar Section */}
      <nav className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center">
          <Image src={logo} alt="Brand Logo" width={120} height={40} />
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-6 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">HOME</Link>
          <Link href="/resume" className="hover:text-blue-600 transition-colors">RESUME</Link>
          <Link href="/profile" className="hover:text-blue-600 transition-colors">ONLINE PROFILE</Link>
          <Link href="/community" className="hover:text-blue-600 transition-colors">COMMUNITY</Link>
          <Link href="/brand-directory" className="hover:text-blue-600 transition-colors">BRAND DIRECTORY</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">CONTACT</Link>
        </div>
      </nav>

      {/* Hero Header Content */}
      <div className="container mx-auto px-6 py-16 flex items-center justify-between gap-12">
        
        {/* LEFT COLUMN: Text and Buttons */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            CANDIDATE DISTRICT 5 COUNTY COMMISSIONER.
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            “I am devoted to leveraging my role as a public servant to address the requirements 
            and advocate for the concerns of my constituents, working towards a brighter future 
            for our community.”
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm">
              Get in touch
            </button>
            <button className="px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition border border-gray-300">
              Learn more
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full h-auto max-w-lg">
            <Image 
              src={paulImage} 
              alt="Candidate Paul" 
              width={500} 
              height={600} 
              className="rounded-lg object-cover shadow-2xl" 
              priority 
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;