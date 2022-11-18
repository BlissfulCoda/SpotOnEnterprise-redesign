import img1 from "../../assets/Images/img-1.png";
import img2 from "../../assets/Images/img-2.png";
import img3 from "../../assets/Images/img-3.png";
import img4 from "../../assets/Images/img-4.png";
import img5 from "../../assets/Images/img-5.png";
import img6 from "../../assets/Images/img-6.png";
import img7 from "../../assets/Images/img-7.png";
import img8 from "../../assets/Images/img-8.png";

function OurWork(): JSX.Element {
  return (
    <section
      id="work"
      className="container px-6 py-12 mx-auto mb-24 space-y-6 duration-1000 tablet:px-0 sm:p-2 laptop:-space-y-4 biggest:max-w-6xl"
    >
      <div className="container mx-auto tablet:px-40 laptop:px-56">
        <h2>WHAT WE OFFER</h2>
      </div>
      <section className="relative grid-container tablet:px-4 laptop:px-12 desktop:px-16">
        <div className="">
          <img src={img2} alt="Image of a client" className="image" />
        </div>
        <div className="">
          <img
            loading="lazy"
            src={img7}
            alt="Image of a client in our clothes"
            className="image"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src={img4}
            alt="Image of a client in our clothes"
            className="image"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src={img3}
            alt="Image of a client in our clothes"
            className="image"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src={img1}
            alt="Image of a client in our clothes"
            className="image"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src={img5}
            alt="Image of a client in our clothes"
            className="object-left image"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src={img6}
            alt="Image of a client in our clothes"
            className="image"
          />
        </div>
        <div className="bg-green-300">
          <img
            loading="lazy"
            src={img8}
            alt="Image of a client in our clothes"
            className="image"
          />
        </div>
      </section>
    </section>
  );
}

export default OurWork;
