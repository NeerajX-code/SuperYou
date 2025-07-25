import { motion } from "framer-motion";
import { proteinChips } from "../../ProductData/ProductData";
import { proteinWafer } from "../../ProductData/ProductData";
import { NavLink } from "react-router-dom";
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

    const renderChipsData = proteinChips.map((item, id) => {
        return (
            <motion.div key={id} className="wafer_item" variants={itemVariants}
                whileHover="hover">
                <div className="wafer_item_img_cont">
                    <img src={item.mainImg}
                        srcSet={`
      ${item.mainImg}?width=400 400w,
      ${item.mainImg}?width=600 600w,
      ${item.mainImg}?width=800 800w,
      ${item.mainImg}?width=1000 1000w
    `}
                        loading="lazy"
                        className={`wafer_item_img_${id}`} alt="" />
                </div>
                <div className="wafer_item_det">
                    <NavLink to={`/Product/detail/${item.title}`} style={{ textDecoration: "none" }}>
                        <motion.p
                            initial={{ color: "black", textDecoration: "none" }}
                            whileHover={{
                                color: "black",
                                textDecoration: "underline",
                                textDecorationColor: "#5F9EA0",
                                transition: { duration: 0.3, ease: "easeInOut" }
                            }}
                            style={{
                                fontSize: "16px",
                                cursor: "pointer"
                            }}
                        >
                            {item.title}
                        </motion.p>
                    </NavLink>

                    <p style={{ marginTop: "clamp(0.5rem,1vw,1rem)" }}>RS. {item.price}</p>
                    <button className='add_to_cart'>Add to cart</button>
                </div>
            </motion.div>
        )
    })

    const renderWaferData = proteinWafer.map((item, id) => {
        return (
            <motion.div key={id} className="wafer_item" variants={itemVariants}
                whileHover="hover">
                <div className="wafer_item_img_cont">
                    <img src={item.mainImg}
                        srcSet={`
      ${item.mainImg}?width=400 400w,
      ${item.mainImg}?width=600 600w,
      ${item.mainImg}?width=800 800w,
      ${item.mainImg}?width=1000 1000w
    `}
                        loading="lazy"
                        className={`wafer_item_img_${id}`} alt="" />
                </div>
                <div className="wafer_item_det">
                    <NavLink to={`/Product/detail/${item.title}`} style={{ textDecoration: "none" }}>
                        <motion.p
                            initial={{ color: "black", textDecoration: "none" }}
                            whileHover={{
                                color: "black",
                                textDecoration: "underline",
                                textDecorationColor: "#5F9EA0",
                                transition: { duration: 0.3, ease: "easeInOut" }
                            }}
                            style={{
                                fontSize: "16px",
                                cursor: "pointer"
                            }}
                        >
                            {item.title}
                        </motion.p>
                    </NavLink>

                    <p style={{ marginTop: "clamp(0.5rem,1vw,1rem)" }}>RS. {item.price}</p>
                    <button className='add_to_cart'>Add to cart</button>
                </div>
            </motion.div>
        )
    })

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
                  {renderWaferData}
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
                    {renderChipsData}
                </div>
            )}
        </motion.div>
    );
};

export default Product;
