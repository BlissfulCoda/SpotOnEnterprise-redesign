interface SpotOnEntepriseContactInterface {
  SPOTONENTERPRISE_INSTAGRAM: string;
  SPOTONENTERPRISE_LOCATION: string;
}

export const SpotOnEntepriseContact: SpotOnEntepriseContactInterface = {
  SPOTONENTERPRISE_LOCATION:
    "https://www.google.com/maps/place/111+East+St,+London/@51.4890573,-0.0916229,17z/data=!4m5!3m4!1s0x4876036188999255:0xc28bbd3db39f349c!8m2!3d51.4890403!4d-0.0916112",
  SPOTONENTERPRISE_INSTAGRAM: "https://www.instagram.com/spotonenterprise/",
};




export interface Testimonial {
  id: number;
  text: string;
  date: string;
  img: string;
  name: string;
}

const TestimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Dinaa",
    text: "Excelent tailoring. Neka and Turay are both very humble and skilled at providing an excellent service. They offered the right advice and the best way to approach the design i had in mind and it all came together beautifully. The girls looked amazing in their gold attires and i could not recommend SpotOnEnterprise enough. They are a pleasure to work with.",
    date: "July 5, 2019",
    img: `'../Components/assets/Images/img-2.png'`,
  },
  {
    id: 2,
    name: "Mr & Mrs Anthony",
    text: "Turay and Neka have an amazing level of service and a very friendly approach. Very professional &amp; their attention to details and patience really made the whole experience worth while was great. Absolutely recommend them to anyone. our wedding attires were great and the experience we recieved from Neka and Turay. we are extremely pleased with them and have recommend our friends when they decide to get married.",
    date: "November 21, 2020",
    img: `'../Components/assets/Images/img-1.png'`,
  },
  {
    id: 3,
    name: "Mamako",
    text: "I would highly recommend Neka and Turay for any type of tailored occasion purely because of the quality of their services, how patient they are and the fact that they would go far and beyond to meet your needs. Their work speaks for them and they are skilled and passionate at what they do.",
    date: "October 25, 2018",
    img: `'../Components/assets/Images/img-7.png'`,
  },
  {
    id: 4,
    name: "Sia",
    text: "It was a pleasure working with SpotOnEnteprise. The girl's dresses fit them perfectly and we all had such a great time in them. Neka made the right alterations and was very patient even with difficult requests. i would highly recommend them to anyone.",
    date: "October 25, 2019",
    img: `'../Components/assets/Images/img-9.png'`,
  },
];

export default TestimonialData;
