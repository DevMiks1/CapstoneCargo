import React from "react";
import { useState } from "react";

export const FAQs = () => {
  const [reservation, setReservation] = useState("hidden");
  const [rental, setRental] = useState("hidden");
  const [security, setSecurity] = useState("hidden");
  const [protect, setProtect] = useState("hidden");

  const handleReservation = () => {
    if (reservation === "") {
      setReservation("hidden");
    } else {
      setReservation("");
    }
    setRental("hidden");
    setSecurity("hidden");
    setProtect("hidden");
  };
  const handleRental = () => {
    setReservation("hidden");
    if (rental === "") {
      setRental("hidden");
    } else {
      setRental("");
    }
    setSecurity("hidden");
    setProtect("hidden");
  };
  const handleSecurity = () => {
    setReservation("hidden");
    setRental("hidden");
    if (security === "") {
      setSecurity("hidden");
    } else {
      setSecurity("");
    }
    setProtect("hidden");
  };
  const handleProtect = () => {
    setReservation("hidden");
    setRental("hidden");
    setSecurity("hidden");
    if (protect === "") {
      setProtect("hidden");
    } else {
      setProtect("");
    }
  };

  return (
    <div>
      <div className="py-36 bg-shade ">
        <div className="container ">
          <div className="bg-white rounded-xl shadow-md">
            <h1 className="text-primary text-center text-5xl py-10 font-bold">
              FAQs
            </h1>

            {/* Categories */}
            <div className="px-10 pb-20 text-center font-medium">
              <p className="mx-5">
                Welcome to the CarGo Rental FAQ page! Here, we have compiled a
                list of frequently asked questions to provide you with quick and
                helpful information. Whether you have inquiries about
                reservations, rental policies, insurance, or more, you'll find
                answers to commonly raised concerns. Click on each of the
                categories below to find the information you need. If your
                question isn't addressed here, feel free to reach out to our
                friendly customer service team for further assistance.
              </p>
              <div className="grid grid-cols-4 mx-10 mt-10">
                <div className="flex justify-center items-center hover:scale-105">
                  <div
                    className="w-[196px] h-[196px] flex justify-center items-center bg-primary rounded-2xl shadow-md"
                    onClick={handleReservation}
                  >
                    <h1 className="text-center text-white text-[25px] font-medium">
                      Reservation <br />
                      and Booking
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center items-center hover:scale-105">
                  <div
                    className="w-[196px] h-[196px] flex justify-center items-center bg-primary rounded-2xl shadow-md"
                    onClick={handleRental}
                  >
                    <h1 className="text-center text-white text-[25px] font-medium">
                      Rental <br />
                      Policies
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center items-center hover:scale-105">
                  <div
                    className="w-[196px] h-[196px] flex justify-center items-center bg-primary rounded-2xl shadow-md"
                    onClick={handleSecurity}
                  >
                    <h1 className="text-center text-white text-[25px] font-medium">
                      Insurance <br />
                      and Security
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center items-center hover:scale-105">
                  <div
                    className="w-[196px] h-[196px] flex justify-center items-center bg-primary rounded-2xl shadow-md"
                    onClick={handleProtect}
                  >
                    <h1 className="text-center text-white text-[25px] font-medium">
                      CarGo Protect <br />
                      Insurance
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Questions And Answers */}
            {/* Reservation and Booking */}
            <div className={reservation}>
              <div>
                <h2 className="text-primary text-center text-4xl pt-10 mb-10 mx-52 pb-5 font-bold border-b-2 border-primary border-solid ">
                  Reservation and Booking
                </h2>
              </div>
              <div className="pb-10">
                <div className="mx-24">
                  <p className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    1. How do I make a reservation?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      To make a reservation, simply visit our website, select your
                      desired vehicle, choose the rental dates and location, and
                      proceed to the checkout page.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    2. Can I modify or cancel my reservation?
                  </p>
                    <div className="hidden">
                      <p className="py-5 text-xl mx-16">
                        Yes, you can modify or cancel your reservation. Please refer
                        to our modification and cancellation policy for more
                        information.
                      </p>
                    </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    3. What documents do I need to provide when picking up the
                    rental car?
                  </p>
                    <div className="hidden">
                      <p className="py-5 text-xl mx-16 ">
                        You will need to provide a valid driver's license, a major
                        credit card in the renter's name, and any other documents
                        specified during the reservation process.
                      </p>
                    </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    4. Is there a minimum age requirement to rent a car?
                  </p>
                    <div className="hidden">
                      <p className="py-5 text-xl mx-16">
                        Yes, the minimum age requirement to rent a car is typically
                        21 years old. However, some car categories may have higher
                        age restrictions. Please check the specific requirements
                        during the reservation process.
                      </p>
                    </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    5. Can I rent a car without a credit card?
                  </p>
                    <div className="hidden">
                      <p className="py-5 text-xl mx-16">
                        In most cases, a credit card is required to secure the
                        reservation and provide a deposit. However, some locations
                        may accept debit cards or cash for payment. Please check the
                        payment options during the reservation process.
                      </p>
                    </div>
                </div>
              </div>
            </div>

            {/* Rental Policies */}
            <div className={rental}>
              <div>
                <h2 className="text-primary text-center text-4xl pt-10 mb-10 mx-52 pb-5 font-bold border-b-2 border-primary border-solid ">
                  Rental Policies
                </h2>
              </div>
              <div className="pb-10">
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    1. What is the fuel policy?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      Our fuel policy requires you to return the rental car with a
                      full tank of fuel. If the car is returned with less fuel,
                      you may be charged for refueling.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    2. Can I add an additional driver to my reservation?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      Yes, you can add an additional driver to your reservation.
                      Additional driver fees may apply, and the driver will need
                      to meet the same age and license requirements.  
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    3. Can I rent a car for one-way travel?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      Yes, we offer one-way rentals. However, additional fees may
                      apply, and availability may vary depending on the locations
                      involved. Please check the one-way rental option during the
                      reservation process.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    4. What happens if I return the car late?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      Late returns may result in additional charges. Please
                      contact our customer service team if you anticipate a late
                      return or need to extend your rental period.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    5. Do you provide child safety seats or GPS navigation
                    devices?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      Yes, we offer child safety seats and GPS navigation devices
                      as additional services. You can add them to your reservation
                      during the booking process. Fees may apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance and Security*/}
            <div className={security}>
              <div>
                <h2 className="text-primary text-center text-4xl pt-10 mb-10 mx-52 pb-5 font-bold border-b-2 border-primary border-solid ">
                  Insurance and Security
                </h2>
              </div>
              <div className="pb-10">
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    1. What should I do in case of an accident or breakdown?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      In case of an accident or breakdown, please contact the
                      emergency number provided with your rental documents. We
                      will assist you with the necessary steps and coordinate any
                      necessary repairs or assistance.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    2. Do I need to purchase additional insurance if I already
                    have coverage through my personal auto insurance or credit
                    card?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      It is recommended to check with your insurance provider or
                      credit card company to understand your existing coverage. If
                      you have adequate coverage, you may not need to purchase
                      additional insurance. However, it is ultimately your
                      decision.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    3. What is the excess or deductible amount?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                      The excess or deductible amount is the maximum liability you
                      would be responsible for in case of damage or theft. The
                      specific amount will be communicated during the reservation
                      process.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    4. What security measures are in place to protect my
                    personal information?
                  </p>
                  <div className="hidden"> 
                    <p className="py-5 text-xl mx-16">
                      We have strict security protocols in place to protect your
                      personal information. Our website is encrypted, and we
                      adhere to data protection laws and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CarGo Protect Insurance */}
            <div className={protect}>
              <div>
                <h2 className="text-primary text-center text-4xl pt-10 mb-10 mx-52 pb-5 font-bold border-b-2 border-primary border-solid ">
                CarGo Protect Insurance
                </h2>
              </div>
              <div className="pb-10">
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    1. What is CarGo Protect Insurance?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                    CarGo Protect Insurance is an optional insurance coverage that provides additional protection for your rental vehicle against damage, theft, and other unforeseen events. It offers peace of mind and financial security during your rental period.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    2. What does CarGo Protect Insurance cover?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                    CarGo Protect Insurance typically covers damages to the rental vehicle, theft or loss of the vehicle, third-party liability, and medical expenses in case of an accident. The specific coverage details will be provided in the insurance policy terms and conditions.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    3. How much does CarGo Protect Insurance cost?
                  </p>
                  <div className="hidden">
                    <p className="py-5 text-xl mx-16">
                    The cost of CarGo Protect Insurance depends on factors such as the duration of your rental, the type of vehicle, and the level of coverage you choose. The insurance premium will be clearly stated during the reservation process.
                    </p>
                  </div>
                </div>
                <div className="mx-24">
                  <p
                    className="mx-5 text-primary text-3xl"
                    onClick={(e) => {
                      if (e.target.nextSibling.className == "") {
                        e.target.nextSibling.className = 'hidden'
                      } else {
                        e.target.nextSibling.className = ''
                      }
                    }}
                  >
                    4. Do I need CarGo Protect Insurance if I already have personal auto insurance?
                  </p>
                  <div className="hidden"> 
                    <p className="py-5 text-xl mx-16">
                    It is recommended to check with your personal auto insurance provider to understand if your coverage extends to rental vehicles. If your personal insurance does not provide adequate coverage, CarGo Protect Insurance can be a valuable option.
                    </p>
                  </div>
                  <div className="mx-24">
                    <p
                      className="mx-5 text-primary text-3xl"
                      onClick={(e) => {
                        if (e.target.nextSibling.className == "") {
                          e.target.nextSibling.className = 'hidden'
                        } else {
                          e.target.nextSibling.className = ''
                        }
                      }}
                    >
                      5. Can I add CarGo Protect Insurance after making my reservation?
                    </p>
                    <div className="hidden">
                      <p className="py-5 text-xl mx-16">
                      CarGo Protect Insurance can be added during the reservation process or at the rental counter when picking up your vehicle. However, it is always recommended to add insurance coverage when making your reservation for convenience and to ensure availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
