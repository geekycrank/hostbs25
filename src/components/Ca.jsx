import React, { useState } from "react";
import "./Ca.css";
//import qrCode from '../assets/qr-code.jpg';

function Ca() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    collegeName: "",
    collegeCity: "",
    upi: "",
    events: [],
    drama: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  const SHEETDB_URL1 = "https://sheetdb.io/api/v1/3q7bgu88q13uc";

  const eventOptions = [
    "Debate",
    "Arcane Challenge",
    "Drama",
    "Adzap",
    "Puzzle",
    "Quiz",
    "Jam",
    "Uno minuto",
    "Shipwreck",
    "Poem and Microtale",
  ];

  // To Generate unique referral code
  const generateReferralCode = async () => {
    let code;
    let exists = true;
    while (exists) {
      code = "CA" + Math.floor(100000 + Math.random() * 900000);
      const res = await fetch(`${SHEETDB_URL1}/search?referralCode=${code}`);
      const data = await res.json();
      exists = data.length > 0;
    }
    return code;
  };

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  // Event checkbox toggle
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedEvents = [...formData.events];
    if (checked) {
      updatedEvents.push(value);
    } else {
      updatedEvents = updatedEvents.filter((event) => event !== value);
    }
    setFormData({ ...formData, events: updatedEvents });
  };


  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.name) return "Please enter your name.";
    if (!formData.email || !emailPattern.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.phone || formData.phone.toString().length !== 10) return "Please enter a valid 10-digit phone number.";
    if (!formData.whatsapp || formData.whatsapp.toString().length !== 10) return "Please enter a valid 10-digit WhatsApp number.";
    if (!formData.collegeName) return "Please enter your college name.";
    if (!formData.collegeCity) return "Please enter your college city.";
    if (!formData.events.length) return "Please select at least one event.";
    if (!formData.drama) return "Please select your participation in drama.";
    if (!formData.upi) return "Please enter your UPI ID.";
    return null;
  };

  

  // Submit
  const handleSubmit = async (e) => {

     setLoading(true);
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      setLoading(false);
      return;
    }
    const code = await generateReferralCode();
    setReferralCode(code);

   
    // Prepare payload  

    const payload = {
      data: [
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          collegeName: formData.collegeName,
          collegeCity: formData.collegeCity,
          upi: formData.upi,
          events: formData.events.join(", "),
          drama: formData.drama,
          referralCode: code,
        },
      ],
    };

    try {
      const response = await fetch(SHEETDB_URL1, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error submitting form. Try again!");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Error submitting form. Try again!");
    }
  };

  return (
    <div className="ca-container">
      <br />
      <br />
      <br />
      <div className="notice">
        On-spot registration will be available on Saturday morning(25th oct) for Rs. 220.<br/><br/>

        Sorry online registrations have been closed  :)
        <br />
        <br />
        <h5>Venue</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2574018000255!2d76.93600867556461!3d11.019304189144632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858ddcb9b7909%3A0x16e6f56a7edcddcc!2sGCT%20Entrance%2C%20Anaikatti%20Rd%2C%20Tamil%20Nadu%20Agricultural%20University%2C%20P%20N%20Pudur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641013!5e0!3m2!1sen!2sin!4v1761321591542!5m2!1sen!2sin"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
{/* 
      {!submitted ? (
        <div className="ca-form-container">
          <h2 className="form-title">
            Referral Code Generation and <br /> Registration
          </h2>

          <form className="ca-form" onSubmit={handleSubmit}>
            {/* Name & Email }
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Id *"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone & WhatsApp *}
            <div className="form-row">
              <input
                type="text"
                name="phone"
                placeholder="Phone No *"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="whatsapp"
                placeholder="Whatsapp No *"
                onChange={handleChange}
                required
              />
            </div>

            {/* College & City *}
            <div className="form-row">
              <input
                type="text"
                name="collegeName"
                placeholder="College Name *"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="collegeCity"
                placeholder="College City *"
                onChange={handleChange}
                required
              />
            </div>

            {/* Events Section *}
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

            {/* Drama Section *}
            <div className="drama-note">
              Are you participating in Drama?*
              <span>
                <strong>NOTE:</strong> Select YES only if you are the Drama team
                lead, team members can answer NO.
              </span>
            </div>
            <select
              name="drama"
              value={formData.drama}
              onChange={handleChange}
              className="drama-select"
              required
            >
              <option value="" disabled>
                Select
              </option>
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

            {/* Payment *}
            <div className="qr-section">
              <p>Scan Here to Pay <br/> For any queries regarding payment contact -+91 9123576842</p>
              <div className="qr-placeholder"><img src={qrCode} alt="QR Code" /></div>
            </div>

            <input
              type="text"
              name="upi"
              placeholder="UPI Transaction Id* (Eg: 123AXXXXXX5678)"
              className="upi-field"
              onChange={handleChange}
              required
            />

            {/* Submit *}
           <button
                type="submit"
                 className={`submit-btn ${loading ? "submitting" : ""}`}
                   disabled={loading}
>
                   {loading ? "Submitting..." : "Submit"}
           </button>
          </form>
        </div>
      ) : (
        <div className="success-box">
          <h2>🎉 Registration Successful!</h2>
          <p>Your unique referral code is:</p>
          <h3 className="referral-code">{referralCode}</h3>
          <p>
            Share this with friends — when they register using your code, you
            get points!
          </p>
        </div>
      )}*/}
    </div> 
  );
}

export default Ca;
