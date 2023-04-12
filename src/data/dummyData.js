import { AirConIcon, FriggedIcon, GasIcon, MicrowavesIcon, OthersIcon, OvensIcon } from "@/components/Icons";

const getRandomOf = (list) => {
  return Math.floor(Math.random() * list?.length - 1);
};

export const getItemById = (list, itemId) => {
  return list?.find((item) => +item?.id === +itemId);
};
export const getOfferById = (list, itemId) => {
  console.log(list, itemId)
  return list?.find((item) => +item?.offerNumber === +itemId);
};
export const links = [
  { name: "home", link: "/" },
  { name: "services", link: "/services" },
  { name: "request_services", link: "/request-services" },
  { name: "contact", link: "/contact" },
];

export const services = [
  { name: "kitchen", img: "/images/services/1.png" },
  { name: "decoration", img: "/images/services/2.png" },
  { name: "electricity", img: "/images/services/3.png" },
  { name: "electrical", img: "/images/services/4.png" },
  { name: "plumbing", img: "/images/services/5.png" },
  { name: "carpentry", img: "/images/services/6.png" },
  { name: "furniture", img: "/images/services/7.png" },
  { name: "paint", img: "/images/services/8.png" },
];

export const latestProjects = [
  {
    title: "electricity",
    description: "electricity_description",
    img: "/images/projects/1.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/2.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/3.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/4.png",
  },
  {
    title: "electricity",
    description: "electricity_description",
    img: "/images/projects/1.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/2.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/3.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/4.png",
  },
  {
    title: "electricity",
    description: "electricity_description",
    img: "/images/projects/1.png",
  },

  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/2.png",
  },

  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/3.png",
  },

  {
    title: "plumbing",
    description: "plumbing_description",
    img: "/images/projects/4.png",
  },
];

export const ourTeam = [
  {
    name: "John Martin",
    position: "Electrician",
    img: "/images/projects/1.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
  {
    name: "John Martin",
    position: "Cleaner",
    img: "/images/projects/2.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
  {
    name: "John Martin",
    position: "Plumper",
    img: "/images/projects/3.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
  {
    name: "John Martin",
    position: "Plumper",
    img: "/images/projects/4.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
  {
    name: "John Martin",
    position: "Electrician",
    img: "/images/projects/1.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
];

export const electrics = [
  {
    name: "refrigerators",
    icon: <FriggedIcon />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",
  },
  {
    name: "ovens",
    icon: <OvensIcon />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",
  },
  {
    name: "conditioners",
    icon: <AirConIcon />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",
  },
  {
    name: "microwaves",
    icon: <MicrowavesIcon />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",
  },
  {
    name: "gas",
    icon: <GasIcon />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
  {
    name: "others",
    icon: <OthersIcon />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
];

export const serviceProviders = [
  {
    id: 1,
    image: "/images/projects/1.png",
    name: "John Doe",
    favorite: true,
    rating: 4,
    hourPrice: 50,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 2,
    image: "/images/projects/2.png",
    name: "Jane Smith",
    favorite: false,
    rating: 3,
    hourPrice: 60,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 3,
    image: "/images/projects/3.png",
    name: "Bob Johnson",
    favorite: true,
    rating: 5,
    hourPrice: 75,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 4,
    image: "/images/projects/5.png",
    name: "Sarah Lee",
    favorite: false,
    rating: 4,
    hourPrice: 65,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 5,
    image: "/images/projects/4.png",
    name: "Tom Wilson",
    favorite: true,
    rating: 4,
    hourPrice: 55,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 6,
    image: "/images/projects/2.png",
    name: "Emily Wang",
    favorite: false,
    rating: 5,
    hourPrice: 80,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 7,
    image: "/images/projects/3.png",
    name: "Jack Chen",
    favorite: true,
    rating: 3,
    hourPrice: 45,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 8,
    image: "/images/projects/4.png",
    name: "Maggie Li",
    favorite: false,
    rating: 4,
    hourPrice: 70,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 9,
    image: "/images/projects/5.png",
    name: "Ryan Zhang",
    favorite: true,
    rating: 5,
    hourPrice: 90,
    services: electrics?.[getRandomOf(electrics)],
  },
  {
    id: 10,
    image: "/images/projects/1.pngg",
    name: "Sophia Wu",
    favorite: false,
    rating: 4,
    hourPrice: 60,
    services: electrics?.[getRandomOf(electrics)],
  },
];

export const companies = [
  {
    id: 1,

    name: "Acme Corporation",
    image: "/images/companies/Bitmap.png",
  },
  {
    id: 2,

    name: "Globex Corporation",
    image: "/images/companies/Bitmap-1.png",
  },
  {
    id: 3,

    name: "Initech Corporation",
    image: "/images/companies/Bitmap-2.png",
  },
  {
    id: 4,

    name: "Stark Industries",
    image: "/images/companies/Bitmap-1.png",
  },
  {
    id: 5,

    name: "Wayne Enterprises",
    image: "/images/companies/Bitmap-2.png",
  },
  {
    id: 6,

    name: "Umbrella Corporation",
    image: "/images/companies/Bitmap-1.png",
  },
  {
    id: 7,

    name: "Oscorp Industries",
    image: "/images/companies/Bitmap-2.png",
  },
  {
    id: 8,

    name: "Aperture Science",
    image: "/images/companies/Bitmap-1.png",
  },
  {
    id: 9,

    name: "Weyland-Yutani Corporation",
    image: "/images/companies/Bitmap-2.png",
  },
  {
    id: 10,

    name: "Gekko & Co.",
    image: "/images/companies/Bitmap.png",
  },
];

export const reviews = [
  {
    id: 1,
    name: "John Smith",
    image: "/images/clients/Ellipse 182.png",
    date: "2023-04-08",
    rating: 4,
    comment: "Great product, works as advertised!",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "/images/clients/Group 3.png",
    date: "2023-04-07",
    rating: 2,
    comment: "This product did not meet my expectations.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    image: "/images/clients/Ellipse 180.png",
    date: "2023-04-05",
    rating: 5,
    comment: "I am very happy with my purchase!",
  },
];

export const offers = [
  {
    name: "Summer Sale",
    offerNumber: "725319",
    date: "2023-06-01",
    image: "/images/18571126_303.png",
  },
  {
    name: "Back to School",
    offerNumber: "834967",
    date: "2023-08-15",
    image: "/images/18571126_303.png",
  },
  {
    name: "Holiday Deals",
    offerNumber: "619532",
    date: "2023-12-01",
    image: "/images/18571126_303.png",
  },
  {
    name: "Black Friday Deals",
    offerNumber: "984563",
    date: "2023-11-24",
    image: "/images/18571126_303.png",
  },
  {
    name: "New Year Clearance",
    offerNumber: "752369",
    date: "2024-01-01",
    image: "/images/18571126_303.png",
  },
  {
    name: "Spring Specials",
    offerNumber: "135790",
    date: "2024-04-01",
    image: "/images/18571126_303.png",
  },
];

// const images = [
//   '/images/items/image 2.png',
//   '/images/items/image 3.png',
//   '/images/items/image 4.png',
//   '/images/items/image 5.png',
// ];
// const categories = [
//   '/images/categories/1.png',
//   '/images/categories/2.jpg',
//   '/images/categories/3.png',
//   '/images/categories/4.png',
//   '/images/categories/5.png',
// ];
// const random = (num) => Math.floor(Math.random() * num);

// export const Categories = [
//   {
//     name: 'Packages',
//     slug: 'packages',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[0],
//   },
//   {
//     name: 'Clothes',
//     slug: 'clothes',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[1],
//   },
//   {
//     name: 'Shoes',
//     slug: 'shoes',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[2],
//   },
//   {
//     name: 'uncategories',
//     slug: 'uncategories',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[3],
//   },
//   {
//     name: 'Electronics',
//     slug: 'electronics',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[4],
//   },
//   {
//     name: 'Packages',
//     slug: 'packages',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[0],
//   },
//   {
//     name: 'Clothes',
//     slug: 'clothes',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[1],
//   },
//   {
//     name: 'Shoes',
//     slug: 'shoes',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[2],
//   },
//   {
//     name: 'uncategories',
//     slug: 'uncategories',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[3],
//   },
//   {
//     name: 'Electronics',
//     slug: 'electronics',
//     product_length: Math.floor(Math.random() * 24),
//     img: categories[4],
//   },
// ];

// export const menuItems = [
//   { name: 'Menu' },
//   { name: 'Best Seller' },
//   { name: 'New arrival' },
//   { name: 'About us', slug: 'about-us' },
//   { name: 'Contact us', slug: 'contact-us' },
// ];
// export const menuItemsFooter = [
//   { name: 'Menu', slug: 'menu' },
//   { name: 'Best Seller', slug: 'best-seller' },
//   { name: 'New arrival', slug: 'new-arrival' },
//   { name: 'About us', slug: 'about-us' },
//   { name: 'Contact us', slug: 'contact-us' },
// ];

// export const newArrivalList = [
//   { name: 'ICE-CREAM TORTES', slug: 'ICE-CREAM-TORTES' },
//   { name: 'TORTES', slug: 'TORTES' },
//   { name: 'BITES', slug: 'BITES' },
//   { name: 'GATEAUX LUX', slug: 'GATEAUX-LUX' },
// ];

// export const bestSellerList = [
//   { name: 'TORTES', slug: 'TORTES' },
//   { name: 'ORIENTAL', slug: 'ORIENTAL' },
//   { name: 'CHOCOLATE', slug: 'CHOCOLATE' },
//   { name: 'BAKERY', slug: 'BAKERY' },
//   { name: 'GATEAUX', slug: 'GATEAUX' },
//   { name: 'MINI SANDWICHES', slug: 'MINI SANDWICHES' },
//   { name: 'COOKIES', slug: 'COOKIES' },
// ];

// export const userSettingsMenu = [
//   { name: 'my account', slug: 'profile' },
//   { name: 'my wishlist', slug: 'profile/wishlist' },
//   { name: 'my orders', slug: 'profile/orders' },
//   { name: 'my addresses', slug: 'profile/addresses' },
// ];

// export const useFulLinks = [
//   { name: 'privacy policy', slug: 'privacy-policy' },
//   { name: 'termes & conditions', slug: 'termes&conditions' },
//   { name: 'support', slug: 'support' },
// ];

// export const locations = [
//   {
//     name: 'Port Said Street  ',
//     street:
//       'Port Said St, Al Mansi, Bab El Sharia, Downtown Cairo, Cairo, Egypt  ',
//     phone: '19918',
//   },
//   {
//     name: 'Al Hosary  ',
//     street:
//       '425 , El Mehwar El Markazi, Behind 6th October University, Giza, Egypt  ',
//     phone: '19918',
//   },
//   {
//     name: 'Genena Mall - Nasr City  ',
//     street: 'Al Manteqah Al Oula, Nasr City, Nasr City,  Cairo, Egypt',
//     phone: '19918',
//   },
//   {
//     name: 'Port Said Street  ',
//     street:
//       'Port Said St, Al Mansi, Bab El Sharia, Downtown Cairo, Cairo, Egypt  ',
//     phone: '19918',
//   },
//   {
//     name: 'Al Hosary  ',
//     street:
//       '425 , El Mehwar El Markazi, Behind 6th October University, Giza, Egypt  ',
//     phone: '19918',
//   },
//   {
//     name: 'Genena Mall - Nasr City  ',
//     street: 'Al Manteqah Al Oula, Nasr City, Nasr City,  Cairo, Egypt',
//     phone: '19918',
//   },
// ];

// export const products = [
//   {
//     id: 1,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 200,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[0],
//   },
//   {
//     id: 2,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 540,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: true,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[0],
//   },
//   {
//     id: 3,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 123,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: false,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[1],
//   },
//   {
//     id: 42,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: false,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: true,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[1],
//   },
//   {
//     id: 42,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: false,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[2],
//   },
//   {
//     id: 46,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: true,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[2],
//   },
//   {
//     id: 6,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: true,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[3],
//   },
//   {
//     id: 14,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: false,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: true,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[3],
//   },
//   {
//     id: 24,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: false,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: true,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[4],
//   },
//   {
//     id: 34,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[4],
//   },
//   {
//     id: 454,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: true,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[5],
//   },
//   {
//     id: 453,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 454,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 4512,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 4435,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 4535,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 4512,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 4345,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 4215,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 4545,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 45431,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
//   {
//     id: 43235,
//     title: 'white forest torte',
//     description:
//       'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
//     price: 453,
//     img: images[Math.floor(Math.random() * (images.length - 1))],
//     discount: Math.floor(Math.random() * 15),
//     inWishlist: true,
//     rating: Math.floor(Math.random() * 6),
//     in_stock: false,
//     size: Math.max(33, Math.floor(Math.random() * 50), 50),
//     category: Categories[6],
//   },
// ];
// export const cart = [
//   { id: 1, productId: 1, quantity: 2, price: 200 },
//   { id: 2, productId: 2, quantity: 4, price: 540 },
//   { id: 3, productId: 3, quantity: 3, price: 123 },
//   { id: 4, productId: 45, quantity: 2, price: 453 },
//   { id: 5, productId: 46, quantity: 4, price: 453 },
//   { id: 6, productId: 34, quantity: 4, price: 453 },
// ];

// export const getItemById = (productId) => {
//   console.log(productId);
//   let item = products.find((product) => product.id === +productId);
//   console.log(productId);
//   return item;
// };
// export const calculateTotal = (items) => {
//   if (items?.length)
//     return items.reduce((result, cur) => {
//       return result + cur.quantity * cur.price;
//     }, 0);
// };
// const statusDelivery = ['Completed', 'Delivered', 'Pending', 'Canceled'];
// export const orders = [
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
//   {
//     id: random(2545),
//     status: statusDelivery[random(statusDelivery.length - 1)],
//     date: new Date(),
//     items: products.slice(0, random(4)),
//     total: this?.item ? calculateTotal(this.items) : random(3000),
//   },
// ];

// export const addresses = [
//   {
//     id: 1,
//     name: 'Damitta 1',
//     city: 'Cairo',
//     country: 'Egypt',
//     street: 'El Shrabassy St , Damietta',
//     default: true,
//   },

//   {
//     id: 2,
//     name: 'Damitta 1',
//     city: 'Cairo',
//     country: 'Egypt',
//     street: 'El Shrabassy St , Damietta',
//     default: true,
//   },

//   {
//     id: 3,
//     name: 'Damitta 1',
//     city: 'Cairo',
//     country: 'Egypt',
//     street: 'El Shrabassy St , Damietta',
//     default: true,
//   },

//   {
//     id: 4,
//     name: 'Damitta 1',
//     city: 'Cairo',
//     country: 'Egypt',
//     street: 'El Shrabassy St , Damietta',
//     default: true,
//   },
// ];
