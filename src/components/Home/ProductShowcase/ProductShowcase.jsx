import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ProductShowcase.css";

const products = [
    {
        title: "COFFEE BAR",
        description: "A bold coffee-infused crunch with a molten chocolate center — the perfect high-energy bite for true caffeine lovers.",
        price: "₹149",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Coffee%20Wafer.jpg?updatedAt=1752927388442",
        bgGradient: "linear-gradient(145deg, #ffe7d6, #e7d4c1)",
        titleColor: "rgb(77 55 38)"
    },
    {
        title: "STRAWBERRY CREME BAR",
        description: "Juicy strawberry crème packed inside a silky shell — a fruity, flirty treat made to melt hearts (and tastebuds).",
        price: "₹99",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/c80edda5-74e5-4d15-b8a6-771a3e74a2ac.webp?updatedAt=1752927444056",
        bgGradient: "linear-gradient(145deg, #ffe7d6, #e7d4c1)",
        titleColor: "rgb(189 42 80)"
    },
    {
        title: "CHOCOLATE BAR",
        description: "Deep, dark, dangerously addictive — this classic chocolate bar redefines indulgence with every bite.",
        price: "₹49",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/0425c309-2b61-41d9-906e-cc146f9ea7f7.webp?updatedAt=1752927594042",
        bgGradient: "linear-gradient(145deg, #e7d4c1, #fdc27d)",
        titleColor: "rgb(181 78 60)"
    },
    {
        title: "CHOCO PEANUT BAR",
        description: "Crunchy peanuts, creamy chocolate, and a touch of salt — this bar hits every craving like a mic drop.",
        price: "₹129",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/0b2fd413-61f8-409a-8d43-020d3e7e4d80.webp?updatedAt=1752927643523",
        bgGradient: "linear-gradient(145deg, #ffdfa7, #f1d3a0)",
        titleColor: "rgb(179 112 71)"
    },
    {
        title: "CHEESE BAR",
        description: "Savory, creamy, totally dreamy — this unexpected twist of cheese in a sweet bar will blow your snack-loving mind.",
        price: "₹119",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/1c6d3b15-2b54-4ee6-94bd-48587401aa77.webp?updatedAt=1752927715538",
        bgGradient: "linear-gradient(145deg, #fbe7c6, #fde2a9)",
        titleColor: "rgb(233 140 81)"
    }
];

const fadeVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: i * 0.1 },
    }),
};


const ProductShowcase = () => {


    return (
        <section className="product_showcase">
            {products.map((product, i) => (
                <motion.div
                    className="product_card"
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div className="product_showcase_left">
                        <motion.h2
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2 + 0.2, duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                            style={{ color: product.titleColor }}
                        >
                            {product.title}
                        </motion.h2>

                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {product.description}
                        </motion.p>

                        <motion.span
                            className="price"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.2 + 0.4, duration: 0.6, type: "spring" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {product.price}
                        </motion.span>

                        <motion.button
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            View More
                        </motion.button>
                    </motion.div>

                    <div className="product_showcase_right">
                        <div className="image_wrapper">
                            <div
                                style={{ background: product.bgGradient }}
                                className="bg_circle"
                            />
                            <motion.img
                                initial={{ y: 50, scale: 1.2, opacity: 0 }}
                                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.2 + 0.4, duration: 0.8, ease: "backOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                                src={product.img}
                                alt={product.title}
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>


    );
};

export default ProductShowcase;


// import { useEffect, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "./ProductShowcase.css";

// gsap.registerPlugin(ScrollTrigger);

// const waferItems = [
//     {
//         title: "Strawberry Protein Wafer Bar",
//         img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/c80edda5-74e5-4d15-b8a6-771a3e74a2ac.webp?updatedAt=1752927444056",
//         img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Strawberry-Protein-Wafer-Bar.webp?updatedAt=1752928084761",
//     },
//     {
//         title: "Coffee Protein Wafer Bar",
//         img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Coffee%20Wafer.jpg?updatedAt=1752927388442",
//         img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Coffee-Wafer-Protein-Bar.webp?updatedAt=1752928084780",
//     },
//     {
//         title: "Chocolate Protein Wafer Bar",
//         img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/0425c309-2b61-41d9-906e-cc146f9ea7f7.webp?updatedAt=1752927594042",
//         img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Chocolate-Protein-Wafer-Bar-Combo.webp?updatedAt=1752927860484",
//     },
//     {
//         title: "Choco Peanut Butter Protein Wafer Bar",
//         img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/0b2fd413-61f8-409a-8d43-020d3e7e4d80.webp?updatedAt=1752927643523",
//         img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Peanut-Butter-Protein-Wafer-Bar.webp?updatedAt=1752928084647",
//     },
//     {
//         title: "Cheese Protein Wafer Bar",
//         img1: "https://ik.imagekit.io/nkde9n0dc/SuperYou/1c6d3b15-2b54-4ee6-94bd-48587401aa77.webp?updatedAt=1752927715538",
//         img2: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Superyou-Cheese-Protein-Wafer-Bar.webp?updatedAt=1752928084541",
//     },
// ];

// const ProductShowcase = () => {
//     const containerRef = useRef(null);
//     const scrollRef = useRef(null);

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             const scrollWidth = scrollRef.current.scrollWidth;
//             const viewportWidth = window.innerWidth;
//             const scrollDistance = scrollWidth - viewportWidth;

//             gsap.to(scrollRef.current, {
//                 x: () => `-${scrollDistance}`,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: "top top",
//                     end: () => `+=${scrollDistance}`,
//                     scrub: 1,
//                     pin: true,
//                     anticipatePin: 1,
//                     invalidateOnRefresh: true,
//                 },
//             });

//             ScrollTrigger.refresh();
//         }, containerRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section className="home_product_showcase" ref={containerRef}>
//             <div className="horizontal_scroll" ref={scrollRef}>
//                 {waferItems.map((item, i) => (
//                     <div className="showcase_wafer_first" key={i}>
//                         <div className="wafer_top">
//                             <h1>{item.title}</h1>
//                         </div>
//                         <div className="wafer_bottom">
//                             <div className="wafer_img">
//                                 <img src={item.img1} alt={item.title} loading="lazy" />
//                             </div>
//                             <div className="wafer_det">
//                                 <img src={item.img2} alt={item.title} loading="lazy" />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ProductShowcase;