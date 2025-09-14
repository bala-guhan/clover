import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/404-page";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Countries from "./pages/Countries";
import Regions from "./pages/Regions";
import { countriesData } from "./data/countries-info";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1">
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Regions Routes */}
              <Route path="/regions" element={<Regions />} />
              <Route path="/regions/:regionId" element={<Regions />} />
              
              {/* Country Routes */}
              {countriesData.map((country) => (
                <Route 
                  key={country.id} 
                  path={`/${country.id}`} 
                  element={<Countries countryId={country.id} />} 
                />
              ))}
              
              {/* Legacy USA route for backward compatibility */}
              <Route path="/usa" element={<Countries countryId="us" />} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  )
};

export default App;