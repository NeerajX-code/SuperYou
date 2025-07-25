import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Auth.css";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <div className="auth_page">
      <div className="auth_box">
        <h2 className="auth_title">{isSignIn ? "Welcome Back" : "Join Us"}</h2>
        <AnimatePresence mode="wait">
          {isSignIn ? (
            <motion.form
              key="signIn"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="auth_form"
            >
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button className="auth_btn">Sign In</button>
              <p className="switch_link">
                Don't have an account?{" "}
                <span onClick={() => setIsSignIn(false)}>Sign Up</span>
              </p>
            </motion.form>
          ) : (
            <motion.form
              key="signUp"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="auth_form"
            >
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button className="auth_btn">Sign Up</button>
              <p className="switch_link">
                Already have an account?{" "}
                <span onClick={() => setIsSignIn(true)}>Sign In</span>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;
