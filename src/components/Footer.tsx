
export default function Footer() {
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/clover-logo.jpeg" 
                alt="Clover Overseas Education" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your journey to global education starts here. We provide comprehensive support for students seeking international education opportunities.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/loans" className="text-gray-300 hover:text-white transition-colors text-sm">Loans</a></li>
              <li><a href="/counselling" className="text-gray-300 hover:text-white transition-colors text-sm">Book Online Counselling</a></li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Regions</h3>
            <ul className="space-y-2">
              {regions.map((region) => (
                <li key={region}>
                  <a 
                    href={`/regions/${region.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {region}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <a 
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-col space-y-2 items-center">
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 CloverOversease Education Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
