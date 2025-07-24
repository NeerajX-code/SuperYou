import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about_us_page">
      {/* Hero Section */}
      <section className="hero">
        <motion.img
          src="https://superyou.in/cdn/shop/files/SY-About-Us-NB-_-RS.jpg?v=1731829205&width=3840"
          alt="Ranveer Singh Hero"
          className="hero_image"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </section>

      {/* Storytelling Section */}
      <section className="storytelling">
        <div className="story_wrapper">
          <motion.h2
            className="section_title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            The Rise of Superyou
          </motion.h2>

          <motion.p
            className="story_text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <span className="red_span">Superyou</span> is more than a brand — it is a movement. Born from the relentless energy and creative fire of Ranveer Singh, Superyou was envisioned as a rallying cry for individuality, transformation, and unapologetic self-expression. <span className="red_span">The journey began when Ranveer challenged the norms — not just in fashion, but in how we live, express, and own our identity.</span>
          </motion.p>

          <motion.p
            className="story-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            With bold silhouettes, radical designs, and an unfiltered voice, Superyou became a cultural mirror — reflecting confidence, rebellion, and reinvention. It's a space where every piece is a statement, and every individual becomes a story.
          </motion.p>

          <motion.p
            className="story-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            This is not fashion. This is identity. This is Superyou.
          </motion.p>
        </div>
      </section>

      <section className="meet_creator">
        <div className="creator_content">
          <div className="creator_image">
            <img src="https://superyou.in/cdn/shop/files/Super_you_PDP_Assorted_Pack_Assorted_3.jpg?v=1731845829&width=750" alt="" />
          </div>
          <motion.div
            className="creator_text"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Meet the Visionary</h2>
            <p>“Superyou is not a brand. It's a rebellion of the soul. An unfiltered echo of who you truly are.” – Ranveer Singh</p>
          </motion.div>
        </div>
      </section>

      <section className="timeline_section">
        <h2 className="section_title">Our Journey</h2>
        <div className="timeline">
          <div className="event">
            <span className="year">2022</span>
            <p>Superyou is born. A new wave of cultural expression begins.</p>
          </div>
          <div className="event">
            <span className="year">2023</span>
            <p>First limited drops sell out. The movement gains momentum.</p>
          </div>
          <div className="event">
            <span className="year">2024</span>
            <p>Superyou expands into lifestyle, performance, and self-empowerment.</p>
          </div>
        </div>
      </section>

      <section className="join-movement">
        <h2>Ready to unleash your Superyou?</h2>
        <button className="cta-button">Join the Movement</button>
      </section>

    </div>
  );
};

export default AboutUs;