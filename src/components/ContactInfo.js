// src/components/ContactInfo.js

import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info">
      <h2>Contact Info</h2>
      <p>Let's connect</p>
      <p>
        Passionate in crafting user-centric front-end designs that turn concepts
        into outstanding digital experiences.
      </p>
      <div className="contact-methods">
        <p>Email: charulathabalamurugan18@gmail.com</p>
        <p>LinkedIn: Charulatha Balamurugan</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Mail ID" />
        <textarea placeholder="Message..."></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactInfo;
