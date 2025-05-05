import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.header
        className="home-header"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1>Team Zero</h1>
        <p>Welcome to the Student Team Members Management App</p>
      </motion.header>

      <motion.div
        className="home-buttons"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Link to="/add">
          <button className="home-button">➕ Add Member</button>
        </Link>
        <Link to="/members">
          <button className="home-button">👥 View Members</button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Home;
