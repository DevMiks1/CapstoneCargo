import { FaBuilding, FaSnowflake, FaBolt, FaDoorOpen } from "react-icons/fa";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// image
import tesla from "../assets/cartype/luxury/tesla.png";
import DropDown from "../assets/icons/drop-down.png";
import CheckBlue from "../assets/icons/check-blue.png";
import Logo from "../assets/navbar-logo-light.png";
import CargoProtect from "../assets/cargo-protect.png";
import Insurance from "../assets/icons/insurance-protect.png";
import NoInsurance from "../assets/icons/no-insurance.png";

// icon
import { FaUsers, FaTachometerAlt, FaCogs } from "react-icons/fa";

export const CarDetails = () => {
  const [showInclusion, setShowInclusion] = useState(true);
  const [showInclusion1, setShowInclusion1] = useState(true);
  const [showProtect, setShowProtect] = useState(false);
  const [showProtect1, setShowProtect1] = useState(false);
  const [showProtect2, setShowProtect2] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [insurance, setInsurance] = useState(0);
  const [carDetails, setCarDetails] = useState({});

  const path = window.location.pathname.split("/");
  const details = path[path.length - 1];
  const search = window.location.search.split("&");
  const pickUpDate = search[1].split("=")[1];
  const returnDate = search[3].split("=")[1];

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/car/retrieve/" + details;
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

  console.log(carDetails);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  console.log(user);

  const nextLink = `/driver/${carDetails._id}${window.location.search}&addOns=${insurance}`;

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };
  const toggleMessage1 = () => {
    setShowMessage1(!showMessage1);
  };

  const toggleInclusion = () => {
    setShowInclusion(!showInclusion);
  };
  const toggleInclusion1 = () => {
    setShowInclusion1(!showInclusion1);
  };
  const toggleProtect = () => {
    setShowProtect(!showProtect);
  };
  const toggleProtect1 = () => {
    setShowProtect1(!showProtect1);
  };
  const toggleProtect2 = () => {
    setShowProtect2(!showProtect2);
  };
  return (
    <div>
      <div className="bg-shade py-40">
        <div
          className="mx-auto md:w-11/12 rounded-lg bg-cyan-600 z-40 relative bottom-16 sm:bottom-10 px-2 lg:px-5 xl:px-5 py-5 mb-5 hidden"
          id="filter"
        >
          <form action="">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 justify-center items-center">
              {/* Car specs */}
              <div className="flex justify-center items-center rounded-lg bg-white py-2 col-span-2 lg:col-span-1">
                <div className="relative">
                  <select
                    className="rounded-lg pl-8 focus:ring-0 border-none"
                    id="location"
                    name="location"
                    placeholder="Pick-up Branch"
                  >
                    <option disabled value="">
                      Branch
                    </option>
                    <option value="Manila">Manila</option>
                    <option value="Pasay">Pasay</option>
                    <option value="Pasig">Pasig</option>
                    <option value="Makati">Makati</option>
                  </select>
                  <div className="absolute top-2 left-1">
                    <FaBuilding size="1.5rem" className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Pick-up Date */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center relative">
                  <label
                    htmlFor="pickupDate"
                    className="pt-2 text-sm font-bold"
                  >
                    Pickup Date:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                  />
                </div>
              </div>

              {/* Pick-up Time */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label
                    htmlFor="pickupTime"
                    className="pt-2 text-sm font-bold"
                  >
                    Time:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="time"
                    id="pickupTime"
                    name="pickupTime"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label
                    htmlFor="returnDate"
                    className="pt-2 text-sm font-bold"
                  >
                    Return Date:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="date"
                    id="returnDate"
                    name="returnDate"
                  />
                </div>
              </div>

              {/* Return Time */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label
                    htmlFor="returnTime"
                    className="pt-2 text-sm font-bold"
                  >
                    Time:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="time"
                    id="returnTime"
                    name="returnTime"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="container __grid-cardetails">
          <div className=" bg-light px-8 rounded-2xl">
            <form action="">
              <div className=" grid lg:grid-cols-2">
                <div className="pt-10">
                  <img src={tesla} alt="" className="h-64 " />
                </div>
                <div className="pt-10">
                  <h2 className="texct-primary text-2xl text-center py-5 text-primary font-semibold">
                    {carDetails.carname}
                  </h2>
                  <div className="flex justify-between mx-5 pb-2">
                    <div className="flex gap-2 ">
                      <i>
                        <FaUsers size={25} className="text-primary" />
                      </i>
                      <span>{carDetails.seatsavailable}-Seater</span>
                    </div>

                    {carDetails.transmissiontype === "manual" ? (
                      <div className="flex gap-2 mr-4">
                        <i>
                          <FaCogs size={25} className="text-primary" />
                        </i>
                        <span>Manual</span>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <i>
                          <FaCogs size={25} className="text-primary" />
                        </i>
                        <span>Automatic</span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between mx-5 pb-2">
                    <div className="flex gap-2">
                      <i>
                        <FaDoorOpen size={25} className="text-primary" />
                      </i>

                      <span>{carDetails.maxrpm} Rpm</span>
                    </div>
                    <div className="flex gap-2 pr-1">
                      <i>
                        <FaTachometerAlt size={25} className="text-primary" />
                      </i>
                      <span>{carDetails.recommendedspeed} km/h</span>
                    </div>
                  </div>
                  <div className="flex justify-between mx-5">
                    <div className="flex gap-2">
                      <i>
                        <FaBolt size={25} className="text-primary" />{" "}
                      </i>
                      <span>{carDetails.enginetype} Powered</span>
                    </div>
                    <div className="flex gap-2 pr-6">
                      <i>
                        <FaSnowflake size={25} className="text-primary" />{" "}
                        {/* Users Icon */}
                      </i>
                      <span>Aircon</span>
                    </div>
                  </div>
                  <h2 className="text-primary text-2xl text-center py-5 font-semibold">
                    Php {carDetails.initialrateperday} /day
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 pt-5 items-center">
                <h2 className="text-primary font-semibold text-2xl lg:pl-16">
                  Inclusions
                </h2>
                <img
                  src={DropDown}
                  onClick={toggleInclusion}
                  alt=""
                  className="h-6 w-6"
                />
              </div>
              <hr className="border-t-2 border-black" />

              {showInclusion && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
                  <div className="flex items-center lg:justify-center gap-2 relative">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p
                      onMouseOver={toggleMessage}
                      onMouseOut={toggleMessage}
                      className="hover:cursor-pointer hover:text-primary"
                    >
                      Unlimited Mileage
                    </p>
                    {showMessage && (
                      <div className="absolute top-[-40px]  transform  p-2 bg-black text-white text-sm rounded">
                        This vehicle comes with unlimited mileage.
                      </div>
                    )}
                  </div>
                  <div className="flex items-center lg:justify-center gap-2 relative">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p
                      onMouseOver={toggleMessage1}
                      onMouseOut={toggleMessage1}
                      className="hover:cursor-pointer hover:text-primary"
                    >
                      Child Safety Seats
                    </p>
                    {showMessage1 && (
                      <div className="absolute top-[-40px]  transform  p-2 bg-black text-white text-sm rounded">
                        This vehicle comes with comfortable seats.
                      </div>
                    )}
                  </div>
                  <div className="flex items-center lg:justify-center gap-2 lg:pr-20">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p>Child Safety</p>
                  </div>
                  <div className="flex items-center lg:justify-center gap-2 pr-14">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p>Fuel Policy</p>
                  </div>
                  <div className="flex items-center lg:justify-center gap-2 lg:pl-5">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p>Roadside Assistance</p>
                  </div>
                  <div className="flex items-center lg:justify-center gap-2 lg:pl-3 xl:pl-6">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p>Cleaning and Maintenance</p>
                  </div>
                  <div className="flex items-center lg:justify-center gap-2 pr-4">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p>GPS Navigation</p>
                  </div>
                  <div className="flex items-center lg:justify-center gap-2 pr-2">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p>Road Assistance</p>
                  </div>
                  <div className="flex items-center lg:justify-center gap-2 pr-12">
                    <img src={CheckBlue} alt="" className="h-6 w-6" />
                    <p>Road Assistance</p>
                  </div>
                </div>
              )}
              <div className="flex gap-2 pt-5 items-center">
                <h2 className="text-primary font-semibold text-2xl  lg:pl-16">
                  Inclusions
                </h2>
                <img
                  src={DropDown}
                  onClick={toggleInclusion1}
                  alt=""
                  className="h-6 w-6"
                />
              </div>
              <hr className="border-t-2 border-black" />
              {showInclusion1 && (
                <div>
                  <div className="grid lg:grid-cols-2 lg:px-10">
                    <div className="flex flex-col justify-center pt-5">
                      <img src={Logo} alt="" />
                      <p className="text-left">
                        During the rental process, the car hire company will
                        place a deposit hold on your credit card. Without CarGo
                        Protect, you risk losing your entire deposit in case of
                        damage or theft.; However, with the Cargo, we provide
                        refunds, offering you a cost-effective alternate to
                        cover at the car hire counter.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img src={CargoProtect} alt="" className="h-72 w-72" />
                    </div>
                  </div>
                  <p className="lg:pl-10">
                    <span className="text-primary font-semibold">
                      FREE CANCELLATION ANYTIME
                    </span>{" "}
                    before the pick up the date
                  </p>

                  <div className="grid grid-col-2 lg:grid-cols-3 py-5">
                    <div className="lg:col-start-2 col-span-2 sm:col-span-1 lg:col-span-2 flex justify-end  md:justify-end lg:justify-center">
                      <div className="flex flex-col w-36 sm:w-auto lg:w-auto bg-primary px-2 md:px-5 lg:px-10 py-2 rounded-tl-3xl text-white text-center font-semibold">
                        <p className="lg:text-lg ">W/ CarGo Protect</p>
                        <p>One-Time Price: Php 5,000</p>
                      </div>
                      <div className="bg-others py-2 w-36 lg:w-auto sm:w-auto sm:px-7 md:px-3 lg:px-14 flex justify-center items-center rounded-tr-3xl font-semibold">
                        <p className="text-xl">Regular Book</p>
                      </div>
                    </div>
                  </div>
                  {/* 1st */}
                  <div className="grid grid-flow-row grid-cols-3 lg:pl-10">
                    <div className="flex flex-col ">
                      <p
                        onClick={toggleProtect}
                        className="text-primary text-lg sm:text-xl cursor-pointer"
                      >
                        Excess Protection{" "}
                      </p>
                      {showProtect && (
                        <p className="pb-5">
                          Drive with confidence knowing that our standard damage
                          cover and theft protection come with a modest excess
                          of ₱97,208.58 each. With CarGo Protect, we've got you
                          covered, and any charges up to the excess amount will
                          be refunded.
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <img
                        src={Insurance}
                        alt=""
                        className="h-10 w-10  sm:h-12 sm:w-12"
                      />
                    </div>

                    <div className="flex justify-center lg:pr-20">
                      <img src={NoInsurance} alt="" className="h-8 w-8" />
                    </div>
                  </div>
                  <hr className="border-t-2 border-primary" />
                  {/* 2nd */}
                  <div className="grid grid-cols-3 lg:pl-10 lg:pt-2">
                    <div className="flex flex-col ">
                      <p
                        onClick={toggleProtect1}
                        className="text-primary text-lg sm:text-xl cursor-pointer"
                      >
                        Complete Exterior Coverage{" "}
                      </p>
                      {showProtect1 && (
                        <p className="pb-5">
                          Drive with confidence knowing that our standard damage
                          cover and theft protection come with a modest excess
                          of ₱97,208.58 each. With CarGo Protect, we've got you
                          covered, and any charges up to the excess amount will
                          be refunded.
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <img
                        src={Insurance}
                        alt=""
                        className="h-10 w-10  sm:h-12 sm:w-12"
                      />
                    </div>

                    <div className="flex justify-center lg:pr-20">
                      <img src={NoInsurance} alt="" className="h-8 w-8" />
                    </div>
                  </div>
                  <hr className="border-t-2 border-primary" />
                  {/* 3rd */}
                  <div className="grid grid-cols-3 lg:pl-10 lg:pt-2">
                    <div className="flex flex-col ">
                      <p
                        onClick={toggleProtect2}
                        className="text-primary text-lg sm:text-xl cursor-pointer"
                      >
                        Excess Protection{" "}
                      </p>
                      {showProtect2 && (
                        <p className="pb-5">
                          Drive with confidence knowing that our standard damage
                          cover and theft protection come with a modest excess
                          of ₱97,208.58 each. With CarGo Protect, we've got you
                          covered, and any charges up to the excess amount will
                          be refunded.
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <img
                        src={Insurance}
                        alt=""
                        className="h-10 w-10  sm:h-12 sm:w-12"
                      />
                    </div>

                    <div className="flex justify-center lg:pr-20">
                      <img src={NoInsurance} alt="" className="h-8 w-8" />
                    </div>
                  </div>
                  <hr className="border-t-2 border-primary" />
                  <p className="py-7">
                    IMPORTANT: Please review our{" "}
                    <span className="text-primary font-semibold">
                      Policy Terms
                    </span>{" "}
                    for complete details, including{" "}
                    <span className="text-primary font-semibold">
                      Terms and Conditions
                    </span>{" "}
                    and standard exclusions that may apply.
                  </p>
                  <div className="flex gap-2 pb-10">
                    <div>
                      <button
                        className="py-1 px-12 bg-button rounded-xl text-white font-semibold"
                        onClick={(e) => {
                          e.preventDefault();
                          setInsurance(500);
                        }}
                      >
                        ADD
                      </button>
                    </div>
                    <div>
                      <button
                        className="py-1 px-10 bg-others rounded-xl text-primary font-semibold"
                        onClick={(e) => {
                          e.preventDefault();
                          setInsurance(0);
                        }}
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div>
            <div className="border border-card bg-light h-max rounded-2xl sticky top-20">
              <h2 className="text-primary text-xl px-12 pt-2 pb-4 font-bold text-center">
                Price Breakdown
              </h2>
              <form action="">
                <div className="px-3">
                  <h2 className="font-bold">Booking Duration</h2>
                  <hr className="border-t-2 border-black pb-1" />
                  <div className="flex justify-between">
                    <p>Pick-up:</p>
                    <p>{pickUpDate}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Drop-Off:</p>
                    <p>{returnDate}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Total Days:</p>
                    <p>
                      {(Date.parse(returnDate) - Date.parse(pickUpDate)) /
                        86400000 +
                        1}{" "}
                      Days
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold pb-5">Subtotal:</p>
                    <p>
                      Php{" "}
                      {carDetails.initialrateperday *
                        ((Date.parse(returnDate) - Date.parse(pickUpDate)) /
                          86400000 +
                          1)}
                    </p>
                  </div>

                  <h2 className="font-bold">Other Fees</h2>
                  <hr className="border-t-2 border-black pb-1" />
                  <div className="flex justify-between">
                    <p>Drop-Off Fee:</p>
                    <p>Php 500</p>
                  </div>
                  <h2>Add-Ons:</h2>
                  {insurance === 500 ? (
                    <div className="flex justify-between">
                      <p className="pl-3 pb-7">Cargo Protect</p>
                      <p>Php {insurance}</p>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="flex justify-between pb-5">
                    <p className="font-bold text-2xl">Total:</p>
                    <p className="text-xl">
                      Php{" "}
                      {carDetails.initialrateperday *
                        ((Date.parse(returnDate) - Date.parse(pickUpDate)) /
                          86400000 +
                          1) +
                        500 +
                        insurance}
                    </p>
                  </div>
                  <div className="text-center pb-4">
                    <NavLink to={user ? nextLink : "/signin"}>
                      <button className="py-1 px-10 bg-button text-white rounded-lg">
                        Continue
                      </button>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end */}
    </div>
  );
};
