import Navbar from './components/Navbar/Navbar'
import { gsap } from "gsap";
import MainRoutes from './routes/MainRoutes';
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App