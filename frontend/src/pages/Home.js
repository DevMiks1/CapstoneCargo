import CarouselImage1 from "../assets/hero/hero-1.jpg";
import CarouselImage2 from "../assets/hero/hero-3.jpg";
import CarouselImage3 from "../assets/hero/hero-4.jpg";
import CarouselImage4 from "../assets/hero/hero-5.jpg";
import { FaBuilding } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

// We offer - image
import widecar from "../assets/hero/wide_car_selection.png";
import twentyfour from "../assets/hero/247_cs.png";
import maintain from "../assets/hero/clean_cars.png";

// Testimonials - image
import testimonial1 from "../assets/testimonials/t1.jpg";
import testimonial2 from "../assets/testimonials/t2.jpg";
import testimonial3 from "../assets/testimonials/t3.jpg";

// Steps for log-in - image
import threesteps from "../assets/hero/3_easy_steps.png";

import luxury from "../assets/catergories/luxury-mercedez-benz.png";
import business from "../assets/catergories/business2.png";
import pickup from "../assets/catergories/raps1.jpg";
import bridal from "../assets/catergories/bride-car.png";
import family from "../assets/catergories/nissan-car.png";
import casual from "../assets/catergories/suzuki-cars.png";
import { Carousel } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const [searchPickUpDate, setSearchPickUpDate] = useState("");
  const [searchReturnDate, setSearchReturnDate] = useState("");
  const [Searchlocation, setSearchLocation] = useState("");
  const [SearchcarType, setSearchCarType] = useState("");
  const [pickUpDate, setPickUpDate] = useState("")

  const handlePickUpDate = (e) => {
    setSearchPickUpDate(e.target.value);
  };
  const handleReturnDate = (e) => {
    setSearchReturnDate(e.target.value);
  };
  const handleLocation = (e) => {
    setSearchLocation(e.target.value);
  };
  const handleCartype = (e) => {
    setSearchCarType(e.target.value);
  };
  const handleSubmit = (e) => {
    if (searchPickUpDate === "" || searchReturnDate === "") {
      e.preventDefault();
      alert("Please input Date");
    } else if (
      Date.now() > Date.parse(searchPickUpDate) ||
      Date.now() > Date.parse(searchReturnDate) ||
      Date.parse(searchPickUpDate) > Date.parse(searchReturnDate)
    ) {
      e.preventDefault();
      alert(
        "Invalid date, Please check if you put the dates correctly, You can not book for the date today"
      );
    } else {
    }
  };

  return (
    <div>
      <div className="container2 mx-auto absolute top-24 sm:inset-24 md:inset-28 lg:inset-28 lg:right-10 z-10 mt-20  text-white">
        <div className="px-10 ">
          <p className="sm:text-3xl md:text-4xl lg:text-7xl font-bold">
            CarGo:
          </p>
          <p className="sm:text-lg md:text-xl lg:text-3xl font-bold">
            Where Every Mile Fees Extraordinary
          </p>
          <p className="md:text-lg lg:text-xl">
            Fuel your wanderlust with our diverse fleet. Discover, book, and
            embark on unforgettable journeys with confidence and convenience at
            your fingertips
          </p>
        </div>
      </div>

      <div className="h-80 sm:h-68 md:h-96 w-full ">
        <Carousel>
          <img alt="..." src={CarouselImage1} />
          <img alt="..." src={CarouselImage2} />
          <img alt="..." src={CarouselImage3} />
          <img alt="..." src={CarouselImage4} />
        </Carousel>
      </div>
      <div className="bg-shade">
        <div
          id="filter"
          className=" mx-auto md:w-11/12 lg:w-max   rounded-lg bg-primary z-40 relative bottom-16 sm:bottom-10 px-5 lg:px-1 xl:px-5 py-5"
        >
          <form action="/reservation">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 justify-center items-center">
              {/* Pick-up Branch  */}
              <div className="flex justify-center items-center rounded-lg bg-white py-2 sm:col-span-2 lg:col-span-1">
                <div className="relative ">
                  <select
                    className="rounded-lg pl-8 focus:ring-0 border-none"
                    id="location"
                    name="location"
                    placeholder="Pick-up Branch"
                    onChange={(e) => handleLocation(e)}
                  >
                    <option disabled value="Pick-up Branch">
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
                <div className="flex flex-col justify-center ">
                  <label
                    htmlFor="pickupDate"
                    className="pt-2  text-sm font-bold"
                  >
                    Pickup Date:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    onChange={(e) => handlePickUpDate(e)}
                  />
                </div>
              </div>

              {/* Pick-up Time */}
              <div className="flex justify-center items-center rounded-lg bg-white hidden">
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
              <div className="flex justify-center items-center rounded-lg bg-white ">
                <div className="flex flex-col justify-center">
                  <label
                    htmlFor="pickupDate"
                    className="pt-2 text-sm font-bold"
                  >
                    Return Date:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    onChange={(e) => handleReturnDate(e)}
                  />
                </div>
              </div>

              {/* Return Time */}
              <div className="flex justify-center items-center rounded-lg bg-white hidden">
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

              {/* Selection of Car */}
              <div className="flex justify-center items-center rounded-lg bg-white py-2">
                <div className="relative">
                  <select
                    className="rounded-lg pl-8 focus:ring-0 border-none"
                    id="carType"
                    name="carType"
                    onChange={(e) => handleCartype(e)}
                  >
                    <option disabled defaultValue>
                      Car Type
                    </option>
                    <option value="Luxury">Luxury</option>
                    <option value="Business">Business</option>
                    <option value="Family">Family</option>
                    <option value="Bridal">Bridal</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Casual">Casual</option>
                  </select>
                  <div className="absolute top-2 left-1">
                    <FaCarAlt size="1.5rem" className="text-primary" />
                  </div>
                </div>
              </div>
              <div className="hidden">
                <input
                  className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                  type="text"
                  id="page"
                  name="page"
                  defaultValue="1"
                />
              </div>

              <div className="bg-button rounded-lg flex justify-center items-center">
                <button
                  className="flex px-7 py-4 p-1 font-bold text-center"
                  onClick={(e) => handleSubmit(e)}
                >
                  <FaSearch size="1.5rem" className="mr-1 text-white" />
                  <p className="text-white">Search</p>
                </button>
              </div>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center text-white gap-2 mt-3">
            <div className="flex justify-center items-center gap-3 mr-8 md:mr-0">
              <div className="rounded-full bg-circle p-2">
                <FaCheck size="2rem" className="text-check" />
              </div>
              <p className="text-2xl md:text-xl xl:text-3xl">
                No Hidden Charges
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 ml-1 md:ml-0">
              <div className="rounded-full bg-circle p-2">
                <FaCheck size="2rem" className="text-check" />
              </div>
              <p className="text-2xl md:text-xl xl:text-3xl">
                24/7 Customer Service
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 mr-12 md:mr-0">
              <div className="rounded-full bg-circle p-2">
                <FaCheck size="2rem" className="text-check" />
              </div>
              <p className="text-2xl md:text-xl xl:text-3xl">
                FREE Cancellation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* We offer section */}
      <div className="bg-shade py-10">
        <div className="container ">
          <div className="text-center text-5xl font-bold text-cyan-600 pb-10">
            <p>WE OFFER</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5 justify-center items-center">
            <div className="grid justify-center">
              <div className="bg-white rounded-full px-14">
                <img
                  className="rounded-lg justify-center"
                  src={maintain}
                  alt=""
                />
              </div>

              <p className="text-center text-3xl lg:text-xl xl:text-3xl font-semibold text-cyan-600 pt-2">
                Highly-Maintained Cars
              </p>
            </div>
            <div className="grid justify-center pt-5 lg:pt-0">
              <div className="bg-white rounded-full px-14">
                <img
                  src={widecar}
                  alt=""
                  className="rounded-lg object-fit object-center"
                  style={{}}
                />
              </div>
              <p className="text-center text-3xl lg:text-xl xl:text-3xl font-semibold text-cyan-600 pt-2">
                Wide Variety of Cars Selection
              </p>
            </div>
            <div className=" grid justify-center pt-5 lg:pt-0">
              <div className="bg-white rounded-full px-14">
                <img
                  src={twentyfour}
                  alt=""
                  className="rounded-lg object-fit object-center "
                  style={{}}
                />
              </div>

              <p className="text-center text-3xl lg:text-xl xl:text-3xl font-semibold text-cyan-600 pt-2">
                24/7 Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our steps for login section */}
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center pt-10 sm:pt-0">
          <img src={threesteps} alt="" />
        </div>

        <div className="text-center p-10 mt-10">
          <p className="text-center text-3xl sm:text-5xl mt-5 font-bold text-cyan-600">
            BOOK WITH US IN <br />{" "}
            <span className="text-4xl sm:text-9xl">3</span> <br />
            EASY STEPS!
          </p>
          <p className="text-xl sm:text-2xl py-2 lg:px-7">
            Experience a seamless and hassle-free transaction with Cargo. From
            reservation to payment, we ensure a smooth journey, allowing you to
            focus on the road ahead
          </p>
          <button className="mt-5">
            <NavLink
              to="signin"
              className="bg-button p-2 px-10 rounded-xl text-white font-semibold text-2xl"
            >
              Sign Up Now
            </NavLink>
          </button>
        </div>
      </div>

      {/* Car Section */}
      <div className="bg-shade py-10">
        <div className=" container">
          <div className="text-center text-4xl font-bold p-5 text-cyan-600 ">
            <h1>CAR CATERGORIES</h1>
          </div>
          <div className="">
            {/* Luxury Cars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                className="grid border border-solid border-white rounded-2xl"
                style={{
                  background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                  boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)",
                }}
              >
                <img className="rounded-2xl w-full" src={luxury} alt="" />

                <div className="grid justify-between items-center p-5">
                  <h1 className="text-3xl font-semibold">Luxury</h1>
                  <p className="text-xl">
                    High-end vehicles with advanced engineering, elegant design,
                    luxurious materials, cutting-edge technology, superior
                    performance, and comfort.
                  </p>
                  <button className="mt-5 text-left">
                    <NavLink
                      to="/luxury"
                      className=" bg-button p-2 px-10 rounded-xl text-white font-semibold text-2xl"
                    >
                      View Now
                    </NavLink>
                  </button>
                </div>
              </div>

              {/* Business Car */}
              <div
                className="grid border border-solid border-white rounded-2xl"
                style={{
                  background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                  boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)",
                }}
              >
                <img className="rounded-2xl" src={business} alt="" />
                <div className="grid justify-between items-center p-5">
                  <h1 className="text-3xl font-semibold">Business</h1>
                  <p className="text-xl">
                    Reliable, comfortable, fuel-efficient vehicles for business
                    purposes, with a range from compact sedans to luxury
                    options.
                  </p>
                  <button className="mt-5 text-left">
                    <NavLink
                      to="/business"
                      className="bg-button p-2 px-10 rounded-xl text-white font-semibold text-2xl"
                    >
                      View Now
                    </NavLink>
                  </button>
                </div>
              </div>

              {/* Pick-up Cars */}
              <div className="grid">
                <div
                  className="grid border border-solid border-white rounded-2xl"
                  style={{
                    background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                    boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)",
                  }}
                >
                  <img className="rounded-2xl" src={pickup} alt="" />
                  <div className="grid justify-between items-center p-5">
                    <h1 className="text-3xl font-semibold">Pick-up</h1>
                    <p className="text-xl ">
                      Rugged trucks with open cargo areas, suitable for off-road
                      driving and hauling heavy loads in different sizes.
                    </p>
                    <button className="mt-5 text-left">
                      <NavLink
                        to="pickup"
                        className="bg-button p-2 px-10 rounded-xl text-white font-semibold text-2xl"
                      >
                        View Now
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid">
                <div
                  className="grid border border-solid border-white rounded-2xl"
                  style={{
                    background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                    boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)",
                  }}
                >
                  <img className="rounded-2xl" src={bridal} alt="" />
                  <div className="grid justify-between items-center p-5">
                    <h1 className="text-3xl font-semibold">Bridal</h1>
                    <p className="text-xl">
                      Luxurious and elegant vehicles, matching the wedding
                      style, for transporting the bride, groom, and wedding
                      party.
                    </p>
                    <button className="mt-5 text-left">
                      <NavLink
                        to="bridal"
                        className="bg-button p-2 px-10 rounded-xl text-white font-semibold text-2xl"
                      >
                        View Now
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>

              {/* Family Cars */}
              <div className="grid">
                <div
                  className="grid border border-solid border-white rounded-2xl"
                  style={{
                    background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                    boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)",
                  }}
                >
                  <img className="rounded-2xl" src={family} alt="" />
                  <div className="grid justify-between items-center p-5">
                    <h1 className="text-3xl font-semibold">Family</h1>
                    <p className="text-xl">
                      Larger vehicles with sleeping quarters, bathrooms,
                      kitchens, and entertainment systems, providing comfortable
                      accommodations for long-distance travel.
                    </p>
                    <button className="mt-5 text-left">
                      <NavLink
                        to="family"
                        className="bg-button p-2 px-10 rounded-xl text-white font-semibold text-2xl"
                      >
                        View Now
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>

              {/* Casual */}
              <div className="grid">
                <div
                  className="grid border border-solid border-white rounded-2xl"
                  style={{
                    background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                    boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)",
                  }}
                >
                  <img className="rounded-2xl" src={casual} alt="" />
                  <div className="grid justify-between items-center p-5">
                    <h1 className="text-3xl font-semibold">Casual</h1>
                    <p className="text-xl">
                      Practical, comfortable vehicles for everyday use, ranging
                      from compact cars to SUVs, known for fuel efficiency and
                      reliability.
                    </p>
                    <button className="mt-5 text-left">
                      <NavLink
                        to="casual"
                        className="bg-button p-2 px-10 rounded-xl text-white font-semibold text-2xl"
                      >
                        View Now
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end of 1st row of car types*/}
            {/* start of 2nd row of car types*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10"></div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="text-center text-4xl font-bold pb-10 text-cyan-600 ">
          TESTIMONIALS
        </div>
        <div>
          <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32 text-center">
              <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                <div className="mb-12 md:mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={testimonial1}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Web Developer
                  </h6>
                  <p className="mb-4">
                    Seamless integration, user-friendly experience. Building a
                    dynamic online presence for their exceptional car rentals.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="inline-block w-6"
                    >
                      <path
                        fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                      />
                    </svg>
                  </p>
                  <ul className="mb-0 flex justify-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className="mb-12 md:mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={testimonial2}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Graphic Designer
                  </h6>
                  <p className="mb-4">
                    Eye-catching designs, exceptional service. A perfect match
                    for my creative car rental projects.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="inline-block w-6"
                    >
                      <path
                        fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                      />
                    </svg>
                  </p>
                  <ul className="mb-0 flex justify-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className="mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={testimonial3}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">John Smith</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Marketing Specialist
                  </h6>
                  <p className="mb-4">
                    Exceptional service, diverse fleet, convenient booking. A
                    trusted choice for reliable car rentals.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="inline-block w-6"
                    >
                      <path
                        fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                      />
                    </svg>
                  </p>
                  <ul className="mb-0 flex justify-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
