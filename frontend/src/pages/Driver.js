import { FaBuilding } from "react-icons/fa";
import Upload from "../assets/icons/upload-icon.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Driver = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (!user) {
      navigate("/signin");
      // alert("Please log in first to continue");
    }
  };
  const [validIdPhoto, setValidIdPhoto] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [fileImageError, setFileImageError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileInputValue, setFileInputValue] = useState("");
  const [selfDrive, setSelfDrive] = useState(false);
  const [hireDriver, setHireDriver] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const path = window.location.pathname.split("/");
  const details = path[path.length - 1];
  const search = window.location.search.split("&");
  const pickUpDate = search[1].split("=")[1];
  const returnDate = search[3].split("=")[1];
  const insurance = Number(search[6].split("=")[1]);
  const handleSelfDriveChange = () => {
    setSelfDrive(true);
    setHireDriver(false);
    setIsChecked(false);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setSuffix("");
    setBirthdate("");
    setAge("");
    setNationality("");
    setPhoneNumber("");
    setEmail("");
    setDriverLicenseNumber("");
    setFormErrors("");
    setLicenseIdPhoto("");
  };

  const handleHireDriverChange = () => {
    setHireDriver(true);
    setSelfDrive(false);
    setIsChecked(false);
  };
  const [carDetails, setCarDetails] = useState({});
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

  // Information
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicenseNumber, setDriverLicenseNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [licenseIdPhoto, setLicenseIdPhoto] = useState(null);

  const nextLink = `/finaldetails/${carDetails._id}${
    window.location.search
  }&hasDriver=${hireDriver}&firstname=${
    firstName === "" ? "NA" : firstName
  }&middlename=${middleName === "" ? "NA" : middleName}&lastname=${
    lastName === "" ? "NA" : lastName
  }&suffix=${suffix === "" ? "NA" : suffix}&birthday=${
    birthdate === "" ? "NA" : birthdate
  }&age=${age === "" ? "NA" : age}&nationality=${
    nationality === "" ? "NA" : nationality
  }&phonenumber=${phoneNumber === "" ? "NA" : phoneNumber}&email=${
    email === "" ? "NA" : email
  }&driverslicensenumber=${
    driverLicenseNumber === "" ? "NA" : driverLicenseNumber
  }&imageupload=`;
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSuffixChange = (event) => {
    setSuffix(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDriverLicenseNumberChange = (event) => {
    setDriverLicenseNumber(event.target.value);
  };

  const handleFileUpload = async (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);

    const file = event.target.files[0]; // Get the uploaded file
    setUploadError(""); // Clear any previous upload error

    // Perform file size validation
    const fileSizeInBytes = file.size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024); // Convert bytes to MB

    if (file.type.startsWith("image/")) {
      if (fileSizeInMB <= 1) {
        setValidIdPhoto(file); // Store the file in state
        setFileSizeError(false); // Reset the file size error state
        setFileInputValue(event.target.value); // Store the file input value in state
      } else {
        setFileSizeError(true); // Set the file size error state to true
        setTimeout(() => {
          setFileSizeError(false); // Reset the file size error state after a timeout
        }, 3000);
        setFileInputValue("");
        setValidIdPhoto("");
      }
    } else {
      setFileImageError(true); // Set the image error state to true
      setTimeout(() => {
        setFileImageError(false); // Reset the image error state after a timeout
      }, 3000); // Adjust the timeout duration as needed (3000 milliseconds = 3 seconds)
      // Do not update the file input value when there is an error
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!birthdate.trim()) {
      errors.birthdate = "Birthdate is required";
    }
    if (!age.trim()) {
      errors.age = "Age is required";
    }
    if (!nationality.trim()) {
      errors.nationality = "Nationality is required";
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "PhoneNumber is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        errors.email = "Invalid email format";
      }
    }
    if (!driverLicenseNumber.trim()) {
      errors.driverLicenseNumber = "Driverlicense is required";
    } else {
      const licenseNumberPattern = /^[A-Z0-9]{8}$/;

      if (!licenseNumberPattern.test(driverLicenseNumber)) {
        errors.driverLicenseNumber = "Invalid Driver License Number format";
        console.log(!licenseNumberPattern.test(driverLicenseNumber));
      }
    }
    if (!validIdPhoto) {
      setUploadError("Image is required");
    }

    // Add validation rules for other fields...
    setFormErrors(errors);
    // Return true if the form is valid (no errors)
    return Object.keys(errors).length === 0 && !!validIdPhoto;
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    if (!hireDriver && !selfDrive) {
      event.preventDefault();
      setShowModal(true);
    } else if (selfDrive) {
      navigate(nextLink + "NA");
      return;
    } else if (validateForm()) {
      handleFileChange();
      // navigate("/finaldetails");
    }
  };
  const handleRegister = async (newImgname) => {
    navigate(nextLink + newImgname);
  };
  const handleFileChange = async () => {
    console.log(selectedFile);
    if (selectedFile) {
      const formDataImg = new FormData();
      formDataImg.append("image", selectedFile);
      console.log(formDataImg);
      try {
        const response = await fetch("http://localhost:8000/upload/create", {
          method: "POST",
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
          },
          body: formDataImg,
        });

        const data = await response.json();
        // Handle the response data as needed
        handleRegister(data.data.name);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0]; // Get the dropped file
    setLicenseIdPhoto(file); // Store the dropped file in state
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
        <div className="container __grid">
          <div className="bg-light px-8 rounded-2xl">
            <form action="">
              <div>
                <h2 className="text-primary text-2xl font-bold pb-5 pt-8">
                  Driving Preference
                </h2>
                <p className="font-bold pb-3">Choose from the options below:</p>
              </div>

              <div>
                <div className="pl-5 pb-4">
                  <input
                    type="checkbox"
                    id="selfDriveCheckbox"
                    checked={selfDrive}
                    onChange={handleSelfDriveChange}
                    className="mr-5"
                  />
                  <label htmlFor="selfDriveCheckbox">Self Drive</label>
                </div>

                <div className="pl-5 pb-4">
                  <input
                    type="checkbox"
                    id="hireDriverCheckbox"
                    checked={hireDriver}
                    onChange={handleHireDriverChange}
                    className="mr-5"
                  />
                  <label htmlFor="hireDriverCheckbox">Hire a Driver</label>
                </div>
              </div>

              {hireDriver && (
                <div>
                  <h2 className="text-primary text-2xl pb-4 font-bold">
                    Information
                  </h2>
                  <h3 className="font-bold text-2xl pb-4">Main Driver</h3>
                  <div className="px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div>
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className="border rounded-lg p-2 w-full"
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="middleName">Middle Name:</label>
                      <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        value={middleName}
                        onChange={handleMiddleNameChange}
                        className="border rounded-lg p-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                        className="border rounded-lg p-2 w-full"
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500">{formErrors.lastName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="suffix">Suffix:</label>
                      <input
                        type="text"
                        id="suffix"
                        name="suffix"
                        value={suffix}
                        onChange={handleSuffixChange}
                        className="border rounded-lg p-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="birthdate">Birthdate:</label>
                      <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        value={birthdate}
                        onChange={handleBirthdateChange}
                        className="border rounded-lg p-2 w-full"
                      />
                      {formErrors.birthdate && (
                        <p className="text-red-500">{formErrors.birthdate}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="age">Age:</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={age}
                        onChange={handleAgeChange}
                        className="border rounded-lg p-2 w-full"
                      />
                      {formErrors.age && (
                        <p className="text-red-500">{formErrors.age}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="nationality">Nationality:</label>
                      <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={nationality}
                        onChange={handleNationalityChange}
                        className="border rounded-lg p-2 w-full"
                      />
                      {formErrors.nationality && (
                        <p className="text-red-500">{formErrors.nationality}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="border rounded-lg p-2 w-full"
                      />
                      {formErrors.phoneNumber && (
                        <p className="text-red-500">{formErrors.phoneNumber}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="border rounded-lg p-2 w-full"
                      />
                      {formErrors.email && (
                        <p className="text-red-500">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="driverLicenseNumber">
                        Driver License Number:
                      </label>
                      <input
                        type="text"
                        id="driverLicenseNumber"
                        name="driverLicenseNumber"
                        value={driverLicenseNumber}
                        onChange={handleDriverLicenseNumberChange}
                        className="border rounded-lg p-2 w-full"
                      />
                      {formErrors.driverLicenseNumber && (
                        <p className="text-red-500">
                          {formErrors.driverLicenseNumber}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Start Upload File */}
                  <div className="pt-10">
                    <div
                      className={`border ${
                        validIdPhoto ? "border-none" : "border-primary"
                      }`}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <div className="flex flex-col justify-center items-center">
                        {validIdPhoto ? (
                          <img
                            src={URL.createObjectURL(validIdPhoto)}
                            alt="License ID"
                            className="h-20 w-20 mt-3 mb-2"
                          />
                        ) : (
                          <img
                            src={Upload}
                            alt="Upload"
                            className="h-20 w-20"
                          />
                        )}
                        <p>
                          {validIdPhoto ? "File Uploaded" : "Upload a File"}
                        </p>
                        <p>Drag and drop files here</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          value={fileInputValue}
                          className="my-5 mx-3"
                        />
                        {fileSizeError && (
                          <p className="text-red-600">
                            File size exceeds the maximum limit of 1MB.
                          </p>
                        )}
                        {fileImageError && (
                          <p className="text-red-600">File is not an image </p>
                        )}
                        {uploadError && (
                          <p className="text-red-600">{uploadError}</p>
                        )}
                      </div>
                    </div>
                  </div>{" "}
                  {/* End Upload File */}
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
                    <div>
                      <div
                        onClick={handleSubmit}
                        className="py-1 px-10 bg-button text-white rounded-lg cursor-pointer"
                      >
                        Continue
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end */}
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-red-500 max-w-xs mx-auto rounded-lg p-8">
            <h2 className="text-white text-2xl font-bold mb-4">Error</h2>
            <p className="text-white">Please choose an option.</p>
            <button
              className="bg-white text-red-500 px-4 py-2 rounded-lg mt-4 font-semibold"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
