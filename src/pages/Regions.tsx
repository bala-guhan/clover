import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { regionsData, countriesData, type RegionInfo } from '../data/countries-info';
import { RippleButton } from '../components/magicui/ripple-button';
import { 
  FaFlag,
  FaFlag as USFlag,
  FaFlag as CanadaFlag,
  FaFlag as UKFlag,
  FaFlag as IrelandFlag,
  FaFlag as NetherlandsFlag,
  FaFlag as SwitzerlandFlag,
  FaFlag as SwedenFlag,
  FaFlag as PolandFlag,
  FaFlag as HungaryFlag,
  FaFlag as GermanyFlag,
  FaFlag as FinlandFlag,
  FaFlag as DenmarkFlag,
  FaFlag as CyprusFlag,
  FaFlag as LithuaniaFlag,
  FaFlag as BulgariaFlag,
  FaFlag as FranceFlag,
  FaFlag as ItalyFlag,
  FaFlag as SpainFlag,
  FaFlag as AustriaFlag,
  FaFlag as SingaporeFlag,
  FaFlag as MalaysiaFlag,
  FaFlag as ChinaFlag,
  FaFlag as HongKongFlag,
  FaFlag as DubaiFlag,
  FaFlag as MauritiusFlag,
  FaFlag as AustraliaFlag,
  FaFlag as NewZealandFlag,
  FaFlag as SouthAfricaFlag,
  FaChevronRight
} from 'react-icons/fa';

const Regions: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const navigate = useNavigate();

  // Helper function to get flag icon for country
  const getFlagIcon = (countryId: string) => {
    const flagMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
      'us': USFlag,
      'canada': CanadaFlag,
      'uk': UKFlag,
      'ireland': IrelandFlag,
      'netherlands': NetherlandsFlag,
      'switzerland': SwitzerlandFlag,
      'sweden': SwedenFlag,
      'poland': PolandFlag,
      'hungary': HungaryFlag,
      'germany': GermanyFlag,
      'finland': FinlandFlag,
      'denmark': DenmarkFlag,
      'cyprus': CyprusFlag,
      'lithuania': LithuaniaFlag,
      'bulgaria': BulgariaFlag,
      'france': FranceFlag,
      'italy': ItalyFlag,
      'spain': SpainFlag,
      'austria': AustriaFlag,
      'singapore': SingaporeFlag,
      'malaysia': MalaysiaFlag,
      'china': ChinaFlag,
      'hongkong': HongKongFlag,
      'dubai': DubaiFlag,
      'mauritius': MauritiusFlag,
      'australia': AustraliaFlag,
      'newzealand': NewZealandFlag,
      'southafrica': SouthAfricaFlag
    };
    return flagMap[countryId] || FaFlag;
  };

  // Helper function to get country image
  const getCountryImage = (countryId: string) => {
    const imageMap: { [key: string]: string } = {
      'us': '/uni-stud-hero.jpeg',
      'canada': '/uni-stud-hero.jpeg',
      'uk': '/uni-stud-hero.jpeg',
      'ireland': '/uni-stud-hero.jpeg',
      'netherlands': '/uni-stud-hero.jpeg',
      'switzerland': '/uni-stud-hero.jpeg',
      'sweden': '/uni-stud-hero.jpeg',
      'poland': '/uni-stud-hero.jpeg',
      'hungary': '/uni-stud-hero.jpeg',
      'germany': '/uni-stud-hero.jpeg',
      'finland': '/uni-stud-hero.jpeg',
      'denmark': '/uni-stud-hero.jpeg',
      'cyprus': '/uni-stud-hero.jpeg',
      'lithuania': '/uni-stud-hero.jpeg',
      'bulgaria': '/uni-stud-hero.jpeg',
      'france': '/uni-stud-hero.jpeg',
      'italy': '/uni-stud-hero.jpeg',
      'spain': '/uni-stud-hero.jpeg',
      'austria': '/uni-stud-hero.jpeg',
      'singapore': '/uni-stud-hero.jpeg',
      'malaysia': '/uni-stud-hero.jpeg',
      'china': '/uni-stud-hero.jpeg',
      'hongkong': '/uni-stud-hero.jpeg',
      'dubai': '/uni-stud-hero.jpeg',
      'mauritius': '/uni-stud-hero.jpeg',
      'australia': '/uni-stud-hero.jpeg',
      'newzealand': '/uni-stud-hero.jpeg',
      'southafrica': '/uni-stud-hero.jpeg'
    };
    return imageMap[countryId] || '/uni-stud-hero.jpeg'; // consistent fallback image
  };

  // Find the region data
  const regionData: RegionInfo | undefined = regionsData.find(region => region.id === regionId);

  // If no region ID provided, show all regions
  if (!regionId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
        {/* Header Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
                Study by Regions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore educational opportunities across different regions of the world. 
                Choose a region to discover countries and their study programs.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Regions Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regionsData.map((region, index) => {
                const countryCount = region.countries.length;
                const regionCountries = countriesData.filter(country => 
                  region.countries.includes(country.id)
                );

                return (
                  <motion.div
                    key={region.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                    onClick={() => navigate(`/regions/${region.id}`)}
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-emerald-900">
                          {region.name}
                        </h3>
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                          {countryCount} countries
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {region.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {regionCountries.slice(0, 4).map((country) => (
                          <span
                            key={country.id}
                            className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                          >
                            <span>{country.flag}</span>
                            <span>{country.name}</span>
                          </span>
                        ))}
                        {countryCount > 4 && (
                          <span className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm">
                            +{countryCount - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-emerald-600 font-medium">
                        <span>Explore {region.name}</span>
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If region ID provided but region not found
  if (!regionData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Region Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The region you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/regions')}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            View All Regions
          </button>
        </div>
      </div>
    );
  }

  // Get countries for this region
  const regionCountries = countriesData.filter(country => 
    regionData.countries.includes(country.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <button
                onClick={() => navigate('/regions')}
                className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors mr-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Regions
              </button>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Study in {regionData.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {regionData.description}
            </p>
            <p className="text-lg text-gray-500">
              {regionCountries.length} countries available
            </p>
          </motion.div>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionCountries.map((country, index) => {
              const FlagIcon = getFlagIcon(country.id);
              const countryImage = getCountryImage(country.id);
              
              return (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-80"
                  onClick={() => navigate(`/${country.id}`)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={countryImage}
                      alt={`${country.name} universities`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
                  </div>

                  {/* Top Content - Country Name and Flag */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full">
                        <FlagIcon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {country.name}
                      </h3>
                    </div>
                    <p className="text-sm text-white/80 capitalize mt-2">
                      {regionData?.name}
                    </p>
                  </div>

                  {/* Bottom Content - CTA and Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* CTA Button */}
                    <RippleButton 
                      className="flex flex-row items-center justify-center gap-2 bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 transition-colors mb-4 px-4 py-2"
                      rippleColor="#ffffff"
                      onClick={() => navigate(`/${country.id}`)}
                    >
                      <span>Explore {country.name}</span>
                      <FaChevronRight className="w-4 h-4" />
                    </RippleButton>

                    {country.description && (
                      <p className="text-white line-clamp-3 text-sm leading-relaxed">
                        {country.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;
