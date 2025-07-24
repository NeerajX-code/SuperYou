import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ChipsShowcase.css";

gsap.registerPlugin(ScrollTrigger);

const chips = [
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Super%20Masala%20Chips.png?updatedAt=1752927006674",
    name: "Super Masala",
    description: "Packed with bold Indian spices for a tangy, spicy crunch.",
    price: "₹25",
  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Sour%20Chips.png?updatedAt=1752927038441",
    name: "Tangy Sour",
    description: "Zesty lemon twist with a sour punch that tingles your tongue.",
    price: "₹25",
  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Pudina%20Chips.png?updatedAt=1752927074694",
    name: "Mint Pudina",
    description: "Refreshing pudina flavor with a cool, crisp aftertaste.",
    price: "₹25",
  },
  {
    src: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Cheese%20Chips.png?updatedAt=1752927058018",
    name: "Cheesy Burst",
    description: "Creamy, cheesy explosion in every bite – dangerously addictive.",
    price: "₹30",
  },
];


const ChipsShowcase = () => {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    

      // Smooth chip intro with delay + depth
      gsap.to(".chip_card", {
        x:0,
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.25,
        ease: "power4.out",
        duration: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 60%",
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="chips_showcase" ref={containerRef}>

      <div className="chips_container">
        {chips.map((chip, i) => (
          <div className="chip_card" key={i}>
            <img  src={chip.src} alt={chip.name} className={`chip_item chip_item_${i}`} />
            <div className={`chip_label chip_label_${i}`}>
              <h2>{chip.name}</h2>
              <p>{chip.description}</p>
              <p className="price">Buy Pack of 10 Only at-{chip.price}</p>
                <button>View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsShowcase;
