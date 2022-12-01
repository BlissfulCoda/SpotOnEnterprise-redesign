import { Children, useMemo } from "react";

function CarouselTestimonials({ children }: any): JSX.Element {
  const slides = useMemo(() => {
    if (children.length > 1) {
      let review = Children.map(Children, (child: any, index) => {
        <li key={index} className="slide">
          {child}
        </li>;
      });
      return [
        <li key={children.length + 1} className="slide">
          {children[children.length - 1]}
        </li>,
        ...review,
        <li key={children.length + 2} className="slide">
          {children[0]}
        </li>,
      ];
    }
    return <li className="slide">{children[0]}</li>;
  }, [Children]);
  return <ul className="flex w-full h-full p-0 m-0 list-none">{slides}</ul>;
}

export default CarouselTestimonials;
