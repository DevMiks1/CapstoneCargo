import Sidebar from "../components/User/Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Upload from "../assets/User.png";
import profile from "../assets/User.png";

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

export const ChangePassword = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (!user) {
      navigate("/signin");
      // alert("Please log in first to continue");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/user/retrieve/" + user;
      const method = "GET";
      const header = {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
      };
      try {
        const response = await fetch(url, {
          method,
          headers: header,
        });
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const [formErrors, setFormErrors] = useState({});
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUpdate = async () => {
    console.log(formErrors);
    try {
      let url = "http://localhost:8000/user/update/" + user;
      let method = "PUT";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
        },
        body: JSON.stringify({
          set: {
            password: newPassword,
          },
        }),
      });
      if (res.ok) {
        alert("Account Password Updated Successfully");
        navigate("/profile");
      } else {
        console.log("Error updating data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters long";
    } else if (userDetails.password !== password) {
      errors.password = "Invalid Password";
    }
    if (!newPassword.trim()) {
      errors.newPassword = "New Password is required";
    } else if (newPassword.trim().length < 6) {
      errors.newPassword = "New Password must be at least 6 characters long";
    } else if (userDetails.password === password && newPassword === password) {
      errors.newPassword =
        "New Password must be different from your last password";
    }

    if (newPassword !== confirmPassword) {
      errors.confirmPassword = "Password isn't matched";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleUpdate();
    }
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
                <h2 className="text-2xl text-primary pb-5">Change Password</h2>

                <form action="">
                  <div>
                    <div className="flex flex-col sm:mt-6">
                      <label htmlFor="password" className="form-label">
                        Verify Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        id="password"
                        className="w-full lg:w-56 xl:w-80 px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      />
                      {formErrors.password && (
                        <p className="text-red-500">{formErrors.password}</p>
                      )}
                      {passwordError && (
                        <div className="text-red-500">{passwordError}</div>
                      )}
                      {passwordError && (
                        <div className="text-red-500">
                          {passwordError ===
                            "Password must be at least 6 characters long" &&
                            "Password must be 6 characters"}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col sm:mt-3">
                      <label htmlFor="password" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        id="newpassword"
                        className="w-full lg:w-56 xl:w-80 px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      />
                      {formErrors.newPassword && (
                        <p className="text-red-500">{formErrors.newPassword}</p>
                      )}
                      {passwordError && (
                        <div className="text-red-500">{passwordError}</div>
                      )}
                      {passwordError && (
                        <div className="text-red-500">
                          {passwordError ===
                            "Password must be at least 6 characters long" &&
                            "Password must be 6 characters"}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col sm:mt-3">
                      <label htmlFor="password" className="form-label">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        id="confirmpassword"
                        className="w-full lg:w-56 xl:w-80 px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      />
                      {formErrors.confirmPassword && (
                        <p className="text-red-500">
                          {formErrors.confirmPassword}
                        </p>
                      )}
                      {passwordError && (
                        <div className="text-red-500">{passwordError}</div>
                      )}
                      {passwordError && (
                        <div className="text-red-500">
                          {passwordError ===
                            "Password must be at least 6 characters long" &&
                            "Password must be 6 characters"}
                        </div>
                      )}
                    </div>
                    <div className="text-center py-10">
                      <button
                        type="submit"
                        className="bg-button text-white px-10 py-2 rounded-md "
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
