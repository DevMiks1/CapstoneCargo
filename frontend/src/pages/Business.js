import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import toyotavan from "../assets/cartype/business/toyota-van.png";
import l300 from "../assets/cartype/business/l300.png";
import nissanvan from "../assets/cartype/business/nissan-van.png";
import audi from "../assets/cartype/business/business cars-Audi RS6_0.jpg";
import volvo from "../assets/cartype/business/business cars-Volvo V90_0.jpg";
import volkswagen from "../assets/cartype/business/business cars-Volkswagen Golf_0.jpg";

export const Business = () => {
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Business Cars
      </h2>
      <div className="container-family">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {/* 1st card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={toyotavan}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Toyota Hiace
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">15 Seaters</span>
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
                  <span className="mx-2">2400 rpm</span>
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
          {/* 1st card 1st row */}
          {/* 2nd card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={l300}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Mitsubishi L300
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">17 Seaters</span>
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
                  <span className="mx-2">5500 rpm</span>
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
          {/* 3rd card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={nissanvan}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Nissan
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">18 Seaters</span>
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
                  <span className="mx-2">4400 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 6,000 / Day</p>
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
                src={audi}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Audi RS6
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">4 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">280 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">6800 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 8,000 / Day</p>
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
                src={volvo}
                className="rounded-lg w-full h-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Volvo V90
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
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
                  <span className="mx-2">6200 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 6,000 / Day</p>
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
                src={volkswagen}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Volswagen Golf
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
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
                  <span className="mx-2">4000 rpm</span>
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
