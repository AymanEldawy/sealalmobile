import { AirConIcon, FriggedIcon, GasIcon, MicrowavesIcon, OthersIcon, OvensIcon } from "@/components/Icons";

const getRandomOf = (list) => {
  return Math.floor(Math.random() * list?.length);
};

export const getItemById = (list, itemId) => {
  console.log(list, itemId)
  return list?.find((item) => item?.id === itemId);
};
export const getOfferById = (list, itemId) => {
  console.log(list, itemId);
  return list?.find((item) => +item?.offerNumber === +itemId);
};
export const links = [
  { name: "home", link: "/" },
  { name: "about_us", link: "/about-us" },
  { name: "categories", link: "/categories" },
  { name: "sale", link: "/sale" },
  { name: "companies", link: "/companies" },
  { name: "contact_us", link: "/contact-us" },
  { name: "My_orders", link: "/profile" },
  { name: "Help", link: "/help" },

];


export const AllCategories = [
  { id: 1, name: "Best Seller Products" },
  { id: 2, name: "Woman" },
  { id: 3, name: "Male" },
  { id: 4, name: "Mother & child" },
  { id: 5, name: "Supermarket" },
  { id: 6, name: "Cosmetic" },
  { id: 7, name: "Shoes & Bags" },
  { id: 8, name: "Watches & Accessories" },
  { id: 9, name: "Electronics" },
  { id: 10, name: "Devices" },
  { id: 11, name: "Toys & Hobbies" },
  { id: 12, name: "Heath & Beauty" },
  { id: 13, name: "Back to school" },
  { id: 14, name: "Others" },
]

export const mostCategories = [
  { id: 1, name: "Woman", image: "/images/categories/1.png" },
  { id: 1, name: "New", image: "/images/categories/2.png" },
  { id: 1, name: "last chance", image: "/images/categories/3.png" },
]

export const categories = [
  { id: 1, name: "Fashion", image: "/images/categories/Ellipse 445.png" },
  { id: 2, name: "Watches", image: "/images/categories/Ellipse 446.png" },
  { id: 3, name: "Devices", image: "/images/categories/Ellipse 447.png" },
  { id: 4, name: "Products", image: "/images/categories/Ellipse 448.png" },
  { id: 5, name: "Shoes", image: "/images/categories/Ellipse 449.png" },
  { id: 6, name: "Home", image: "/images/categories/Ellipse 450.png" },
]



export const products = [
  {
    "id": 1,
    "name": "Women's Floral Dress",
    "description": "A beautiful floral dress for women, perfect for any occasion.",
    "stock": 30,
    "status": "in_stock",
    "image": "/images/products/20.jfif",
    "price": 59.99,
    "rating": 4.8,
    "favorite": false,
    "discount": 10,
    "company_name": "Fashion Co.",
    "delivery_time": "3-5 days",
    "images": [
      "/images/products/20.jfif",
      "/images/products/21.jpg",
      "/images/products/23.webp",
      "/images/products/24.jpg",
    ],
    "colors": [
      "pink",
      "blue",
      "green",
      "yellow"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": 2,
    "name": "Men's T-shirt",
    "description": "A stylish T-shirt for men, made with high-quality leather.",
    "stock": 20,
    "status": "in_stock",
    "image": "/images/products/25.jpg",
    "price": 149.99,
    "rating": 4.6,
    "favorite": true,
    "discount": 20,
    "company_name": "Leather Co.",
    "delivery_time": "2-3 days",
    "images": [
      "/images/products/25.jpg",
      "/images/products/28.jpg",
    ],
    "colors": [
      "black",
      "brown",
      "tan",
      "gray"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "id": 4,
    "name": "Men's Jacket",
    "description": "A classic Jacket for men, made with soft and breathable cotton.",
    "stock": 40,
    "status": "in_stock",
    "image": "/images/products/2.png",
    "price": 34.99,
    "rating": 4.4,
    "favorite": true,
    "discount": 15,
    "company_name": "Fashion Co.",
    "delivery_time": "3-5 days",
  },
  {
    "id": 5,
    "name": "Laptop",
    "description": "high, fast, more power laptop",
    "stock": 25,
    "status": "in_stock",
    "image": "/images/products/",
    "price": 49.99,
    "rating": 4.7,
    "favorite": false,
    "discount": 5,
    "company_name": "Denim Co.",
    "delivery_time": "2-5 days",
    "images": [
      "/images/products/6.png",
      "/images/products/29.jpg",
      "/images/products/30.jpg"
    ],
    "colors": [
      "blue",
      "black",
      "gray"
    ],
    "sizes": [
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ]
  },
  {
    "id": 6,
    "name": "Ipad",
    "description": "made with lightweight.",
    "stock": 35,
    "status": "in_stock",
    "image": "/images/products/33.jpg",
    "price": 44.99,
    "rating": 4.2,
    "favorite": false,
    "discount": 0,
    "company_name": "Tech Co.",
    "delivery_time": "2-4 days",
    "images": [
      "/images/products/33.jpg",
      "/images/products/34.png",
      "/images/products/35.png",
      "/images/products/36.jfif"
    ],
    "colors": [
      "tan",
      "navy",
      "gray",
      "black"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ]
  },
  {
    "id": 7,
    "name": "men's Leather Ankle Boots",
    "description": "Stylish and comfortable leather ankle boots for men, perfect for any occasion.",
    "stock": 15,
    "status": "in_stock",
    "image": "/images/products/15.jfif",
    "price": 89.99,
    "rating": 4.5,
    "favorite": false,
    "discount": 0,
    "company_name": "Fashion Co.",
    "delivery_time": "3-5 days",
    "images": [
      "/images/products/15.jfif",
      "/images/products/16.jfif",
      "/images/products/17.webp",
      "/images/products/18.webp"
    ],
    "colors": [
      "black",
      "brown",
      "tan"
    ],
    "sizes": [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]
  },
  {
    "id": 8,
    "name": "Men's parphan",
    "description": "A comfortable and warm parphan for men, perfect for chilly weather.",
    "stock": 45,
    "status": "in_stock",
    "image": "/images/products/37.jpg",
    "price": 29.99,
    "rating": 4.3,
    "favorite": true,
    "discount": 0,
    "company_name": "Fashion Co.",
    "delivery_time": "2-4 days",
    "images": [
      "/images/products/37.jpg",
      "/images/products/38.jfif",
      "/images/products/39.jfif",
      "/images/products/40.jfif"
    ],
    "colors": [
      "gray",
      "black",
      "blue",
      "green"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": 9,
    "name": "Women's Denim Jacket",
    "description": "A classic denim jacket for women, made with high-quality denim and a comfortable fit.",
    "stock": 20,
    "status": "in_stock",
    "image": "/images/products/5.png",
    "price": 79.99,
    "rating": 4.6,
    "favorite": false,
    "discount": 0,
    "company_name": "Denim Co.",
    "delivery_time": "3-5 days",
  },
  {
    "id": 10,
    "name": "Headphone",
    "description": "A classic headphone for men & women, made with high-quality denim and a comfortable fit.",
    "stock": 10,
    "status": "in_stock",
    "image": "/images/products/3.png",
    "price": 179.99,
    "rating": 4.6,
    "favorite": false,
    "discount": 0,
    "company_name": "Tech Co.",
    "delivery_time": "2-5 days",
  },
  {
    "id": 11,
    "name": "Camera",
    "description": "A classic Camera with high-quality denim and a comfortable",
    "stock": 16,
    "status": "in_stock",
    "image": "/images/products/8.jfif",
    "price": 299.99,
    "rating": 4.6,
    "favorite": false,
    "discount": 0,
    "company_name": "Tech Co.",
    "delivery_time": "3-7 days",
  },
  {
    "id": 11,
    "name": "Phone",
    "description": "A Modern Phones with high-quality denim and a comfortable",
    "stock": 16,
    "status": "in_stock",
    "price": 299.99,
    "rating": 4.6,
    "favorite": false,
    "discount": 0,
    "company_name": "Tech Co.",
    "delivery_time": "3-7 days",
    "images": [
      "/images/products/12.jpg",
      "/images/products/13.jpg",
      "/images/products/14.jpg",
    ],
    colors: ['red', 'pink', 'gray']
  }
]
// export const products = [
//   {
//     id: '012354695',
//     "name": "Product X",
//     "description": "This is a great product that will meet all of your needs!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],

//     "price": 25,
//     "rating": 4,
//     "favorite": false,
//     "discount": 0.15,
//     "company_name": "ABC Inc.",
//     "delivery_time": "2-3 Delivery days"
//   },
//   {
//     id: '012154695',
//     "name": "Product Y",
//     "description": "This is another great product that will meet all of your needs!",
//     stock: Math.floor(Math.random() * 32),
//     "status": false,
//     image: '/images/products/1.png',
//     "price": 20,
//     "rating": 3,
//     "favorite": true,
//     "discount": 0.10,
//     "company_name": "XYZ Corp.",
//     "delivery_time": "3-5 Delivery days"
//   },
//   {
//     id: '012344695',
//     "name": "Product Z",
//     "description": "This is an amazing product that you won't want to miss out on!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],

//     "price": 39,
//     "rating": 5,
//     "favorite": true,
//     "discount": 0.25,
//     "company_name": "ACME Inc.",
//     "delivery_time": "1-2 Delivery days"
//   },
//   {
//     id: '0123546595',
//     "name": "Product A",
//     "description": "This product is perfect for those who need a reliable solution!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],

//     "price": 15,
//     "rating": 4,
//     "favorite": false,
//     "discount": 0.05,
//     "company_name": "DEF Corp.",
//     "delivery_time": "4-6 Delivery days"
//   },
//   {
//     id: '0123542695',
//     "name": "Product B",
//     "description": "This is a high-quality product that will exceed your expectations!",
//     stock: Math.floor(Math.random() * 32),
//     "status": false,
//     image: '/images/products/1.png',
//     "price": 29,
//     "rating": 3,
//     "favorite": false,
//     "discount": 0.20,
//     "company_name": "GHI Inc.",
//     "delivery_time": "2-4 Delivery days"
//   },
//   {
//     id: '0123454695',
//     "name": "Product C",
//     "description": "This product is designed to make your life easier and more enjoyable!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],
//     "price": 50,
//     "rating": 5,
//     "favorite": true,
//     "discount": 0.30,
//     "company_name": "JKL Corp.",
//     "delivery_time": "1-3 Delivery days"
//   },
//   {
//     id: '0123514695',
//     "name": "Product D",
//     "description": "This is a versatile product that can be used in many different ways!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     "price": 19,
//     "rating": 3,
//     "favorite": false,
//     "discount": 0.10,
//     "company_name": "MNO Inc.",
//     "delivery_time": "3-5 Delivery days"
//   },
//   {
//     id: '0123454695',
//     "name": "Product E",
//     "description": "This product is perfect for those who demand the best!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     "price": 99,
//     "rating": 5,
//     "favorite": true,
//     "discount": 0.40,
//     "company_name": "PQR Corp.",
//     "delivery_time": "1-2 Delivery days"
//   },
//   {
//     id: '0121354695',
//     "name": "Product F",
//     "description": "This is a reliable product that you can count on!",
//     stock: Math.floor(Math.random() * 32),
//     "status": false,
//     image: '/images/products/1.png',
//     "price": 24,
//     "rating": 4,
//     "favorite": false,
//     "discount": 0.15,
//     "company_name": "STU Inc.",
//     "delivery_time": "2-4 Delivery days"
//   },
//   {
//     id: '0123543695',
//     "name": "Product G",
//     "description": "This product is perfect for those who need a powerful solution!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],

//     "price": 69,
//     "rating": 5,
//     "favorite": true,
//     "discount": 0.35,
//     "company_name": "VWX Corp.",
//     "delivery_time": "1-3 Delivery days"
//   },
//   {
//     id: '0123546595',
//     "name": "Product H",
//     "description": "This is a high-performance product that won't let you down!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     "price": 39,
//     "rating": 4,
//     "favorite": false,
//     "discount": 0.20,
//     "company_name": "YZA Inc.",
//     "delivery_time": "3-5 Delivery days"
//   },
//   {
//     id: '0112354695',
//     "name": "Product I",
//     "description": "This product is perfect for those who demand the best!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],

//     "price": 99,
//     "rating": 5,
//     "favorite": true,
//     "discount": 0.40,
//     "company_name": "BCD Corp.",
//     "delivery_time": "1-2 Delivery days"
//   },
//   {
//     id: '0126354695',
//     "name": "Product J",
//     "description": "This is a versatile product that can be used in many different ways!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],

//     "price": 19,
//     "rating": 3,
//     "favorite": false,
//     "discount": 0.10,
//     "company_name": "EFG Inc.",
//     "delivery_time": "3-5 Delivery days"
//   },
//   {
//     id: '0123254695',
//     "name": "Product K",
//     "description": "This product is perfect for those who need a reliable solution!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     "price": 15,
//     "rating": 4,
//     "favorite": false,
//     "discount": 0.05,
//     "company_name": "HIJ Corp.",
//     "delivery_time": "4-6 Delivery days"
//   },
//   {
//     id: '0123254695',
//     "name": "Product L",
//     "description": "This is a high-quality product that will exceed your expectations!",
//     stock: Math.floor(Math.random() * 32),
//     "status": false,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],

//     "price": 29,
//     "rating": 3,
//     "favorite": false,
//     "discount": 0.20,
//     "company_name": "KLM Inc.",
//     "delivery_time": "2-4 Delivery days"
//   },
//   {
//     id: '0123546915',
//     "name": "Product M",
//     "description": "This product is designed to make your life easier and more enjoyable!",
//     stock: Math.floor(Math.random() * 32),
//     "status": true,
//     image: '/images/products/1.png',
//     images: ['/images/products/1.png', '/images/products/2.png', '/images/products/3.png', '/images/products/3.png'],

//     "price": 50,
//     "rating": 5,
//     "favorite": true,
//     "discount": 0.30,
//     "company_name": "NOP Corp.",
//     "delivery_time": "1-3 Delivery days"
//   },
//   {
//     id: '0123514695',
//     "name": "Product N",
//     "description": "This is a reliable product that you can count on!",
//     stock: Math.floor(Math.random() * 32),
//     "status": false,
//     image: '/images/products/1.png',
//     "price": 24,
//     "rating": 4,
//     "favorite": false,
//     "discount": 0.15,
//     "company_name": "QRS Inc.",
//     "delivery_time": "2-4 Delivery days"
//   }
// ]

export const institutional = [
  { name: "about us", link: '' },
  { name: "Vision mission", link: '' },
  { name: "Management", link: '' },
  { name: "Corporate Social Responsibility", link: '' },
  { name: "Our Business Partners", link: '' },
  { name: "I want to be a supplier", link: '' },
  { name: "I Want To Be A Delivery Point", link: '' },
  { name: "Become a Seller on Hepsiburada", link: '' },
  { name: "Investor relations", link: '' },
  { name: "solution center", link: '' },
  { name: "News From Us", link: '' },
]

export const footerCategories = [

  { name: "Computer / Electronics", link: "" },
  { name: "Phone Prices / Mobile Phone", link: "" },
  { name: "White Goods / Kitchen", link: "" },
  { name: "Photvo / Camera", link: "" },
  { name: "Sports / Outdoor", link: "" },
  { name: "Clothing / Shoes", link: "" },
  { name: "Jewelry / Jewelery", link: "" },
  { name: "Watch / Glasses / Accessories", link: "" },
  { name: "Cosmetics / Personal Care", link: "" },
  { name: "Mother & Baby", link: "" },
  { name: "Toy", link: "" },
  { name: "Book / Movie / Music", link: "" },
  { name: "Hobby / Game Console", link: "" },
  { name: "Stationery / Office", link: "" },
  { name: "Auto Accessories / Garden", link: "" },
  { name: "Winter Tire", link: "" },
  { name: "Home Decoration / Furniture", link: "" },
  { name: "Pet Shop / Supermarket", link: "" },
  { name: "Wallpaper / Calculator", link: "" },
]

export const popularBrands = [

  { name: "Avon", link: "" },
  { name: "Samsung", link: "" },
  { name: "adidas", link: "" },
  { name: "Nike", link: "" },
  { name: "apple", link: "" },
  { name: "Vestel", link: "" },
  { name: "Bosch", link: "" },
  { name: "New Balance", link: "" },
  { name: "defacto", link: "" },
  { name: "Lacoste", link: "" },
  { name: "Asus", link: "" },
  { name: "Lego", link: "" },
  { name: "Boyner", link: "" },
  { name: "Cotton", link: "" },
  { name: "Fairy", link: "" },
  { name: "Blue", link: "" },
  { name: "Under Armor", link: "" },
  { name: "wasa", link: "" },
  { name: "All Brands", link: "" },
]

export const popularPhones = [

  { name: "iPhone iOS Phones", link: "" },
  { name: "Samsung Android Phones", link: "" },
  { name: "Xiaomi Android Phones", link: "" },
  { name: "iPhone SE", link: "" },
  { name: "iPhone 14", link: "" },
  { name: "iPhone 12 ", link: "" },
  { name: "iPhone 11 ", link: "" },
  { name: "Watch 7", link: "" },
  { name: "iPhone 13", link: "" },
  { name: "Galaxy Note ", link: "" },
  { name: "S20 / S20 Plus / S20 Ultra", link: "" },
]

export const footerAllHere = [
  { name: "My User Information", link: "" },
  { name: "Trading Guide", link: "" },
  { name: "Twitter Support", link: "" },
  { name: "Mobile Apps", link: "" },
  { name: "Safe Shopping Guide", link: "" },
  { name: "Information h Policy", link: "" },
  { name: "E - commerce Advertising", link: "" },
]


export const colors = [
  { src: "/images/products/1.png", name: "red", "color": "#e6194b", "id": 1 },
  { src: "/images/products/2.png", name: "green", "color": "#3cb44b", "id": 2 },
  { src: "/images/products/3.png", name: "yellow", "color": "#ffe119", "id": 3 },
  { src: "/images/products/4.png", name: "blue", "color": "#0082c8", "id": 4 },
  { src: "/images/products/5.png", name: "orange", "color": "#f58231", "id": 5 },
  { src: "/images/products/6.png", name: "purple", "color": "#911eb4", "id": 6 },
  { src: "/images/products/1.png", name: "cyan", "color": "#46f0f0", "id": 7 },
  { src: "/images/products/2.png", name: "pink", "color": "#f032e6", "id": 8 },
  { src: "/images/products/3.png", name: "Green Yellow", "color": "#d2f53c", "id": 9 },
  { src: "/images/products/4.png", name: "light pink", "color": "#fabebe", "id": 10 }
]


export const sizes = [
  { "size": "M", "id": 1 },
  { "size": "S", "id": 2 },
  { "size": "L", "id": 3 },
  { "size": "XL", "id": 4 },
  { "size": "M", "id": 5 },
  { "size": "S", "id": 6 },
  { "size": "L", "id": 7 },
  { "size": "M", "id": 8 },
  { "size": "XL", "id": 9 },
  { "size": "S", "id": 10 }
]

export const brands = [
  { "brand": "Nike", "id": 1, count: Math.floor(Math.random() * 200) },
  { "brand": "Adidas", "id": 2, count: Math.floor(Math.random() * 200) },
  { "brand": "Levi's", "id": 3, count: Math.floor(Math.random() * 200) },
  { "brand": "H&M", "id": 4, count: Math.floor(Math.random() * 200) },
  { "brand": "Zara", "id": 5, count: Math.floor(Math.random() * 200) },
  { "brand": "Gucci", "id": 6, count: Math.floor(Math.random() * 200) },
  { "brand": "Chanel", "id": 7, count: Math.floor(Math.random() * 200) },
  { "brand": "Calvin Klein", "id": 8, count: Math.floor(Math.random() * 200) },
  { "brand": "Ralph Lauren", "id": 9, count: Math.floor(Math.random() * 200) },
  { "brand": "Tommy Hilfiger", "id": 10, count: Math.floor(Math.random() * 200) }
]

export const suggestionsKeywords = [
  { "keyword": "Nike", "id": 1 },
  { "keyword": "Adidas", "id": 2 },
  { "keyword": "Levi's", "id": 3 },
  { "keyword": "H&M", "id": 4 },
  { "keyword": "Zara", "id": 5 },
  { "keyword": "Gucci", "id": 6 },
  { "keyword": "Chanel", "id": 7 },
  { "keyword": "Calvin Klein", "id": 8 },
  { "keyword": "Ralph Lauren", "id": 9 },
  { "keyword": "Tommy Hilfiger", "id": 10 },
  { "keyword": "Samsung", "id": 11 },
  { "keyword": "Apple", "id": 12 },
  { "keyword": "Google", "id": 13 },
  { "keyword": "LG", "id": 14 },
  { "keyword": "Motorola", "id": 15 },
  { "keyword": "OnePlus", "id": 16 },
  { "keyword": "Sony", "id": 17 },
  { "keyword": "Xiaomi", "id": 18 },
  { "keyword": "Nokia", "id": 19 },
  { "keyword": "HTC", "id": 20 }
]

export const productImages = [
  { id: 1, src: '/images/products/1.png' },
  { id: 2, src: '/images/products/2.png' },
  { id: 3, src: '/images/products/3.png' },
  { id: 4, src: '/images/products/4.png' },
  { id: 5, src: '/images/products/5.png' },
  { id: 6, src: '/images/products/6.png' },

]


export const reviews = [
  {
    id: 1,
    name: "John Smith",
    image: "/images/clients/1.png",
    date: "2023-04-08",
    rating: 4,
    comment: "Great product, works as advertised!",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "/images/clients/2.png",
    date: "2023-04-07",
    rating: 2,
    comment: "This product did not meet my expectations.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    image: "/images/clients/1.png",
    date: "2023-04-05",
    rating: 5,
    comment: "I am very happy with my purchase!",
  },
];


export const sizeChart = [
  {
    "size_name": "XS",
    "measurements": {
      "shoulder": "14",
      "length": "22",
      "sleeve_length": "23",
      "bust": "32",
      "waist_size": "26",
      "cuff": "8",
      "bicep_length": "11"
    }
  },
  {
    "size_name": "S",
    "measurements": {
      "shoulder": "15",
      "length": "23",
      "sleeve_length": "24",
      "bust": "34",
      "waist_size": "28",
      "cuff": "8.5",
      "bicep_length": "11.5"
    }
  },
  {
    "size_name": "M",
    "measurements": {
      "shoulder": "16",
      "length": "24",
      "sleeve_length": "25",
      "bust": "36",
      "waist_size": "30",
      "cuff": "9",
      "bicep_length": "12"
    }
  },
  {
    "size_name": "L",
    "measurements": {
      "shoulder": "17",
      "length": "25",
      "sleeve_length": "26",
      "bust": "38",
      "waist_size": "32",
      "cuff": "9.5",
      "bicep_length": "12.5"
    }
  },
  {
    "size_name": "XL",
    "measurements": {
      "shoulder": "18",
      "length": "26",
      "sleeve_length": "27",
      "bust": "40",
      "waist_size": "34",
      "cuff": "10",
      "bicep_length": "13"
    }
  }
]


export const phoneChart = [
  {
    "name": "Warranty Type",
    "value": "Apple Turkey Guaranteed"
  },
  {
    "name": "RAM Capacity",
    "value": "4GB"
  },
  {
    "name": "Battery Power (mAh)",
    "value": "3000 - 4000"
  },
  {
    "name": "Camera Resolution",
    "value": "10 - 15MP"
  },
  {
    "name": "Display Technology",
    "value": "LCD"
  },
  {
    "name": "Mobile Phone Model",
    "value": "iphone 11"
  },
  {
    "name": "Display Type",
    "value": "OLED"
  },
  {
    "name": "Touch screen",
    "value": "There is"
  },
  {
    "name": "Main Camera Flash",
    "value": "There is"
  },
  {
    "name": "Front Camera Resolution Range",
    "value": "10 - 15MP"
  },
  {
    "name": "OS",
    "value": "iOS"
  },
  {
    "name": "Colour",
    "value": "Red"
  },
  {
    "name": "Headphone jack",
    "value": "lightning"
  },
  {
    "name": "Charge Input",
    "value": "lightning"
  },
  {
    "name": "Wireless charging",
    "value": "No"
  }
]


export const cartList = [

  {
    "id": 1,
    "name": "Women's Floral Dress",
    "description": "A beautiful floral dress for women, perfect for any occasion.",
    "stock": 30,
    "status": "in_stock",
    "image": "/images/products/20.jfif",
    "price": 59.99,
    "rating": 4.8,
    "favorite": false,
    "discount": 10,
    quantity: 1,
    "company_name": "Fashion Co.",
    "delivery_time": "3-5 days",
    "images": [
      "/images/products/20.jfif",
      "/images/products/21.jpg",
      "/images/products/23.webp",
      "/images/products/24.jpg",
    ],
    "colors": [
      "pink",
      "blue",
      "green",
      "yellow"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
]


export const sellerOrders = [

  {
    "order_number": "5b7e2297",
    "product_name": "Chair",
    "quantity": 7,
    "address_details": {
      "address": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e0df0a74",
    "product_name": "Table",
    "quantity": 5,
    "address_details": {
      "address": "456 Oak St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "a4e7bce2",
    "product_name": "Sofa",
    "quantity": 2,
    "address_details": {
      "address": "789 Elm St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "7e377d9d",
    "product_name": "Armchair",
    "quantity": 1,
    "address_details": {
      "address": "321 Pine St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "8f8b0e6d",
    "product_name": "Bed",
    "quantity": 3,
    "address_details": {
      "address": "654 Cedar St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e3e7b6c3",
    "product_name": "Bookshelf",
    "quantity": 2,
    "address_details": {
      "address": "987 Birch St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "a4c8e4b7",
    "product_name": "Desk",
    "quantity": 1,
    "address_details": {
      "address": "246 Walnut St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e5e4d4fe",
    "product_name": "Lamp",
    "quantity": 4,
    "address_details": {
      "address": "753 Maple St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "a3e8d9c6",
    "product_name": "Mirror",
    "quantity": 2,
    "address_details": {
      "address": "159 Oak St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "c1d3d1e0",
    "product_name": "Rug",
    "quantity": 1,
    "address_details": {
      "address": "852 Cedar St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "f7e0c2c9",
    "product_name": "Side table",
    "quantity": 2,
    "address_details": {
      "address": "753 Oak St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "d1b7e5a1",
    "product_name": "Armchair",
    "quantity": 1,
    "address_details": {
      "address": "963 Pine St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e5f3b9d6",
    "product_name": "Bookcase",
    "quantity": 3,
    "address_details": {
      "address": "753 Walnut St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "b8c4e1d0",
    "product_name": "Chair",
    "quantity": 4,
    "address_details": {
      "address": "246 Cedar St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "d6c1e8d3",
    "product_name": "Coffee table",
    "quantity": 1,
    "address_details": {
      "address": "753 Pine St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "f0d4e2b2",
    "product_name": "Dining table",
    "quantity": 1,
    "address_details": {
      "address": "246 Elm St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e4d0b4c8",
    "product_name": "Lamp",
    "quantity": 2,
    "address_details": {
      "address": "963 Oak St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "b0f2c5a1",
    "product_name": "Sofa",
    "quantity": 1,
    "address_details": {
      "address": "852 Elm St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e8d0c2b6",
    "product_name": "TV stand",
    "quantity": 1,
    "address_details": {
      "address": "159 Walnut St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  }
]

export const addresses = [
  {
    id: 1,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 2,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 3,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 4,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },
];


export const paymentsBank = [
  {
    "id": 987654,
    "bank_name": "First National Bank",
    "vpn": 2353,
    "name": "Jane Smith",
    "date": "12/25"
  },

  {
    "id": 567890,
    "bank_name": "Global Bank",
    "vpn": 3212,
    "name": "Bob Johnson",
    "date": "10/24"
  },

  {
    "id": 246810,
    "bank_name": "City Bank",
    "vpn": 4364,
    "name": "Sarah Lee",
    "date": "12/34"
  }]


export const notifications = [
  {
    "id": 1,
    "image": "/images/clients/1.png",
    "title": "commented on",
    "description": "Your post received a comment!",
    "from": "Alice Smith",
    "date": "2023-05-22T15:45:00.000Z"
  },
  {
    "id": 2,
    "image": "/images/clients/2.png",
    "title": "shared",
    "description": "Your post was shared!",
    "from": "Bob Johnson",
    "date": "2023-05-22T16:30:00.000Z"
  },
  {
    "id": 3,
    "image": "/images/clients/1.png",
    "title": "liked",
    "description": "Your post received a like!",
    "from": "Charlie Brown",
    "date": "2023-05-22T17:15:00.000Z"
  },
  {
    "id": 4,
    "image": "/images/clients/2.png",
    "title": "messaged",
    "description": "You received a new message!",
    "from": "David Lee",
    "date": "2023-05-22T18:00:00.000Z"
  },
  {
    "id": 5,
    "image": "/images/clients/1.png",
    "title": "followed",
    "description": "You have a new follower!",
    "from": "Emma Thompson",
    "date": "2023-05-22T18:45:00.000Z"
  },
  {
    "id": 6,
    "image": "/images/clients/2.png",
    "title": "purchased",
    "description": "Your order has been shipped!",
    "from": "Frank Williams",
    "date": "2023-05-22T19:30:00.000Z"
  },
  {
    "id": 7,
    "image": "/images/clients/1.png",
    "title": "commented on",
    "description": "Your post received a comment!",
    "from": "Grace Lee",
    "date": "2023-05-22T20:15:00.000Z"
  },
  {
    "id": 8,
    "image": "/images/clients/2.png",
    "title": "liked",
    "description": "Your post received a like!",
    "from": "Henry Smith",
    "date": "2023-05-22T21:00:00.000Z"
  },
  {
    "id": 9,
    "image": "/images/clients/1.png",
    "title": "shared",
    "description": "Your post was shared!",
    "from": "Isabella Davis",
    "date": "2023-05-22T21:45:00.000Z"
  },
  {
    "id": 10,
    "image": "/images/clients/2.png",
    "title": "messaged",
    "description": "You received a new message!",
    "from": "Jacob Martinez",
    "date": "2023-05-22T22:30:00.000Z"
  }
]