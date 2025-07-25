import "./ProductDetail.css";
import { useParams } from 'react-router-dom';
import { proteinChips, proteinWafer } from '../../components/ProductData/ProductData';
import DetailofProduct from '../../components/ProductDetail/DetailofProductForMob/DetailofProduct';
import DetailofProductForDesk from '../../components/ProductDetail/DetailofProductForDesk/DetailofProductForDesk';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProductDetail = () => {
    const { title } = useParams();
    const [Product, setProduct] = useState(null); // single object
    // const Product = proteinChips.filter(item => item.title === title);
    const [mainImg, setMainImg] = useState(null);
    const [thumbnails, setThumbnails] = useState([]);

    const handleImageClick = (clickedImg, index) => {
        const newThumbnails = [...thumbnails];
        newThumbnails[index] = mainImg;
        setMainImg(clickedImg);
        setThumbnails(newThumbnails);
    };
    useEffect(() => {
        let foundProduct =
            proteinChips.find(item => item.title === title) ||
            proteinWafer.find(item => item.title === title);

        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [title]);

    useEffect(() => {
        if (Product) {
            setMainImg(Product.mainImg);
            setThumbnails([
                Product.firstImg,
                Product.secImg,
                Product.adImg,
                Product.ingredientsImg
            ]);
        }
    }, [Product]);

    return (
        <motion.div
            className='product_detail'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="product_det_wrapper">
                <div className="det_left">
                    <motion.img
                        className='mainImg'
                        key={mainImg} // helps trigger animation on img swap
                        src={mainImg}
                        alt=""
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    />

                    <div className="more_images">
                        {thumbnails.map((thumb, i) => (
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                key={i}
                                src={thumb}
                                loading="lazy"
                                alt={`thumb-${i}`}
                                onClick={() => handleImageClick(thumb, i)}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="main_ad"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <img src={Product?.mainAd} alt="" />
                    </motion.div>
                </div>

                <div className="det_right">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {Product?.title}
                    </motion.h1>

                    <motion.p
                        className='price'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Rs. {Product?.price}
                    </motion.p>

                    <motion.button
                        className='add_to_cart'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Add to cart
                    </motion.button>

                    <motion.button
                        className='buy_now'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Buy It Now
                    </motion.button>

                    <motion.p
                        className="more_info"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {Product?.moreInfo}
                    </motion.p>

                    {/* Mobile Details */}
                    {Product && <DetailofProduct Product={Product} />}

                    {/* Desktop Details */}
                    {Product && <DetailofProductForDesk Product={Product} />}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetail;
