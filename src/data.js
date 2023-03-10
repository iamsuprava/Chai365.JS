// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import FranchiseImg from '../src/assets/img/about/plate2.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'team' },
  { href: '/', name: 'testimonials' },
  { href: '/', name: 'book a table' },
  { href: '/', name: 'contact' },
];

export const heroData = {
  pretitle: 'Your Pocket friendly business',
  title: 'Chai 365',
  subtitle:
    'Best low investment business | Earn upto 1 Lakh to 2 Lakh rupees profit by investing as low as you pay  ',
  btnText: 'Find out more',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'Chai365, Indias tendiest Tea brand started-off from Bengaluru, is now in over 15+ Cities with 45+ Outlets expanded in a span of less than 6 months Tea is the most widely consumed prepared beverage in the world. And Chai365 is here to bring you the perfect version of Indias Favorite Drink.',
  btnText: 'find out more',
  image: AboutImg,
};

export const franchiseData = {
  pretitle: 'our franchise',
  title: 'why you should buy our franchise?',
  subtitle:
    'Chai365, Indias tendiest Tea brand started-off from Bengaluru, is now in over 15+ Cities with 45+ Outlets expanded in a span of less than 6 months Tea is the most widely consumed prepared beverage in the world. And Chai365 is here to bring you the perfect version of Indias Favorite Drink.',
  btnText: 'find out more',
  image: FranchiseImg,
};

export const menuData = {
  title: 'delicious flavour of Chai365',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Chai365',
      price: 'TEA',
      description: 'Elaichi Tea Masala Ginger Lemon Kesar elaichi',
    },
    {
      image: MenuImg2,
      name: 'Chai365',
      price: 'COFFEE',
      description: 'instant filter cold classic caramel kitkat',
    },
    {
      image: MenuImg3,
      name: 'Chai365',
      price: 'SMALL EATS',
      description: 'bun mask butter bread jam biscuit',
    },
    {
      image: MenuImg4,
      name: 'Chai365',
      price: 'HOT MILK',
      description: 'plain turmeric badam hot chocolate',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our Founder',
  sub1: ' "Inspiration to enable regular hardworking middle class people like us to dream big and provide the opportunity to approach, acquire and afford high end products to every individual." | Vishal',
  sub2: '"We encourage & welcome passionate entrepreneurs to start their outlets across the globe but also act as catalyst on their journey towards healthy profits and success.  | Mahesh',
  name: 'Vishal & Mahesh',
  occupation: 'founders',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};

export const reservationData = {
  title: 'Book Chai365 Franchise',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: 'Chai365, S1 & S2, Spice Garden Compound Rd, Spice Garden Layout, Lakshminarayana Pura, Silver Springs Layout, Marathahalli,Bengaluru, Karnataka - 560037',
    phone: '+91-7406077788',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
