import { Suspense } from 'react';
import HomePage from "./pages/Homepage";

function App() {
  return (
    <Suspense>
      <HomePage />
    </Suspense>
  )
};

export default App;