//LOGOS
import DarkLogo from "../Components/assets/logos/darklogo.png";
import LightLogo from "../Components/assets/logos/lightlogo.png";

//GIFS
import Location from "../Components/assets/gifs/location.gif";
import Night from "../Components/assets/gifs/night.gif";
import Instagram from "../Components/assets/gifs/instagram.gif";
import FingerPrint from "../Components/assets/gifs/fingerprint.gif";

//IMAGE GALLERY
import img1 from "../Components/assets/images/img1.png";
import img2 from "../Components/assets/images/img2.png";
import img3 from "../Components/assets/images/img3.png";
import img4 from "../Components/assets/images/img4.png";
import img5 from "../Components/assets/images/img5.png";
import img6 from "../Components/assets/images/img6.png";
import img7 from "../Components/assets/images/img7.png";
import img8 from "../Components/assets/images/img8.png";

//NAV LINKS
export interface NavLinkInterface {
  id: number;
  title: string;
  href: string;
  styling: string;
}

export const HomeNav: NavLinkInterface[] = [
  {
    id: 1,
    title: "Home",
    href: "#home",
    styling: "cursor-pointer",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
    styling: "cursor-pointer",
  },
  {
    id: 3,
    title: "Work",
    href: "#work",
    styling: "cursor-pointer",
  },
  {
    id: 4,
    title: "Testimonials",
    href: "#testimonials",
    styling: "cursor-pointer",
  },
  {
    id: 5,
    title: "Contact",
    href: "#contact",
    styling: "cursor-pointer",
  },
];

// IMAGES
export interface ImageInterface {
  id: number;
  imageUrl?: string;
  alt: string;
  version: string;
  loading: string;
}

export const ImageList: ImageInterface[] = [
  {
    id: 1,
    imageUrl: img2,
    alt: "Celebration Event Image",
    version: "image ",
    loading: "lazy",
  },
  {
    id: 2,
    imageUrl: img7,
    alt: "Celebration Event Image",
    version: "image",
    loading: "lazy",
  },
  {
    id: 3,
    imageUrl: img4,
    alt: "Celebration Event Image",
    version: "image",
    loading: "lazy",
  },
  {
    id: 4,
    imageUrl: img3,
    alt: "Celebration Event Image",
    version: "image",
    loading: "lazy",
  },
  {
    id: 5,
    imageUrl: img1,
    alt: "Celebration Event Image",
    version: " image",
    loading: "lazy",
  },
  {
    id: 6,
    imageUrl: img5,
    alt: "Celebration Event Image",
    version: "image object-left",
    loading: "lazy",
  },
  {
    id: 7,
    imageUrl: img6,
    alt: "Celebration Event Image",
    version: "image",
    loading: "lazy",
  },
  {
    id: 8,
    imageUrl: img8,
    alt: "Celebration Event Image",
    version: "image",
    loading: "lazy",
  },
];

// ICONS
interface SpotOnEntepriseContactInterface {
  SPOTONENTERPRISE_INSTAGRAM: string;
  SPOTONENTERPRISE_LOCATION: string;
}

export const SpotOnEntepriseContact: SpotOnEntepriseContactInterface = {
  SPOTONENTERPRISE_LOCATION:
    "https://www.google.com/maps/place/111+East+St,+London/@51.4890573,-0.0916229,17z/data=!4m5!3m4!1s0x4876036188999255:0xc28bbd3db39f349c!8m2!3d51.4890403!4d-0.0916112",
  SPOTONENTERPRISE_INSTAGRAM: "https://www.instagram.com/spotonenterprise/",
};

interface SpotOnEntepriseGifsAndLogosInterface {
  Location: string;
  Night: string;
  Instagram: string;
  FingerPrint: string;
  DarkLogo: string;
  LightLogo: string;
}

// logos
export const SpotOnEntepriseGifsAndLogos: SpotOnEntepriseGifsAndLogosInterface =
  {
    DarkLogo,
    LightLogo,
    Location,
    Instagram,
    Night,
    FingerPrint,
  };

export interface Testimonial {
  id: number;
  text: string;
  date: string;
  img: string;
  name: string;
  version: string;
}

const TestimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Dinaa",
    text: "Excellent tailoring. Neka and Turay are both very humble and skilled at providing an excellent service. They offered the right advice and the best way to approach the design i had in mind and it all came together beautifully. The girls looked amazing in their gold attires and i could not recommend SpotOnEnterprise enough. They are a pleasure to work with.",
    date: "July 5, 2019",
    img: img2,
    version: "slider-section duration-1000",
  },
  {
    id: 2,
    name: "Mr & Mrs Anthony",
    text: "Turay and Neka have an amazing level of service and a very friendly approach. Very professional &amp; their attention to details and patience really made the whole experience worth while was great. Absolutely recommend them to anyone. our wedding attires were great and the experience we recieved from Neka and Turay.",
    date: "November 21, 2020",
    img: img1,
    version: "slider-section ",
  },
  {
    id: 3,
    name: "Mamako",
    text: "I would highly recommend Neka and Turay for any type of tailored occasion purely because of the quality of their services, how patient they are and the fact that they would go far and beyond to meet your needs. Their work speaks for them and they are skilled and passionate at what they do.",
    date: "October 25, 2018",
    img: img7,
    version: "slider-section pl-2 ",
  },
  {
    id: 4,
    name: "Sia",
    text: "It was a pleasure working with SpotOnEnteprise. The girl's dresses fit them perfectly and we all had such a great time in them. Neka made the right alterations and was very patient even with difficult requests. i would highly recommend them to anyone.",
    date: "October 25, 2019",
    img: img6,
    version: "slider-section pl-2",
  },
];

export default TestimonialData;
