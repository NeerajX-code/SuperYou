import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import "./HeroSection.css";



const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const images = [
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/Coffee%20Wafer.jpg?updatedAt=1752927388442",
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/c80edda5-74e5-4d15-b8a6-771a3e74a2ac.webp?updatedAt=1752927444056",
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/Super%20Masala%20Chips.png?updatedAt=1752927006674",
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/Sour%20Chips.png?updatedAt=1752927038441",
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/0425c309-2b61-41d9-906e-cc146f9ea7f7.webp?updatedAt=1752927594042",
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/0b2fd413-61f8-409a-8d43-020d3e7e4d80.webp?updatedAt=1752927643523",
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/Cheese%20Chips.png?updatedAt=1752927058018",
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/Pudina%20Chips.png?updatedAt=1752927074694",
    "https://ik.imagekit.io/nkde9n0dc/SuperYou/1c6d3b15-2b54-4ee6-94bd-48587401aa77.webp?updatedAt=1752927715538"
  ];

  const imageVariants = {
    initial: { opacity: 0, scale: 0.7, y: 80, rotateZ: -10, filter: "blur(8px)" },
    animate: {
      opacity: 1,
      scale: 1.05,
      y: 0,
      rotateZ: 0,
      filter: "blur(0px)",
      transition: { duration: 1.3, ease: [0.23, 1, 0.32, 1] },
    },
    exit: {
      opacity: 0,
      scale: 1.15,
      y: -40,
      rotateZ: 5,
      filter: "blur(6px)",
      transition: { duration: 1.1, ease: [0.6, 0.01, 0.05, 0.95] },
    },
  };

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // image switch every 3 seconds
    return () => clearTimeout(timeout);
  }, [current, shouldReduceMotion]);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="hero_wrapper">
      <div className="hero_glow" />
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          srcSet={`${images[current]} 1x, ${images[current]} 2x`}
          className="hero_img"
          alt="Flavor image"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
