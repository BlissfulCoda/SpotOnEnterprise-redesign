import { motion } from "framer-motion";
interface CustomerReviews {
  id: number;
  text: string;
  date: string;
  img: string;
  name: string;
  version: string;
}

interface ReviewProps {
  review: CustomerReviews;
}

export default function TestimonialSlides({
  review,
}: ReviewProps): JSX.Element {
  return (
    <motion.section className={review.version}>
      {/*------ HIDDEN UNDERLAY ------*/}
      <div className="w-64 h-[320px] sm:w-80 sm:h-[420px] ml-6 sm:ml-3 tablet:ml-0 space-y-5 rounded-tl-[50px] rounded-br-[60px] bg-gradient-to-r from-[#E34CCE] to-[#E39B57] tablet:h-[290px] tablet:w-56 tablet:ml-13 opacity-10 dark:opacity-100 laptop:h-[370px] laptop:w-[260px] desktop:h-[400px] desktop:w-[310px] desktop:-ml-4 biggest:h-[410px] destop:w-[320px] biggest:px-4 biggest:-ml-3 dark:from-[#151D34] dark:to-[#151D34]"></div>

      {/*------ MAIN SECTION ------*/}
      <div className="absolute w-64 h-[320px] sm:w-80 sm:h-[420px]  p-5 sm:p-6 ml-10 sm:ml-8 space-y-5 sm:space-y-7 shadow shadow-lg rounded-tl-[50px] rounded-br-[60px] border border-slate-100 dark:border-slate-900 top-0 sm:-top-4 tablet:-top-1 z-20 bg-white dark:bg-darkMode tablet:h-[290px] tablet:w-56 tablet:ml-4 tablet:py-5 tablet:px-4 laptop:h-[370px] laptop:w-[265px] laptop:py-6 laptop:px-4 laptop:-top-1 laptop:ml-5 desktop:h-[400px] desktop:w-[310px] desktop:ml-2 desktop:-top-4 desktop:px-4 biggest:h-[410px] biggest:w-[320px] biggest:px-5 desktop:py-8 biggest:ml-2 biggest:-top-5 dark:shadow-slate-300/5">
        {/*------ IMAGE ------*/}
        <div className="flex flex-col items-center space-y-5 tablet:pt-1 tablet:space-y-3">
          <div className="flex">
            <span className="border border-slate-300 dark:border-slate-700 rounded-full p-[2px] ">
              <img
                src={review.img}
                alt=""
                className="object-cover w-16 h-16 rounded-full sm:w-20 sm:h-20 tablet:w-16 tablet:h-16 laptop:w-20 laptop:h-20 "
              />
            </span>
          </div>

          {/*------ NAME & DATE ------*/}
          <div className="font-serif text-center -space-y-0 ">
            <h5 className="text-[12px] sm:text-[11px] tablet:text-[10px] laptop:text-xs desktop:text-base">
              {review.name}
            </h5>
            <h5 className="text-[8px] sm:text-[9px] opacity-40 tablet:text-[8px] desktop:text-[10px]">
              {review.date}
            </h5>
          </div>
        </div>
        <div className="space-y-3">
          <div className="w-full border-b-[1px] border-b-slate-200 dark:border-b-gray-800"></div>
          {/*------ PARAGRAPH ------*/}
          <p className="font-serif  text-[8px] sm:text-[12px] leading-4 tracking-normal sm:tracking-tightest sm:leading-5 text-justify opacity-50 font-semibold tablet:text-[7px] tablet:leading-3 tablet:tracking-tightest laptop:text-[10px] laptop:leading-4 laptop:tracking-tightest desktop:text-[12px] desktop:leading-5 desktop:tracking-tighter">
            {review.text}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
