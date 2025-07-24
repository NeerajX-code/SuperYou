import { motion } from "framer-motion";
import "./Product.css"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.8,
            delayChildren: 0.4
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
        scale: 1.03,
        y: -4,
        transition: { type: "spring", stiffness: 300 }
    }
};


const Product = ({ isActive }) => {
    const showWafer = isActive === "protein_wafer" || isActive === "all_collection";
    const showChips = isActive === "protein_chips" || isActive === "all_collection";

    return (
        <motion.div className="products" variants={containerVariants}
            initial="hidden"
            animate="visible">
            {showWafer && (
                <div
                    className="products_wafer"
                    style={{
                        width: isActive === "protein_wafer" ? "100%" : "50%",
                        display: "grid",
                    }}
                >
                    <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                    <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                </div>
            )}

            {showChips && (
                <div
                    className="products_chips"
                    style={{
                        width: isActive === "protein_chips" ? "100%" : "50%",
                        display: "grid",
                    }}
                >
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                     <motion.div className="wafer_item" variants={itemVariants}
                        whileHover="hover">
                        <img src="https://superyou.in/cdn/shop/files/Strawberry_Chocolate_1.jpg?v=1740390589&width=533" alt="" />
                        <div className="wafer_item_det">
                            <p>Strawberry Creme & Chocolate Combo-Pack of 10 each</p>
                            <p>RS. 899.00</p>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

export default Product;
