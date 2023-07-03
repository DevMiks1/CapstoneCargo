import about from "../assets/about/about-page.jpg";
import about1 from "../assets/about/mike.jpg";
import about2 from "../assets/about/nesan.jpg";
import about3 from "../assets/about/ernest.jpg";
import about4 from "../assets/about/drei.jpg";

export const About = () => {
  return (
    <div className="mt-20">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        <img className="relative p-10 h-full " src={about} alt="about" />
        {/* <p className="absolute z-10 ml-20 mt-20 text-2xl font-semibold">
          About | CarGo
        </p> */}
        <div className="p-10">
          <p>
            <span className="font-bold text-primary text-2xl">
              {" "}
              Welcome to our car rental company!
            </span>
            {""} We are dedicated to providing you with a comfortable,
            affordable, and hassle-free rental experience. Whether you're
            traveling for business or leisure, we've got you covered with a wide
            variety of vehicles to choose from. <br />
            <br />
            Our car rental company offers a diverse range of vehicles, including{" "}
            {""}
            <span className="font-semibold text-primary text-xl">
              luxury cars, SUVs, vans, pick-ups,
            </span>{" "}
            and even
            <span className="font-semibold text-primary text-xl">
              {" "}
              bridal cars
            </span>{" "}
            {""}
            to cater to your specific transportation needs. Our vehicles are{" "}
            <span className="font-semibold text-primary text-xl">
              well-maintained, reliable,
            </span>{" "}
            and equipped with{" "}
            <span className="font-semibold text-primary text-xl">
              modern safety features
            </span>
            to ensure your safety and comfort during your rental period. <br />{" "}
            <br /> We understand that every customer has different
            transportation needs, which is why we{" "}
            <span className="font-semibold text-primary text-xl">
              offer flexible rental options
            </span>
            , including short-term and long-term rentals. Our team of
            experienced professionals is
            <span className="font-semibold text-primary text-xl">
              {" "}
              dedicated to providing excellent customer service,
            </span>
            and we work closely with our customers to understand their unique
            transportation requirements and provide them with tailor-made
            solutions that meet their needs.
            <br /> <br /> At our car rental company, we strive to provide our
            customers with{" "}
            <span className="font-semibold text-primary text-xl">
              cost-effective and efficient
            </span>{" "}
            transportation services. We offer competitive pricing, transparent
            rental agreements, and 24/7 customer support to ensure that you have
            a{" "}
            <span className="font-semibold text-primary text-xl">
              {" "}
              hassle-free rental experience{" "}
            </span>
            from start to finish. <br /> <br /> So if you're looking for a{" "}
            <span className="font-semibold text-primary text-xl">
              reliable, affordable, and convenient car rental company
            </span>{" "}
            for your next trip, look no further than us. Our commitment to
            customer satisfaction, coupled with our wide range of vehicles and
            flexible rental options, makes us the{" "}
            <span className="font-semibold text-primary text-xl">
              ideal choice for all{" "}
            </span>{" "}
            your transportation needs.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold text-primary bg-shade">
          CarGo Organization
        </h2>
      </div>
      <div className="p-5">
        <div className="flex justify-center">
          <div class="w-full max-w-sm bg-white mt-10">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                src={about1}
                alt="President"
              />
              <h5 class="text-xl font-bold text-primary">MAVargas</h5>
              <span class="text-medium text-slate-950 font-semibold">
                Director
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32 text-center">
              <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                <div className="mb-12 md:mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={about2}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="text-xl font-bold text-primary">DCPacatang</h5>
                  <h6 className="text-medium text-slate-950 font-semibold">
                    Team Manager
                  </h6>
                </div>
                <div className="mb-12 md:mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={about3}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="text-xl font-bold text-primary">EFDecilis</h5>
                  <h6 className="text-medium text-slate-950 font-semibold">
                    Sr. Manager
                  </h6>
                </div>
                <div className="mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={about4}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="text-xl font-bold text-primary">MDLoreto</h5>
                  <h6 className="text-medium text-slate-950 font-semibold">
                    Manager
                  </h6>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
