import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";
import QrImage from '../assets/Qr.webp';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    college: '',
    place: '',
    events: [],
    drama: '',
    transactionId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const options = e.target.options;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setFormData({ ...formData, events: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log form data to console
    console.log("Form Data Submitted:", formData);

    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSep8oN5Yfc3HYxGOn50_1Bur7DGQX1HYcH8YnLAOAEE1X4BrQ/formResponse';
    const formPayload = new URLSearchParams();

    formPayload.append('entry.700652927', formData.name);
    formPayload.append('entry.30586199', formData.email);
    formPayload.append('entry.123456789', formData.phone);
    formPayload.append('entry.987654321', formData.whatsapp);
    formPayload.append('entry.111222333', formData.college);
    formPayload.append('entry.444555666', formData.place);
    formPayload.append('entry.777888999', formData.events.join(', '));
    formPayload.append('entry.101010101', formData.drama);
    formPayload.append('entry.202020202', formData.transactionId);

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
    <div className="Register">
      <form className="form" onSubmit={handleSubmit}>
        <div className="heading1">EVENT REGISTRATION</div>

        <div className="topFrame">
          <div className="Name">
            <div className="field">Name*</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Name">
            <div className="field">E-mail Id*</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Name">
            <div className="field">Phone No*</div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Name">
            <div className="field">Whatsapp No*</div>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Name">
            <div className="field">College Name*</div>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Name">
            <div className="field">Place of Stay*</div>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile View */}
          <div id="bottom" className="Name">
            <div className="field">Events Participating*</div>
            <select
              className="select"
              name="events"
              multiple
              value={formData.events}
              onChange={handleSelectChange}
              required
            >
              <option value="" disabled>
                Drop Down
              </option>
              <option value="Event 1">Event 1</option>
              <option value="Event 2">Event 2</option>
              <option value="Event 3">Event 3</option>
              <option value="Event 4">Event 4</option>
              <option value="Event 5">Event 5</option>
            </select>
          </div>
          <div id="bottom" className="Name">
            <div className="field">Are you participating in Drama?*</div>
            <select
              className="select"
              name="drama"
              value={formData.drama}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Drop Down
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div id="MobQr">
            <img src={QrImage} alt="QR Code for Payment" />
          </div>
          <h2 className="QrContent">Scan here to pay</h2>
          <div id="bottom" className="Name">
            <div className="field">Transaction Id*</div>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              required
            />
          </div>

          {/* Desktop View */}
          <div className="bottomFrame" id="frameBottom">
            <div className="bottomInput">
              <div id="top" className="Name">
                <div className="field">Events Participating*</div>
                <select
                  className="select"
                  name="events"
                  multiple
                  value={formData.events}
                  onChange={handleSelectChange}
                  required
                >
                  <option value="" disabled>
                    Drop Down
                  </option>
                  <option value="Event 1">Event 1</option>
                  <option value="Event 2">Event 2</option>
                  <option value="Event 3">Event 3</option>
                  <option value="Event 4">Event 4</option>
                  <option value="Event 5">Event 5</option>
                </select>
              </div>
              <div id="top" className="Name">
                <div className="field">Are you participating in Drama?*</div>
                <select
                  className="select"
                  name="drama"
                  value={formData.drama}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Drop Down
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div id="top" className="Name">
              <div className="field">Transaction Id*</div>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
