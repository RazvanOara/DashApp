import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us at 
        <a href="mailto:contact@example.com"> contact@example.com</a>.
      </p>
      <p>You can also reach us on Discord at: 
        <a href="discord://discordapp.com/users/dexterdev8" className="discord-link"> dexterdev8</a>.
      </p>
    </div>
  );
}

export default Contact;
