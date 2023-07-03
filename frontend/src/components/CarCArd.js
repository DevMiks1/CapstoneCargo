import { FaTachometerAlt, FaCogs, FaUsers } from "react-icons/fa";
import luxury from "../assets/catergories/luxury-mercedez-benz.png";
import { Link } from "react-router-dom";
export const CarCard = ({ car }) => {
  //   const navigate = useNavigate();
  let detailsLink = `/cardetails/${car._id}`;
  return (
    <div className=" border bg-shade rounded-lg grid">
      <div className="h-56 overflow-hidden">
        <img
          src={luxury}
          className="rounded-lg w-full h-full object-cover"
          alt="Toyota Avanza"
        />
      </div>

      <div className="grid">
        <h3 className="text-4xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
          {car.carname}
        </h3>
        <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
          <li className="flex">
            <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
            <span className="mx-2">{car.seatsavailable} Seaters</span>
          </li>
          <li className="flex pr-1">
            <FaTachometerAlt size={25} color="#189cf4" /> {/* Users Icon */}
            <span className="mx-2">{car.recommendedspeed} km/h</span>
          </li>
        </ul>
        <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
          <li className="flex">
            <FaTachometerAlt size={25} color="#189cf4" /> {/* Users Icon */}
            <span className="mx-2">{car.maxrpm} rpm</span>
          </li>
          <li className="flex">
            <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
            {car.transmissiontype === "manual" ? (
              <span className="mr-6 pl-3"> Manual</span>
            ) : (
              <span className="mx-2"> Automatic</span>
            )}
          </li>
        </ul>
        <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
          <div className="text-center">
            <p className="font-semibold">Php {car.initialrateperday} / Day</p>
          </div>
          <div className="text-center">
            <Link to={detailsLink + window.location.search.split("&page=")[0]}>
              <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
