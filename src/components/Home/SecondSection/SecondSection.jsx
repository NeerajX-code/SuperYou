import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./SecondSection.css";

const fadeDownContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    scale: 0.97,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const fadeDownSingle = {
  initial: {
    y: -60,
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const SecondSection = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.6 });

  return (
    <div className="secondSection">
      <div className="sec_left">
        <motion.div
          className="sec_text"
          variants={fadeDownContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h1 ref={headingRef} className="split-text">
            {"INDIA'S 1".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={fadeInUp}
                style={{
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.sup
              style={{
                verticalAlign: "super",
                fontSize: "0.5em",
                marginLeft: "2px",
              }}
              variants={fadeInUp}
            >
              st
            </motion.sup>
          </h1>

          <motion.h2 variants={fadeInUp}>PROTEIN WAFER</motion.h2>
        </motion.div>

        <motion.div
          className="sec_det"
          variants={fadeDownContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div className="text_container" variants={fadeDownSingle}>
            <motion.h1 className="text" variants={fadeInUp}>
              10g PROTEIN
            </motion.h1>
          </motion.div>

          <motion.div className="det_items" variants={fadeDownSingle}>
            <motion.h2 variants={fadeInUp}>NO ADDED SUGAR</motion.h2>
            <motion.h2 variants={fadeInUp}>NO PALM OIL</motion.h2>
            <motion.h2 variants={fadeInUp}>GUT-FRIENDLY</motion.h2>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="sec_right"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      >
        <img
          loading="lazy"
          fetchPriority="high"
          decoding="async"
          src="https://ik.imagekit.io/nkde9n0dc/SuperYou/Ranveer%20Singh%20cutout.png?updatedAt=1752991162835"
          alt="Ranveer Singh"
        />
      </motion.div>
    </div>
  );
};

export default SecondSection;
