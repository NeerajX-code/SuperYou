import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ProductShowcase.css";
import { NavLink } from "react-router-dom";

const products = [
    {
        title: "COFFEE BAR",
        description: "A bold coffee-infused crunch with a molten chocolate center — the perfect high-energy bite for true caffeine lovers.",
        price: "₹899",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/Coffee%20Wafer.jpg?updatedAt=1752927388442",
        bgGradient: "linear-gradient(145deg, #ffe7d6, #e7d4c1)",
        titleColor: "rgb(77 55 38)",
        linkTitle:"Coffee Protein Wafer - Pack of 10"
    },
    {
        title: "STRAWBERRY CREME BAR",
        description: "Juicy strawberry crème packed inside a silky shell — a fruity, flirty treat made to melt hearts (and tastebuds).",
        price: "₹899",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/c80edda5-74e5-4d15-b8a6-771a3e74a2ac.webp?updatedAt=1752927444056",
        bgGradient: "linear-gradient(145deg, #ffe7d6, #e7d4c1)",
        titleColor: "rgb(189 42 80)",
        linkTitle:"Strawberry Crème Protein Wafer — Pack of 10"
    },
    {
        title: "CHOCOLATE BAR",
        description: "Deep, dark, dangerously addictive — this classic chocolate bar redefines indulgence with every bite.",
        price: "₹899",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/0425c309-2b61-41d9-906e-cc146f9ea7f7.webp?updatedAt=1752927594042",
        bgGradient: "linear-gradient(145deg, #e7d4c1, #fdc27d)",
        titleColor: "rgb(181 78 60)",
        linkTitle:"Chocolate Protein Wafer — Pack of 10"
    },
    {
        title: "CHOCO PEANUT BAR",
        description: "Crunchy peanuts, creamy chocolate, and a touch of salt — this bar hits every craving like a mic drop.",
        price: "₹899",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/0b2fd413-61f8-409a-8d43-020d3e7e4d80.webp?updatedAt=1752927643523",
        bgGradient: "linear-gradient(145deg, #ffdfa7, #f1d3a0)",
        titleColor: "rgb(179 112 71)",
        linkTitle:"Choco Peanut Butter Protein Wafer — Pack of 10"
    },
    {
        title: "CHEESE BAR",
        description: "Savory, creamy, totally dreamy — this unexpected twist of cheese in a sweet bar will blow your snack-loving mind.",
        price: "₹899",
        img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/1c6d3b15-2b54-4ee6-94bd-48587401aa77.webp?updatedAt=1752927715538",
        bgGradient: "linear-gradient(145deg, #fbe7c6, #fde2a9)",
        titleColor: "rgb(233 140 81)",
        linkTitle:"Cheese Protein Wafer — Pack of 10"
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
                <NavLink key={i} to={`/Product/detail/${product.linkTitle}`} style={{textDecoration:"none"}}>
                <motion.div
                    className="product_card"
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
                            BUY PACK OF 10 at {product.price}
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
                </NavLink>
            ))}
        </section>


    );
};

export default ProductShowcase;
