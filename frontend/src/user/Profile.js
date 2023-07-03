import Sidebar from "../components/User/Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Upload from "../assets/User.png";

export const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [userBirthday, setBirthday] = useState("");
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
        setBirthday(data.birthday.slice(0, 10));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="bg-shade py-28 ">
        <div className="container1">
          <div className="flex bg-white h-full">
            <div className="basis-[20%]">
              <Sidebar />
            </div>
            <div className="basis-[80%]">
              <NavLink
                to="/editprofile"
                className="block text-primary text-lg px-10 py-5 hover:underline"
              >
                Edit your Profile
              </NavLink>
              <div className="px-10 mt-10 grid grid-cols-2 gap-5">
                <div>
                  <p>Full Name:</p>
                  <p className="text-lg">{`${userDetails.firstname} ${
                    userDetails.middlename ? userDetails.middlename : ""
                  } ${userDetails.lastname} ${
                    userDetails.extension ? userDetails.extension : ""
                  }`}</p>
                </div>
                <div>
                  <p>Birthday:</p>
                  <p>{userBirthday}</p>
                </div>
                <div>
                  <p>Age:</p>
                  <p>{userDetails.age}</p>
                </div>
                <div>
                  <p>Gender:</p>
                  <p>{userDetails.gender}</p>
                </div>
                <div>
                  <p>Civil Status:</p>
                  <p>{userDetails.maritalstatus}</p>
                </div>
                <div>
                  <p>Mobile Number:</p>
                  <p>{userDetails.phonenumber}</p>
                </div>
                <div>
                  <p>Nationality:</p>
                  <p>{userDetails.nationality}</p>
                </div>
                <div>
                  <p>Address:</p>
                  <p>{`${userDetails.street} ${userDetails.city} ${userDetails.province}`}</p>
                </div>
                <div>
                  <p>Zip Code:</p>
                  <p>{userDetails.zipcode}</p>
                </div>
                <div>
                  <p>Valid ID Number:</p>
                  <p>{userDetails.valididno}</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-10 pb-10 px-10">
                <p>Valid ID:</p>
                <div>
                  <img src={Upload}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
