// import { FaTachometerAlt, FaCogs, FaUsers } from "react-icons/fa";
// import luxury from "../assets/catergories/luxury-mercedez-benz.png";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export const ReservationCard = ({ reservation }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [carDetails, setCarDetails] = useState({});
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
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/car/retrieve/" + reservation.carid;
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
        setCarDetails(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const handleShow = (e) => {
    if (e.target.nextSibling.className === "") {
      e.target.nextSibling.className = "hidden";
      e.target.className = "text-black hover:text-primary cursor-pointer flex";
    } else {
      e.target.nextSibling.className = "";
      e.target.className = "text-primary cursor-pointer flex";
    }
    // console.log(reservation.hasdriver === "false");
  };

  return (
    <div className="text-2xl pb-2">
      <h2
        className="text-black hover:text-primary cursor-pointer flex"
        onClick={(e) => handleShow(e)}
      >
        ID #{reservation._id}
        <span className="text-sm ml-2 flex flex-start justify-end text-red-600">
          {reservation.paymentstatus.toUpperCase()}
        </span>
      </h2>
      <div className="hidden">
        <div className="text-lg grid grid-cols-2 gap-2 p-5">
          <p>
            Name:{" "}
            {`${userDetails.firstname} ${
              userDetails.middlename ? userDetails.middlename : ""
            } ${userDetails.lastname} ${
              userDetails.extension ? userDetails.extension : ""
            }`}
          </p>
          <p>Car Type: {reservation.cartype}</p>
          <p>Unit: {carDetails.carname}</p>
          <p>Daily Price: Php {carDetails.initialrateperday}</p>
          <p>
            Cargo Protect: {reservation.insurance === "false" ? "NO" : "YES"}
          </p>
          <p>Booking ID: {reservation._id}</p>
          <p>Pick-Up Date: {reservation.datetimestart.slice(0, 10)}</p>
          <p>Return Date: {reservation.datetimefinish.slice(0, 10)}</p>
          <p>
            Total Days:{" "}
            {(Date.parse(reservation.datetimefinish) -
              Date.parse(reservation.datetimestart)) /
              86400000 +
              1}{" "}
            Days
          </p>
          <p>
            Driving Preference:{" "}
            {reservation.hasdriver === "false" ? "Self Drive" : "Have a Driver"}
          </p>
          <p>Total Price: Php {reservation.totalpayment}</p>
          <p>Total Paid: Php {reservation.totalpaid}</p>
        </div>
      </div>
    </div>
  );
};
export default ReservationCard;
