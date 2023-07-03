import { NavLink } from "react-router-dom";
import confirm from "../assets/confirmed.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const BookingConfirm = () => {
  const [reservation, setReservation] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [carDetails, setCarDetails] = useState({});
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (!user) {
      navigate("/signin");

      // alert("Please log in first to continue");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/reservation/retrieveAll";
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
        setReservation(
          data.filter((el) => {
            return el.userid === user;
          })[
            data.filter((el) => {
              return el.userid === user;
            }).length - 1
          ]
        );
        setReturnDate(
          data
            .filter((el) => {
              return el.userid === user;
            })
            [
              data.filter((el) => {
                return el.userid === user;
              }).length - 1
            ].datetimefinish.slice(0, 10)
        );
        setPickUpDate(
          data
            .filter((el) => {
              return el.userid === user;
            })
            [
              data.filter((el) => {
                return el.userid === user;
              }).length - 1
            ].datetimestart.slice(0, 10)
        );
        const fetchCarData = async () => {
          const url =
            "http://localhost:8000/car/retrieve/" +
            data.filter((el) => {
              return el.userid === user;
            })[0].carid;
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
            const carData = await response.json();
            setCarDetails(carData);
          } catch (error) {
            console.log("error");
          }
        };
        fetchCarData();
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  // console.log(hasDriver);
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
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-shade">
      <div className="__container">
        <div className="py-32">
          <div>
            <div className="text-center py-">
              <h2 className="text-primary text-3xl pb-2 font-bold ">
                Hooray! Your car is RESERVED.
              </h2>
              <p className="font-semibold pb-10">
                Here are your OFFICIAL Booking Details
              </p>
              <h2 className="text-primary text-xl font-bold pb-4">
                Booking Details
              </h2>
            </div>
            <div className="bg-light flex flex-col justify-center px-10 relative rounded-lg">
              <div className="absolute left-1/2 -top-20 transform -translate-x-1/2 w-full">
                <img src={confirm} alt="" className=" mx-auto opacity-50" />
              </div>

              <h2 className="text-center pt-3 pb-10 text-primary text-xl font-bold">
                ID# {reservation._id}
              </h2>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>
                  Name:{" "}
                  {userDetails.firstname +
                    " " +
                    (userDetails.middlename ? userDetails.middlename : "") +
                    " " +
                    userDetails.lastname +
                    " " +
                    (userDetails.suffix ? userDetails.suffix : "")}
                </p>
                <p>Car ID: {reservation.carid}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Car Type: {reservation.cartype}</p>
                <p>Pick-Up Date: {pickUpDate}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Unit: {carDetails.carname}</p>
                <p>Return Date: {returnDate}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Daily Price: Php {carDetails.initialrateperday}</p>
                <p>
                  Total Days:{" "}
                  {(Date.parse(reservation.datetimefinish) -
                    Date.parse(reservation.datetimestart)) /
                    86400000 +
                    1}{" "}
                  Days
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>
                  Cargo Protect:{" "}
                  {reservation.insurance === "false" ? "No" : "Yes"}
                </p>
                <p>
                  Driving Preference:
                  {reservation.hasdriver === "false"
                    ? "Self-Drive"
                    : "Has a Driver"}
                </p>
              </div>
              <h2 className="py-5 text-center text-primary font-bold text-2xl">
                Total Rent Price
              </h2>
              <h2 className="py-5 text-center text-primary font-bold text-2xl">
                Php {reservation.totalpayment}
              </h2>
              <hr className="border-t-2 border-black" />
              <p className="font-bold text-2xl py-5  text-center">
                What's next?
              </p>
              <div className="flex pb-3 font-semibold">
                <p className="pr-3">1.</p>
                <p>
                  {" "}
                  A personnel from our office will call you within{" "}
                  <span className="text-primary">24-hours</span> after
                  confirming this order. They will verify your submitted
                  information and make sure that everything is good to go.
                </p>
              </div>
              <div className="flex pb-3 font-semibold">
                <p className="pr-3">2.</p>
                <p>
                  You will be educated about the payment process and give you
                  the payment information that you will need based on your
                  preferred payment method (Please be informed that we do not
                  accept credit card payments).
                </p>
              </div>
              <div className="flex pb-3 font-semibold">
                <p className="pr-3">3.</p>
                <p>
                  Your payment is expected within{" "}
                  <span className="text-primary">48-hours</span> upon confirming
                  your reservation. You will be requested to send the payment
                  confirmation to our email address{" "}
                  <span className="tet-primary">cargorentals@gmail.com.</span>{" "}
                  Failure to make a payment within he allotted time will
                  automatically cancel the reservation.
                </p>
              </div>
              <div className="flex font-semibold pb-20">
                <p className="pr-3">4.</p>
                <p>
                  If there are any questions, concerns, or disputes about your
                  reservation, please contact us through email,{" "}
                  <span className="text-primary">cargorentals@gmail.com,</span>{" "}
                  or via mobile (+63) 988 123 4567 and landline (02) 846 9564.
                  Our Customer Support line is open 24/7 to assist you anytime.
                </p>
              </div>
              <NavLink
                to="/"
                className="text-right text-primary text-lg hover:underline"
              >
                Back to Home
              </NavLink>
              <NavLink
                to="/user/reservation"
                className="text-right text-primary text-lg pb-5 hover:underline"
              >
                Check your Reservations
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
