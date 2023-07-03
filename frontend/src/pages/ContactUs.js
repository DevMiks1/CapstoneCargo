import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!message.trim()) {
      errors.message = "Please enter your message";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!email.trim()) {
      errors.email = "Please enter your email";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form submitted!");
      navigate("/finaldetails");
    }
  };

  return (
    <div className="py-20 flex justify-center ">
      <div className="border-gray-400 border-2 p-2 rounded-lg max-w-xl mx-10 px-5">
        <h1 className="text-center text-3xl font-bold text-primary">
          Contact Us
        </h1>
        <br />
        <p className="text-center font-semibold">
          We have 24/7 Customer Service Support.
        </p>
        <br />
        <p className="text-center font-semibold">
          Please be patient, it will take less than 10 minutes before we get in
          touch with you.
        </p>
        <br />
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            className="border rounded-lg p-2 w-full"
          />
          {formErrors.firstName && (
            <p className="text-red-500">{formErrors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className="border rounded-lg p-2 w-full"
          />
          {formErrors.lastName && (
            <p className="text-red-500">{formErrors.lastName}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="border rounded-lg p-2 w-full"
          />
          {formErrors.email && (
            <p className="text-red-500">{formErrors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Message:</label>

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value=""
            onChange={handleMessage}
            className="border rounded-lg p-2 w-full "
          ></textarea>
          {formErrors.message && (
            <p className="text-red-500">{formErrors.message}</p>
          )}
        </div>
        <button
          className="py-1 px-10 bg-button text-white rounded-lg mt-5"
          onClick={handleSubmit}
        >
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};
