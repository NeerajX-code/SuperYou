import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, Facebook, Youtube } from "lucide-react";

const variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="super_footer"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="footer_logo" variants={item}>
        SuperYou
      </motion.div>

      <motion.div className="footer_links" variants={item}>
        <p>About</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
      </motion.div>

      <motion.div className="footer_social" variants={item}>
        <motion.a
          href="https://instagram.com/superyou"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <Instagram />
        </motion.a>
        <motion.a href="mailto:hello@superyou.in" whileHover={{ scale: 1.2 }}>
          <Mail />
        </motion.a>
        <motion.a href="tel:+919999999999" whileHover={{ scale: 1.2 }}>
          <Phone />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }}>
          <Facebook />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }}>
          <Youtube />
        </motion.a>
      </motion.div>

      <motion.div className="footer_bottom" variants={item}>
        <p>© {new Date().getFullYear()} SuperYou, Inc. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
