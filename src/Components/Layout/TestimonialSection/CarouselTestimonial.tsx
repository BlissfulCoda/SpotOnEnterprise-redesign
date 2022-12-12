import Card from "../Shared/Card";
import img1 from "../../assets/Images/img-1.png";
import img2 from "../../assets/Images/img-2.png";
import img7 from "../../assets/Images/img-7.png";

export default function CarouselTestimonial(): JSX.Element {
  return (
    <Card className="w-full px-4 mx-auto tablet:w-1/2 tablet:p-0 tablet:w-96">
      <h4 className="font-serif text-base leading-7 text-center mb-9 opacity-40 sm:text-xl tablet:mb-9 tablet:text-sm tablet:pr-6 tablet:pt-2">
        Don't Take Our Word For It!
      </h4>

      {/*--------- FEEDBACK LINE ---------*/}
      <span className="absolute flex items-center space-x-3 rotate-90 -left-36 bottom-36 sm:bottom-44 opacity-30 sm:-left-44 tablet:-left-28 tablet:pl-4 tablet:bottom-36">
        <div className="w-52 border-b-[1px] border-b-slate-500 dark:border-b-gray-300 sm:w-64 tablet:w-44"></div>
        <h5 className="text-[11px] sm:text-[15px] tablet:text-[12px] tracking-wide">
          FEEDBACK
        </h5>
      </span>

      {/*--------- SLIDER ----------*/}
      <section className="mb-12 tablet:mb-8">
        {/*------ HIDDEN OVERLAY ------*/}
        <div className="w-64 h-[310px] sm:w-80 sm:h-[400px] ml-2 sm:ml-3 space-y-5 rounded-tl-[55px] rounded-br-[60px] bg-[#F8F5FC] dark:bg-[#0B1124]  tablet:h-[300px] tablet:w-64 tablet:ml-12"></div>

        {/*------ MAIN SECTION ------*/}
        <div className=" absolute w-64 h-[310px] sm:w-80 sm:h-[400px] p-4 sm:p-6  ml-6 sm:ml-8 space-y-5 sm:space-y-7 shadow shadow-lg rounded-tl-[55px] rounded-br-[60px] border border-slate-50 dark:border-slate-900 top-12 z-20 bg-white dark:bg-darkMode tablet:h-[300px] tablet:w-64 tablet:ml-16 tablet:py-4 tablet:px-4 tablet:top-12">
          {/*------ IMAGE ------*/}
          <div className="flex flex-col items-center pt-1 space-y-5 tablet:pt-0 tablet:space-y-3">
            <div className="flex">
              <span className="border border-slate-300 dark:border-slate-700 rounded-full p-[2px]">
                <img
                  src={img2}
                  alt=""
                  className="object-cover w-16 h-16 rounded-full sm:w-20 sm:h-20 tablet:w-16 tablet:h-16"
                />
              </span>
            </div>

            {/*------ NAME & DATE ------*/}
            <div className="-space-y-1 font-serif text-center sm:space-y-0">
              <h5 className="text-[9px] sm:text-[11px] tablet:text-[10px]">
                Mr & Mrs Anthony
              </h5>
              <h5 className="text-[7px] sm:text-[9px] opacity-40 tablet:text-[8px]">
                November 21, 2020
              </h5>
            </div>
          </div>
          <div className="space-y-3">
            <div className="w-full border-b-[1px] border-b-slate-200 dark:border-b-gray-800"></div>
            {/*------ PARAGRAPH ------*/}
            <p className="font-serif text-[8px] sm:text-[11px] leading-4 tracking-normal sm:tracking-tight sm:leading-5 text-justify opacity-40 font-semibold tablet:text-[8px] tablet:leading-4 tablet:tracking-normal">
              Excellent tailoring. Neka and Turay are both very humble and
              skilled at providing an excellent service. They offered the right
              advice and the best way to approach the design i had in mind and
              it all came together beautifully. The girls looked amazing in
              their gold attires and i could not recommend SpotOnEnterprise
              enough. They are a pleasure to work with.
            </p>
          </div>
        </div>
      </section>
    </Card>
  );
}
