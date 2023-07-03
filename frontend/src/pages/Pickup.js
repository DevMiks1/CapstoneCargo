import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import ford from "../assets/cartype/pickUp/ford-pickUp.png";
import carry from "../assets/cartype/pickUp/SuzukiCarry.png";
import navara from "../assets/cartype/pickUp/nissan-navara-pickUp.png";
import tesla from "../assets/cartype/pickUp/pickUp cars-tesla-cybertruck.webp";
import conquest from "../assets/cartype/pickUp/pickUp cars-toyota conquest.jpg";
import jeep from "../assets/cartype/pickUp/pickUp cars-jeep-gladiator.webp";

export const Pickup = () => {
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Pick-up Cars
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
                Ford
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">240 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">3500 rpm</span>
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
                src={carry}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Suzuki Carry
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">2 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">140 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">4500 rpm</span>
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
                  <button className="text-center p-1  bg-button text-white rounded-lg px-5">
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
                src={navara}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Nissan Navara
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">182 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">4200 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 7,000 / Day</p>
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
                src={tesla}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Tesla Cybertruck
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">6 Seaters</span>
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
                  <span className="mx-2">14000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic </span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 30,000 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1  bg-button text-white rounded-lg px-5">
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
                src={conquest}
                className="rounded-lg w-full h-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Toyota Conquest
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
                  <span className="mx-2">3400 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 7,500 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1  bg-button text-white rounded-lg px-5">
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
                src={jeep}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Jeep Gladiator
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">156 km/h</span>
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
                  <p className="font-semibold">Php 5,000 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1 bg-button text-white rounded-lg px-5">
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
