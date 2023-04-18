import {
  AirConIcon,
  FriggedIcon,
  GasIcon,
  MicrowavesIcon,
  OthersIcon,
  OvensIcon,
} from "@/components/Icons";

const getRandomOf = (list) => {
  return Math.floor(Math.random() * list?.length);
};

export const getItemById = (list, itemId) => {
  return list?.find((item) => +item?.id === +itemId);
};
export const getOfferById = (list, itemId) => {
  console.log(list, itemId);
  return list?.find((item) => +item?.offerNumber === +itemId);
};
export const links = [
  { name: "home", link: "/" },
  { name: "services", link: "/services" },
  { name: "request_services", link: "/request-services" },
  { name: "contact", link: "/contact" },
];

export const services = [
  { name: "kitchen", image: "/images/services/1.png" },
  { name: "decoration", image: "/images/services/2.png" },
  { name: "electricity", image: "/images/services/3.png" },
  { name: "electrical", image: "/images/services/4.png" },
  { name: "plumbing", image: "/images/services/5.png" },
  { name: "carpentry", image: "/images/services/6.png" },
  { name: "furniture", image: "/images/services/7.png" },
  { name: "paint", image: "/images/services/8.png" },
];

export const latestProjects = [
  {
    title: "electricity",
    description: "electricity_description",
    image: "/images/projects/1.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/2.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/3.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/4.png",
  },
  {
    title: "electricity",
    description: "electricity_description",
    image: "/images/projects/1.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/2.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/3.png",
  },
  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/4.png",
  },
  {
    title: "electricity",
    description: "electricity_description",
    image: "/images/projects/1.png",
  },

  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/2.png",
  },

  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/3.png",
  },

  {
    title: "plumbing",
    description: "plumbing_description",
    image: "/images/projects/4.png",
  },
];

export const ourTeam = [
  {
    id: 1,
    name: "John Martin",
    position: "Electrician",
    image: "/images/projects/1.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
  {
    id: 2,
    name: "John Martin",
    position: "Cleaner",
    image: "/images/projects/2.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
  {
    id: 3,
    name: "John Martin",
    position: "Plumper",
    image: "/images/projects/3.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
  {
    id: 4,
    name: "John Martin",
    position: "Plumper",
    image: "/images/projects/4.png",
    social: { facebook: "", instagram: "", twitter: "" },
  },
  {
    id: 5,
    name: "John Martin",
    position: "Electrician",
    image: "/images/projects/1.png",
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

export const orders = [
  {
    name: "Order 1",
    date: "2022-05-20",
    orderNumber: "ORD-123456",
    userId: serviceProviders[3],
    favorite: true,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 2",
    date: "2022-06-15",
    orderNumber: "ORD-789012",
    userId: serviceProviders[5],
    favorite: false,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 3",
    date: "2022-07-01",
    orderNumber: "ORD-345678",
    userId: serviceProviders[1],
    favorite: true,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 4",
    date: "2022-08-10",
    orderNumber: "ORD-901234",
    userId: serviceProviders[4],
    favorite: false,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 5",
    date: "2022-09-05",
    orderNumber: "ORD-567890",
    userId: serviceProviders[2],
    favorite: true,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 1",
    date: "2022-05-20",
    orderNumber: "ORD-123456",
    userId: serviceProviders[3],
    favorite: true,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 2",
    date: "2022-06-15",
    orderNumber: "ORD-789012",
    userId: serviceProviders[5],
    favorite: false,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 3",
    date: "2022-07-01",
    orderNumber: "ORD-345678",
    userId: serviceProviders[1],
    favorite: true,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 4",
    date: "2022-08-10",
    orderNumber: "ORD-901234",
    userId: serviceProviders[4],
    favorite: false,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
  {
    name: "Order 5",
    date: "2022-09-05",
    orderNumber: "ORD-567890",
    userId: serviceProviders[2],
    favorite: true,
    service: services[getRandomOf(services)],
    offer: offers[getRandomOf(offers)],
  },
];

export const notifications = [
  {
    date: "Today",
    list: [
      {
        description: "Air conditioner transistor repair Confirm and send",
        image: "/images/18571126_303.png",
        time: "04:55",
        status: true,
      },
      {
        description: "Air conditioner transistor repair Confirm and send",
        image: "/images/18571126_303.png",
        time: "04:03",
        status: false,
      },
      {
        description: "Air conditioner transistor repair Confirm and send",
        image: "/images/18571126_303.png",
        time: "03:34",
        status: true,
      },
      {
        description: "Air conditioner transistor repair Confirm and send",
        image: "/images/18571126_303.png",
        time: "02:54",
        status: true,
      },
    ],
  },
  {
    date: "Yesterday",
    list: [
      {
        description: "Air conditioner transistor repair Confirm and send",
        image: "/images/18571126_303.png",
        time: "01:55",
        status: false,
      },
      {
        description: "Air conditioner transistor repair Confirm and send",
        image: "/images/18571126_303.png",
        time: "12:33",
        status: true,
      },
      {
        description: "Air conditioner transistor repair Confirm and send",
        image: "/images/18571126_303.png",
        time: "11:39",
        status: false,
      },
      {
        description: "Air conditioner transistor repair Confirm and send",
        image: "/images/18571126_303.png",
        time: "10:54",
        status: true,
      },
    ],
  },
];

export const previousWorks = [
  {
    clientName: "John Smith",
    rating: 4,
    images: [
      "/images/works/1.png",
      "/images/works/2.png",
      "/images/works/3.png",
    ],
    comment: "Great work, very professional!",
    date: "2022-03-15",
  },
  {
    clientName: "John Smith",
    rating: 5,
    images: [
      "/images/works/4.png",
      "/images/works/5.png",
      "/images/works/6.png",
    ],
    comment: "Absolutely stunning results, exceeded my expectations!",
    date: "2021-12-01",
  },
  {
    clientName: "John Smith",
    rating: 3,
    images: [
      "/images/works/7.png",
      "/images/works/8.png",
      "/images/works/9.png",
    ],
    comment: "Good work, but took longer than expected.",
    date: "2021-06-20",
  },
];