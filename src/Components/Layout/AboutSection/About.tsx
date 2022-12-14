import ladyLight from "../../assets/images/ladyLight.png";

function About(): JSX.Element {
  return (
    <section
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-once="true"
      className="w-full py-20 mb-16 border bg-zinc-50 dark-color dark:border-y-slate-800 dark:border-x-0 dark:shadow dark:bg-shadow-xl border-y-slate-100 tablet:mb-40 "
    >
      <section id="about" className="container p-4 mx-auto max-w-7xl sm:p-6">
        <div className=" tablet:space-y-6">
          <div className="container mx-auto space-y-12 tablet:py-6 tablet:px-40 laptop:px-56 desktop:px-60 laptop:space-y-6 ">
            <div className="flex justify-center bg-center bg-cover h-28 ">
              <h2
                data-aos="zoom-out"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
                data-aos-once="true"
                className="w-full h-full pt-8 text-transparent bg-white bg-center bg-cover text-9xl bg-clip-text bg-photo "
              >
                A
              </h2>
            </div>
            <p
              data-aos="fade-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="200"
              data-aos-once="true"
              className="text-center duration-500 sm:px-0 desktop:px-12 opacity-80"
            >
              We are experienced in delivering a diversity of attractive
              products and quality design that ensure maximum client
              satifaction.
            </p>
          </div>

          {/* SERVICES */}
          <section className="container flex flex-col p-2 mx-auto space-y-12 tablet:space-y-0 tablet:flex-row tablet:justify-between tablet:max-w-3xl tablet:px-7 laptop:px-16 laptop:max-w-4xl ">
            {/*  IMAGE */}
            <img
              data-aos="fade-in"
              data-aos-easing="linear"
              data-aos-duration="2000"
              data-aos-delay="300"
              data-aos-once="true"
              src={ladyLight}
              alt="tailor image"
              className="hidden mx-auto tablet:pl-12 laptop:pl-12 h-80 laptop:h-96 tablet:flex saturate-150 brightness-100 dark:brightness-50"
            />

            {/* SERVICES + WOMEN & CHILDREN  */}
            <div className="space-y-12 tablet:px-2 tablet:w-3/5 tablet:space-y-0 ">
              {/* SERVICES */}
              <div
                data-aos="fade-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="300"
                data-aos-once="true"
                className="space-y-12 tablet:w-4/5"
              >
                <div className="py-6 space-y-4 tablet:p-6">
                  <div className="space-y-3 tablet:space-y-6 ">
                    <div className="flex flex-col ">
                      <div className="footer-border"></div>
                      <h3>SERVICES</h3>
                    </div>
                    <p className="tracking-wide opacity-80">
                      We design all our garments from scratch, using our
                      expertise to offer our clients affordable tailor-made
                      garments for special occasions, that are not at a premium
                      price. we cater to both individuals, familes and groups -
                      occassions such as weddings,anniversaries, birthdays and
                      special celebrations. Our garments include but not limited
                      to, weddings gowns evening gowns, bridesmaids and
                      groomsmen???s garments andtraditional African and Caribbean
                      outfits. we also produce garments for office wear. We look
                      forward to working wih you and producing your special
                      garment, in the near future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default About;
