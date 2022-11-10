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
      className="container px-6 py-12 mx-auto space-y-6 duration-1000 tablet:px-0 sm:p-2 laptop:-space-y-4 biggest:max-w-6xl"
    >
      <div className="container mx-auto laptop:px-24 tablet:px-40 laptop:px-52">
        <h2>WHAT WE OFFER</h2>
        
      </div>
      <section className="relative grid-container">
        <img src={img2} alt="" className="image" />
        <img src={img7} alt="" className="image" />
        <img src={img4} alt="" className="image" />
        <img src={img3} alt="" className="image" />
        <img src={img1} alt="" className="image" />
        <img src={img5} alt="" className="object-left image" />
        <img src={img6} alt="" className="image" />
        <img src={img8} alt="" className="image" />
      </section>
    </section>
  );
}

export default OurWork;
