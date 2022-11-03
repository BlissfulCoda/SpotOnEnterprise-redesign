import Conversation from "../../assets/Gifs/Conversation.gif";
import Gift from "../../assets/Gifs/Gift.gif";
import ladyLight from "../../assets/Images/ladyLight.png";
import ladyDark from "../../assets/Images/ladyDark.png";

function About(): JSX.Element {
  return (
    <section
      id="about"
      className="container p-6 mx-auto mb-20 max-w-7xl sm:p-14 "
    >
      <div className=" tablet:space-y-10">
        <div className="container mx-auto space-y-4 tablet:py-6 laptop:px-24 tablet:px-28 laptop:px-52">
          <h2>ABOUT US</h2>
          <p className="text-lg text-center sm:text-2xl opacity-20">
            Experienced and Friendly
          </p>
        </div>

        {/* SERVICES */}
        <section className="container flex flex-col mx-auto space-y-12 tablet:space-y-0 tablet:flex-row tablet:justify-between tablet:max-w-3xl tablet:px-4 laptop:px-10 laptop:max-w-4xl desktop:px-6">
          {/*  IMAGE */}
          <div className="hidden tablet:flex h-[400px] laptop:h-[450px] saturate-100 brightness-100">
            <img src={ladyLight} alt="tailor image" />
          </div>

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
                <p className="tablet:text-xs tablet:leading-6 laptop:text-sm laptop:leading-7">
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
                <h3 className="mx-16 sm:mx-24 tablet:mx-8 laptop:mx-20">
                  WOMEN & CHILDREN SERVICES
                </h3>
                <p className="tablet:text-xs tablet:leading-6 laptop:text-sm laptop:leading-7">
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
  );
}

export default About;
