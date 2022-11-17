import { RiDoubleQuotesR } from "react-icons/ri";


import Card from "../Shared/Card";

import img1 from "../../assets/Images/img-1.png";
import img2 from "../../assets/Images/img-2.png";
import img7 from "../../assets/Images/img-7.png";

function Testimonials(): JSX.Element {
  return (
    <section
      id="testimonials"
      className="px-3 py-8 space-y-4 mb-28 section-container tablet:px-16 laptop:px-12 sm:px-0"
    >
      <div className="space-y-2">
        <h2>TESTIMONIALS</h2>
      </div>

      <Card className="flex flex-col pr-1 space-y-2 shadow shadow-2xl tablet:flex-row section-container tablet:max-w-2xl laptop:max-w-5xl desktop:max-w-5xl tablet:h-full tablet:pr-0 dark:shadow-gray-100/5">
        {/* LEFT SIDE */}
        <Card className="flex items-center justify-center w-full h-80 bg-[#071C3E] bg-zinc-20 rounded-br-3xl py-20 px-40 tablet:w-1/2 tablet:h-96 laptop:h-[460px] desktop:h-[480px] biggest:h-[520px]">
          {/* inner container */}
          <div className="relative max-w-xs font-serif text-white ">
            {/* ICON CONTAINER */}
            <div className="absolute rounded-full w-9 h-9 bg-emerald-300 -top-4 -left-6 opacity-10 laptop:h-10 laptop:w-10 la desktop:h-12 desktop:w-12 desktop:-top-6 desktop:-left-7"></div>
            {/* ICON */}
            <RiDoubleQuotesR
              className="absolute text-green-400 -top-1 -left-2"
              size={9}
            />
            <h3 className="text-2xl font-bold leading-8 tracking-wide text-left laptop:text-3xl desktop:text-4xl desktop:leading-tight">
              What Our Customers Are Saying
            </h3>
          </div>
        </Card>

        {/* RIGHT SIDE - IMAGES + CUSTOMER FEEDBACK */}
        <Card className="w-full px-6 py-10 mx-auto tablet:w-1/2 tablet:p-4 desktop:p-4 ">
          <div className="px-2 tablet:px-14 tablet:py-12 laptop:px-20 laptop:py-20 desktop:px-24 desktop:py-24">
            <div className=" pb-8 space-y-4 border-b-[1px] tablet:pb-4 tablet:space-y-2 laptop:pb-6 laptop:space-y-5 dark:border-b-zinc-600">
              <h4 className="relative mx-auto text-lg leading-7 text-center tablet:text-[16px] laptop:text-xl desktop:text-2xl">
                Dont Take Our Word For It..
              </h4>
              <p className="font-sans text-[9px] leading-5 tracking-tight text-justify sm:text-xs opacity-40 sm:leading-6 tablet:text-[6px] tablet:leading-3 laptop:text-[8px] laptop:leading-4 biggest:leading-5  biggest:text-[10px]">
                Excellent tailoring. Neka and Turay are both very humble and
                skilled at providing an excellent service. They offered the
                right advice and the best way to approach the design i had in
                mind and it all came together beautifully. The girls looked
                amazing in their gold attires and i could not recommend
                SpotOnEnterprise enough. They are a pleasure to work with.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 space-y-6 tablet:py-5 laptop:py-6">
              {/* image - container */}
              <div className="flex space-x-5">
                {/* left - image */}
                <div className="w-10 h-10 mt-2 overflow-hidden bg-green-400 rounded-full opacity-40 tablet:h-8 tablet:w-8 ">
                  <img
                    src={img7}
                    alt="image of a lady"
                    className="object-cover w-full h-full "
                  />
                </div>
                {/* middle - image */}
                <div className="overflow-hidden bg-green-400 rounded-full w-14 h-14 tablet:h-10 tablet:w-10">
                  <img
                    src={img1}
                    alt="image of a lady"
                    className="object-cover w-full h-full "
                  />
                </div>
                {/* right - image */}
                <div className="w-10 h-10 mt-2 overflow-hidden bg-green-400 rounded-full opacity-40 tablet:h-8 tablet:w-8 ">
                  <img
                    src={img2}
                    alt="image of a lady"
                    className="object-cover w-full h-full "
                  />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1 tablet:space-y-0">
                <h4 className="text-xs tablet:text-[8px]">Mr & Mrs Anthony</h4>
                <h5 className="text-[10px] opacity-30 tablet:text-[7px]">
                  {" "}
                  November 21, 2020
                </h5>
              </div>
            </div>
          </div>
        </Card>
      </Card>
    </section>
  );
}

export default Testimonials;
