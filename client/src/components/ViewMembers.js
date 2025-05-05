import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ViewMembers.css';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <motion.div
      className="view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Team Members</h2>
      <div className="members-grid">
        {members.map((member, index) => (
          <motion.div
            className="member-card"
            key={member._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={`/members/${member._id}`}>
              <button>View Details</button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ViewMembers;
