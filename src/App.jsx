import { Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/MainRoutes';
import Loader from "./components/Loader/Loader"
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Suspense fallback={<div className="loading-fallback"><Loader /></div>}>
        <Navbar />
        <MainRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
