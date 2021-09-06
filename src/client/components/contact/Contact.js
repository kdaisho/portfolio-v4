import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { showToast } from "../toast";
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [isFormActive, setIsFormActive] = useState(true);
  const [mailResult, setMailResult] = useState("");
  const contactForm = useRef();
  const reCaptchaRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    throwEmail();
    const token = await reCaptchaRef.current.executeAsync();
    reCaptchaRef.current.reset();

    const params = {
      name,
      email,
      message,
      address,
      token,
    };
    const result = await fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const { text, kind } = await result.json();

    setMailResult("Done!");
    showToast({ message: text, kind });
  };

  const handleChange = (event, setter) => {
    const { target } = event;
    setter(target.value);
  };

  const throwEmail = () => {
    contactForm.current.classList.add("fly");
    setTimeout(() => setIsFormActive(false), 200);
  };

  return (
    <section id="toContact" className={`section is-contact ${theme}`}>
      <div className="content-wrap is-side-by-side">
        <div className="left-side title-group">
          <h2 className="title">Contact</h2>
          <p className="subtitle font-large">
            Hopefully you found some of things that I've done over the years interesting and useful.
            <br />
            I'll be in touch with you when I hear from you.
          </p>
        </div>
        <div className="right-side">
          <p className="thank-you-note">
            {mailResult.length ? (
              <span>{mailResult}</span>
            ) : (
              !isFormActive && <span>Sending...</span>
            )}
          </p>
          <form className="contact-form" onSubmit={handleSubmit} ref={contactForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="text-input"
                type="text"
                name="name"
                value={name}
                onChange={() => handleChange(event, setName)}
                tabIndex={isFormActive ? "0" : "-1"}
                required
              />
            </div>
            <div className="form-group is-address">
              <label htmlFor="address">Address</label>
              <input
                className="text-input"
                type="text"
                name="address"
                value={address}
                onChange={() => handleChange(event, setAddress)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="text-input"
                type="email"
                name="email"
                value={email}
                onChange={() => handleChange(event, setEmail)}
                tabIndex={isFormActive ? "0" : "-1"}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="6"
                value={message}
                onChange={() => handleChange(event, setMessage)}
                tabIndex={isFormActive ? "0" : "-1"}
                required
              />
            </div>
            <ReCAPTCHA
              sitekey="6Lc7kkkcAAAAAEin0TkCgCe0UlZzUPcLsvRDanPr"
              size="invisible"
              ref={reCaptchaRef}
            />
            <button
              className="button is-flat is-submit outline-button"
              tabIndex={isFormActive ? "0" : "-1"}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ theme }) => ({
  theme,
});

export default connect(mapStateToProps)(Contact);
