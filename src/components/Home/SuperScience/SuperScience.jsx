import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion, useReducedMotion } from "framer-motion";
import "./SuperScience.css";

const btnText = "View More".split("");

const SuperScience = () => {
    const sectionRef = useRef();
     const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) return;

        const context = gsap.context(() => {
            const split = new SplitType(".super_h1", { types: "words, chars" });

            // h1 animation
            gsap.from(".super_h1 .char", {
                y: 80,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".super_h1",
                    start: "top 80%",
                },
            });
            // paragraph + button
            gsap.from(".super_p, .super_cont p", {
                opacity: 0,
                y: 40,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".super_cont",
                    start: "top 80%",
                },
            });
            gsap.from(".super_btn", {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".super_cont",
                    start: "top 80%",
                },
            })

        }, sectionRef);

        return () => context.revert();
    }, [shouldReduceMotion]);

    return (
        <section ref={sectionRef} className="super_science">
            <h1 className="super_h1">What Makes <span style={{ color: "red" }}>SuperYou</span> Super?</h1>
            <p className="super_p"><strong>Innovative Fermented Yeast Protein Technology</strong></p>
            <div className="super_cont" >
                <p>We took an ancient process, gave it a Super twist, and created something extraordinary.&nbsp;</p>

                <p>Using bio-fermentation technology, <strong>we skip animals, bypass plants, and let yeast do what it does best.</strong> The result? A cleaner, consistent, high-performing protein source that's better for you and the planet.</p>

                <p>This approach ensures the same exceptional quality every time, without the inefficiencies of traditional protein sources.</p>
                <motion.button
                    className="super_btn"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                >
                    {btnText.map((char, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                rest: { y: 0, opacity: 1 },
                                hover: {
                                    x: 8,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                        delay: i * 0.03,
                                    },
                                },
                            }}
                            style={{ display: "inline-block" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.button>
            </div>
        </section>
    );
};

export default SuperScience;
