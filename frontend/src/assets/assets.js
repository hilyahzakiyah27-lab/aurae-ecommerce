import img1 from "./baju1.jpeg";
import img2 from "./baju2.jpeg";
import img3 from "./baju3.jpeg";
import img4 from "./baju 4.jpeg";
import img5 from "./koko1.jpeg";
import img6 from "./koko2.jpeg";
import img7 from "./koko3.jpeg";
import img8 from "./koko4.jpeg";
import img9 from "./anak1.jpeg";
import img10 from "./anak2.jpeg";
import img11 from "./anak3.jpeg";
import img12 from "./anak4.jpeg";
import img13 from "./anak5.jpeg";
import img14 from "./anak6.jpeg";
import img15 from "./anak7.jpeg";
import img16 from "./anak8.jpeg";
import img17 from "./jlbank1.jpeg";
import img18 from "./jlbank2.jpeg";
import img19 from "./jlbank3.jpeg";
import img20 from "./jilbab1.jpeg";
import img21 from "./jilbab2.jpeg";
import img22 from "./jilbab3.jpeg";
import img23 from "./jilbab4.jpeg";
import img24 from "./rok1.jpeg";
import img25 from "./rok2.jpeg";
import img26 from "./kaos1.jpeg";
import img27 from "./kaos2.jpeg";

import logo from "./logo.jpeg";
import hero from "./hero.jpeg";
import cart from "./cart.png";
import contact from "./contact.jpg";
import menu from "./menu.png";
import bin from "./bin.png";
import dropdown from "./dropdown.png";
import quality from "./quality.png";
import exchange from "./exchange.png";
import user from "./user.png";
import star from "./star.png";
import search from "./search.png";
import seabank from "./seabank.png";
import stardull from "./stardull.png";
import bri from "./BRI.jpg";
import about from "./about.jpeg";
import close from "./close.png";
import support from "./support.png";

export const assets = {
  logo,
  contact,
  about,
  close,
  stardull,
  hero,
  cart,
  support,
  quality,
  menu,
  bin,
  dropdown,
  exchange,
  user,
  star,
  search,
  seabank,
  bri,
};

export const products = [
  {
    id: "aaaaa",
    name: "Aluna Dress",
    description:
      "Elegant Muslim dress for women with a modern, minimalist, and graceful design. Features a modest loose fit that provides comfort and effortless movement.",
    price: "100",
    image: [img1],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 1,
    bestseller: true,
  },
  {
    id: "aaaab",
    name: "Nayla Dress",
    description:
      "Modern modest dress for women with a simple, elegant, and timeless look. Designed with a comfortable silhouette for everyday use and special occasions.",
    price: "110",
    image: [img2],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 2,
    bestseller: true,
  },
  {
    id: "aaaac",
    name: "Aira Abaya",
    description:
      "Elegant women's abaya with a clean, premium, and minimalist design. The loose and flowing silhouette creates a graceful modest look while providing all-day comfort.",
    price: "120",
    image: [img3],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 123456,
    bestseller: true,
  },
  {
    id: "aaaad",
    name: "Zahra Dress",
    description:
      "Modern Muslim dress with a feminine, simple, and elegant style. Designed for comfort and modest coverage with a beautiful flowing silhouette.",
    price: "100",
    image: [img4],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 123457,
    bestseller: false,
  },
  {
    id: "aaaae",
    name: "Rayyan muslim shirt",
    description: "",
    price: "100",
    image: [img5, img6],
    category: "Men",
    subCategory: "Shirt",
    sizes: ["S", "M", "L"],
    date: 123458,
    bestseller: false,
  },
  {
    id: "aaaaf",
    name: "Zayn muslim shirt",
    description: "",
    price: "90",
    image: [img7, img8],
    category: "Men",
    subCategory: "Shirt",
    sizes: ["S", "M", "L"],
    date: 123459,
    bestseller: false,
  },
  {
    id: "aaaag",
    name: "Rafi Kids Shirt",
    description:
      "Stylish Muslim shirt for boys with a simple and comfortable design.",
    price: "80",
    image: [img9, img10, img11, img12],
    category: "Kids",
    subCategory: "Shirt",
    sizes: ["S", "M", "L"],
    date: 123460,
    bestseller: false,
  },
  {
    id: "aaaah",
    name: "Little Amara Dress",
    description:
      "Beautiful girls' dress with a cute, elegant, and comfortable design. Features a modest long silhouette, soft fabric, and a lovely feminine look.",
    price: "100",
    image: [img13, img14],
    category: "Kids",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 123461,
    bestseller: false,
  },
  {
    id: "aaaai",
    name: "Litle Luna Dress",
    description:
      "Beautiful girls' dress with a cute, elegant, and comfortable design. Features a modest long silhouette, soft fabric, and a lovely feminine look.",
    price: "100",
    image: [img15, img16],
    category: "Kids",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 123462,
    bestseller: true,
  },
  {
    id: "aaaaj",
    name: "Safiya Hijab",
    description:
      "Elegant women's hijab with a soft, modern, and sophisticated appearance.",
    price: "50",
    image: [img17, img18, img19],
    category: "Kids",
    subCategory: "Hijab",
    sizes: ["S", "M", "L"],
    date: 123463,
    bestseller: false,
  },
  {
    id: "aaaak",
    name: "Aira Hijab",
    description: "Minimalist women's hijab with a clean and versatile design.",
    price: "70",
    image: [img20, img21],
    category: "Women",
    subCategory: "Hijab",
    sizes: ["S", "M", "L"],
    date: 123464,
    bestseller: false,
  },
  {
    id: "aaaal",
    name: "Hana Hijab",
    description: "Minimalist women's hijab with a clean and versatile design.",
    price: "70",
    image: [img22, img23],
    category: "Women",
    subCategory: "Hijab",
    sizes: ["S", "M", "L"],
    date: 123465,
    bestseller: false,
  },
  {
    id: "aaaam",
    name: "Luna Maxi Skirt",
    description:
      "Elegant women's maxi skirt with a long, flowing, and modest silhouette. Comfortable and easy to style with blouses, tunics, shirts, or hijabs.",
    price: "70",
    image: [img24, img25],
    category: "Women",
    subCategory: "Skirt",
    sizes: ["S", "M", "L"],
    date: 123466,
    bestseller: false,
  },
  {
    id: "aaaan",
    name: "Basic Tee",
    description:
      "Elegant women's maxi skirt with a long, flowing, and modest silhouette. Comfortable and easy to style with blouses, tunics, shirts, or hijabs.",
    price: "70",
    image: [img26, img27],
    category: "Women",
    subCategory: "T-shirt",
    sizes: ["S", "M", "L"],
    date: 123467,
    bestseller: false,
  },
];
