import { Routes, Route } from "react-router-dom";

import { ContactUs } from "../pages/ContactUs";
import {
  Home,
  About,
  Luxury,
  Business,
  Reservations,
  Location,
  Pickup,
  Bridal,
  Family,
  Casual,
  Testimonial,
  Driver,
  SignIn,
  SignUp,
  FinalDetails,
  BookingConfirm,
  Branches,
  CarDetails,
  FAQs,
  Licensing,
  TermsOfService,
  RentPolicy,
  PageNotFound,
} from "../pages";
import { Profile, Reservation, Support, DeleteAccount } from "../user";
import { EditProfile } from "../user/EditProfile";
import { ChangePassword } from "../user/ChangePassword";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="luxury" element={<Luxury />}></Route>
        <Route path="business" element={<Business />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="location" element={<Location />}></Route>
        <Route path="reservation" element={<Reservations />}></Route>
        <Route path="pickup" element={<Pickup />}></Route>
        <Route path="bridal" element={<Bridal />}></Route>
        <Route path="family" element={<Family />}></Route>
        <Route path="casual" element={<Casual />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="testimonial" element={<Testimonial />}></Route>
        <Route path="driver/:id" element={<Driver />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="finaldetails/:id" element={<FinalDetails />}></Route>
        <Route path="bookingconfirm" element={<BookingConfirm />}></Route>
        <Route path="branches" element={<Branches />}></Route>
        <Route path="cardetails/:id" element={<CarDetails />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="user/reservation" element={<Reservation />}></Route>
        <Route path="support" element={<Support />}></Route>
        <Route path="deleteaccount" element={<DeleteAccount />}></Route>
        <Route path="editprofile" element={<EditProfile />}></Route>
        <Route path="changepassword" element={<ChangePassword />}></Route>
        <Route path="termsofservice" element={<TermsOfService />}></Route>
        <Route path="licensing" element={<Licensing />}></Route>
        <Route path="faqs" element={<FAQs />}></Route>
        <Route path="rentpolicy" element={<RentPolicy />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};
