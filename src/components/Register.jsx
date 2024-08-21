import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";
import QrImage from '../assets/QrImage.jpg';
import DramaForm from './DramaForm';

function Register() {
 
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
  };
  const [formData, setFormData] = useState(initialFormData);

  const [submitted,setSubmimtted]=useState(false);
  const [showDramaForm, setShowDramaForm] = useState(false);



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

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.name) {
      alert("Please enter your name.");
      return false;
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!formData.phone || formData.phone.toString().length!==10) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (!formData.whatsapp || formData.whatsapp.toString().length!==10) {
      alert("Please enter a valid 10-digit WhatsApp number.");
      return false;
    }
    if (!formData.college) {
      alert("Please enter your college name.");
      return false;
    }
    if (!formData.place) {
      alert("Please enter your college city.");
      return false;
    }
    if (!formData.events.length) {
      alert("Please select at least one event.");
      return false;
    }
    if (!formData.drama) {
      alert("Please select your participation in drama.");
      return false;
    }
    if (!formData.transactionId) {
      alert("Please enter your transaction ID.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!validateForm()) {
      return;
    }


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

    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd05jedsuyjlyRIFIWVJ6BzYR2qNbBvX_IXAldorPG8BN6BpQ/formResponse';
    const formPayload = new URLSearchParams();


    // https://docs.google.com/forms/d/e/1FAIpQLSd05jedsuyjlyRIFIWVJ6BzYR2qNbBvX_IXAldorPG8BN6BpQ/viewform?usp=pp_url&entry.1632981816=name&entry.661894537=email&entry.1331442710=phone&entry.547199976=whatsapp&entry.1278896726=college&entry.303090975=place&entry.1334032117=events&entry.278090641=drama&entry.1561806219=transactionId

    formPayload.append('entry.1632981816', formData.name);
    formPayload.append('entry.661894537', formData.email);
    formPayload.append('entry.1331442710', formData.phone);
    formPayload.append('entry.547199976', formData.whatsapp);
    formPayload.append('entry.1278896726', formData.college);
    formPayload.append('entry.303090975', formData.place);
    formPayload.append('entry.1334032117', formData.events.join(', '));
    formPayload.append('entry.278090641', formData.drama);
    formPayload.append('entry.1561806219', formData.transactionId);


    let response;
    try {
      response = await axios.post(googleFormUrl, formPayload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      //console.log(response.status);  
     
    } catch (error) {
      console.log("hell")
      // console.error('Form submission error:', error);
    }
  

    alert("A confirmation email with your BS ID will be sent to your registered email address.");
    


  setSubmimtted(true);
  if (formData.drama==="Yes") {
    setShowDramaForm(true);
  } 
  else{
    setFormData(initialFormData);
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
            <div className="field">College City*</div>
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


          <div id="bottom" className="Name" >
             
            <div className="field">Are you participating in Drama?*</div>
            <div class="field">
              
                **NOTE : Select YES only if you are the Drama team lead, team members can answer NO.
              
            </div>
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
         
          <div id="MobQr">
            <img src={QrImage} alt="QR Code for Payment" />
          </div>
          <h2 className="QrContent">Scan here to pay</h2>
          <div id="bottom" className="Name">
            <div className="field">UPI Transaction Id*</div>
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
              <div>
              <h5 style={{fontWeight:"900;"}}>
                **NOTE : Select YES only if you are the Drama team lead, team members can answer NO.
              </h5>
            </div>
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
             
              <div className='deskqr'>
                <img src={QrImage} alt="QR Code for Payment" />
              </div>
              <h4>Scan here to pay</h4>
            </div>
            <h2 className="QrContent">Scan here to pay</h2>
            <div className="Name">
              <div className="field">UPI Transaction Id*</div>
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
      (showDramaForm && <DramaForm transactionId={formData.transactionId}/>)
      }
    </div>);

    
  }



export default Register;
