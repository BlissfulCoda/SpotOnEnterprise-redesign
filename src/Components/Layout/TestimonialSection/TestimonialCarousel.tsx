import { useState } from "react";

import Card from "../Shared/Card";
import TestimonialData from "../../../Data/ComponentData";
import TestimonialSlides from "./TestimonialSlides";

export default function TestimonialCarousel(): JSX.Element {
  const [selected, setSelected] = useState<number>(1);
  let sliderIndex: number = 0;

  const handleLeftChange = () => {
    const slider = document.querySelector<HTMLSpanElement>(
      ".testimonial-slider"
    )!;
    sliderIndex = sliderIndex > 0 ? sliderIndex - 1 : 0;
    slider.style.transform = `translate( ${sliderIndex * -35}%)`;
  };

  const handleRightChange = () => {
    const slider = document.querySelector<HTMLSpanElement>(
      ".testimonial-slider"
    )!;
    sliderIndex = sliderIndex < 3 ? sliderIndex + 1 : 3;
    slider.style.transform = `translate( ${sliderIndex * -35}%)`;
  };

  const handleSelected = () => {
    console.log("selected");
  };

  return (
    <Card className="w-full px-2 mx-auto tablet:w-1/2 tablet:p-0 tablet:w-96">
      <h4 className="mb-4 font-serif text-base leading-7 text-center opacity-40 sm:text-xl tablet:mb-9 tablet:text-sm tablet:pr-6 tablet:pt-2">
        Don't Take Our Word For It!
      </h4>

      {/*--------- FEEDBACK LINE ---------*/}
      <span className="fixed flex items-center space-x-3 rotate-90 -left-36 top-56 sm:bottom-44 opacity-30 sm:-left-44 tablet:-left-28 tablet:pl-4 tablet:bottom-36">
        <div className="w-52 border-b-[1px] border-b-slate-500 dark:border-b-gray-300 sm:w-64 tablet:w-44"></div>
        <h5 className="text-[11px] sm:text-[15px] tablet:text-[12px] tracking-wide">
          FEEDBACK
        </h5>
      </span>

      {/*--------- SLIDER ----------*/}
      <div className="flex justify-center mb-2 space-x-2">
        <span onClick={handleLeftChange}>left</span>
        <span onClick={handleRightChange}>right</span>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-carousel">
          <div className="testimonial-slider">
            {TestimonialData.map((review) => (
              <TestimonialSlides key={review.id} review={review} />
            ))}
          </div>
          <ul className=" slider-list-container">
            <li className="slider-li" value="1" onClick={handleSelected}></li>
            <li className="slider-li" value="2" onClick={handleSelected}></li>
            <li className="slider-li" value="3" onClick={handleSelected}></li>
            <li className="slider-li" value="4" onClick={handleSelected}></li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
