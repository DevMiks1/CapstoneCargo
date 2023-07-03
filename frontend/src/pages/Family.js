import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import ford from "../assets/cartype/family/Ford-Ecosport-cars.png";
import foton from "../assets/cartype/family/foton-cars.png";
import bmw from "../assets/cartype/family/family cars-BMW X3_0.jpg";
import skoda from "../assets/cartype/family/family cars-Skoda Kodiaq_0.jpg";
import landRover from "../assets/cartype/family/family cars-Land Rover Discovery_0.jpg";
import peugeot from "../assets/cartype/family/family cars-Peugeot 3008_0.jpg";

export const Family = () => {
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Family Cars
      </h2>
      <div className="container-family">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {/* 1st card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={ford}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Ford Ecosport
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">168 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">3750 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 4,500 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1  bg-button text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* 1st card 1st row */}
          {/* 2nd card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={foton}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Foton
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">16 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">100 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">2000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 5,500 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1 bg-button text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* 1st card 1st row */}
          {/* 3rd card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={peugeot}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Peugeot 3008 SUV
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">225 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">6000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 4,500 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1  bg-button text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* 3rd card 1st row */}
          {/* 1st card 2nd row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={landRover}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Land Rover Discovery
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">7 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">209 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">5500 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 3,500 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1  bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* 1st card 2nd row */}
          {/* 2nd card 2nd row */}
          <div className=" border bg-shade rounded-lg grid">
            <div className="h-56 overflow-hidden">
              <img
                src={skoda}
                className="rounded-lg w-full h-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Skoda Kodiaq
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">7 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">215 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">6000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 3,000 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1  bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd card 2nd row */}
          <div className="grid bg-card border rounded-lg ">
            <div className="h-56 overflow-hidden">
              <img
                src={bmw}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                BMW X3
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">18 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">318 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">4400 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9  ">
                <div className="text-center ">
                  <p className="font-semibold">Php 6,000 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
