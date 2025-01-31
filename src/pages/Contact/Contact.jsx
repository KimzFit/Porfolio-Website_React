import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquare,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import { RiTwitterXLine } from "react-icons/ri";


import "./contact.css";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy ! </h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to disgussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">65200224@kmitl.ac.th</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquare className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">0970488464</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/kim.patchara.828137/" className="contact__social-link" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://x.com/KimPatchara24" className="contact__social-link" target="_blank">
            <RiTwitterXLine />

            </a>

            <a href="https://www.youtube.com/@karimstudio6755/videos" className="contact__social-link" target="_blank">
              <FaYoutube />
            </a>

            <a href="https://github.com/kimPrompes224" className="contact__social-link" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact__data" action="https://formspree.io/f/mldeyrpa" method="POST">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                name="Name"
                type="text"
                className="form__control"
                placeholder="Your Name"
              />
            </div>

            <div className="form__input-div">
              <input
                name="Email"
                type="email"
                className="form__control"
                placeholder="Your Email"
              />
            </div>

            <div className="form__input-div">
              <input
              name="subject"
                type="text"
                className="form__control"
                placeholder="Your Subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              className="form__control textarea"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="button" type="submit">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend/>
              </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
