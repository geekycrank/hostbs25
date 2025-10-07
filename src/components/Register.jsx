import React, { useState, useEffect } from 'react';
import './Register.css';
import {  Link } from "react-router-dom";
import qrCode from '../assets/qr-code.jpg';

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
  "Debate", "Dosthana", "Drama", "Adzap", "Puzzle",
  "Quiz", "Jam", "Uno minuto", "Shipwreck", "Poem and Microtale"
];

const SHEETDB_URL = "https://sheetdb.io/api/v1/xdeb6icxog3e9";
const SHEETDB_URL1 = "https://sheetdb.io/api/v1/e604n6fpmqx8h";

function Registration() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validReferralCodes, setValidReferralCodes] = useState([]); // ✅ dynamic referral codes

  // ✅ Fetch referral codes on mount
  useEffect(() => {
    const fetchReferralCodes = async () => {
      try {
        const res = await fetch(`${SHEETDB_URL1}`);

        const data = await res.json();
        const codes = data.map(item => item.referralCode?.trim());
        setValidReferralCodes(codes);
      } catch (err) {
        console.error("Error fetching referral codes", err);
      }
    };
    fetchReferralCodes();
  }, []);

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

    // ✅ Dynamic referral validation
    if (formData.referralCode && !validReferralCodes.includes(formData.referralCode.trim())) {
      return "Invalid referral code. Please check again.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }
    setLoading(true);
    try {
      let dataWithTimestamp = {
        ...formData,
        timestamp: new Date().toISOString()
      };

      // ✅ Track referral usage if entered
      if (formData.referralCode) {
        try {
          // SheetDB format: /search/COLUMN_NAME?VALUE
const res = await fetch(`${SHEETDB_URL1}/search?referralCode=${formData.referralCode.trim()}`);
          const data = await res.json();
          const usageCount = data.length;
          dataWithTimestamp.referralUsageCount = usageCount + 1;
        } catch (err) {
          console.error("Error tracking referral code", err);
        }
      }

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
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
      <br/><br/><br/>
      <div className="onspot-banner">
        On-spot registration will be available on Saturday morning for Rs. 250.
        <br/><br/>
        <h5>(if you plan on referring others use below referral code page to register to get your referral code)</h5>
        <Link to="/Ca">
  <button className="referral-button">Go to Referral Code Section</button>
</Link>

          
      </div>
      <div className="registration-container">
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Name & Email */}
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

          {/* Phone & Whatsapp */}
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

          {/* College & Place */}
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

          {/* Events */}
         <label className="events-title">Events Participating *<br/><p>(click on the on the box to select events)</p></label>
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

          {/* Drama Participation */}
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

          {/* Referral Code (Optional) */}
          <div className="form-group">
            <label>Referral Code (Optional)</label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              placeholder="Enter referral code if any"
            />
          </div>

          {/* QR + Transaction ID */}
          <div className="qr-section">
            <h4>Scan Here to Pay<br/> For any queries regarding payment contact -+91 9123576842</h4>
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

          {/* Submit */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
