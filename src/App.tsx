import { Suspense } from 'react';
import HomePage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Suspense>
          <HomePage />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
};

export default App;