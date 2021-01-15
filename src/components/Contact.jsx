import React from "react";
import Whats from "../Icons/Wats";
import s from "../styles/style.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Contact({ setContact, contact }) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toastifySuccess = () => {
    toast.dark("🦄 Mail Sent, I´ll get in touch soon!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      zIndex: 30000,
    });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = input;

    let templateParams = {
      name: name,
      email: email,
      message: message,
    };
    emailjs.send(
      "service_ojpo3dj",
      "template_kqw7u57",
      templateParams,
      "user_hkWdiDjOxrrOOtn2DX6Nc"
    );
    toastifySuccess();
    resetForm();
  };

  const resetForm = () => {
    setInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={s.blur}>
      <div className={s.datacont}>
        <div className={s.org}>
          <p className={s.description}> Contact Me</p>
          <a
            target="blank"
            className={s.link}
            href="https://wa.me/5491131767864"
          >
            <Whats color="grey" size="42" />
          </a>
        </div>

        <form>
          <div className={s.formCont}>
            <label className={s.description}> Name </label>
            <input
              type="text"
              name="name"
              className={s.name}
              value={input.name}
              onChange={handleChange}
            ></input>
            {!errors.name ? null : <p className={s.errores}>{errors.name}</p>}
          </div>
          <div className={s.formCont}>
            <label className={s.description}> Email </label>
            <input
              type="mail"
              className={s.name}
              name="email"
              value={input.email}
              onChange={handleChange}
            ></input>
            {!errors.email ? null : <p className={s.errores}>{errors.email}</p>}
          </div>
          <div className={s.formCont}>
            <label className={s.description}> Message </label>
            <input
              type="textarea"
              className={s.message}
              name="message"
              value={input.message}
              onChange={handleChange}
            ></input>
            {!errors.message ? null : (
              <p className={s.errores}>{errors.message}</p>
            )}
          </div>
          {Object.keys(errors).length ? (
            <button disabled className={s.disabled}>
              {" "}
              Send
            </button>
          ) : (
            <button className={s.button} onClick={handleSubmit}>
              Send
            </button>
          )}

          <button className={s.button} onClick={() => setContact(!contact)}>
            Back
          </button>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export function validate(input) {
  let errors = {};

  if (
    (input.name && !/^[a-z ,.'-]+$/i.test(input.name)) ||
    input.name.length < 1
  ) {
    errors.name = "Name is invalid";
  }

  if (
    (input.email &&
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        input.email
      )) ||
    input.email.length < 1
  ) {
    errors.email = "Mail is invalid";
  }

  if (input.message.length < 1) {
    errors.message = "You should write a message";
  }

  return errors;
}
