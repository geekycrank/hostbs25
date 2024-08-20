import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";
import QrImage from '../assets/QrImage.jpg';
import DramaForm from './DramaForm';

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

  const [submitted,setSubmimtted]=useState(false);
  const [showDramaForm, setShowDramaForm] = useState(false);
  const [bsId,setBsid]=useState(1000);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
      // Check if the user selected "Yes" for drama participation
      // if (name === "drama" && value === "Yes") {
      //   setShowDramaForm(true);
      // } else if (name === "drama" && value === "No") {
      //   setShowDramaForm(false);
      // }
    console.log(value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(bsId);
    setBsid(bsId+1);
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.whatsapp ||
      !formData.college ||
      !formData.place ||
      !formData.events.length ||
      !formData.drama ||
      !formData.transactionId
    ) {
      alert('Please fill out all fields.');
      return;
    }
    
    // Log form data to console
    // console.log(formData.events);

    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf7o5E-Ik8uufICKUNzkH-MNZmX9zRiryqYfHS1ZbJDuoePbw/formResponse';
    const formPayload = new URLSearchParams();


    // https://docs.google.com/forms/d/e/1FAIpQLSf7o5E-Ik8uufICKUNzkH-MNZmX9zRiryqYfHS1ZbJDuoePbw/viewform?usp=pp_url&entry.793456051=Enter+the+name&entry.1377901283=Enter+the+email+address+&entry.1188561003=Enter+the+phone+&entry.278608533=Enter+the+whatsapp&entry.187174979=Enter+your+College+name&entry.1704798946=Enter+your+place&entry.691769816=List+the+events&entry.1370459820=Enter+yes+or+no+&entry.882209671=Enter+your+transaction+ID+

    formPayload.append('entry.793456051', formData.name);
    formPayload.append('entry.1377901283', formData.email);
    formPayload.append('entry.1188561003', formData.phone);
    formPayload.append('entry.278608533', formData.whatsapp);
    formPayload.append('entry.187174979', formData.college);
    formPayload.append('entry.1704798946', formData.place);
    formPayload.append('entry.691769816', formData.events.join(', '));
    formPayload.append('entry.1370459820', formData.drama);
    formPayload.append('entry.882209671', formData.transactionId);

    try {
      const response = await axios.post(googleFormUrl, formPayload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    } catch (error) {
      // console.error('Form submission error:', error);
    }
    alert('Form submitted successfully!');

    

  setSubmimtted(true);
  if (formData.drama==="Yes") {
    setShowDramaForm(true);
  } 
  else{
    setSubmimtted(false);
  }
  };
 
  
   return (<div className="Register">
    {!submitted ? (
      <form className="form" >
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
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Name">
            <div className="field">WhatsApp No*</div>
            <input
              type="number"
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
            <div className="field">Residence Location*</div>
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
              <option value="ADZAP">ADZAP</option>
              <option value="DEBATE">DEBATE</option>
              <option value="DRAMA">DRAMA</option>
              <option value="DUMB-C">DUMB-C</option>
              <option value="JAM">JAM</option>
              <option value="MICROTALE">MICROTALE</option>
              <option value="POEM">POEM</option>
              <option value="PUZZLE">PUZZLECROSSWORD</option>
              <option value="QUIZ">QUIZ</option>
              <option value="SHIPWRECK">SHIPWRECK</option>
              <option value="UNO MINUTO">UNO MINUTO</option>
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
          <h3 className="QrContent" style={{marginBottom:"6%"}}>UPI ID:madhusankar309@okhdfcbank</h3>
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
          <div id="top">
            <div className="participation-list">Events Participating*</div>
            <div className="checkboxContainer">
              <div className='upper_events'>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="ADZAP"
                    checked={formData.events.includes('ADZAP')}
                    onChange={handleCheckboxChange}
                  />
                  ADZAP
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="DEBATE"
                    checked={formData.events.includes('DEBATE')}
                    onChange={handleCheckboxChange}
                  />
                  DEBATE
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="DRAMA"
                    checked={formData.events.includes('DRAMA')}
                    onChange={handleCheckboxChange}
                  />
                  DRAMA
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="DUMB-C"
                    checked={formData.events.includes('DUMB-C')}
                    onChange={handleCheckboxChange}
                  />
                  DUMB-C
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="JAM"
                    checked={formData.events.includes('JAM')}
                    onChange={handleCheckboxChange}
                  />
                  JAM
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="MICROTALE"
                    checked={formData.events.includes('MICROTALE')}
                    onChange={handleCheckboxChange}
                  />
                  MICROTALE
                </label>
              </div>
              <div className='lower_events'>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="POEM"
                    checked={formData.events.includes('POEM')}
                    onChange={handleCheckboxChange}
                  />
                  POEM
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="PUZZLECROSSWORD"
                    checked={formData.events.includes('PUZZLECROSSWORD')}
                    onChange={handleCheckboxChange}
                  />
                  PUZZLE
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="QUIZ"
                    checked={formData.events.includes('QUIZ')}
                    onChange={handleCheckboxChange}
                  />
                  QUIZ
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="SHIPWRECK"
                    checked={formData.events.includes('SHIPWRECK')}
                    onChange={handleCheckboxChange}
                  />
                  SHIPWRECK
                </label>
                <label className='labell'>
                  <input
                    className='input'
                    type="checkbox"
                    value="UNO MINUTO"
                    checked={formData.events.includes('UNO MINUTO')}
                    onChange={handleCheckboxChange}
                  />
                  UNO MINUTO
                </label>
              </div>
            </div>
            <div className="Name drama">
              <div className="field">Are you participating in Drama?*</div>
              <select
                className="select"
                name="drama"
                value={formData.drama}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", fontFamily: "kurale", color: "black", margin: "2%" }}>
              <h4>UPI ID: madhusankar309@okhdfcbank</h4>
              <div className='deskqr'>
                <img src={QrImage} alt="QR Code for Payment" />
              </div>
              <h4>Scan here to pay</h4>
            </div>
            <h2 className="QrContent">Scan here to pay</h2>
            <div className="Name">
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

        <botton type="submit"className="submitButton" onClick={handleSubmit}>
          Submit
        </botton>
      </form>):
      (showDramaForm && <DramaForm />)
      }
    </div>);

    
  }



export default Register;
