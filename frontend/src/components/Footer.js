import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" bg-primary">
      <div className="container ">
        <div className="grid grid-cols-1 py-7 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1">
            <div className="text-center text-dmode-olive font-semibold">
              <h2 className="text-3xl pb-5 text-white">Services</h2>
              <div>
                <NavLink
                  exact="true"
                  to="faqs"
                  className="border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white px-10"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  FAQs
                  
                </NavLink>
              </div>
              <br />
              <div>
                <NavLink
                  exact="true"
                  to="contact"
                  className="border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white px-5"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Contact Us
                </NavLink>
              </div>
              <br />
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-center tex t-dmode-olive font-semibold">
              <h2 className="text-3xl pb-5 text-white">Contact Details</h2>
              <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                Mobile Number: (+63) 988 123 4567
              </h3>
              <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                Telephone Number: (02) 846 9564
              </h3>
              <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                Email: cargoMEND@gmail.com
              </h3>
              <h1 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                Address: 2265f Agoncillo St, Malate, Manila, 1004 Metro Manila
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-center text-dmode-olive font-semibold">
              <h2 className="text-3xl text- pb-5 text-white">Legal</h2>
              <div>
                <NavLink
                  exact="true"
                  to="rentpolicy"
                  className="border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white px-5"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Rent Policy
                </NavLink>
              </div>
              <br />
              <div>
                <NavLink
                  exact="true"
                  to="licensing"
                  className="border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white px-10"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Licensing
                </NavLink>
              </div>
              <br />
              <div>
                <NavLink
                  exact="true"
                  to="termsofservice"
                  className="border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white px-2"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Terms of Service
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-center font-semibold">
              <h2 className="text-3xl pb-5 text-white">Didn't Join Yet?</h2>
              <p className="  py-3 dark:text-color-white">
                Let's have a smooth ride with CarGo rent a Car!
              </p>
              <div className="pt-10">
                <div>
                  <NavLink
                    exact="true"
                    to="signin"
                    className="py-3 px-3 bg-button rounded-lg border-none text-white hover:text-primary font-bold"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Join Our Community
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="text-center text-lg py-5">
        <p>
          Copyright © 2023 | CarGo Rent a Car | Develop by Team MEND | Kodego
          BootCamp Tropang CharAt64 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
