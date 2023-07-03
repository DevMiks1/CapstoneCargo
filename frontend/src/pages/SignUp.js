import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Image
import Upload from "../assets/icons/upload-icon.png";

export const SignUp = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (user) {
      navigate("/");
    }
  };
  const [validIdPhoto, setValidIdPhoto] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [fileImageError, setFileImageError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/user/retrieveAll";
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
        setAllUsers(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
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

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0]; // Get the dropped file

    if (file.type.startsWith("image/")) {
      const fileSizeInBytes = file.size;
      const fileSizeInMB = fileSizeInBytes / (1024 * 1024); // Convert bytes to MB

      if (fileSizeInMB <= 1) {
        setValidIdPhoto(file); // Store the dropped file in state
        setFileSizeError(false); // Reset the file size error state
      } else {
        setFileSizeError(true); // Set the file size error state to true
        setTimeout(() => {
          setFileSizeError(false); // Reset the file size error state after a timeout
        }, 3000); // Adjust the timeout duration as needed (3000 milliseconds = 3 seconds)
      }
    } else {
      setFileImageError(true); // Set the image error state to true
      setTimeout(() => {
        setFileImageError(false); // Reset the image error state after a timeout
      }, 3000); // Adjust the timeout duration as needed (3000 milliseconds = 3 seconds)
    }
  };

  // Perform file size validation
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddlename] = useState("");
  const [suffix, setSuffix] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("Choose Gender");
  const [genderSubmitted, setGenderSubmitted] = useState(false);
  const [genderErrorMessage, setGenderErrorMessage] = useState("");
  const [age, setAge] = useState("");
  const [civilStatus, setCivilStatus] = useState("Choose Status");
  const [civilStatusSubmitted, setCivilStatusSubmitted] = useState(false);
  const [civilStatusErrorMessage, setCivilStatusErrorMessage] = useState("");
  const [nationality, setNationality] = useState("");
  const [building, setBuilding] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [fileInputValue, setFileInputValue] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idNumberError, setIdNumberError] = useState("");
  const [validID, setValidID] = useState("ID Type (e.g TIN)");
  const [validIDSubmitted, setValidIDSubmitted] = useState(false);
  const [validIDErrorMessage, setValidIDErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const formData = {
    firstname: firstName,
    lastname: lastName,
    middlename: middleName,
    extension: suffix,
    age: age,
    gender: gender,
    maritalstatus: civilStatus,
    nationality: nationality,
    email: email,
    phonenumber: phoneNumber,
    birthday: birthdate,
    province: province,
    city: city,
    street: building + " " + municipality,
    zipcode: zipcode,
    valididtype: validID,
    valididno: idNumber,

    hasdriverlicense: false,
    verified: false,
    username: firstName,
    password: password,
  };
  const handleRegister = async (newImgname) => {
    try {
      let url = "http://localhost:8000/user/create";
      let method = "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
        },
        body: JSON.stringify({ ...formData, valididimg: newImgname }),
      });

      if (res.ok) {
        console.log("Data saved successfully");
        setSubmittedData(formData);
      } else {
        console.log("Error saving data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleMiddlename = (event) => {
    setMiddlename(event.target.value);
  };
  const handleSuffix = (event) => {
    setSuffix(event.target.value);
  };
  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setGenderErrorMessage("");
  };
  const handleCivilStatusChange = (event) => {
    setCivilStatus(event.target.value);
    setCivilStatusErrorMessage("");
  };
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };
  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };
  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };
  const handleMunicipalityChange = (event) => {
    setMunicipality(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleValidIDChange = (event) => {
    setValidID(event.target.value);
    setValidIDErrorMessage("");
  };

  const validateIDNumber = () => {
    if (!idNumber.trim()) {
      setIdNumberError("ID Number is required");
      setValidIDSubmitted(false);
    } else if (validID === "SSS") {
      if (!/^\d{2}-\d{7}-\d$/.test(idNumber)) {
        setIdNumberError("Invalid SSS ID format");
        setValidIDSubmitted(false);
      } else {
        setIdNumberError("");
        setValidIDSubmitted(true);
      }
    } else if (validID === "Philhealth") {
      if (!/^\d{2}-\d{9}-\d$/.test(idNumber)) {
        setIdNumberError("Invalid Philhealth ID format");
        setValidIDSubmitted(false);
      } else {
        setIdNumberError("");
        setValidIDSubmitted(true);
      }
    } else if (validID === "TIN") {
      if (!/^\d{3}-\d{3}-\d{3}-\d{3}/.test(idNumber)) {
        setIdNumberError("Invalid TIN ID format");
        setValidIDSubmitted(false);
      } else {
        setIdNumberError("");
        setValidIDSubmitted(true);
      }
    } else {
      setIdNumberError("");
      setValidIDSubmitted(false);
    }
  };

  const validateForm = () => {
    validateIDNumber();
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
    if (!building.trim()) {
      errors.building = "Building / Blk is required";
    }
    if (!municipality.trim()) {
      errors.municipality = "Municipality is required";
    }
    if (!city.trim()) {
      errors.city = "City is required";
    }
    if (!province.trim()) {
      errors.province = "Province is required";
    }
    if (!zipcode.trim()) {
      errors.zipcode = "Zipcode is required";
    }
    const existingEmail = allUsers.filter((el) => {
      return el.email === email;
    });
    if (existingEmail[0]) {
      errors.email = "Please choose another email";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        errors.email = "Invalid email format";
      }
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters long";
    } else {
      delete errors.password; // Clear the 'Password is required' or 'Password must be at least 6 characters long' error if password is provided and meets the length requirement
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword.trim().length < 6) {
      errors.confirmPassword =
        "Confirm Password must be at least 6 characters long";
    }

    if (!validIdPhoto) {
      setUploadError("Image is required");
    }
    if (validID === "ID Type (e.g TIN)") {
      setValidIDErrorMessage("Please choose an ID");
      setValidIDSubmitted(true);
    }
    if (civilStatus === "Choose Status") {
      setCivilStatusErrorMessage("Please choose an ID");
      setCivilStatusSubmitted(true);
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");

      return;
    }
    if (gender === "Choose Gender") {
      setGenderErrorMessage("Please choose a gender");
      setGenderSubmitted(true);
    }
    if (!validIdPhoto) {
      setUploadError("Image is required");
    }

    // Add validation rules for other fields...
    setFormErrors(errors);
    // Return true if the form is valid (no errors)
    return Object.keys(errors).length === 0 && !!validIdPhoto;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    formErrors.password = "";
    formErrors.confirmPassword = "";
    setPasswordError("");
    setFileSizeError("");
    if (validateForm()) {
      // handleFileUpload();
      handleFileChange();
      navigate("/signin"); // Navigate to the "/finaldetails" route
    }
  };

  return (
    <div className="bg-shade py-5">
      <div className="bg-light mx-20 my-20 rounded-xl">
        <div className="pt-20 text-center">
          <h2 className=" text-primary text-4xl font-semibold ">
            Build Your Profile
          </h2>
        </div>
        <div className=" mt-10 flex flex-col items-center justify-center">
          <form action="">
            {/* 1st row */}
            <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
              <div className="flex flex-col">
                <label htmlFor="firstname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className="w-full xl:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="First name"
                />
                {formErrors.firstName && (
                  <p className="text-red-500">{formErrors.firstName}</p>
                )}
              </div>
              <div className="form-outline">
                <input
                  type="text"
                  id="middlename"
                  className="w-full xl:w-64 px-3  py-2 sm:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary "
                  placeholder="Middle name"
                  onChange={handleMiddlename}
                />
              </div>
              <div className="form-outline">
                <input
                  type="text"
                  id="lastname"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="w-full xl:w-64 px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Last name"
                />
                {formErrors.lastName && (
                  <p className="text-red-500 pb-5">{formErrors.lastName}</p>
                )}
              </div>
              <div className="form-outline">
                <input
                  type="text"
                  id="suffix"
                  className="w-full md:w-full lg:w-36 px-3 py-2 border mb-5 lg:mt-6 border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary "
                  placeholder="Suffix"
                  onChange={handleSuffix}
                />
              </div>{" "}
              {/* 1st row */}
            </div>
            {/* 2nd row */}
            <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <label htmlFor="birthday" className="form-label">
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  value={birthdate}
                  onChange={handleBirthdateChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary "
                  placeholder="Birthday"
                />
                {formErrors.birthdate && (
                  <p className="text-red-500 pb-5">{formErrors.birthdate}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={handleAgeChange}
                  className="w-full lg:w-56 xl:w-80  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Age"
                />
                {formErrors.age && (
                  <p className="text-red-500 pb-5">{formErrors.age}</p>
                )}
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option disabled value="Choose Gender">
                    Choose Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                  <option value="others">Others</option>
                </select>
                {genderSubmitted && genderErrorMessage && (
                  <p className="text-red-500 pb-5">Please choose a gender</p>
                )}
              </div>
            </div>
            {/* 3rd row */}
            <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <label htmlFor="status" className="form-label">
                  Civil Status
                </label>
                <select
                  id="status"
                  value={civilStatus}
                  onChange={handleCivilStatusChange}
                  className="w-full  lg:w-56 xl:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option disabled value="Choose Status">
                    Choose Status
                  </option>
                  <option value="male">Single</option>
                  <option value="Female">Married</option>
                  <option value="others">Complicated</option>
                </select>
                {civilStatusSubmitted && civilStatusErrorMessage && (
                  <p className="text-red-500">Please choose a status</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phonenumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="phonenumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="XXX-XXX-XXXX"
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500">{formErrors.phoneNumber}</p>
                )}
              </div>
              <div className=" flex flex-col mb-5">
                <label htmlFor="nationality" className="form-label">
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  value={nationality}
                  onChange={handleNationalityChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primary"
                  placeholder="Nationality"
                />
                {formErrors.nationality && (
                  <p className="text-red-500">{formErrors.nationality}</p>
                )}
              </div>
            </div>
            {/* 4th row */}
            <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="input"
                  id="address"
                  value={building}
                  onChange={handleBuildingChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Building/Blk/Lot"
                />
                {formErrors.building && (
                  <p className="text-red-500">{formErrors.building}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="input"
                  className="w-full lg:w-56 xl:w-80 px-3  py-2 sm:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Street Name"
                />
              </div>

              <div className="flex flex-col sm:mb-5">
                <input
                  type="input"
                  value={municipality}
                  onChange={handleMunicipalityChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primary"
                  placeholder="Bgry/Municipality"
                />
                {formErrors.municipality && (
                  <p className="text-red-500 pb-5">{formErrors.municipality}</p>
                )}
              </div>
            </div>
            {/* 5th row */}
            <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <input
                  type="input"
                  value={city}
                  onChange={handleCityChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="City"
                />
                {formErrors.city && (
                  <p className="text-red-500">{formErrors.city}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="input"
                  value={province}
                  onChange={handleProvinceChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Province"
                />
                {formErrors.province && (
                  <p className="text-red-500">{formErrors.province}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="input"
                  value={zipcode}
                  onChange={handleZipcodeChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder=" ZIp Code "
                />
                {formErrors.zipcode && (
                  <p className="text-red-500">{formErrors.zipcode}</p>
                )}
              </div>
            </div>
            <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col mt-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="email@test.com"
                />
                {formErrors.email && (
                  <p className="text-red-500">{formErrors.email}</p>
                )}
              </div>

              <div className="flex flex-col sm:mt-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  id="password"
                  className="w-full lg:w-56 xl:w-80 px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Password"
                />
                {formErrors.password && (
                  <p className="text-red-500">{formErrors.password}</p>
                )}
                {passwordError && (
                  <div className="text-red-500">{passwordError}</div>
                )}
                {passwordError && (
                  <div className="text-red-500">
                    {passwordError ===
                      "Password must be at least 6 characters long" &&
                      "Password must be 6 characters"}
                  </div>
                )}
              </div>

              <div className="flex flex-col md:mt-6">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  id="confirmPassword"
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Password"
                />
                {formErrors.confirmPassword && (
                  <p className="text-red-500">{formErrors.confirmPassword}</p>
                )}
              </div>
            </div>
            <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col mt-6">
                <label className="form-label">Upload Valid ID</label>
                <select
                  value={validID}
                  onChange={handleValidIDChange}
                  className="w-full  lg:w-56 xl:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option disabled value="ID Type (e.g TIN)">
                    ID Type (e.g TIN)
                  </option>
                  <option value="SSS">SSS</option>
                  <option value="Philhealth">Philhealth</option>
                  <option value="TIN">TIN</option>
                </select>
                {validIDSubmitted && validIDErrorMessage && (
                  <p className="text-red-500">{validIDErrorMessage}</p>
                )}
              </div>

              <div className="flex flex-col sm:mt-12 md:mt-6">
                <input
                  type="text"
                  className="w-full lg:w-56 xl:w-80 px-3 py-2 md:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="ID Number"
                  value={idNumber}
                  onChange={(event) => setIdNumber(event.target.value)}
                  onBlur={validateIDNumber}
                />
                {idNumberError && !validIDSubmitted && (
                  <p className="text-red-500">{idNumberError}</p>
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
                    <img src={Upload} alt="Upload" className="h-20 w-20" />
                  )}
                  <p>{validIdPhoto ? "File Uploaded" : "Upload a File"}</p>
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
                  {uploadError && <p className="text-red-600">{uploadError}</p>}
                </div>
              </div>
            </div>{" "}
            {/* End Upload File */}
            <div className="text-center py-10">
              <button
                type="submit"
                className="bg-button text-white px-10 py-2 rounded-md "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
