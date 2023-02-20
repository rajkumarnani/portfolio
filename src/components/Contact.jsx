import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { ThemeContext } from "./context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("prince55", "template_1398itj", formRef.current, "TTwX7AXcDck8i_Ute")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" /> 9381987870
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />{" "}
              rajkumarnani2000@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" /> Eluru, Andhra
              Pradesh, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always free to communicate
            while discussing your project. Because Im also a learner, I want to
            participate with you.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Name" name="user_name"></input>
            <input style={{backgroundColor: darkMode && '#333'}}
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Email" name="user_email"></input>
            <textarea style={{backgroundColor: darkMode && '#333'}} rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && 'Thank You for approaching......'}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
