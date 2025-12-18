import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo.svg';
import ngIcon from '../assets/icons/ngIcon.svg';

const Footer = () => {
  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Before & After', path: '/before-after' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Inquiries', path: '/inquiries' },
  ];

  return (
    <footer className="bg-[#2B0202] text-[#FFFEFD] px-6 lg:px-10 py-12 lg:py-16 pb-6 lg:pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_2fr] gap-12 lg:gap-12">
          {/* Left Column - Logo and Description */}
          <div>
            {/* Logo */}
            <img src={logo} alt="Hephzibah Luxe" className="h-52 w-auto mb-8" />
            
            {/* Description */}
            <p className="font-newsreader text-base font-normal leading-relaxed mb-4">
              Crafting Refined, Beautiful, And Meaningful Celebrations
              <br />
              – From Intimate Moments To Grand Occasions. Designed
              <br />
              With Intention, Executed With Elegance.
            </p>
            
            <p className="font-newsreader text-base font-normal mb-12">
              Nigerian Rooted | Globally Reaching.
            </p>

            {/* Copyright */}
            <p className="font-newsreader text-base font-normal">
              © 2025 Hephzibah Luxe. All rights reserved.
            </p>
          </div>

          {/* Center Column - Flag, Country and Language (at bottom) */}
          <div className="flex flex-col justify-end">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src={ngIcon} alt="Nigeria" className="w-8 h-5" />
                <span className="font-newsreader text-base font-normal">Nigeria</span>
              </div>
              <span className="font-newsreader text-base font-normal">English</span>
            </div>
          </div>

          {/* Right Column - Navigation Links and Contact */}
          <div>
            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-x-20 gap-y-3 mb-28">
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-editors-note text-[40px] text-[#FFFEFD] hover:opacity-80 transition-opacity leading-tight whitespace-nowrap"
                  style={{ fontWeight: 1 }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-1">
              <p className="font-newsreader text-base font-normal">
                29 Adeniran Ogunsanya, Surulere, Lagos, Nigeria
              </p>
              <p className="font-newsreader text-base font-normal">
                Monday - Friday: 9:00am to 5:00pm
              </p>
              <p className="font-newsreader text-base font-normal">
                Closed: After Dec 18th & on Public Holidays
              </p>
              <p className="font-newsreader text-base font-normal">
                0802 320 3870
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;