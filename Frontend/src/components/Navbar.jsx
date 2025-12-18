import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo.svg';
import profileIcon from '../assets/icons/profileIcon.svg';

const Navbar = () => {
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Before & After', path: '/before-after' },
    { name: 'Inquiries', path: '/inquiries' },
  ];

  return (
    <nav className="bg-primary w-full px-6 lg:px-10 py-5">
      <div className="flex items-center justify-between">
        {/* Logo and Brand Name - Links to Home */}
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Hephzibah Luxe Logo" className="h-20 w-auto" />
          <div className="flex flex-col">
            <span 
              className="font-editors-note text-[#FFFEFD] text-[40px] leading-[100%] tracking-[-0.01em]"
              style={{ fontWeight: 100 }}
            >
              HEPHZIBAH LUXE
            </span>
            <span className="font-newsreader text-[#FFFEFD] text-sm font-light italic">
              Event Planning & Design Studio
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-newsreader text-[#FFFEFD] text-base hover:opacity-80 transition-opacity italic"
            >
              {link.name}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-6 w-px bg-[#FFFEFD] opacity-50"></div>

          {/* Profile Icon - Links to Client Portal */}
          <Link to="/client-portal" className="hover:opacity-80 transition-opacity">
            <img src={profileIcon} alt="Client Portal" className="h-8 w-8" />
          </Link>
        </div>

        {/* Mobile Menu Button (for later implementation) */}
        <button className="md:hidden text-[#FFFEFD]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;