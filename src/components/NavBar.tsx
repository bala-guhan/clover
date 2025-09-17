import { useState } from 'react';
import { MenuItem, HoveredLink } from './ui/navbar-menu';
import { regionsData } from '../data/regions-info';

export default function NavBar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if we're on the homepage
  const isHomepage = typeof window !== 'undefined' && window.location.pathname === '/';

  // Regions are now imported from regionsData

  const services = [
    'Counselling',
    'University selection',
    'Test Preparation',
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
          <a href="/" className="flex-shrink-0 flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/clover-logo-icon.svg" 
              alt="Clover Icon" 
              className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-300 hover:rotate-12 hover:scale-110"
            />
            <div className='flex flex-row space-x-1 md:space-x-1'>
                <span className={`text-lg md:text-4xl font-bold font-playfair flex items-center justify-center ${isHomepage ? 'text-white' : 'text-emerald-700'}`}>C</span>
                <span className={`text-lg md:text-2xl font-bold font-playfair flex items-center justify-center ${isHomepage ? 'text-white' : 'text-emerald-700'}`}>L</span>
                <span className={`text-lg md:text-2xl font-bold font-playfair flex items-center justify-center ${isHomepage ? 'text-white' : 'text-emerald-700'}`}>O</span>
                <span className={`text-lg md:text-2xl font-bold font-playfair flex items-center justify-center ${isHomepage ? 'text-white' : 'text-emerald-700'}`}>V</span>
                <span className={`text-lg md:text-2xl font-bold font-playfair flex items-center justify-center ${isHomepage ? 'text-white' : 'text-emerald-700'}`}>E</span>
                <span className={`text-lg md:text-2xl font-bold font-playfair border rounded-full w-8 md:w-10 flex items-center justify-center ${isHomepage ? 'text-white border-white' : 'text-emerald-700 border-emerald-600'}`}>R</span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav 
              onMouseLeave={() => setActive(null)}
              className="relative rounded-full shadow-input flex justify-center space-x-8 px-8 py-6 text-sm"
            >
              <a href="/" className={`${isHomepage ? 'text-white hover:text-emerald-100' : 'text-emerald-700 hover:text-emerald-600'} transition-colors cursor-pointer`}>
                Home
              </a>
              
              <a href="/about" className={`${isHomepage ? 'text-white hover:text-emerald-100' : 'text-emerald-700 hover:text-emerald-600'} transition-colors cursor-pointer`}>
                About Us
              </a>

              <MenuItem setActive={setActive} active={active} item="Regions" isHomepage={isHomepage}>
                <div className="flex flex-col space-y-4 text-sm">
                  {regionsData.map((region) => (
                    <HoveredLink key={region.id} href={`/${region.id}`}>
                      {region.id === "north-america" ? "Americas" : region.name}
                    </HoveredLink>
                  ))}
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Services" isHomepage={isHomepage}>
                <div className="flex space-x-8 text-sm">
                  {/* Left Column - First 5 services */}
                  <div className="flex flex-col space-y-4">
                    {services.slice(0, 5).map((service) => (
                      <HoveredLink key={service} href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                        {service}
                      </HoveredLink>
                    ))}
                  </div>
                  {/* Right Column - Last 4 services */}
                  <div className="flex flex-col space-y-4">
                    {services.slice(5, 9).map((service) => (
                      <HoveredLink key={service} href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                        {service}
                      </HoveredLink>
                    ))}
                  </div>
                </div>
              </MenuItem>

              <a href="/internship" className={`${isHomepage ? 'text-white hover:text-emerald-100' : 'text-emerald-700 hover:text-emerald-600'} transition-colors cursor-pointer`}>
                Internship
              </a>

              <a href="/loans" className={`${isHomepage ? 'text-white hover:text-emerald-100' : 'text-emerald-700 hover:text-emerald-600'} transition-colors cursor-pointer`}>
                Loans
              </a>

              <a href="/counselling" className={`${isHomepage ? 'text-white hover:text-emerald-100' : 'text-emerald-700 hover:text-emerald-600'} transition-colors cursor-pointer`}>
                Book Online Counselling
              </a>
            </nav>
          </div>

          {/* Desktop Register Button */}
          <div className="hidden md:block flex-shrink-0">
            <a href="/counselling" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-6 py-2 rounded-3xl hover:scale-105 text-xs md:text-sm font-medium transition-all duration-200 inline-block">
              REGISTER NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a href="/counselling" className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors inline-block">
              REGISTER
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isHomepage ? 'text-white hover:bg-white/20' : 'text-emerald-900 hover:bg-emerald-50'}`}
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
              <div className="space-y-2">
                <div className="text-emerald-900 font-semibold text-sm">Regions</div>
                {regionsData.map((region) => (
                  <a key={region.id} href={`/${region.id}`} className="block text-emerald-700 hover:text-emerald-600 font-medium ml-4 text-sm">
                    {region.name}
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-emerald-900 font-semibold text-sm">Services</div>
                {services.map((service) => (
                  <a key={service} href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="block text-emerald-700 hover:text-emerald-600 font-medium ml-4 text-sm">
                    {service}
                  </a>
                ))}
              </div>
              <a href="/loans" className="block text-emerald-900 hover:text-emerald-700 font-medium">Loans</a>
              <a href="/counselling" className="block text-emerald-900 hover:text-emerald-700 font-medium">Book Online Counselling</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
