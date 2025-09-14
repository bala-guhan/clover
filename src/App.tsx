import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/404-page";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Countries from "./pages/Countries";
import Regions from "./pages/Regions";
import Counselling from "./pages/Counselling";
import UniversitySelection from "./pages/UniversitySelection";
import TestPreparation from "./pages/TestPreparation";
import Internship from "./pages/Internship";
import Documentation from "./pages/Documentation";
import UniversityApplications from "./pages/UniversityApplications";
import Visa from "./pages/Visa";
import TravelPreparation from "./pages/TravelPreparation";
import PostLanding from "./pages/PostLanding";
import Scholarship from "./pages/Scholarship";
import Loans from "./pages/Loans";
import AboutUs from "./pages/AboutUs";
import { regionsData } from "./data/regions-info";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1">
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Services Routes */}
              <Route path="/services/counselling" element={<Counselling />} />
              <Route path="/counselling" element={<Counselling />} />
              <Route path="/services/university-selection" element={<UniversitySelection />} />
              <Route path="/university-selection" element={<UniversitySelection />} />
              <Route path="/services/test-preparation" element={<TestPreparation />} />
              <Route path="/test-preparation" element={<TestPreparation />} />
              <Route path="/services/internship" element={<Internship />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/services/documentation" element={<Documentation />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/services/university-application-&-admission" element={<UniversityApplications />} />
              <Route path="/university-applications" element={<UniversityApplications />} />
              <Route path="/services/visa" element={<Visa />} />
              <Route path="/visa" element={<Visa />} />
              <Route path="/services/travel-preparation" element={<TravelPreparation />} />
              <Route path="/travel-preparation" element={<TravelPreparation />} />
              <Route path="/services/post-landing" element={<PostLanding />} />
              <Route path="/post-landing" element={<PostLanding />} />
              <Route path="/services/scholarship" element={<Scholarship />} />
              <Route path="/scholarship" element={<Scholarship />} />
              
              {/* Loans Route */}
              <Route path="/loans" element={<Loans />} />
              
              {/* About Us Route */}
              <Route path="/about" element={<AboutUs />} />
              
              {/* Region Routes */}
              {regionsData.map((region) => (
                <Route
                  key={region.id}
                  path={`/${region.id}`}
                  element={<Regions />}
                />
              ))}
              
              {/* Legacy country routes for backward compatibility */}
              <Route path="/usa" element={<Countries countryId="us" />} />
              <Route path="/canada" element={<Countries countryId="canada" />} />
              <Route path="/uk" element={<Countries countryId="uk" />} />
              <Route path="/germany" element={<Countries countryId="germany" />} />
              <Route path="/australia" element={<Countries countryId="australia" />} />
              <Route path="/singapore" element={<Countries countryId="singapore" />} />
              
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