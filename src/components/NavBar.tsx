import { useState } from 'react';
import { Menu, MenuItem, HoveredLink } from './ui/navbar-menu';

export default function NavBar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const regions = [
    'North America',
    'Europe', 
    'Asia',
    'Oceania',
    'Africa'
  ];

  const services = [
    'Counselling',
    'University selection',
    'Test Preparation',
    'Internship',
    'Documentation',
    'University Application & Admission',
    'Visa',
    'Travel Preparation',
    'Post Landing',
    'Scholarship'
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 md:space-x-3">
            <img 
              src="/clover-logo-icon.svg" 
              alt="Clover Icon" 
              className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-300 hover:rotate-12 hover:scale-110"
            />
            <div className='flex flex-row space-x-1 md:space-x-1'>
                <span className="text-lg md:text-4xl font-bold text-emerald-700 font-playfair flex items-center justify-center">C</span>
                <span className="text-lg md:text-2xl font-bold text-emerald-700 font-playfair flex items-center justify-center">L</span>
                <span className="text-lg md:text-2xl font-bold text-emerald-700 font-playfair flex items-center justify-center">O</span>
                <span className="text-lg md:text-2xl font-bold text-emerald-700 font-playfair flex items-center justify-center">V</span>
                <span className="text-lg md:text-2xl font-bold text-emerald-700 font-playfair flex items-center justify-center">E</span>
                <span className="text-lg md:text-2xl font-bold text-emerald-700 font-playfair border border-emerald-600 rounded-full w-8 md:w-10 flex items-center justify-center">R</span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Home">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/">Home</HoveredLink>
                </div>
              </MenuItem>
              
              <MenuItem setActive={setActive} active={active} item="About Us">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/about">About Us</HoveredLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Regions">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/regions">All Regions</HoveredLink>
                  {regions.map((region) => (
                    <HoveredLink key={region} href={`/regions/${region.toLowerCase().replace(' ', '-')}`}>
                      {region}
                    </HoveredLink>
                  ))}
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                  {services.map((service) => (
                    <HoveredLink key={service} href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                      {service}
                    </HoveredLink>
                  ))}
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Loans">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/loans">Student Loans</HoveredLink>
                  <HoveredLink href="/loans/education">Education Loans</HoveredLink>
                  <HoveredLink href="/loans/visa">Visa Loans</HoveredLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Book Online Counselling">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/counselling">Book Session</HoveredLink>
                  <HoveredLink href="/counselling/availability">Check Availability</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Desktop Register Button */}
          <div className="hidden md:block flex-shrink-0">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-6 py-2 rounded-3xl hover:scale-105 text-xs md:text-sm font-medium transition-all duration-200">
              REGISTER NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors">
              REGISTER
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-900 hover:bg-emerald-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-200">
            <div className="px-4 py-4 space-y-3">
              <a href="/" className="block text-emerald-900 hover:text-emerald-700 font-medium">Home</a>
              <a href="/about" className="block text-emerald-900 hover:text-emerald-700 font-medium">About Us</a>
              <a href="/regions" className="block text-emerald-900 hover:text-emerald-700 font-medium">Regions</a>
              <a href="/services" className="block text-emerald-900 hover:text-emerald-700 font-medium">Services</a>
              <a href="/loans" className="block text-emerald-900 hover:text-emerald-700 font-medium">Loans</a>
              <a href="/counselling" className="block text-emerald-900 hover:text-emerald-700 font-medium">Book Counselling</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
