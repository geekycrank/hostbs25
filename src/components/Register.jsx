import React, { useState } from 'react';
import './Register.css';
// import { Link } from "react-router-dom";
// import qrCode from '../assets/qr-code.jpg';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  whatsapp: '',
  college: '',
  place: '',
  events: [],
  drama: '',
  transactionId: '',
  referralCode: ''
};

const eventOptions = [
  "Debate", "Arcane Challenge", "Drama", "Adzap", "Puzzle",
  "Quiz", "Jam", "Uno minuto", "Shipwreck", "Poem and Microtale"
];

const SHEETDB_URL = "https://sheetdb.io/api/v1/7as0hw3kysdg7";

function Registration() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedEvents = [...formData.events];
    if (checked) {
      updatedEvents.push(value);
    } else {
      updatedEvents = updatedEvents.filter(event => event !== value);
    }
    setFormData({ ...formData, events: updatedEvents });
  };

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.name) return "Please enter your name.";
    if (!formData.email || !emailPattern.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.phone || formData.phone.toString().length !== 10) return "Please enter a valid 10-digit phone number.";
    if (!formData.whatsapp || formData.whatsapp.toString().length !== 10) return "Please enter a valid 10-digit WhatsApp number.";
    if (!formData.college) return "Please enter your college name.";
    if (!formData.place) return "Please enter your college city.";
    if (!formData.events.length) return "Please select at least one event.";
    if (!formData.drama) return "Please select your participation in drama.";
    if (!formData.transactionId) return "Please enter your transaction ID.";
    return null;
  };

  const handleSubmit = async (e) => {

    setLoading(true);
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      setLoading(false);
      return;
    }

    
    try {
      const dataWithTimestamp = {
        ...formData,
        timestamp: new Date().toISOString()
      };

      await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataWithTimestamp })
      });

      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="registration-container">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h2>Submission Successful!</h2>
        <h1>Your registration has been received.</h1>
        {formData.referralCode && (
          <p>Referral Code Used: <strong>{formData.referralCode}</strong></p>
        )}
      </div>
    );
  }

  return (
    <div>
      <br /><br /><br />
      <div className="onspot-banner" style ={{color: '#e0930dff'}}>
        Sorry online registrations have been closed  :) <br/><br/>
        On-spot registration will be available on Saturday morning(25th oct) for Rs. 220.
        <br />

        
        <br />
       <h5>Venue : Goverment College of Technology, Coimbatore</h5>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2574018000255!2d76.93600867556461!3d11.019304189144632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858ddcb9b7909%3A0x16e6f56a7edcddcc!2sGCT%20Entrance%2C%20Anaikatti%20Rd%2C%20Tamil%20Nadu%20Agricultural%20University%2C%20P%20N%20Pudur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641013!5e0!3m2!1sen!2sin!4v1761321591542!5m2!1sen!2sin"
  width="300"
  height="200"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="GCT Map"
/>


      </div>

      {/* <div className="registration-container">
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Name & Email }
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Id *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          {/* Phone & Whatsapp }
          <div className="form-row">
            <div className="form-group">
              <label>Phone No *</label>
              <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Whatsapp No *</label>
              <input type="number" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
            </div>
          </div>

          {/* College & Place }
          <div className="form-row">
            <div className="form-group">
              <label>College Name *</label>
              <input type="text" name="college" value={formData.college} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>College City *</label>
              <input type="text" name="place" value={formData.place} onChange={handleChange} required />
            </div>
          </div>

          {/* Events }
          <label className="events-title">Events Participating *<br /><p>(click the box to select events)</p></label>
          <div className="events-section">
            {eventOptions.map((event) => (
              <label key={event}>
                <input
                  type="checkbox"
                  value={event}
                  checked={formData.events.includes(event)}
                  onChange={handleCheckboxChange}
                />
                <span>{event}</span>
              </label>
            ))}
          </div>

          {/* Drama Participation }
          <div className="note">
            Are you participating in Drama?*<br />
            <span>
              <strong>**NOTE :</strong> Select YES only if you are the Drama team lead, team members can answer NO.
            </span>
          </div>
          <select name="drama" value={formData.drama} onChange={handleChange} required>
            <option value="" disabled>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {formData.drama === "Yes" && (
            <div style={{ marginTop: "12px" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf32CjcGmYg4kSdJI55N4pTm4-SOe_gd9nu2FA3iSdQhGRUHg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="google-form-button"
              >
                Fill Drama Details
              </a>
            </div>
          )}

          {/* Referral Code (Optional) }
          <div className="form-group">
            <label>Referral Code if any (Optional but ensure correctness!)</label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              placeholder="Enter referral code if any"
            />
          </div>

          {/* QR + Transaction ID }
          <div className="qr-section">
            <h4>Scan Here to Pay<br />For any queries regarding payment contact - +91 9123576842</h4>
            <div className="qr-box"><img src={qrCode} alt="QR Code" /></div>
          </div>
          <div className="transaction-label">
            UPI Transaction Id* ( Eg: 1234XXXXXX5678, not abcd@okxyzbank )
          </div>
          <input
            type="text"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />

          {/* Submit }
          <button
                type="submit"
                 className={`submit-btn ${loading ? "submitting" : ""}`}
                   disabled={loading}
>
                   {loading ? "Submitting..." : "Submit"}
           </button>

        </form> 
      </div>*/ }
    </div>
  );
}

export default Registration;
