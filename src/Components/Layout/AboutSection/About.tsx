import Conversation from "../../assets/Gifs/Conversation.gif";
import Gift from "../../assets/Gifs/Gift.gif";
import lady from "../../assets/Images/lady.png";

function About(): JSX.Element {
  return (
    <section
      id="about"
      className="container max-w-6xl p-6 mx-auto mb-24 sm:p-8 "
    >
      <div className=" tablet:space-y-6">
        <div className="container mx-auto space-y-4 tablet:py-6 laptop:px-24 tablet:px-28 laptop:px-52">
          <h2>ABOUT US</h2>
          <p className="text-center sm:px-2">
            We offer a selection of attractive, diverse products and a quality
            designs to ensure maximum client satifaction.
          </p>
        </div>

        {/* SERVICES */}
        <section className="container flex flex-col mx-auto space-y-12 tablet:space-y-0 tablet:flex-row tablet:justify-between tablet:max-w-3xl tablet:px-8 laptop:px-2">
          {/*  IMAGE */}
          <div className="hidden tablet:flex h-[400px] laptop:h-[450px]">
            <img src={lady} alt="tailor image" />
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
                <h3 className="mx-16 sm:mx-24 tablet:mx-12">
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
