import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  BookUser, House, Menu, MessageCircleQuestionMark,
  Search, ShoppingCart, Store, UserRound
} from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  let lastScroll = window.scrollY;
  let scrollUpCount = 0;
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Blur effect only when scrolled
      setIsScrolled(currentScroll > 20);

      if (currentScroll < lastScroll) {
        // User is scrolling up
        scrollUpCount += 1;

        if (scrollUpCount >= 2) {
          setIsHidden(false);
          gsap.to(navRef.current, { y: 0, duration: 0.5, ease: "power2.out" });
          scrollUpCount = 0;
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          scrollUpCount = 0;
        }, 500); // must scroll up twice within 500ms
      } else {
        // Scrolling down
        if (!isHidden) {
          gsap.to(navRef.current, { y: "-100%", duration: 0.5, ease: "power2.in" });
          setIsHidden(true);
        }
        scrollUpCount = 0;
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  return (
    <nav
      ref={navRef}
      className={`nav ${isCompact ? 'nav-compact' : ''} ${isHidden ? 'nav-hidden' : ''} ${isScrolled ? 'nav_blur' : ''}`}
      style={{ fontFamily: "Bebas Neue" }}
    >
      <div className="nav_left">
        <img src="https://metamask.io/images/icons/metamask-logo-horizontal.svg" alt="MetaMask Logo" />
      </div>
      <div className="nav_center">
        <NavLink to="/"><House />Home</NavLink>
        <NavLink to="/Shop"><Store />Shop</NavLink>
        <NavLink to="/About"><BookUser />About us</NavLink>
        <NavLink to="/Faq"><MessageCircleQuestionMark />FAQ</NavLink>
      </div>
      <div className="nav_right">
        <div className="nav_right_first">
          <NavLink to="/profile"><UserRound /></NavLink>
          <NavLink to="/cart"><ShoppingCart /></NavLink>
        </div>
        <button className="nav_right_menu"><Menu /></button>
      </div>
    </nav>
  );
};

export default Navbar;