import "./Cart.css";
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    const handleStartShopping = () => {
        navigate("/Shop"); // Navigate to /Shop
    };

    return (
        <motion.div
            className="cart_page"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="cart_empty_box">
                <ShoppingCart size={64} className="cart_icon" />
                <h1>Your cart is feeling lonely 😢</h1>
                <p>Looks like you haven't added anything to your cart yet.</p>
                    <button onClick={handleStartShopping} className="back_to_shop">Start Shopping</button>
            </div>
        </motion.div>
    );
};

export default Cart;
