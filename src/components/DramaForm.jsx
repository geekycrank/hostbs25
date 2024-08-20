import {React,useState} from "react";
import axios from 'axios';

function DramaForm()
{
    const [formData, setFormData] = useState({
        name: '',
        Lead_name: '',
        Lead_bs_id: '',
        Lead_contact: '',
        alternate_contact: '',
       members_bs_id:""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(value);
      };


      const handleSubmit = async (e) => {
        e.preventDefault();

        if (
          !formData.name ||
          !formData.Lead_name ||
          !formData.Lead_bs_id ||
          !formData.Lead_contact ||
          !formData.alternate_contact ||
          !formData.members_bs_id 
        ) {
          alert('Please fill out all fields.');
          return;
        }
    
        // Log form data to console
        console.log(formData.events);
    
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfUEArOoz2_V_cOEQpLU3fTHeTvRpjV9z3ijJ7ulz4YjW_gzg/formResponse';
        const formPayload = new URLSearchParams();
    
        //https://docs.google.com/forms/d/e/1FAIpQLSfUEArOoz2_V_cOEQpLU3fTHeTvRpjV9z3ijJ7ulz4YjW_gzg/viewform?usp=pp_url&entry.1798773493=Enter+your+name&entry.2125675122=Enter+the+team+Lead+name&entry.1238267968=Enter+the+team+Lead+Id&entry.335388284=Enter+your+Lead_Contact&entry.431618063=Enter+the+Alternate+Contact&entry.1076179389=Enter+the+Member+BS+ID
    
        formPayload.append('entry.1798773493', formData.name);
        formPayload.append('entry.2125675122', formData.Lead_name);
        formPayload.append('entry.1238267968', formData.Lead_bs_id);
        formPayload.append('entry.335388284', formData.Lead_contact);
        formPayload.append('entry.431618063', formData.alternate_contact);
        formPayload.append('entry.1076179389', formData.members_bs_id);
    
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

    return  <form className="form" >
      <div className="heading1">DRAMA REGISTRATION</div>

      <div className="topFrame">
        <div className="Name">
          <div className="field">Name*</div>
          <input
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="Name">
          <div className="field">Lead_name*</div>
          <input
            type="text"
            name="Lead_name"
            onChange={handleChange}
          />
          </div>


          <div className="Name">
          <div className="field">Lead BS Id*</div>
          <input
            type="text"
            name="Lead_bs_id"
            onChange={handleChange}
          />
          </div>


          <div className="Name">
          <div className="field">Lead_contact*</div>
          <input
            type="number"
            name="Lead_contact"
            value={formData.Lead_contact}
            onChange={handleChange}
            required
          />
          </div>

          <div className="Name">
          <div className="field">alternate_contact*</div>
          <input
            type="number"
            name="alternate_contact"
            onChange={handleChange}
            required
          />
          </div>


          <div className="Name">
          <div className="field">members Bs_id*</div>
          <textarea
            name="members_bs_id"
            row="4"
            column="40"
            onChange={handleChange}
          />
          </div>
          </div>

          <button class="submitButton" type="submit" onClick={handleSubmit}>Submit</button>

          </form>
         
 
}
export default DramaForm;