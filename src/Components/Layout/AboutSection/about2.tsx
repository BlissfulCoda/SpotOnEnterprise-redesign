import ladyLight from "../../assets/Images/ladyLight.png";
import AboutImg from "../../assets/Images/AboutImg.png";
import Owners from "../../assets/Images/img-4.png";

function About(): JSX.Element {
  return (
    <section className="w-full py-6 mb-24 ">
      <section id="about" className="container p-4 mx-auto max-w-7xl sm:p-6">
        <div className="py-6 tablet:mx-auto tablet:max-w-2xl tablet:space-y-8">
          <div className="container mx-auto space-y-4 tablet:py-2 tablet:px-40 laptop:px-56 desktop:px-60 laptop:space-y-6 ">
            <div className="flex justify-center bg-center bg-cover h-28 ">
              <h2 className="w-full h-full pt-8 text-transparent bg-white bg-center bg-cover text-9xl bg-clip-text bg-photo">
                A
              </h2>
            </div>

            <p className="text-center sm:px-2 desktop:px-12 tablet:px-0">
              We are experienced in delivering a diversity of attractive
              products and quality design that ensure maximum client
              satifaction.
            </p>
          </div>

          {/* Main Container */}
          <div className="relative max-w-3xl tablet:h-96 tablet:flex">
            {/* LEFT IMAGE */}
            <div className="bg-red-200 bg-center bg-cover left-20 tablet:absolute tablet:h-60 top-36 tablet:w-80 tablet:z-10">
              <img
                src={Owners}
                alt="tailor image"
                className="hidden object-cover mx-auto tablet:flex saturate-150 brightness-100 tablet:h-full tablet:w-full"
              />
            </div>

            {/* SERVICES */}
            <section className="container flex flex-col p-2 mx-auto space-y-12 tablet:absolute tablet:bg-white tablet:space-y-0 tablet:flex-row tablet:justify-between tablet:py-8 tablet:max-w-sm tablet:bg-shadow tablet:shadow-3xl tablet:right-0">
              {/*  IMAGE */}
              <div className="">
                <img
                  src={ladyLight}
                  alt="tailor image"
                  className="hidden h-[200px]  tablet:flex saturate-150 brightness-100 opacity-30 "
                />
              </div>
              {/* SERVICES */}
              <div className="space-y-12 tablet:w-4/5">
                <div className="py-6 space-y-4 tablet:p-8">
                  <div className="space-y-8 tablet:space-y-6 ">
                    <div className="flex flex-col items-left">
                      <div className="footer-border"></div>
                      <h3>SERVICES</h3>
                    </div>
                    <p className="about-p">
                      We design all our garments from scratch, using our
                      expertise to offer our clients affordable tailor-made
                      garments for special occasions, that are not at a premium
                      price. we cater to both individuals, familes and groups -
                      occassions such as
                      <span className="about-span"> weddings </span>,
                      <span className="about-span">anniversaries</span>,
                      birthdays and special celebrations. Our garments include
                      but not limited to, weddings gowns, evening gowns,
                      bridesmaids and groomsmen’s garments and traditional
                      African and Caribbean outfits. we also produce garments
                      for office wear. We look forward to working wih you and
                      producing your special garment, in the near future.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
