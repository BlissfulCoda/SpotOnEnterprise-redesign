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
    <section key={review.id} className={review.version}>
      {/*------ HIDDEN OVERLAY ------*/}
      <div className="w-64 h-[310px] sm:w-80 sm:h-[400px] ml-2 sm:ml-3 space-y-5 rounded-tl-[55px] rounded-br-[60px] bg-[#F8F5FC] dark:bg-[#0B1124]  tablet:h-[300px] tablet:w-64 tablet:ml-12"></div>

      {/*------ MAIN SECTION ------*/}
      <div className=" absolute w-64 h-[310px] sm:w-80 sm:h-[400px] p-4 sm:p-6  ml-6 sm:ml-8 space-y-5 sm:space-y-7 shadow shadow-lg rounded-tl-[55px] rounded-br-[60px] border border-slate-50 dark:border-slate-900 -top-9 z-20 bg-white dark:bg-darkMode tablet:h-[300px] tablet:w-64 tablet:ml-16 tablet:py-4 tablet:px-4 tablet:top-12">
        {/*------ IMAGE ------*/}
        <div className="flex flex-col items-center space-y-5 tablet:pt-0 tablet:space-y-3">
          <div className="flex">
            <span className="border border-slate-300 dark:border-slate-700 rounded-full p-[2px]">
              <img
                src={review.img}
                alt=""
                className="object-cover w-16 h-16 rounded-full sm:w-20 sm:h-20 tablet:w-16 tablet:h-16"
              />
            </span>
          </div>

          {/*------ NAME & DATE ------*/}
          <div className="-space-y-1 font-serif text-center sm:space-y-0">
            <h5 className="text-[9px] sm:text-[11px] tablet:text-[10px]">
              {review.name}
            </h5>
            <h5 className="text-[7px] sm:text-[9px] opacity-40 tablet:text-[8px]">
              {review.date}
            </h5>
          </div>
        </div>
        <div className="space-y-3">
          <div className="w-full border-b-[1px] border-b-slate-200 dark:border-b-gray-800"></div>
          {/*------ PARAGRAPH ------*/}
          <p className="font-serif text-[8px] sm:text-[11px] leading-4 tracking-normal sm:tracking-tight sm:leading-5 text-justify opacity-40 font-semibold tablet:text-[8px] tablet:leading-4 tablet:tracking-normal">
            {review.text}
          </p>
        </div>
      </div>
    </section>
  );
}
