import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'  
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2be49677-af57-4903-a1f5-5ec3224f4ce6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
            <ul>
                <li><img src={mail_icon} alt="" />karyasaarthi@gmail.com</li>
                <li><img src={phone_icon} alt="" />+91-7991124091</li>
                <li><img src={location_icon} alt="" />Near - Moolchand Chauhan Public School , Sector - 45 <br />Noida (Uttar Pradesh), India</li>
            </ul>
        </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text"  name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel"  name='phone' placeholder='Enter your mobile number' required/>
            <label>Email Address</label>
            <input type="email"  name='email' placeholder='Enter your email address' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
            <button className='btn dark-btn' type='submit'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        </div>   
    </div>
    
  )
}

export default Contact
