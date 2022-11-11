import HeroImage from "../../../assets/Images/HeroImage.png";

export default function MainImage(): JSX.Element {
  return (
    <div className="relative">
      <img
        src={HeroImage}
        alt="Hero Image"
        className="absolute z-10 h-[790px] -mt-10 duration-1000 contrast-125 sm:absolute-none tablet:right-9 tablet:-mt-12 tablet:h-[600px] laptop:h-[740px] laptop:-mt-20 laptop:right-0 desktop:right-12 
            biggest:right-24
          desktop:-mt-20 object-cover object-center"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-blue-900"></div>
    </div>
  );
}
