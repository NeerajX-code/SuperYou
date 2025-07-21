import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { motion, useInView } from "framer-motion";
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

const fadeDownLetter = {
    initial: {
        y: -60,
        opacity: 0,
        filter: "blur(6px)",
        scale: 0.95,
    },
    animate: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const fadeDownSingle = {
    initial: {
        y: -60,
        opacity: 0,
        filter: "blur(6px)",
        scale: 0.95,
    },
    animate: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.97,
    },
    animate: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.33, 1, 0.68, 1], // Exponential ease
        },
    },
};

const SecondSection = () => {
    const headingRef = useRef(null);

    const isInView = useInView(headingRef, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView && headingRef.current) {
            new SplitType(headingRef.current, {
                types: "chars",
                charClass: "char",
            });
        }
    }, [isInView]);

    return (
        <div className="secondSection">
            <div className="sec_left">
                <motion.div
                    className="sec_text"
                    variants={fadeDownContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h1 ref={headingRef} className="split-text">
                        {"INDIA'S 1".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={fadeInUp}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <sup>st</sup>
                    </h1>
                    <motion.h2 variants={fadeDownLetter}>PROTEIN WAFER</motion.h2>
                </motion.div>

                <motion.div
                    className="sec_det"
                    variants={fadeDownContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div className="text_container" variants={fadeDownSingle}>
                        <motion.h1 className="text" variants={fadeDownLetter}>
                            10g PROTEIN
                        </motion.h1>
                    </motion.div>

                    <motion.div className="det_items" variants={fadeDownSingle}>
                        <motion.h2 variants={fadeDownLetter}>NO ADDED SUGAR</motion.h2>
                        <motion.h2 variants={fadeDownLetter}>NO PALM OIL</motion.h2>
                        <motion.h2 variants={fadeDownLetter}>GUT-FRIENDLY</motion.h2>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="sec_right"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            >
                <img
                    src="https://ik.imagekit.io/nkde9n0dc/SuperYou/Ranveer%20Singh%20cutout.png?updatedAt=1752991162835"
                    alt="Ranveer Singh"
                />
            </motion.div>
        </div>
    );
};

export default SecondSection;
