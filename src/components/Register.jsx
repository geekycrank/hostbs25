import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css"

function Register() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSep8oN5Yfc3HYxGOn50_1Bur7DGQX1HYcH8YnLAOAEE1X4BrQ/formResponse';
  //   const formPayload = new URLSearchParams();

  //   formPayload.append('entry.700652927', formData.name);
  //   formPayload.append('entry.30586199', formData.email);
  //   formPayload.append('entry.1909872230', formData.message);

  //   try {
  //     const response = await axios.post(googleFormUrl, formPayload, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     });
  //     if (response.status === 200) {
  //       alert('Form submitted successfully!');
  //     } else {
  //       alert('Form submission failed!');
  //     }
  //   } catch (error) {
  //     console.error('Form submission error:', error);
  //     alert('Form submission failed!');
  //   }
  // };

  return (
    <div className="Register">
       <form className="form">
          <div className="heading1">
             EVENT REGISTRATION
          </div>

          <div className="topFrame">
              <div className="Name">
                <div className="field">Name*</div>
                <input type="text"/>
              </div>
              <div className="Name">
                <div className="field">E-mail Id*</div>
                <input type="text"/>
              </div>
              <div className="Name">
                <div className="field">Phone No*</div>
                <input type="text"/>
              </div>
              <div className="Name">
                <div className="field">Whatsapp No*</div>
                <input type="text"/>
              </div>
              {/* <div className="Name">
                <div className="field">College Name*</div>
                <input type="text"/>
              </div>
              <div className="Name">
                <div className="field">Place of Stay*</div>
                <input type="text"/>
              </div> */}
          </div>
       </form>
    </div>
  );
}

export default Register;
