import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import "./HeroSection.css"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const letter = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxYReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

 

  const heading = "SUPERYOU";

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Mogra",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Heading */}
      <motion.h1
        className="hero-heading"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          overflow: "hidden",
          display: "inline-block",
          zIndex: 2,
          y: parallaxY
        }}
      >
        {Array.from(heading).map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            style={{
              display: "inline-block",
              fontSize: "6rem",
              color: "red",
              marginRight: "0.1rem"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Left Image with Parallax */}
      <motion.img
        src="https://ik.imagekit.io/nkde9n0dc/SuperYou/Super%20Masala%20Chips.png?updatedAt=1752927006674"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 25,
          top: "32%",
          height: "450px",
          rotate: "15deg",
          y: parallaxYReverse
        }}
      />

      {/* Right Image with Parallax */}
      <motion.img
        src="https://ik.imagekit.io/nkde9n0dc/SuperYou/Pudina%20Chips.png?updatedAt=1752927074694"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          right: 20,
          top: "32%",
          height: "400px",
          rotate: "-15deg",
          y: parallaxYReverse
        }}
      />

      {/* Bottom Center Image 1 with Parallax */}
      <motion.img
        src="https://ik.imagekit.io/nkde9n0dc/SuperYou/Coffee%20Wafer.jpg?updatedAt=1752927388442"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "40%",
          height: "200px",
          y: parallaxY
        }}
      />

      {/* Bottom Center Image 2 with Parallax */}
      <motion.img
        src="https://ik.imagekit.io/nkde9n0dc/SuperYou/c80edda5-74e5-4d15-b8a6-771a3e74a2ac.webp?updatedAt=1752927444056"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "40%",
          height: "200px",
          y: parallaxY
        }}
      />
    </section>
  );
};

export default HeroSection;
