import Card from "../Shared/Card";
import TestimonialData from "../../../Data/ComponentData";
import CarouselTestimonials from "./CarouselTestimonials";

export default function Carousel(): JSX.Element {
  const reviews = TestimonialData.map((review) => {
    const { img, name, text, id, date } = review;
    return (
      <Card
        key={id}
        className="w-full px-6 py-10 mx-auto tablet:w-1/2 tablet:p-4 desktop:p-4 "
      >
        <div className="px-2 tablet:px-14 tablet:py-12 laptop:px-20 laptop:py-20 desktop:px-24 desktop:py-24">
          <div className=" pb-8 space-y-4 border-b-[1px] tablet:pb-4 tablet:space-y-2 laptop:pb-6 laptop:space-y-5 dark:border-b-zinc-600">
            <p className="font-sans text-[9px] leading-5 tracking-tight text-justify sm:text-xs opacity-40 sm:leading-6 tablet:text-[6px] tablet:leading-3 laptop:text-[8px] laptop:leading-4 biggest:leading-5  biggest:text-[10px]">
              {text}
            </p>
          </div>
        </div>
      </Card>
    );
  });
  return (
    <section>
      <CarouselTestimonials>{reviews}</CarouselTestimonials>
    </section>
  );
}
