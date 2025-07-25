import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion"
import "./ChipsShowcase.css";
import { NavLink } from "react-router";



gsap.registerPlugin(ScrollTrigger);

const chips = [
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Super%20Masala%20Chips.png?updatedAt=1752927006674",
    name: "Super Masala",
    description: "Packed with bold Indian spices for a tangy, spicy crunch.",
    price: "₹500",
    linkTitle: "Superyou Super Masala Chips - Pack of 10"
  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Sour%20Chips.png?updatedAt=1752927038441",
    name: "Tangy Sour",
    description: "Zesty lemon twist with a sour punch that tingles your tongue.",
    price: "₹500",
    linkTitle: "Superyou Tangy Sour Chips - Pack of 10"

  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Pudina%20Chips.png?updatedAt=1752927074694",
    name: "Mint Pudina",
    description: "Refreshing pudina flavor with a cool, crisp aftertaste.",
    price: "₹500",
    linkTitle: "Superyou Mint Pudina Chips - Pack of 10"
  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Cheese%20Chips.png?updatedAt=1752927058018",
    name: "Cheesy Burst",
    description: "Creamy, cheesy explosion in every bite - dangerously addictive.",
    price: "₹500",
    linkTitle: "Superyou Cheesy Burst Chips - Pack of 10"
  },
];


const ChipsShowcase = () => {
  const containerRef = useRef();
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".chip_card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 100 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="chips_showcase" ref={containerRef}>

      <div className="chips_container">
        {chips.map((chip, i) => (
          <NavLink key={i} style={{ textDecoration: "none" }} to={`/Product/detail/${chip.linkTitle}`} >
            <div className="chip_card"
            >

              <motion.img src={chip.src} alt={chip.name} loading="lazy" className={`chip_item chip_item_${i}`}
                whileHover={{ scale: 1.08, rotate: -2 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <div className={`chip_label chip_label_${i}`}>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >{chip.name}</motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >{chip.description}</motion.p>
                <motion.p className="price"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >Buy Pack of 10 Only at-{chip.price}</motion.p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >View More</motion.button>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );

};

export default ChipsShowcase;
