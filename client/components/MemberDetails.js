// client/src/components/MemberDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!member) return <p>Loading member details...</p>;

  return (
    <div className="member-details">
      <h2>{member.name}</h2>
      <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} width="150" />
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Email:</strong> {member.email}</p>
    </div>
  );
}

export default MemberDetails;
