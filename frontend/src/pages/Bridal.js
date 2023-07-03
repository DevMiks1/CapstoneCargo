import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import chrysler from "../assets/cartype/bridal/chrysler-car.png";
import hyundai from "../assets/cartype/bridal/hyundai-car.png";
import bentley from "../assets/cartype/bridal/bridal cars-bentley-flying-spur.jpg";
import limo from "../assets/cartype/bridal/bridal cars-chrysler limo.webp";
import beauford from "../assets/cartype/bridal/bridal cars-vintage beauford.webp";
import hummer from "../assets/cartype/bridal/bridal cars-hummer stretch limo.webp";

export const Bridal = () => {
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Bridal Cars
      </h2>
      <div className="container-family">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {/* 1st card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={chrysler}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Chrysler
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">4 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">250 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">7000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 15,000 / Day</p>
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
                src={hyundai}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Hyundai
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">4 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">320 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">6250 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 13,000 / Day</p>
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
                src={bentley}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Bentley Spur
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2"> 4 Seaters</span>
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
                  <span className="mx-2">4000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 12,000 / Day</p>
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
                src={limo}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Chrysler Limousine
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">11 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">150 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">176 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 35,000 / Day</p>
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
                src={beauford}
                className="rounded-lg w-full h-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Vintage Beauford
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">3 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">40 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">800 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 10,000 / Day</p>
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
                src={hummer}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Hummer Stretch Limo
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">20 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">193 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">5200 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9  ">
                <div className="text-center ">
                  <p className="font-semibold">Php 35,000 / Day</p>
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
