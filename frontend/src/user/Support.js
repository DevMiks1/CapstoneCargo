import Sidebar from "../components/User/Sidebar";
import { useState } from "react";

import Upload from "../assets/User.png";
import profile from "../assets/User.png";
import { useNavigate } from "react-router-dom";

import { Link, NavLink } from "react-router-dom";
import React from "react";
import {
  FaClipboard,
  FaQuestionCircle,
  FaSignOutAlt,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaTrashAlt,
  FaBolt,
  FaUser,
  FaKey,
} from "react-icons/fa";

export const Support = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (!user) {
      navigate("/signin");
      // alert("Please log in first to continue");
    }
  };
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <div className="bg-shade py-28">
        <div className="container1">
          <div className="flex bg-white">
            <div className="basis-[20%] ">
              <Sidebar />
            </div>
            <div className="basis-[80%]">
              <div className=" mt-10 flex flex-col px-10 ">
                <h2 className="text-2xl text-primary pb-5">Help & Support</h2>
                <p className="pb-5 font-bold">
                  Need help about your reservation, or any inquiries about our
                  cars? We got you!
                </p>
                <p className="pb-5">
                  Our <span className="text-primary">FAQ</span> page has all the
                  possible questions our customers might have, and we answered
                  them as accurately as possible.
                </p>
                <p>
                  But if your question is not there, or you have complaints or
                  disputes to raise, we encourage you to contact us through this
                  form below. Or call our{" "}
                  <span className="font-bold">24/7 Customer Support</span> line
                  at
                  <span className="font-bold">
                    (+63) 988 123 4567 or (02) 846 9564
                  </span>
                </p>
                <div>
                  <div className="flex flex-col pt-5">
                    <label htmlFor="firstname" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      className="w-full xl:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full lg:w-56 xl:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="email@test.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-5">
                    <label htmlFor="">Message:</label>
                    <textarea
                      className="w-[500px] h-[200px]"
                      value={message}
                      onChange={handleMessageChange}
                      placeholder="Type your message..."
                    />
                  </div>
                  <div className="text-center py-10">
                    <button
                      type="submit"
                      className="bg-button text-white px-10 py-2 rounded-md "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
