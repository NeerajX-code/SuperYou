import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  Cross, Menu,
  ShoppingCart, UserRound,
  X
} from 'lucide-react';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import MenuIcon from "./Menu/Menu";
import { navLinks } from "./NavLink";

const MotionNavLink = motion.create(NavLink);

const Navbar = () => {
  const navRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkData = navLinks;

  let lastScroll = useRef(window.scrollY);
  let scrollUpCount = useRef(0);
  let scrollTimeout = useRef(null);
  let ticking = useRef(false);


  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const scrollDelta = currentScroll - lastScroll.current;

          // Apply blur when scrolled
          setIsScrolled(currentScroll > 10);

          // ✅ Always show navbar at top of page
          if (currentScroll < 10) {
            gsap.killTweensOf(navRef.current);
            gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
            setIsHidden(false);
          }

          // ✅ Scroll Up by 50px or more → show nav
          else if (scrollDelta < -50) {
            gsap.killTweensOf(navRef.current);
            gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
            setIsHidden(false);
          }

          // ✅ Scroll Down by 10px or more → hide nav
          else if (scrollDelta > 10) {
            if (!isHidden) {
              gsap.killTweensOf(navRef.current);
              gsap.to(navRef.current, { y: "-100%", duration: 0.4, ease: "power2.in" });
              setIsHidden(true);
            }
          }

          lastScroll.current = currentScroll;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);



  return (
    <nav
      ref={navRef}
      className={`nav ${isCompact ? 'nav-compact' : ''} ${isHidden ? 'nav-hidden' : ''} ${isScrolled ? 'nav_blur' : ''}`}
      style={{ fontFamily: "Bebas Neue" }}
    >
      <div className="nav_left">
        <img src="https://ik.imagekit.io/nkde9n0dc/SuperYou/superyou-protein-wafer-india.avif?updatedAt=1753363942789" alt="SuperYou Logo" />
      </div>
      <div className="nav_center">
        {navLinkData.map((link, index) => (
          <MotionNavLink
            key={index}
            to={link.to}
            className="nav_link"
            whileHover={{
              scale: 1.05,
              rotate: 0.1,
              transition: {
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1]
              }
            }}
          >{React.createElement(link.icon, { size: 18 })}
            <span>
              {link.label}
            </span>
          </MotionNavLink>
        ))}
      </div>
      <div className="nav_right">
        <div className="nav_right_first">
          <NavLink className="profile" to="/profile"><UserRound /></NavLink>
          <NavLink className="cart" to="/cart"><ShoppingCart /></NavLink>
        </div>

        <AnimatePresence mode="wait">
          <motion.button
            key="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="nav_right_menu"
            initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 90 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {!isOpen ? (
                <motion.div
                  key="menu-icon"
                  initial={{ y: -20, opacity: 0, rotate: -30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Menu size={42} />
                </motion.div>
              ) : (
                <motion.div
                  key="x-icon"
                  initial={{ y: 20, opacity: 0, rotate: 30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: -30 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <X size={38} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </AnimatePresence>



      </div>
      {isOpen && <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;