import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSep8oN5Yfc3HYxGOn50_1Bur7DGQX1HYcH8YnLAOAEE1X4BrQ/formResponse';
    const formPayload = new URLSearchParams();

    formPayload.append('entry.700652927', formData.name);
    formPayload.append('entry.30586199', formData.email);
    formPayload.append('entry.1909872230', formData.message);

    try {
      const response = await axios.post(googleFormUrl, formPayload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.status === 200) {
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed!');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Form submission failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
