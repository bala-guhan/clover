import { useState } from 'react';
import { Menu, MenuItem, HoveredLink } from './ui/navbar-menu';

export default function NavBar() {
  const [active, setActive] = useState<string | null>(null);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src="/clover-logo-icon.svg" 
              alt="Clover Icon" 
              className="h-8 w-8 transition-transform duration-300 hover:rotate-12 hover:scale-110"
            />
            <div className='flex flex-row space-x-2'>
                <span className="text-2xl font-bold text-emerald-900 font-playfair">C</span>
                <span className="text-2xl font-bold text-emerald-900 font-playfair">L</span>
                <span className="text-2xl font-bold text-emerald-900 font-playfair">O</span>
                <span className="text-2xl font-bold text-emerald-900 font-playfair">V</span>
                <span className="text-2xl font-bold text-emerald-900 font-playfair">E</span>
                <span className="text-2xl font-bold text-emerald-900 font-playfair">R</span>
            </div>
            
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 flex justify-center">
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

          {/* Register Now Button */}
          <div className="flex-shrink-0">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-3xl hover:scale-[2xl] text-sm font-medium transition-colors">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
