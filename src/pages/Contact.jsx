import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Toast } from "bootstrap";
import ToastMessage from "../components/ToastNotification/ToastNotification";

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const toastRef = useRef(null);

  const showToast = () => {
    const toast = new Toast(toastRef.current);
    toast.show();
  };

  const sendEmail = (e) => {
    setMessageStatus("sending");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_slxhkgl",
        "template_xxundmk",
        e.target,
        "user_YMWIwXTCBxoyKXwb2L7tm"
      )
      .then(
        (result) => {
          setMessageStatus("fulfilled");
          showToast();
          console.log(result.text);
        },
        (error) => {
          setMessageStatus("rejected");
          setErrorMessage(error.text);
          console.log(errorMessage);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container-fluid contact-container mt-5">
      <div className="row m-3">
        <div className="col-md-5 mr-auto">
          <h2>Contact Us</h2>
          <p className="mb-5">
            SynthMaster. is a family-run musical instrument retailer. With over
            50 years of experience serving the music community in the UK and now
            overseas, we have become renowned for our high-quality service and
            stellar reputation in the industry. From our Guildford store and
            online musical instrument shop, we offer musicians a huge selection
            of keyboards, synthesizers, music accessories and more!
          </p>
          <ul className="list-unstyled pl-md-5 mb-5">
            <li className="d-flex text-black mb-2">
              <span className="mr-3">
                <span className="icon-map"></span>
              </span>{" "}
              34 Street Name, City Name Here, <br /> United States
            </li>
            <li className="d-flex text-black mb-2">
              <span className="mr-3">
                <span className="icon-phone"></span>
              </span>{" "}
              +1 (222) 345 6789
            </li>
            <li className="d-flex text-black">
              <span className="mr-3">
                <span className="icon-envelope-o"></span>
              </span>{" "}
              info@mywebsite.com{" "}
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <form onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  id="name"
                  disabled={messageStatus === "sending"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="email" className="col-form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user_email"
                  id="email"
                  required
                  disabled={messageStatus === "sending"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="message" className="col-form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  disabled={messageStatus === "sending"}
                ></textarea>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary rounded-3"
                  disabled={messageStatus === "sending"}
                />
                <span className="submitting"></span>
              </div>
            </div>
          </form>
          <ToastMessage
            toastRef={toastRef}
            message="Message was sent successfully!"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
