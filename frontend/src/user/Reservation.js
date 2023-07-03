import Sidebar from "../components/User/Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import ReservationCard from "./ReservationCard";
import { useNavigate } from "react-router-dom";

import Upload from "../assets/User.png";

export const Reservation = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (!user) {
      navigate("/signin");
      // alert("Please log in first to continue");
    }
  };
  const [allUserReservations, setAllUserReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/reservation/retrieveAll/";
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
        const allReservations = data.filter((el) => {
          return el.userid === user;
        });
        setAllUserReservations(allReservations.reverse());
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(allUserReservations);

  return (
    <div>
      <div className="bg-shade py-28">
        <div className="container1">
          <div className="flex bg-white">
            <div className="basis-[20%]">
              <Sidebar />
            </div>
            <div className="basis-[80%] p-10">
              <h1 className="text-4xl text-primary pb-5">Reservations</h1>
              {allUserReservations.map((reservation) => (
                <ReservationCard
                  key={Math.floor(Math.random() * 100000000000)}
                  reservation={reservation}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
