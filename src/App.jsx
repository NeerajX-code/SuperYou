import { Suspense, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/MainRoutes';
import HomeFooter from './components/Home/HomeFooter/HomeFooter';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
      <Navbar />
      <MainRoutes />
      <HomeFooter />
      </Suspense>
    </div>
  );
};

export default App;
