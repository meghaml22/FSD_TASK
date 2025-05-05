import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './MemberDetails.css';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!member) return <p className="loading">Loading member details...</p>;

  return (
    <motion.div
      className="details-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="details-card"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
        <h2>{member.name}</h2>
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Email:</strong> {member.email}</p>
      </motion.div>
    </motion.div>
  );
}

export default MemberDetails;
