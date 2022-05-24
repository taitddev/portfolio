import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact." text="Lets have a chat" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
