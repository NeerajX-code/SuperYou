import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProductShowcase.css";

gsap.registerPlugin(ScrollTrigger);

const waferItems = [
    {
        title: "Strawberry Protein Wafer Bar",
        img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/c80edda5-74e5-4d15-b8a6-771a3e74a2ac.webp?updatedAt=1752927444056",
        img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Strawberry-Protein-Wafer-Bar.webp?updatedAt=1752928084761",
    },
    {
        title: "Coffee Protein Wafer Bar",
        img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Coffee%20Wafer.jpg?updatedAt=1752927388442",
        img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Coffee-Wafer-Protein-Bar.webp?updatedAt=1752928084780",
    },
    {
        title: "Chocolate Protein Wafer Bar",
        img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/0425c309-2b61-41d9-906e-cc146f9ea7f7.webp?updatedAt=1752927594042",
        img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Chocolate-Protein-Wafer-Bar-Combo.webp?updatedAt=1752927860484",
    },
    {
        title: "Choco Peanut Butter Protein Wafer Bar",
        img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/0b2fd413-61f8-409a-8d43-020d3e7e4d80.webp?updatedAt=1752927643523",
        img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Peanut-Butter-Protein-Wafer-Bar.webp?updatedAt=1752928084647",
    },
    {
        title: "Cheese Protein Wafer Bar",
        img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/1c6d3b15-2b54-4ee6-94bd-48587401aa77.webp?updatedAt=1752927715538",
        img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Cheese-Protein-Wafer-Bar.webp?updatedAt=1752928084541",
    },
];

const ProductShowcase = () => {
    const containerRef = useRef();

   useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".showcase_wafer_first");
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + window.innerWidth * (sections.length - 1),
      },
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, containerRef);

  return () => ctx.revert();
}, []);

    return (
        <div className="home_product_showcase" ref={containerRef}>
            <div className="horizontal_scroll">
                {waferItems.map((item, i) => (
                    <div className="showcase_wafer_first" key={i}>
                        <div className="wafer_top">
                            <h1 className="wafer_title">{item.title}</h1>
                        </div>
                        <div className="wafer_bottom">
                            <div className="wafer_img">
                                <img src={item.img1} alt={item.title} loading="lazy" />
                            </div>
                            <div className="wafer_det">
                                <img src={item.img2} alt={item.title} loading="lazy" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductShowcase;
