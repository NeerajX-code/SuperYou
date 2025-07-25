import { motion } from "framer-motion";
import "./DetailofProductForDesk.css";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut"
        }
    })
};

const DetailofProductForDesk = ({ Product }) => {
    return (
        <motion.div
            className='detail_of_product_for_desk'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {[
                { title: "About This", content: Product?.about },
                { title: "Allergen Info", content: Product?.alergenInfo },
                { title: "Ingredients", content: Product?.ingredientInfo },
            ].map((item, i) => (
                <motion.div key={i} custom={i} variants={fadeInUp}>
                    <h1 className='dop_desk_h1'>{item.title}</h1>
                    <p className='dop_desk_p'>{item.content}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default DetailofProductForDesk;
