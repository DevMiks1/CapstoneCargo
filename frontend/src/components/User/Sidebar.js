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
import profile from "../../assets/User.png";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Sidebar = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const user = localStorage.getItem("user");
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

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div id="sidebar" className="bg-primary h-full px-5">
      <div className="flex flex-col items-center relative pt-10">
        <div className="h-[100px] w-[100px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative">
          <img
            src={profile}
            alt=""
            className="h-[100px] w-[100px] rounded-full"
          />
        </div>
        <p className="font-semibold text-lg">{userDetails.firstname}</p>
      </div>

      <div className="flex items-center gap-4 pt-5">
        <FaUser className="text-black" />
        <NavLink
          exact="true"
          to="/profile"
          className="text-base leading-6  text-black> hover:text-white"
        >
          Profile
        </NavLink>
      </div>

      <div className="">
        <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaClipboard className="text-black" />
            <NavLink
              to="/user/reservation"
              className="text-base leading-6 font-normal text-black hover:text-white"
            >
              <p>Reservation</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <FaKey className="text-black" />
          <NavLink
            to="/changepassword"
            className="text-base leading-6 font-normal text-black hover:text-white"
          >
            Change Password
          </NavLink>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-center justify-between gap-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaQuestionCircle className="text-black" />
            <NavLink
              to="/support"
              className="text-base leading-6 font-normal text-black hover:text-white"
            >
              Help & Support
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaTrashAlt className="text-black" />
            <NavLink
              to="/deleteaccount"
              className="text-base leading-6 font-normal text-black hover:text-red-300"
            >
              {" "}
              Delete Account
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4 pb-10">
          <FaSignOutAlt className="text-black" />
          <NavLink
            to="/"
            className="text-base leading-6 font-normal text-black hover:text-white"
            onClick={logOut}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
