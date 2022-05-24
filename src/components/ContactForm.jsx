import React from "react";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact">
      <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" />

        <label htmlFor="">Email</label>
        <input type="email" />

        <label htmlFor="">Subject</label>
        <input type="text" />

        <label htmlFor="">Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          className="message"
        />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
