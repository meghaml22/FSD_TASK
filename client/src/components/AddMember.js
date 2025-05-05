import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './AddMember.css';

function AddMember() {
  const [formData, setFormData] = useState({ name: '', role: '', email: '', image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    await axios.post('http://localhost:5000/api/members', data);
    alert('Member added!');
    setFormData({ name: '', role: '', email: '', image: null });
  };

  return (
    <motion.div
      className="add-container"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Add Team Member</h2>
      <motion.form
        className="add-form"
        onSubmit={handleSubmit}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit">Add Member</button>
      </motion.form>
    </motion.div>
  );
}

export default AddMember;
