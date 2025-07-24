import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import "./FaqItem.css";

const FaqItem = ({ Title, faqData, gridClass }) => {
    const [openIndex, setOpenIndex] = useState(null); // Local state per FAQ group

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`product_information ${gridClass}`}>
            <h1 className="faq_cat_title">{Title}</h1>
            <div className="faq-list">
                {faqData.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <motion.div
                            key={index}
                            className={`faq-item ${isOpen ? "active" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <motion.h2
                                    layout
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    {item.question}
                                </motion.h2>
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isOpen ? (
                                        <ChevronUp size={22} className="faq-icon" />
                                    ) : (
                                        <ChevronDown size={22} className="faq-icon" />
                                    )}
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false} mode="wait">
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        id={`faq-answer-${index}`}
                                        className="faq-answer"
                                        layout
                                        initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                                        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                                        exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    >
                                        <motion.p
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            {item.answer}
                                        </motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FaqItem;
