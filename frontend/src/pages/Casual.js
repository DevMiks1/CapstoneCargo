import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import kia from "../assets/cartype/casual/kia-soluto.png";
import mitsubishi from "../assets/cartype/casual/mitsubishi-mirage.png";
import toyota from "../assets/cartype/casual/toyota-avanza.png";
import ford from "../assets/cartype/casual/casual cars-Ford Fiesta_0.jpg";
import vauxhall from "../assets/cartype/casual/casual cars-Vauxhall Astra.jpeg";
import ateca from "../assets/cartype/casual/casual cars-Seat Ateca_0.jpg";

export const Casual = () => {
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Casual Cars
      </h2>
      <div className="container-family">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {/* 1st card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={kia}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Kia Soluto
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">170 km/h</span>
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
          {/* 1st card 1st row */}
          {/* 2nd card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
              <img
                src={mitsubishi}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Mitsubishi Mirage
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">80 km/h</span>
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
                  <p className="font-semibold">Php 5,500 / Day</p>
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
                src={toyota}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Toyota Avanza
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">7 Seaters</span>
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
                src={ford}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Ford Fiesta
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">4 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">180 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">900 rpm</span>
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
                src={vauxhall}
                className="rounded-lg w-full h-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Vauxhall Astra
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">200 km/h</span>
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
                  <p className="font-semibold">Php 3,500 / Day</p>
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
                src={ateca}
                className="rounded-lg h-full w-full object-cover"
                alt="Toyota Avanza"
              />
            </div>

            <div className="grid ">
              <h3 className="text-3xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                SEAT Ateca
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">195 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">1000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9  ">
                <div className="text-center ">
                  <p className="font-semibold">Php 4,000 / Day</p>
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
