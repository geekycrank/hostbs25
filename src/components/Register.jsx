import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";
import QrImage from '../assets/Qr.webp';

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
              <div className="Name">
                <div className="field">College Name*</div>
                <input type="text"/>
              </div>
              <div className="Name">
                <div className="field">Place of Stay*</div>
                <input type="text"/>
              </div>




              {/* Mobile View */}
              <div id="bottom" className="Name">
                <div className="field">Events Participating*</div>
                <select className="select">
                  <option value="" disabled selected>Drop Down</option>
                  <option value="event1">Event 1</option>
                  <option value="event2">Event 2</option>
                  <option value="event3">Event 3</option>
                  <option value="event4">Event 4</option>
                  <option value="event5">Event 5</option>
                </select>
              </div>
              <div id="bottom" className="Name">
                <div className="field">Are you participating in Drama?*</div>
                <select className="select">
                  <option value="" disabled selected>Drop Down</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div id="MobQr">
                 <img src={QrImage}></img>
              </div>
              <h2>Scan here to pay</h2>
              <div id="bottom" className="Name">
                <div className="field">Transaction Id*</div>
                <input type="text"/>
              </div>


           
              
          {/* Desktop View */}
          <div className="bottomFrame" id="frameBottom">
              <div className="bottomInput">
              <div className="Name">
                <div className="field">Whatsapp No*</div>
                <input type="text"/>
              </div>
              <div className="Name">
                <div className="field">College Name*</div>
                <input type="text"/>
              </div>
              <div className="Name">
                <div className="field">Place of Stay*</div>
                <input type="text"/>
              </div>
              </div>
              <div className="bottomQr">

              </div>
          </div>
          </div>
       </form>
    </div>
  );
}

export default Register;
