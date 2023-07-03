import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const FinalDetails = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (!user) {
      navigate("/signin");
      // alert("Please log in first to continue");
    }
  };
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [carDetails, setCarDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const path = window.location.pathname.split("/");
  const details = path[path.length - 1];
  const search = window.location.search.split("&");
  const pickUpDate = search[1].split("=")[1];
  const returnDate = search[3].split("=")[1];
  const carCategories = search[5].split("=")[1];
  const insurance = Number(search[6].split("=")[1]);
  const hasDriver = search[7].split("=")[1];
  const firstName = search[8].split("=")[1];
  const middlename = search[9].split("=")[1];
  const lastname = search[10].split("=")[1];
  const suffix = search[11].split("=")[1];
  const birthday = search[12].split("=")[1];
  const age = search[13].split("=")[1];
  const nationality = search[14].split("=")[1];
  const phoneNumber = search[15].split("=")[1];
  const email = search[16].split("=")[1];
  const licenseno = search[17].split("=")[1];
  const imageupload = search[18].split("=")[1];
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
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
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleConfirmClick = () => {
    if (!isChecked) {
      setShowModal(true);
    } else {
      console.log("Booking confirmed!");
      handleBook();
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const formData = {
    userid: user,
    carid: details,
    cartype: carCategories,
    datetimestart: Date.parse(pickUpDate),
    datetimefinish: Date.parse(returnDate),
    paymentstatus: "Pending",
    totalpayment:
      carDetails.initialrateperday *
        ((Date.parse(returnDate) - Date.parse(pickUpDate)) / 86400000 + 1) +
      500 +
      insurance,
    totalpaid: 0,
    reservationstatus: "Pending",
    remarks: "",
    insurance: insurance === 0 ? "false" : "true",
    hasdriver: hasDriver,
    driverfirstname: firstName,
    driverlastname: lastname,
    drivermiddlename: middlename,
    driverextension: suffix,
    driverbirthday: birthday,
    driverage: age,
    drivernationality: nationality,
    driverphonenumber: phoneNumber,
    driveremail: email,
    driverlicenseno: licenseno,
    driverlicenseimg: imageupload,
  };
  console.log(formData);
  const handleBook = async () => {
    try {
      let url = "http://localhost:8000/reservation/create";
      let method = "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        console.log("Data saved successfully");
        // setSubmittedData(formData);
        navigate("/bookingconfirm"); // Redirect to the desired page
      } else {
        console.log("Error saving data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="bg-shade">
      <div className="__container">
        <div className="py-32">
          <div>
            <div className="text-center py-">
              <h2 className="text-primary text-3xl pb-2 font-bold">
                You're One Step Away!
              </h2>
              <p className="font-semibold">
                Review your booking details carefully
              </p>
              <p className="font-semibold pb-10">
                and click "Book Now" when you're ready.
              </p>
              <h2 className="text-primary text-xl font-bold pb-4">
                Booking Details
              </h2>
            </div>
            <div className="bg-light flex flex-col justify-center px-10">
              {/* Your booking details */}
              <h2 className="text-center pt-3 pb-5 text-primary text-xl font-bold">
                USER ID# {user}
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
                <p>Car ID: {details}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Car Type: {carCategories}</p>
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
                  {(Date.parse(returnDate) - Date.parse(pickUpDate)) /
                    86400000 +
                    1}{" "}
                  Days
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Cargo Protect: {insurance === 0 ? "No" : "Yes"}</p>
                <p>
                  Driving Preference:{" "}
                  {hasDriver === "false" ? "Self-Drive" : "Have a Driver"}
                </p>
              </div>
              <h2 className="py-5 text-center text-primary font-bold text-2xl">
                Total Rent Price
              </h2>
              <h2 className="py-5 text-center text-primary font-bold text-2xl">
                Php{" "}
                {carDetails.initialrateperday *
                  ((Date.parse(returnDate) - Date.parse(pickUpDate)) /
                    86400000 +
                    1) +
                  500 +
                  insurance}
              </h2>
              {/* End of booking details */}

              <div className="flex justify-center sm:x items-center">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p className="pl-4">
                  I confirm that I have read, understood, and accepted the Terms
                  of Service.
                </p>
              </div>
              <div className="pt-10 pb-20 text-center">
                <button
                  className="py-2 px-10 bg-button text-white rounded-lg"
                  onClick={handleConfirmClick}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-red-500 max-w-xs mx-auto rounded-lg p-8">
            <h2 className="text-white text-2xl font-bold mb-4 text-center">
              Error
            </h2>
            <p className="text-white">
              Please accept the Terms of Service before confirming.
            </p>
            <div className="text-center">
              <button
                className="bg-white text-red-500 px-4 py-2 rounded-lg mt-4 font-semibold "
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
