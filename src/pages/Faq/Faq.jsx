import { motion } from "framer-motion";
import "./Faq.css";
import FaqCategory from "../../components/Faq/FaqCategory/FaqCategory";


const Faq = () => {


    return (
        <section className="faq-page">
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="faq-title"
                >
                    Frequently Asked Questions
                </motion.h1>
                <FaqCategory />
            </div>
        </section>
    );
};

export default Faq;
