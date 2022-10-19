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
    <div className="flex flex-col items-center justify-center space-y-8 md:p-16 mb-12 text-center ">
      {/* Title & paragraph */}
      <div className="flex flex-col space-y-4">
        <div className="group flex flex-col items-center">
          <h2 className="text-lg text-[#E635ED] uppercase font-bold">
            Our Work
          </h2>
          <div className="mt-2 w-20 opacity-50 border-b-2 border-[#E635ED]"></div>
        </div>
        <p className="text-xs font-serif text-gray-500">
          Bespoke Men and Women garments
        </p>
      </div>
      {/* Image Grid */}
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 px-12 w-full md:w-full md:gap-1 md:px-2">
        {/* Image 1 */}
        <div className="group relative ">
          <img src={img7} alt="imgage 1" className="w-full h-full" />
          <div className="flex flex space-x-1 justify-center items-center absolute bottom-0 top-0 right-0 left-0 bg-black duration-500 opacity-0 group-hover:opacity-80">
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
          </div>
        </div>
        {/* Image 2 */}
        <div className="group relative">
          <img src={img2} alt="imgage 1" className="w-full h-full" />
          <div className="flex flex space-x-1 justify-center items-center absolute bottom-0 top-0 right-0 left-0 bg-black duration-500 opacity-0 group-hover:opacity-80">
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
          </div>
        </div>
        {/* Image 3 */}
        <div className="group relative">
          <img src={img3} alt="imgage 1" className="w-full h-full" />
          <div className="flex flex space-x-1 justify-center items-center absolute bottom-0 top-0 right-0 left-0 bg-black duration-500 opacity-0 group-hover:opacity-80">
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
          </div>
        </div>
        {/* Image 4 */}
        <div className="group relative">
          <img src={img6} alt="imgage 1" className="w-full h-full" />
          <div className="flex flex space-x-1 justify-center items-center absolute bottom-0 top-0 right-0 left-0 bg-black duration-500 opacity-0 group-hover:opacity-80">
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
          </div>
        </div>
        {/* Image 5 */}
        <div className="group relative">
          <img src={img4} alt="imgage 1" className="w-full" />
          <div className="flex flex space-x-1 justify-center items-center absolute bottom-0 top-0 right-0 left-0 bg-black duration-500 opacity-0 group-hover:opacity-80">
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
          </div>
        </div>
        {/* Image 6 */}
        <div className="group relative">
          <img src={img1} alt="imgage 1" className="w-full h-full" />
          <div className="flex flex space-x-1 justify-center items-center absolute bottom-0 top-0 right-0 left-0 bg-black duration-500 opacity-0 group-hover:opacity-80">
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
          </div>
        </div>
        {/* Image 7 */}
        <div className="group relative lg:col-span-none ">
          <img src={img5} alt="imgage 1" className="w-full md:h-full" />
          <div className="flex flex space-x-1 justify-center items-center absolute bottom-0 top-0 right-0 left-0 bg-black duration-500 opacity-0 group-hover:opacity-80">
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
          </div>
        </div>
        {/* Image 8 */}
        <div className="group relative lg:col-span-2">
          <img src={img8} alt="imgage 1" className="h-full w-full" />
          <div className="flex flex space-x-1 justify-center items-center absolute bottom-0 top-0 right-0 left-0 bg-black duration-500 opacity-0 group-hover:opacity-80">
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
            <div className="bg-red-500 w-2 h-2 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
