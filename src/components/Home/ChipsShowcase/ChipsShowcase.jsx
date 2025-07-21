import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ChipsShowcase.css";

gsap.registerPlugin(ScrollTrigger);

const chips = [
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Super%20Masala%20Chips.png?updatedAt=1752927006674",
    name: "Super Masala",
  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Sour%20Chips.png?updatedAt=1752927038441",
    name: "Tangy Sour",
  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Pudina%20Chips.png?updatedAt=1752927074694",
    name: "Mint Pudina",
  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Cheese%20Chips.png?updatedAt=1752927058018",
    name: "Cheesy Burst",
  },
];

const ChipsShowcase = () => {
  const containerRef = useRef();

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Parallax crumbs (clean drift)
    gsap.utils.toArray(".crumb").forEach((crumb, i) => {
      gsap.to(crumb, {
        y: gsap.utils.random(-30, 30),
        x: gsap.utils.random(-20, 20),
        rotate: gsap.utils.random(-15, 15),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: gsap.utils.random(5, 8),
        delay: i * 0.2,
      });
    });

    // Smooth chip intro with delay + depth
    gsap.from(".chip_card", {
      y: 60,
      opacity: 0,
      scale: 0.5,
      stagger: 0.25,
      ease: "power4.out",
      duration: 1.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 60%",
        scrub: true, // Awwwards-like scroll sync
      },
    });


    // Subtle spark pop
    gsap.from(".spark", {
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      ease: "expo.out",
      duration: 0.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        scrub: true,
      },
    });

  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <div className="chips_showcase" ref={containerRef}>

      <div className="parallax_crumbs">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="crumb" />
        ))}
      </div>

      <div className="chips_container">
        {chips.map((chip, i) => (
          <div className="chip_card" key={i}>
            <img src={chip.src} alt={chip.name} className={`chip_item chip_item_${i}`} />
            <div className={`chip_label chip_label_${i}`}>{chip.name}</div>
            <div className="spark" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsShowcase;
