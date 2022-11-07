import Conversation from "../../assets/Gifs/Conversation.gif";
import Gift from "../../assets/Gifs/Gift.gif";
import ladyLight from "../../assets/Images/ladyLight.png";

function About(): JSX.Element {
  return (
    <section className="w-full py-6 mb-24 bg-zinc-100">
      <section id="about" className="container p-4 mx-auto max-w-7xl sm:p-6">
        <div className=" tablet:space-y-6">
          <div className="container mx-auto space-y-4 tablet:py-6 tablet:px-40 laptop:px-56 desktop:px-60 laptop:space-y-6 ">
            <h2>ABOUT US</h2>
            <p className="text-center sm:px-0 desktop:px-12">
              We are experienced in delivering a diversity of attractive
              products and quality design that ensure maximum client
              satifaction.
            </p>
          </div>

          {/* SERVICES */}
          <section className="container flex flex-col p-2 mx-auto space-y-12 tablet:space-y-0 tablet:flex-row tablet:justify-between tablet:max-w-3xl tablet:px-7 laptop:px-16 laptop:max-w-4xl">
            {/*  IMAGE */}
            <img
              src={ladyLight}
              alt="tailor image"
              className="hidden tablet:pl-8 h-[340px] mx-auto tablet:flex saturate-150 brightness-100 "
            />

            {/* SERVICES + WOMEN & CHILDREN  */}
            <div className="space-y-12 tablet:px-2 tablet:w-3/5 tablet:space-y-0 ">
              {/* SERVICES */}
              <div className="flex flex-col items-center space-y-4 tablet:space-y-3 tablet:p-6 ">
                <img
                  src={Conversation}
                  alt="Gif of two people having conversation"
                  className="w-8 h-8 "
                />
                <div className="space-y-3 tablet:space-y-6 ">
                  <h3>OUR SERVICES</h3>
                  <p>
                    We design all our garments from scratch, using our expertise
                    to offer our clients affordable tailor-made garments for
                    special occasions, that are not at a premium price. we cater
                    to both individuals, familes and groups - occassions such as
                    weddings, anniversaries, birthdays and special celebrations.
                  </p>
                </div>
              </div>

              {/* WOMEN & CHILDREN */}
              <div className="flex flex-col items-center space-y-4 tablet:space-y-3 tablet:p-6">
                <img
                  src={Gift}
                  alt="Gif of a present wrapped up"
                  className="w-8 h-8 "
                />
                <div className="space-y-4 tablet:space-y-6">
                  <h3 className="mx-16 sm:mx-23 tablet:mx-10 laptop:mx-20">
                    WOMEN & CHILDREN SERVICES
                  </h3>
                  <p>
                    Our garments include but not limited to, weddings gowns,
                    evening gowns, bridesmaids and groomsmen’s garments and
                    traditional African and Caribbean outfits. we also produce
                    garments for office wear. We look forward to working wih you
                    and producing your special garment, in the near future.
                  </p>
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
