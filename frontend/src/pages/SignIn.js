import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (user) {
      navigate("/");
      // alert("Please log in first to continue");
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUser, setAllUser] = useState([]);
  const emailTry = (logEmail) => {
    setEmail(logEmail);
  };
  const passwordTry = (logPassword) => {
    setPassword(logPassword);
  };
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://cargo-bq9d.onrender.com/user/retrieveAll";
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
        setAllUser(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const signIn = (e) => {
    e.preventDefault();
    let ownUser = allUser.filter((el) => {
      return el.email === email;
    });
    if (!localStorage.getItem("user")) {
      if (ownUser[0]) {
        if (ownUser[0].password === password) {
          localStorage.setItem("user", ownUser[0]._id);
          console.log("success match");
          navigate("/");
          window.location.reload();
        } else {
          console.log("success not match");
        }
      } else {
        console.log("email doesnt exist");
      }
    } else {
      alert("There is already a User logged in");
    }
  };
  return (
    <div>
      <div className="mt-24 flex flex-col items-center justify-center">
        <div>
          <h2 className="text-5xl pb-5">Sign In</h2>
        </div>
        <form action="" className="w-full __container2">
          <div className=" mb-4">
            <label className=" text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              id="username"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter your Email"
              onChange={(e) => emailTry(e.target.value)}
            />
          </div>
          <div className=" mb-4">
            <label className=" text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter your Password"
              onChange={(e) => passwordTry(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <div className="flex justify-between pb-5 px-3">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="form-checkbox"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <div className="flex justify-end">
                <NavLink
                  to="/contact"
                  className="text-blue-500 hover:underline"
                >
                  Forgot password?
                </NavLink>
              </div>
            </div>

            <div className="flex justify-center py-5">
              <NavLink
                to="/"
                className="inline-block bg-primary hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-lg"
                onClick={(e) => signIn(e)}
              >
                Sign In
              </NavLink>
            </div>
          </div>

          <div className="text-center mb-10">
            <p>
              Not a member?&nbsp;&nbsp;
              <Link
                to="/signup"
                className="text-cyan-600 text-xl italic font-bold hover:underline"
              >
                {" "}
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
