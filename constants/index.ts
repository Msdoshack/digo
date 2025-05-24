import { Heart, History, Mail, ShoppingBag, ShoppingCart } from "lucide-react";

export const mobileNavItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Deals", link: "/deals" },
  { id: 4, name: "About", link: "/about" },
  { id: 5, name: "Cart", link: "/cart" },
  // { id: 6, name: "Profile", link: "/profile" },
];

export const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Deals", link: "/deals" },
  { id: 4, name: "About", link: "/about" },
];

export const customersMenu = [
  {
    id: 1,
    name: "Orders",
    link: "/customer/order",
    icon: ShoppingBag,
  },
  {
    id: 2,
    name: "Cart",
    link: "/cart",
    icon: ShoppingCart,
  },
  {
    id: 3,
    name: "Wishlist",
    link: "/customer/wishlist",
    icon: Heart,
  },
  {
    id: 4,
    name: "Recently Viewed",
    link: "/customer/history",
    icon: History,
  },

  {
    id: 5,
    name: "Inbox",
    link: "/customer/inbox",
    icon: Mail,
  },
];

export const cartProducts = [
  {
    id: "000000001",
    img: "",
    name: "iphone 12",
    price: 3000000,
    qty: 1,
    isAvailable: true,
  },

  {
    id: "000000002",
    img: "",
    name: "Apple Airpod",
    price: 100000,
    qty: 2,
    isAvailable: true,
  },

  {
    id: "000000003",
    img: "",
    name: "20kg dumbell",
    price: 120000,
    qty: 1,
    isAvailable: false,
  },

  {
    id: "000000004",
    img: "",
    name: "Mtn 4G Router",
    price: 120000,
    qty: 1,
    isAvailable: true,
  },
];

export const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/products",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/products",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/products",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export const productsData = [
  {
    id: "00000120",
    name: "Ergonomic Mouse Sturdy Wireless Vertical Black Left Handed",

    category: "Computer Accessories",

    brand: "unknown",

    price: 19423,
    oldPrice: 27192,

    desc: `
Dear customers, welcome to my store. We are an online store where you can purchase all your electronics, home appliances, kiddies items, fashion items for men, women, and children; cool gadgets, groceries, automobile parts, and more on the go. Our store is a dedicated to creating and , allowing you to enjoy a . Your support is our greatest driving force. All the our store are sold at the lowest price, and the quality is guaranteed. If you need it, please rest assured to buy, we will provide you with a comfortable shopping experience every time. As are launching new products every day, please follow our store and pay more attention, you will get the information of our latest products as soon as possible. Clicking on the seller information to enter our what you needs, after placing an order, we will deliver the goods for you at the frist time. Thank you and have a nice day!

Description:

【Material】: Wireless Vertical Ergonomic Mouse is made of premium material, which has reliable and can be used for a long time.【Comfortable Hand Feel】: The Wireless Vertical Mouse adopts a vertical grip design, which provides you with a comfortable hand feel and makes it easier and more convenient to use.【Easy to Use】: Wireless Mouse with light, for long term use, 5 buttons design conveniently meets your different needs. Silent and noiseless, fast charging, compact and stylish.【Adjustable DPI】: This cordless vertical mouse offers 3 gear DPI adjustment, 800/1000/1200/1600 DPI, for smooth movement and control.【Compact and Portable】: This ergonomic mouse adopts a design, measuring 123mmx65mmx82mm, which is nice for use on the go while maintaining a quiet and elegant presence in the office environment.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/2015523/1.jpg?5249",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/2015523/2.jpg?5249",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/2015523/3.jpg?5249",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/2015523/4.jpg?6251",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "00000121",
    name: "Multifunctional Foldable Laptop Table",

    category: "Computer Accessories",

    brand: "unknown",

    price: 37500,
    oldPrice: 45000,

    desc: `
Portable  7~15.4 Inch Macbook Laptop Stand Also For Tablet Notebook, Laptops
Seven  Adjustable Levels--The laptop stand conveniently adjusts to heights from 3.23 inches to 5.12 inches and allows you to set the screen at eye level, resulting in more comfortable, ergonomic and healthier working on the laptop.
Ergonomic Design -- Seven-speed adjustable angle can be adjusted to the most comfortable height you need, comfortable eye-level design ease you from the tension of using gaming laptop for a long time and protect your spine.
Universal Laptop Stand -- Support for most tablets up to 15.6'' and can also support books and other items. Stable Triangle Support- Strong bearing capacity, stable focus. Come with Carrying Flannelette Bag for easy carry Traveling or Business Trip.
Good Ventilation -- The back of this portable laptop stand is completely suspended and has no structural obstruction ,which is more conducive to computer ventilation. One second quick open or close design. laptop cooling stand keeps your laptop cool and no more heating up.
Portable Aluminum 7~15.4 Inch Macbook Laptop Stand Also For Tablet Notebook, Laptops
Seven  Adjustable Levels--The laptop stand conveniently adjusts to heights from 3.23 inches to 5.12 inches and allows you to set the screen at eye level, resulting in more comfortable, ergonomic and healthier working on the laptop.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/8469752/1.jpg?7515",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/8469752/1.jpg?7515",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "0000096",

    name: "Mateamoda Women Bags Ladies Bags Handbags Purse Sling Bag Shoulder Bag",

    category: "bags",

    brand: "unknown",

    price: 19631,
    oldPrice: 21553,

    desc: `
Product Details
No.of the bags: 1 bag

Include: 1 bag; 1 strap

Material: PU(Artificial leather)

Inner material: Polyester

Closure type: Zipper

Size: As marked in the picture

Wearing method: Handbag; Crossbody Bag; Shoulder Bag

Pattern: Solid
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/1449051/1.jpg?8494",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/1449051/2.jpg?7793",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/1449051/3.jpg?7793",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },

  {
    id: "0000097",

    name: "Crocodile Pattern Vintage Shoulder Bag Small Square Bag - Red",

    category: "bags",

    brand: "unknown",

    price: 11499,
    oldPrice: 23500,

    desc: `
Stylish and Lightweight: This woman's leather vintage bag is not only fashionable but also lightweight, making it suitable for all occasions

Convenient and Versatile: With its adjustable strap and single compartment, this shoulder cross-body bag is convenient for carrying your essentials and suitable for various occasions

Durable and Water-Resistant: Made from leather, this messenger handbag is durable and can withstand everyday wear and tear. Its water-resistant feature ensures your belongings stay dry and protected
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/0287593/1.jpg?2108",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/0287593/2.jpg?2108",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/0287593/3.jpg?2108",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },

  {
    id: "00000111",
    name: "Oraimo FREEPODS Bluetooth Earphones V5 3 Wireless Hearpod Ear Pód / Headphones 5 0 Hear Earpiece Earbùds Pod (oraimo)",
    category: "Phone Accessories",

    brand: "oraimo",

    price: 19999,
    oldPrice: 25000,

    desc: `
Product features: battery display, call function, support for music, multi-point connection
product design:
1. Touch Bluetooth headset
2. Intelligent noise reduction, waterproof and sweat proof
3. After taking out the headset, it will automatically connect to the phone
Features:

Mini in-ear wireless invisible design;

Super Mini Size and hidden in the ear, no wearing burden;

Ergonomic earphone design, stable in the ear, good for driving, sports, business, or leisure;

Bluetooth Connection

Deep DPS noise-reduction microphone ensures clear call quality;

Best quality

Voice prompt for pairing, calling, turn on/off;

One function button for on/off, song switch, language change, receive call.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/6975982/1.jpg?4201",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/6975982/2.jpg?4201",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/6975982/3.jpg?4201",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/6975982/4.jpg?4201",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 3, 3, 3, 4, 3, 3],
  },

  {
    id: "00000112",
    name: "Oraimo FreePods 4 Active Noise Cancellation Earbuds",

    category: "Phone Accessories",

    brand: "oraimo",

    price: 41035,
    oldPrice: 86557,

    desc: `
Product Parameters：

BT Version: V5.2
Wireless Range: 10m
Play Time:
Up to 8.5 hours, Case provides additional 27 hours (ANC OFF);
Up to 7 hours; Case provides additional 22 hours (ANC ON)
Input: Type-C

Model: OEB-E105D

*oraimo Lab test result..
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7741722/1.jpg?2511",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7741722/2.jpg?2511",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7741722/3.jpg?2511",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7741722/4.jpg?2511",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 3, 3, 3, 4, 3, 3],
  },
  {
    id: "0000089",

    name: "Men Glossy Tassel Brogue Shoes Loafers & Slip-ons Formal Corporate",

    category: "shoes",

    brand: "unknown",

    price: 29120,
    oldPrice: 30235,

    desc: `
Tips: Standard EU Leather shoe size, one size bigger than sneakers
If the leather shoes you wear are size 41, go for size 41
If you wear a size 41 sneaker, you buy a size 40
The comfortable round head design makes it easy to wear and fits your feet. The anti-collision toe cap releases a comfortable experience. The upper is made of breathable, comfortable and soft fabric, which has a light and shock-absorbing effect. The high-quality rubber sole adopts a non-slip texture design, which is wear-resistant and not easy to slip. It is fashionable and eye-catching. It is very suitable for men who are pursuing trend and unique personality design. The inner lining is made of breathable fabric, which makes it easy to wear and exercise.This pair of shoes is suitable for all men, with fashionable personality and trendy color matching, high-quality workmanship, and a must-have for trendy men.Tips: Measurements are the maximum size,please allow 0.5-1cm tolerance. Compare the chart size with your feet length carefully before ordering. Style: Casual，Sport.Features: Comfortable，Durable，Very Cool.Occasions: Sports、Casual、Office、Outdoor、Dating、Everyday、Shopping.7 days * 24 hours Customer Service.Free VIP Jumia Express Service，Enjoy fast arrival, delivery within 1-3 days.Free VIP Jumia Express Service，Enjoy package protection to prevent loss of goods. Tips1: If you follow the fashion trend, please FOLLOW our shop.Tips2: If you want to enjoy 50% or higher discount shopping, please FOLLOW our shop.Tips3: If you are looking for high-quality and inexpensive products, please FOLLOW our shop.Tips: Measurements are the maximum size,please allow 0.5-1cm tolerance. Compare the chart size with your feet length carefully before ordering.Please help me to light up 5 stars  
`,

    variants: [
      { size: "EU 40", color: null, isAvailable: false },
      { size: "EU 41", color: null, isAvailable: true },
      { size: "EU 42", color: null, isAvailable: true },
      { size: "EU 43", color: null, isAvailable: true },
      { size: "EU 44", color: null, isAvailable: true },
      { size: "EU 45", color: null, isAvailable: true },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/9086482/1.jpg?1942",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/9086482/2.jpg?1942",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/9086482/3.jpg?4225",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/9086482/4.jpg?4225",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000098",

    name: "Men's Business Briefcase, Crossbody Bag, Shoulder Bag, Laptop Bag - Black",

    category: "bags",

    brand: "unknown",

    price: 22000,
    oldPrice: 33979,

    desc: `
Men's fashion business briefcase, crossbody handbag, fashion shoulder bag, laptop bag, business travel soft leather bag
Product information:
Name: men's briefcase, men's shoulder bag
Category: handbag
Material: PU Leather
Color：Black
Style: European and American retro
Luggage shape: horizontal square
Opening method: zipper buckle
Bracelet root number: unique
Processing methods: smooth surface
Bag internal structure: zipper pocket, mobile phone pocket, ID card pocket
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/1875772/1.jpg?4037",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/1875772/2.jpg?4037",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/1875772/3.jpg?4037",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },

  {
    id: "0000099",

    name: "Classic Male Travel And Office Document Laptop Bag",

    category: "bags",

    brand: "unknown",

    price: 17850,
    oldPrice: 31200,

    desc: `
welcome to my store100% brand newMen's Leather Business Briefcase,Laptop Bag,Men's Handbag,Shoulder Bag,Men's Travel Briefcases,Black BrownSize: length 36cm * height 28cm * thickness 10cmStyle: Business CasualColor:  brownUses: handbag / messenger / shoulder bag / briefcaseWeight: 0.71kg (approx)Best Match: Complements any style dress and color-matched shoes.Note 1: 1inch=2.54cm, 1cm=0.39inchNote 2: There may be slight color difference, due to computer monitor settings.Note 3: With the difference in the measurement method, please allow 1-3cm in size deviation.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/7928332/1.jpg?8365",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/7928332/2.jpg?8365",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/7928332/3.jpg?8170",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },
  {
    id: "0000001",
    name: "Apple iPhone 16 Pro Max DESERT - Titanium",

    desc: `Apple iPhone 16 Pro Max 256GB Natural Titanium - MYWY3ZD/A
The iPhone 16 Pro Max offers the perfect blend of performance, size, and innovation. It’s the ultimate choice for those seeking the best of Apple’s technology in a bigger format.

Key Features:
6.9-inch Super Retina XDR ProMotion Display: Apple’s largest, most immersive display, with stunning detail and a 120 Hz refresh rate for unmatched smoothness.
A18 Pro Bionic Chip: The most powerful chip for gaming, content creation, and advanced multitasking.
48 MP Pro Max Camera System with LiDAR: Capture studio-quality photos with extended optical zoom and exceptional night mode capabilities.
Extended Battery Life: Enjoy the best battery life in the range, even with heavy usage.
5G, Wi-Fi 6E, and UWB Connectivity: Flawless connectivity for all your demanding tasks.
Titanium Frame: Strong yet lightweight, for increased durability with a sleek design.
Storage starting at 256 GB: Perfect for 4K videos, high-resolution photos, and creative applications.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/9703293/1.jpg?6867",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/9703293/2.jpg?6867",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/9703293/3.jpg?6867",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/9703293/4.jpg?6867",
    ],

    price: 2100999,

    oldPrice: 2999999,

    category: "phones",

    brand: "apple",

    variants: [{ size: "256gb", color: "#d9c7b8", isAvailable: true }],

    unitLeft: 10,
    rating: [5, 5, 4, 5, 4.5, 5, 5, 5],
  },

  {
    id: "0000002",

    name: "Samsung Galaxy A16 6.7 HD 8GB RAM/256GB ROM Android 14 - Gray.",

    desc: `Processor:CPU Speed 2.4GHz, 2GHz
   CPU Type: Octa-Core
Display Size: 169.1mm (6.7" full rectangle) / 164.5mm (6.5" rounded corners)
Resolution: 1080 x 2340 (FHD+)
Technology:Super AMOLED
Colour Depth :16M
Max Refresh Rate: 90 Hz Camera
Rear Camera: 50.0 MP + 5.0 MP + 2.0 MP
Front Camera - Resolution: 13.0 MP
Video Recording Resolution: FHD (1920 x 1080)@30fps
Slow Motion: 120fps @HD
Storage/Memory: 8GB
Storage (GB): 256
    OS: Android 14`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/5339193/1.jpg?6621",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/5339193/2.jpg?6621",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/5339193/3.jpg?6621",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/5339193/4.jpg?6621",
    ],

    price: 288600,

    category: "phones",

    variants: [{ size: null, color: "silver", isAvailable: true }],

    brand: "samsung",
    // sizes: [],
    // colors: [{ color: "silver", isAvailable: true }],
    unitLeft: 20,
    rating: [3.5, 5, 5, 4, 3, 3, 3, 5],
  },

  {
    id: "0000091",

    name: "Women Canvas Shoulder Shopping Tote Bag Ladies Handbag",

    category: "bags",

    brand: "unknown",

    price: 5699,
    oldPrice: 9000,

    desc: `
This canvas shoulder backpack features a fashionable letter pattern design. 
This shoulder bag is made of pure cotton canvas, with a high-quality polyester lining and two finely woven hem ropes. The thread ends are reinforced with sewing, making it lightweight and durable.
It features a secure zipper closure to protect the safety and privacy of the items inside. There is a built-in pocket in the main compartment that can be used to store valuable items such as mobile phones, wallets, etc. 
Whether it's shoulder, back, or hand held, it's easy to use.
The size of the canvas shoulder backpack is 10.62In/27CM-13.77In/35CM X 12.59In/32CM, with a width of approximately 3.14In/8CM. The internal capacity is spacious enough to easily accommodate books, notebooks, clothes, and other travel items.
It can be used as a shoulder bag or handbag. You can bring it for shopping, dating, travel, shopping, commuting, or to the library. Whether it's sunny or rainy, you can carry this bag with you as long as you need it.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/9916782/1.jpg?5604",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/9916782/2.jpg?5604",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/9916782/3.jpg?5604",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/9916782/4.jpg?5604",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000050",

    name: "Lenovo Pad Plus (Tab P12 2023) 8GB + 128GB With Stylus Pen",

    category: "Tablets",

    brand: "lenovo",

    price: 540000,

    oldPrice: 850200,

    desc: `
Introducing the Lenovo 12.7-inch Android 13 Tablet — a powerful and stylish device designed for work, study, and entertainment. Powered by an MTK Octa-Core processor, 8GB RAM, and 128GB storage, this tablet delivers smooth performance and ample space for all your apps, videos, and documents. The 10200mAh battery ensures long-lasting power, making it perfect for users who are always on the go. With dual cameras — 13MP rear and 8MP front — capturing clear photos, video calls, and online classes become more enjoyable.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/4565804/1.jpg?6506",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/4565804/2.jpg?6506",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/4565804/3.jpg?6506",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/4565804/4.jpg?6506",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000066",

    name: "Hp Envy 15 X360 Touchscreen-13th Gen Intel Core I7, 16GB RAM,1TB SSD, Backlit Keyboard, Wins 11",

    category: "Laptops",

    brand: "hp",

    price: 1750000,
    oldPrice: 1990000,

    desc: `
Latest 2023 release of HP Envy 15 x360 convertible series updated with the new 13th Gen Intel  Platform core i7 processor and a sharper 5MP Camera. 

Operating system : Windows 11 Home
From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way.

Display : 15.6-inch diagonal, FHD (1920 x 1080), multitouch-enabled, IPS, edge-to-edge glass, micro-edge
Always see your content at its best with 178-degree wide-viewing angles, FHD and a vibrant picture. And with touchscreen technology, you can control your PC right from the screen.

Processor : Intel platform powered by 12th Generation Intel Core i7-1260P (Up to 4.7 GHz, 12 Cores)
13th Gen Intel Core processor distributes performance where you need it the most — saving you time and increasing your ability to do the things you actually want.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6245602/1.jpg?0142",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6245602/2.jpg?0142",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6245602/3.jpg?0142",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6245602/4.jpg?0142",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 3, 3, 5, 5, 5, 4],
  },

  {
    id: "00000128",
    name: "Power Plus Laptop ultra massive power bank.",

    category: "Computer Accessories",

    brand: "power plus",

    price: 409000,

    oldPrice: 570000,

    desc: `
Power packs are inverters (500VA) configured as uninterruptible power supply (UPS) units equip with very powerful inbuilt lithium batteries that provides backup power fo your laptop for several hours.

 

The PE 70 power pack provides extended backup power for your laptop, home/office equipment, CCTV systems, IT equipment, medical devices and more.

 

Provides extended backup time for home and office appliances such as 32 inch TV and decoder (up to 18 hours, laptop computer (up to 26 hours), CCTV camera and DVR (up to 32 hours), IT equipment,  medical devices and.more.

`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/1843363/1.jpg?2709",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/1843363/2.jpg?2709",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "00000129",
    name: "150W CAR INVERTER FOR CHARGING LAPTOPS",

    category: "Computer Accessories",

    brand: "unknown",

    price: 18700,

    oldPrice: 25000,

    desc: `
Convert 12V DC electricity provided by the automobile into AC power and be used with electric equipment with power consumption
Can be used for a notebook, cell phone, razor, digital camera, digital video, TV, CD, DVD, game machine, cleaner, refrigerator, electric light, charger and various kinds of professional tools, which power consumption are less than 100W
With the multiple protection circuit, there is no harm to the equipment and automobile
Special versatile socket, suitable for various kinds of plugs
Easy to use
Input voltage range: 12V DC


`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3262013/1.jpg?8514",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3262013/2.jpg?8514",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3262013/3.jpg?8514",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "0000067",

    name: "DELL Latitude 5400 TOUCHSCREEN Core I7 -512GB SSD/16GB RAM Keyboard BACKLIT /WIN 11+ BAG",

    category: "Laptops",

    brand: "dell",

    price: 5900000,
    oldPrice: 6500000,

    desc: `
Latest 2023 release of HP Envy 15 x360 convertible series updated with the new 13th Gen Intel  Platform core i7 processor and a sharper 5MP Camera. 

Operating system : Windows 11 Home
From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way.

Display : 15.6-inch diagonal, FHD (1920 x 1080), multitouch-enabled, IPS, edge-to-edge glass, micro-edge
Always see your content at its best with 178-degree wide-viewing angles, FHD and a vibrant picture. And with touchscreen technology, you can control your PC right from the screen.

Processor : Intel platform powered by 12th Generation Intel Core i7-1260P (Up to 4.7 GHz, 12 Cores)
13th Gen Intel Core processor distributes performance where you need it the most — saving you time and increasing your ability to do the things you actually want.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9611032/1.jpg?0996",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9611032/2.jpg?0996",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9611032/3.jpg?0996",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "00000103",
    name: "BT-16 Wireless Headphones Bluetooth 5.1 Neckband Earphone",
    category: "Phone Accessories",

    brand: "unknown",

    price: 11910,
    oldPrice: 17897,

    desc: `
Welcome! We offer premiumBluetooth headphones, phones, tablets, and more.


Explore our selection of high-end audio, mobile, and digital products.


Experience Premium Audio Without Breaking the Bank


Introducing our top-ratedBluetooth earbuds, engineered for an immersiveHi-Filistening experience.


These sleek and compact earbuds pack a powerful punch, delivering exceptional audio quality that belies their size:


    Studio-Grade Sound: Large dynamic drivers and expertly tuned acoustics deliver rich, detailed sound with deep, impactful bass, crystal-clear mids, and crisp, detailed highs.


    Immersive Audio: Experience your music like never before with a wide soundstage and truly immersive stereo separation, making you feel like you're right in the middle of the action.


    Lossless Audio Transmission: Enjoy every nuance of your favorite tracks with support for high-fidelity audio codecs, ensuring a pristine listening experience.


    Powerful Active Noise Cancellation: Escape distractions with advanced ANC technology that intelligently analyzes and neutralizes background noise, allowing you to focus on your music, podcast, or call.


    Crystal-Clear Calls: Built-in microphones ensure clear and effortless communication, even in noisy environments.


    Premium Design: These stylish earbuds are crafted for comfort and durability, with a sleek design that's sure to turn heads.

`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7731063/1.jpg?3378",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7731063/2.jpg?3378",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7731063/3.jpg?3378",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7731063/4.jpg?3378",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 3, 3, 3, 4, 5, 3],
  },

  {
    id: "00000104",
    name: "Samsung CHARGER 45W SUPER FAST CHARGER ADAPTIVE CHARGING FOR NOTE 20 Ultra S20 S21 S22 S23 Ultra Type-C To Type C",
    category: "Phone Accessories",

    brand: "samsung",

    price: 4910,
    oldPrice: 7999,

    desc: `
This Samsung Galaxy charger is an official Samsung product made from the highest quality materials and to the strictest standards For S10, S9, S8 S20 A51 A71 A70 A51 A30S A30
 This is ideal as a spare or replacement for your existing Galaxy charger.
Smart Q amp Adjustment technology intelligent chips identifies your device to deliver its fastest possible charge
Efficient and easy to use
Just plug into the wall socket and charge up your device
Adaptive fast charging
Experience faster charging speeds than ever before with Samsung Adaptive Fast Charging. Using the built-in technology of your latest Samsung Galaxy phones
 This is official Samsung Adaptive Fast Charger can rapidly recharge your device. No more hanging about, just super quick charging.
Compact design allows you to take it on your travels
The charger itself is very compact which makes it highly portable. Ideal for taking with you on holidays or short trips. When not in use, the central pin can retract, giving the adapter a much slimmer profile for convenient storage.
Easy to store and carry around with you
Fast Technology in charging your Samsung Galaxy for Latest S series and A series Samsung Smart Phones
Enjoy Speed in charging
Compatible with all Type C enable Smart Phones
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/8976272/1.jpg?4148",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/8976272/2.jpg?4023",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/8976272/3.jpg?4023",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/8976272/4.jpg?4023",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 4, 4, 3, 4, 3, 3],
  },

  {
    id: "0000088",

    name: "MEN CLASSIC SUEDE CHAIN DESIGNERS SHOE BLACK",

    category: "shoes",

    brand: "unknown",

    price: 34700,
    oldPrice: 55500,

    desc: `
Effortless style meets comfort in this premium sneakers with durable elevated soles. These amazing running shoes will be your go-to pair for casual outings as its design easily stands the test of combining both fashion and function. Classic, refined, and modern, the upper fabric allows for breathability and the solid heels enable easy traction. The minimalist design means they’re perfect for the boardroom or the bar right after work.

`,

    variants: [
      { size: "EU 40", color: null, isAvailable: true },
      { size: "EU 41", color: null, isAvailable: true },
      { size: "EU 42", color: null, isAvailable: true },
      { size: "EU 43", color: null, isAvailable: true },
      { size: "EU 44", color: null, isAvailable: true },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/8289953/1.jpg?2217",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/8289953/2.jpg?2217",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000051",

    name: "AGM PAD T3 Android 14 Tablet 10 8(4+4)GB RAM+64GB ROM 4G Dual SIM 6000mAh PC",

    category: "Tablets",

    brand: "agm",

    price: 180640,

    oldPrice: 306480,

    desc: `
Running on Android 14, the PAD T3 tablet offers the latest features in multitasking, customization, and security. Its 8-core UNISOC T606 CPU delivers smooth and efficient performance, with an Antutu benchmark score of 200,000—five times faster than similar processors. The tablet supports both 2.4GHz and 5GHz Wi-Fi, ensuring optimal connectivity for various needs.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/3382104/1.jpg?7047",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/3382104/2.jpg?2645",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/3382104/3.jpg?2645",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/3382104/4.jpg?2645",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000003",

    name: "Nexus 16 Inches Standing Fan (NX 4400B) - Black",

    category: "Appliances",

    brand: "nexus",
    price: 24500,
    oldPrice: 25200,

    desc: `Powerful Cooling Performance: Equipped with a high-performance motor, this fan delivers a strong and consistent airflow, effectively circulating air throughout the room.
    Adjustable Height and Oscillation: Our standing fan offers customizable comfort. With its adjustable height feature, you can easily set it to your desired level, whether you are lounging on the sofa or working at your desk. 
    Whisper-Quiet Operation: Engineered with advanced noise reduction technology, our standing fan operates quietly, allowing you to focus on your work, enjoy a peaceful night's sleep, or engage in conversations without any interruptions.
    Energy-Efficient and Eco-Friendly: With a strong commitment to sustainability, our standing fan is designed to be energy-efficient, helping you save on your electricity bills while reducing your carbon footprint. Stay cool without compromising the environment.`,

    isAvailable: false,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/193928/1.jpg?9026",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/193928/2.jpg?9026",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/193928/3.jpg?9016",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/193928/4.jpg?9016",
    ],

    variants: [{ size: null, color: "black", isAvailable: true }],

    unitLeft: 40,
    rating: [3, 3, 3, 3, 3, 4, 4],
  },

  {
    id: "0000004",

    name: "ECOFLOW RIVER 2 Pro 768Wh 800W Portable Power Station",

    category: "Electronics",

    brand: "ecoflow",
    price: 557999,
    oldPrice: 1058627,

    desc: `EcoFlow RIVER 2 Pro is a high-capacity portable power station designed for home backup, camping, RV trips, and outdoor work. With 70-minute fast charging via AC, you can quickly restore power during emergencies or on the go. The 1600W output supports 80% of household appliances, including refrigerators, coffee makers, and power tools, making it perfect for home office power backup during outages. Featuring 10 ports, including USB-C, AC, and DC outlets, portable generators can charge multiple devices at once, from laptops and smartphones to CPAP machines. The LFP battery lasts over 3000 cycles, ensuring 10 years of reliable use, while its advanced protection system safeguards against voltage and temperature fluctuations. Use solar energy for off-grid adventures with 220W solar panel compatibility, fully recharging in 3.5 hours—ideal for a outdoor generator for camping, van life, and remote job sites. Weighing just 7.8kg, its lightweight, portable design with a built-in handle makes it easy to carry anywhere, whether for outdoor photography, emergency preparedness, or travel. Stay powered anywhere with safe, efficient, and eco-friendly energy.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/6514162/1.jpg?8873",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/6514162/2.jpg?8873",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/6514162/3.jpg?8873",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/6514162/4.jpg?8873",
    ],

    variants: [{ size: null, color: "black", isAvailable: true }],

    unitLeft: 40,
    rating: [5, 5, 5, 5, 5, 5, 5],
  },

  {
    id: "0000005",

    name: "SILVER CREST 2L Industrial 8500W 9525 Motor Dry Grinder Blender With 2 Jar",

    category: "Kitchen",

    brand: "SILVER CREST",

    price: 24900,

    oldPrice: 27280,

    desc: `High Power: The Silver Crest countertop blender is equipped with 8500W high

power motor, capable of quickly crushing various ingredients for a smooth and

efficient blending process, saving you time and effort.

 

 2 Jars：2L large capacity cup smoothie blender has a capacity of 70oz (2 liters/8

cups), suitable for early mixing (soybean milk, fruit juice, vegetable juice,

smoothie, milkshake), which is suitable for 4-6 people. And 600ml Grinding cup,

grinding more fine, suitable for late wall breaking (grinding powder,). Meet the

needs of a family.

 

 High Speed Rotation: The blender operates at a speed range of 26000 to

30000RPM, ensuring quick and effective ingredient pulverization and achieving a

more uniform blending texture.

 Multifunctional Blades: 2L large capacity cup is equipped with 8-leaf toothed

stainless steel blade and 600mL Grinding cup is equipped with 6-leaf toothed

stainless steel blade that can be used for grinding meat, crushing ice, and

preparing baby food, among other purposes. It conveniently enables you to

    create a variety of delicious dishes to meet different cooking needs`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9107893/1.jpg?0142",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9107893/2.jpg?0142",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9107893/3.jpg?1374",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9107893/4.jpg?1374",
    ],

    variants: [{ size: null, color: "black", isAvailable: true }],

    unitLeft: 40,
    rating: [3.5, 3.5, 3.5, 3.5, 3.5],
  },

  {
    id: "0000006",

    name: "Hisense 7.5kg Twin Tub Washing Machine - (WSQB 753 (JF)",

    category: "Appliances",

    brand: "Hisense",

    price: 177000,

    oldPrice: 187294,

    desc: `Washing/Spinning Capacity[7.5kg]: The Hisense washing machine has a washing and spinning capacity of 7.5kg. This means that it can accommodate a maximum weight of 7.5 kilograms of laundry for both washing and spinning cycles. The capacity is suitable for medium-sized households and allows you to wash a significant amount of clothes in a single load.

Twin Tub: The Hisense washing machine features a twin tub design. This means that it has two separate compartments, one for washing and one for spinning. The twin tub design allows you to wash and spin your laundry simultaneously or independently. It provides convenience and flexibility in managing your laundry needs.

Lint Filter: The Hisense washing machine is equipped with a lint filter. The lint filter is designed to trap lint, fibers, and other small particles that may detach from your clothes during the washing process. It helps prevent these particles from clogging the drain or reattaching to your garments, resulting in cleaner clothes and better overall washing performance.

    Water Selector: The Hisense washing machine is equipped with a water selector. This feature allows you to choose the desired water level for your laundry. You can select the appropriate water level based on the amount of laundry you're washing or the specific washing program you're using. The water selector provides control and customization options, ensuring efficient water usage and optimal washing results.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/797234/1.jpg?9713",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/797234/2.jpg?9713",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/797234/3.jpg?9705",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/797234/4.jpg?9705",
    ],

    unitLeft: 13,
    rating: [4.5, 4, 4, 5, 3, 4, 4],
  },

  {
    id: "0000007",

    name: "Syinix 2.2L Electric Kettle - Silver",

    category: "Kitchen",

    brand: "Syinix",

    price: 5599,

    oldPrice: 6816,

    desc: `The Syinix Electric Kettle 2.2L is a quality appliance for home and office use
 It has a 2.2 liters capacity and a compact design which makes it suitable to use anywhere as it won’t take up much space. It is very efficient and guarantees sound performance at all times. It has an indicator that shows when it is turned on and its heating element is well-concealed which makes it safe to use. The handle has an ergonomic design which makes it easy for you to grip when pouring hot water into a cup.  
It has a one-touch power-on button which automatically switches off when the water is boiled. This ensures that it does not consume too much energy.
 Apart from making tea and coffee, the need of hot water in the kitchen is endless, which makes this electric water kettle a must-have in every home. The handle is made of rubber so you can comfortably hold it even when the body is hot. Using an electric kettle is a very efficient way to boil water. It has seamless tank with rated voltage of 220-240volts.2000w
Colorful look, colorful life2000W high power, quick boiling water Food grade stainless steel housing Durable and long-lasting360 degree rotation cordless design One-button quick opening Boil dry protection Automatic switch off`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/1724373/1.jpg?0045",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/1724373/2.jpg?9274",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/1724373/3.jpg?9274",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/1724373/4.jpg?9274",
    ],

    unitLeft: 13,
    rating: [4, 4, 4, 4, 4, 4, 5],
  },

  {
    id: "0000049",

    name: "redbeat A2 Tablet, Dual SIM, 10.1-inch , 8(4+4)GB RAM/128GB ROM, Android 14, 6000 MAh Battery,Gray",

    category: "Tablets",

    brand: "redbeat",

    price: 202200,
    oldPrice: 270510,

    desc: `
If you're looking for a tablet that combines performance and value for money, the Redbeat A2 is for you. Equipped with an octa-core 1.6GHz processor, this tablet ensures that your daily operations and multitasking will still run smoothly. 4GB of RAM and 128GB of storage with support for virtual memory expansion brings more storage and faster response time to meet your needs.
The Redbeat A2 runs the latest Android 14 operating system, providing you with a smoother and safer experience. 10.1-inch HD display with 800*1280 resolution provides a detailed and lifelike display, providing a great visual experience whether you're watching videos or browsing the web. The 5MP front and 8MP rear cameras allow you to record the best moments of your life anytime, anywhere.
In terms of battery life,
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/0337563/1.jpg?3157",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/0337563/2.jpg?9865",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/0337563/3.jpg?9865",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/0337563/4.jpg?9865",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000008",

    name: "P9 Wireless Bluetooth Headset Headphone Black",

    category: "Phone Accessories",

    brand: "unknown",

    price: 7250,

    oldPrice: 11600,

    desc: `P9 Wireless Headphone Bluetooth Sport Stereo OverEar Foldable Headset   Features: 1. Bluetooth 5.0 2. Headphones 3. Intelligent noise reduction 4. The angle can be adjusted independently 5. Support multiple modes: bluetooth/plug-in card/plug-in cable   
    
    Description: Product Name: Bluetooth Headset Type: Headphone Transmission distance: 10m Battery capacity: 200mAh Horn diameter: 40mm TF card: support Charging port: USB Song switching: support (shortcut) Volume adjustment: support (long press the function key) Answer the call/hang up the call: support (short press) Audio I/O interface: support   Packing list: 1 x Bluetooth Headset 1 x Charging Cable 1 x Instructions  
    
    Notes: 1. Due to manual measurement, please allow 1-3 cm error. 2. Due to problems between different monitors, the image may not reflect the actual color, please refer to the actual product. Thank you for understanding. 3. Due to long-term transportation and storage, the power of the product may be exhausted, please fully charge the product after receiving it before using it   Feedback: If you are satisfied with our products and services, please leave your positive feedback and 5 stars.   Serve: We care about our valued customers and will always try our best to help you, hoping to build a long-term business with you.     bluetooth earphone wireless earphone headset  noise cancelling headset`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/2319752/1.jpg?1235",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/2319752/2.jpg?1235",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/2319752/3.jpg?1235",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/2319752/4.jpg?1235",
    ],

    sizes: [],

    variants: [
      { size: null, color: "black", isAvailable: true },
      { size: null, color: "white", isAvailable: true },
      { size: null, color: "red", isAvailable: true },
      { size: null, color: "gray", isAvailable: true },
    ],

    unitLeft: 13,

    rating: [4, 4, 3, 4, 5, 4, 5],
  },

  {
    id: "0000064",

    name: "DELL Latitude 7490 Intel Core I7/ 512GB SSD 16GB RAM/BACKLIGHT KEYBOARD-WIN 11PRO+BAG",

    category: "Laptops",

    brand: "dell",

    price: 595000,
    oldPrice: 880000,

    desc: `
Designed to keep you productive and entertained from anywhere, the DELL 39.6 cm (15”) laptop combines a long battery life with a sleek and portable, micro-edge bezel design.


PROCESSOR FAMILY
 Intel® CORE I7 FAST PROCESSOR- FULL HD DISPLAY

39.6 cm (15") diagonal, FHD 1920x1080P, micro-edge, BrightView, 220 nits, 45% NTSC

PROCESSOR

Intel® CORE I7- (Up to 4.1 GHz with Intel® Turbo Boost Technology, 6 MB L3 cache, 4 cores)
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1627013/1.jpg?2317",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1627013/2.jpg?2317",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1627013/3.jpg?2317",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 5, 5, 4],
  },

  {
    id: "0000065",

    name: "Hp Omen 16 Gaming 13th Gen Intel Core I7 16GB RAM/1TB SSD 16.1 Nvidia RTX 4050 6GB WINS 11",

    category: "Laptops",

    brand: "hp",

    price: 2500000,
    oldPrice: 2580000,

    desc: `
Designed to keep you productive and entertained from anywhere, the DELL 39.6 cm (15”) laptop combines a long battery life with a sleek and portable, micro-edge bezel design.


PROCESSOR FAMILY
 Intel® CORE I7 FAST PROCESSOR- FULL HD DISPLAY

39.6 cm (15") diagonal, FHD 1920x1080P, micro-edge, BrightView, 220 nits, 45% NTSC

PROCESSOR

Intel® CORE I7- (Up to 4.1 GHz with Intel® Turbo Boost Technology, 6 MB L3 cache, 4 cores)
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/2825042/1.jpg?9372",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/2825042/2.jpg?9372",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/2825042/3.jpg?9372",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/2825042/4.jpg?9372",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 5, 5, 4],
  },

  {
    id: "00000124",
    name: "Apple Macbook Pro Air Original 61W Power Adapter USB Type C",

    category: "Computer Accessories",

    brand: "apple",

    price: 35000,
    oldPrice: 44900,

    desc: `
✅ 1. Original Apple Product
Benefit: Guaranteed compatibility and reliability—protects your device with Apple-certified safety and performance standards.

⚡ 2. 61W High Power Output
Benefit: Rapid charging for your MacBook Pro/Air, allowing you to power up faster and get back to work without long waits.

???? USB-C Compatibility
Benefit: Works with a wide range of USB-C devices, not just MacBooks making it a versatile charger for phones, tablets, and more.

???? Intelligent Power Delivery (PD)
Benefit: Automatically adjusts power output for optimal charging, preventing overheating, overcharging, and short circuits.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/3571904/1.jpg?8272",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/3571904/2.jpg?8272",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/3571904/3.jpg?8272",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/3571904/4.jpg?8272",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "00000125",
    name: "Laptop Case For MacBook AIR 13 Inch Case Release Model A3113 A2681 M3, M2, Ultra Slim Protective Hard Shell",

    category: "Computer Accessories",

    brand: "apple",

    price: 22000,

    desc: `
This ultra-thin, lightweight case features a sleek matte finish and comes with a complimentary silicone keyguard to protect against dust, dirt, and spills. Compatible with MacBook Air 13 Inch

 

Compatibility: Compatible with MacBook Air 13.6-inch models (A3113, A2681, M3, M2).
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/4098904/1.jpg?6178",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/4098904/2.jpg?6178",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/4098904/3.jpg?6178",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "0000043",

    name: "TiLECC 10.1 Inch Android Tablet PC 12 Dual Camera Sim 8GB RAM 512GB Bluetooth Fntastic Black",

    category: "Tablets",

    brand: "tilecc",

    price: 129999,

    oldPrice: 699999,

    desc: `
   Regarding this product: [System and Memory]: The M16 tablet is equipped with the Android 13 system, an eight core processor, and dynamically adjusted to enhance system collaboration stability and compatibility. The M16 tablet is equipped with 8GB RAM 512GB ROM, supporting up to 1TB of memory expansion (via MicroSD/TF card), and can be configured as additional/removable memory. Tablets provide enough space to run applications or store pictures, movies, documents, and books. Provide sufficient space to operate and store applications, e-books, movies, images, and learning files.   [10.1 inch intelligent IPS display]: The M16 tablet adopts a brand new 10.1 inch TFT tablet IPS display and thin film sensor, which can increase the viewing angle and touch sensitivity. Improved screen brightness, color, and adaptability can reduce screen power consumption. The 10000 mAh battery and dynamic adjustment can extend the overall hardware battery life. Use YouTube, YouTube Kids, and Prime Video to get better colors and sound on a 10.1-inch screen.   [Work, Study, and Entertainment]: The tablet supports WPS and Office desktop files, such as WPS, WORD, EXCEL, PPT, PDF, and more file management and editing applications that can be downloaded from the Play Store. The tablet is equipped with a 5-megapixel front camera,
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/0932393/1.jpg?5742",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/0932393/2.jpg?5742",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/0932393/3.jpg?5742",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000095",

    name: "Roomy Corduroy Tote Bag With Wide Shoulder Strap For Women",

    category: "bags",

    brand: "unknown",

    price: 23000,
    oldPrice: 33000,

    desc: `
Generous Storage Space: This tote bag boasts a spacious interior, making it an ideal companion for carrying all your daily essentials and more. Whether you're running errands, heading to work, or embarking on a weekend getaway, this bag has got you covered.
Durable Corduroy Construction: Crafted from high-quality corduroy, this bag combines durability with a touch of timeless elegance. The sturdy material ensures longevity, while the soft texture adds a luxurious feel to your everyday carry.
Versatile Carrying Options: Equipped with both wide shoulder straps and a detachable crossbody strap, this bag offers versatile carrying options to suit your preferences. Easily switch between shoulder and crossbody modes for maximum comfort and convenience.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/3657083/1.jpg?3870",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/3657083/2.jpg?0678",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/3657083/3.jpg?0678",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },
  {
    id: "0000044",

    name: "Maxim MatrixPad Ultra Slim 10.1 HD Display, 6GB + 128GB, 512GB TF Extendable, Android 13.0",

    category: "Tablets",

    brand: "maxim",

    price: 159990,

    oldPrice: 179990,

    desc: `
   Maxim MatrixPad S13 comes with a 10.1 inch HD display, 6GB RAM, 128GB ROM (expandable up to 512 GB), 4GLTE network, 5G + 2.4G Wifi, Octa-Core processor, Android 13.0 OS, Dual SIM, Dual cameras(8MP rear camera), 5G WiFi Browsing, FM, GPS. What's more, it's featured the Read mode, with which you can enjoy immersive reading in black and white. Complete tasks, enjoy movies on the go, watch online recipes or drama on FaceBook, read E-books, play light games or use offline Google map outdoor. Make your day joyful and convenient.

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/1431973/1.jpg?8345",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/1431973/2.jpg?8345",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/1431973/2.jpg?8345",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000068",

    name: "Apple MacBook Air 13.6 8GB/512GB M2 - Space Grey 2022",

    category: "Laptops",

    brand: "apple",

    price: 1999999,
    oldPrice: 2999999,

    desc: `
13.6" Space Grey MacBook Air with M2 Chip - 512GB SSD Laptop

MacBook

Don’t take it lightly Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure. It’s the ultrafast, ultra-capable laptop that lets you work, play or create just about anything — anywhere.

13.6"Retina Display

2560 x 1664Resolution

Apple M2Processor

512GBSSD Capacity

There’s power in silenceThanks to the efficiency of the M2 chip, MacBook Air can deliver amazing performance without a fan — so it stays completely silent, no matter how intense the task.

Puts the earth firstAs responsible as it is durable, MacBook Air features 100 per cent recycled aluminium in its compact enclosure.

Prepare for Take-Off
4K Recording
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/9534841/1.jpg?9333",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/9534841/2.jpg?6579",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/9534841/3.jpg?6579",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "0000069",

    name: "Ace Elec ACE 14.1'' Intel Celeron J4105 4Core CPU 16GB+512GB Laptop SILVER",

    category: "Laptops",

    brand: "ace elec",

    price: 850000,

    desc: `
ACE Laptop, 14.1 Inch FHD IPS 16:9 Screen, Intel Celeron Quad Core CPU, 16GB LPDDR4 RAM 128GB Storage, Office 365 1-Year Subscription, Laptops Computer with Numeric Keypad, 4 Stereo Speakers, WiFi.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/8526673/1.jpg?0474",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/8526673/2.jpg?0474",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/8526673/3.jpg?0474",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/8526673/4.jpg?0474",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },
  {
    id: "0000035",

    name: "Apple IPhone 13 Pro Max - 6.7 - 6GB RAM, 256GB ROM, 5G - Blue",

    category: "Phones",

    brand: "apple",

    price: 1200000,

    desc: `
  6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel
Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording
12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
A15 Bionic chip for lightning-fast performance
6GB RAM + 256GB ROM
(12MP + 12MP + 12MP) 
5G
6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel
Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording
12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
A15 Bionic chip for lightning-fast performance
6GB RAM + 256GB ROM
(12MP + 12MP + 12MP) 
5G

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/6252472/1.jpg?8456",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/6252472/2.jpg?8456",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000038",

    name: "Nokia C10 - 6.5 (2GB RAM, 32GB ROM) Android 11, Dual SIM - GREY",

    category: "Phones",

    brand: "nokia",

    price: 300000,

    desc: `Nokia C10 is the first phone to ditch HMD Global's primarily number-based branding of the smartphones so far. Nokia C10 comes with the traditional smartphone design without any notches, hole-punch, or pop-up cameras. The phone's key highlights include the presence of a quad-core processor, 2GB of RAM, and 3,000mAh battery. HMD Global is pushing it as the first smartphone for consumers coming from a feature phone.

Millions of consumers across markets in Africa, Middle East and APAC will upgrade from a feature phone to their first smartphone “Nokia C10 is a smartphone they can trust bringing quality experiences at an affordable price with 3G connectivity.

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/0757962/1.jpg?4343",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/0757962/1.jpg?4343",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000009",

    name: "Hikers 32'' Frameless Android Smart HD LED TV - Black + 1 Year Warranty",

    category: "Appliances",

    brand: "Hikers",

    price: 139000,

    oldPrice: 190000,

    desc: `Hikers 32" frameless Smart LED HD TV using an advanced picture quality improvement algorithm, Wide Colour Enhancer Plus drastically improves the quality of any image and uncovers hidden details. Now see colours as they were meant to be seen with Wide Colour Enhancer Plus.

Dream With Hikers to relax in bedroom with the sunshine. Dream your dream with Hikers. Love Your Love. House has the boundary however love is endless. Parents are happy for happy kids.Get closer with your family by one unit Hikers LED TV.

A Class Panel Resolution: 1366x768 HDMI USB GAME. It can be used as a computer monitor by HDMI.USB-plug in U disk to play video. AV interface-connect game console. Sound Effect quality stereo bring you romantic surprise during watching movies or American dramas. Energy Saving. Standby power is less than 0.5w by technically reducing backlight and the auto realizing of energy saving set.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/8797052/1.jpg?4457",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/8797052/2.jpg?4457",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/8797052/3.jpg?4457",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/8797052/4.jpg?3818",
    ],

    variants: [{ size: null, color: "black", isAvailable: true }],

    unitLeft: 33,

    rating: [4, 5, 3, 3, 5, 4, 5],
  },

  {
    id: "0000010",

    name: "Skyrun 70 Litres Double Door Top Mount Fridge (BCD-85HC) - Black",

    category: "Appliances",

    brand: "Skyrun",

    price: 215990,

    oldPrice: 362176,

    desc: `SKYRUN BCD-85HC  70L TOP MOUNT REFRIGERATOR

Large capacity:  Easily meet the needs of family life.
Safety lock: Availability of lock with key to keep your food safe-stored even when placing outhouse.
Fast cooling: Refrigerated, ingredients keep fresh；Freezing, ingredients remain good.
Interior LED Lighting：Eco & long-lasting LED lighting with stylish cold white feature, casting bright & even illumination for great visibility inside.
Energy-saving: Fulfill all the European regulations with energy Class up to A++, save electricity and save your money.
Anti-rust cabinet: Anti-rust design, suitable for changing climate.
Brand story: SKYRUN was established in 2005. It is a local manufacturing company in Nigeria. There are 6 high-efficiency production plants in the country. Products include TVs, Washing Machines, Refrigerators, Air Conditioners, Smart Electric Meters, Small Appliances, etc. And the Smart Electric Meters received a manufacturing certificate issued by nerc in 2016. SKYRUN is a leading supplier of technology and services in Nigeria. SKYRUN has a nationwide sales network and after-sales service system, and always puts user experience first. SKYRUN's brand philosophy is "Make a better life".`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/5037773/1.jpg?4575",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/5037773/2.jpg?4575",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/5037773/3.jpg?4575",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/5037773/4.jpg?4575",
    ],

    variants: [{ size: null, color: "black", isAvailable: true }],

    unitLeft: 33,

    rating: [4, 5, 3, 3, 5, 4, 5],
  },

  {
    id: "00000122",
    name: "Adjustable Laptop Stand And Stand With Fan And 360 Degree Rotating Base V5.1",

    category: "Computer Accessories",

    brand: "unknown",

    price: 70000,

    desc: `
The laptop stand is made from high quality aluminium alloy for a more robust construction. The desktop laptop stand provides solid support to hold your device upright without dropping it like the others. It helps you to work more comfortably.
-The versatile laptop design comes with a USB fan which allows the laptop to cool quickly and can also be used as a desktop fan. The laptop stand will quickly cool your laptop and keep it performing at high speed.
The unique Z-shaped design of the lift desk stand, which is height adjustable and 360° rotatable, allows you to adjust to the ideal viewing height whether sitting or standing. Improves your body posture and helps relieve neck and back pain and eye strain.
-The rubber on the laptop stand sticks securely to keep your computer stable and protect it from any scratches. With its portable design, the laptop stand folds easily into your bag and can be carried on business trips and travels.
-The PC lift is compatible with all tablets and laptops from 10-17 inches such as iPad Mini Air Pro, Mac Book Air Pro, Google Pixelbook, Dell XPS, Acer, Chromebook and many more from 11-17 inches devices.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/3192004/1.jpg?2860",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/3192004/2.jpg?2860",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/3192004/3.jpg?2860",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/3192004/4.jpg?2860",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "00000123",
    name: "HP Original 65W Power Adapter USB Type C For HP 65W USB Type C Travel Tablets, Laptops",

    category: "Computer Accessories",

    brand: "hp",

    price: 25999,
    oldPrice: 49999,

    desc: `
Unleash the Full Potential of Your HP USB-C Device: The Original HP 65W Power Adapter
Tired of slow charging and unreliable power sources? Step into a world of seamless power delivery with the Genuine HP USB-C 65W Original Power Adapter. Crafted by HP, the very engineers who designed your beloved device, this isn't just another charger – it's the key to unlocking its optimal performance and ensuring its long-term health.

 

Imagine a world where your HP laptop or tablet springs to life with swift, efficient charging, allowing you to power through your workday, conquer your gaming sessions, or immerse yourself in your favorite entertainment without the nagging worry of a dwindling battery. This is the promise of the HP USB-C 65W Original Power Adapter.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/2576804/1.jpg?1964",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/2576804/2.jpg?1964",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/2576804/3.jpg?1964",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/2576804/4.jpg?1964",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "0000075",

    name: "DELL ALIENWARE M16 R1 GAMING Intel Core i9-13900HX 1TB SSD 32GB 16 (2560x1600) QHD+ 240Hz WIN11 NVIDIA RTX 4080 12288MB Backlit Keyboard DARK METALLIC MOON",

    category: "Laptops",

    brand: "dell",

    price: 4570000,

    desc: `
Specifications:
1. Processor and Performance
Processor: Intel® Core™ i9-13900HX (13th Generation)
Base Clock Speed: 2.6 GHz
Max Turbo Frequency: Up to 5.4 GHz
Cores: 24 cores (8 Performance + 16 Efficiency)
Threads: 32 threads
Cache: 36MB Intel Smart Cache
The Intel Core i9-13900HX is built for high-end gaming, multitasking, and running resource-intensive applications without breaking a sweat.
2. Memory and Storage
RAM: 32GB DDR5 4800MHz
High-speed memory ensures smooth multitasking, fast load times, and seamless performance even during demanding tasks.
Storage: 1TB PCIe Gen 4.0 NVMe M.2 SSD
Enjoy blazing-fast storage for quick boot-ups and load times and ample space to store games, videos, and creative files.
3. Graphics
GPU: NVIDIA GeForce RTX 4080 12GB GDDR6
The RTX 4080 provides outstanding graphics performance for gaming at the highest settings, 4K rendering, and VR-ready experiences. With Ray Tracing and DLSS technology, expect lifelike visuals and enhanced frame rates for smooth gameplay.
12GB GDDR6 VRAM ensures the ability to handle even the most demanding applications, including professional video editing, 3D rendering, and next-gen gaming.
4. Display
Screen Size: 16.0 inches
Resolution: QHD+ (2560 x 1600)
Refresh Rate: 165Hz

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/5934404/1.jpg?8139",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/5934404/2.jpg?8139",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/5934404/3.jpg?8139",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "0000085",

    name: "Male Formal Glossy Tassel Brogue Shoes Loafers & Slip-ons Formal Black",

    category: "shoes",

    brand: "unknown",

    price: 27845,
    oldPrice: 36866,

    desc: `
The comfortable round head design makes it easy to wear and fits your feet. The anti-collision toe cap releases a comfortable experience. The upper is made of breathable, comfortable and soft fabric, which has a light and shock-absorbing effect. The high-quality rubber sole adopts a non-slip texture design, which is wear-resistant and not easy to slip. It is fashionable and eye-catching. It is very suitable for men who are pursuing trend and unique personality design. The inner lining is made of breathable fabric, which makes it easy to wear and exercise.This pair of shoes is suitable for all men, with fashionable personality and trendy color matching, high-quality workmanship, and a must-have for trendy men.Tips: Measurements are the maximum size,please allow 0.5-1cm tolerance. Compare the chart size with your feet length carefully before ordering. Style: Casual，Sport.Features: Comfortable，Durable，Very Cool.Occasions: Sports、Casual、Office、Outdoor、Dating、Shopping.Free VIP Jumia Express Service，Enjoy package protection to prevent loss of goods.
Tips1: If you follow the fashion trend, please FOLLOW our shop.Tips2: If you want to enjoy 50% or higher discount shopping, please follow our shop.Tips3: If you are looking for high-quality and inexpensive products, please FOLLOW our shop.Tips: Measurements are the maximum size,please allow 0.5-1cm tolerance. Compare the chart size with your feet length carefully before ordering.Please help me to light up 5 stars when you receive the goods
`,

    variants: [
      { size: "EU 41", color: null, isAvailable: true },
      { size: "EU 42", color: null, isAvailable: false },
      { size: "EU 43", color: null, isAvailable: true },
      { size: "EU 44", color: null, isAvailable: true },
      { size: "EU 45", color: null, isAvailable: false },
      { size: "EU 46", color: null, isAvailable: true },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/2248872/1.jpg?6111",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/2248872/2.jpg?6111",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/2248872/3.jpg?6111",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [3, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000086",

    name: "NEW ARRIVAL MEN DESIGNERS HIGH STONE SHOES BLACK",

    category: "shoes",

    brand: "unknown",

    price: 31980,
    oldPrice: 39800,

    desc: `
effortless style meets comfort in this premium sneakers with durable elevated soles. These amazing running shoes will be your go-to pair for casual outings as its design easily stands the test of combining both fashion and function. Classic, refined, and modern, the upper fabric allows for breathability and the solid heels enable easy traction. The minimalist design means they’re perfect for the boardroom or the bar right after work.

Function: breathable, wear-resistant
Foot length 41=255,42=260,43=265,44=270
`,

    variants: [
      { size: "EU 41", color: null, isAvailable: true },
      { size: "EU 42", color: null, isAvailable: false },
      { size: "EU 43", color: null, isAvailable: true },
      { size: "EU 44", color: null, isAvailable: true },
      { size: "EU 45", color: null, isAvailable: false },
      { size: "EU 46", color: null, isAvailable: true },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/9856653/1.jpg?4653",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/9856653/1.jpg?4653",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [3, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000076",

    name: "Apple MacBook Pro 14 M3 Chip 8GB RAM, 512GB - 2023 - Space Grey",

    category: "Laptops",

    brand: "apple",

    price: 2499000,

    oldPrice: 3000000,

    desc: `
The 14-inch MacBook Pro blasts forward with M3, an incredibly advanced chip that brings serious speed and capability. With industry-leading battery life—up to 22 hours—and a beautiful Liquid Retina XDR display, it’s a pro laptop without equal. 

SUPERCHARGED BY M3—With an 8-core CPU and 10-core GPU using hardware-accelerated ray tracing, the Apple M3 chip can help you blaze through everyday multitasking and take on pro projects like editing thousands of photos or 4K video.

UP TO 22 HOURS OF BATTERY LIFE¹—Go all day thanks to the power-efficient design of Apple silicon. MacBook Pro delivers the same exceptional performance whether it’s running on battery or plugged in.

RESPONSIVE UNIFIED MEMORY AND STORAGE— 8GB of unified memory makes everything you do fast and fluid. Up to 512GB of superfast SSD storage launches apps and opens files in an instant.²

BRILLIANT PRO DISPLAY—The 14.2-inch Liquid Retina XDR display³ features Extreme Dynamic Range, 1000 nits of sustained brightness for stunning HDR content, up to 600 nits of brightness for SDR content, and pro reference modes for doing your best work on the go.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/8501604/1.jpg?0349",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/8501604/2.jpg?0349",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "0000080",

    name: "Asus VIVOBOOK PRO 15 INTEL CORE I5 UP TO 4.4GHZ 8GB RAM 512GB SSD NVIDIA 1650 (4GB) WINDOWS 11",

    category: "Laptops",

    brand: "asus",

    price: 9900000,
    oldPrice: 1100000,

    desc: `
Dell XPS 13 9350 ( 34T4H74) Ultra 7 15TH GEN 32GB RAM 1TB

Tech Specs
Processor

Intel® Core™ Ultra 7 258V (8 cores, up to 4.8 GHz)

Operating System

Windows 11 Home, Copilot+ PC

Graphics Card

Intel® Arc™ graphics

Display

13.4", Touch, 3K 2880x1800, 60Hz, OLED, Anti-Reflect, 400 nit, InfinityEdge, Eyesafe®

Memory

 

32GB, LPDDR5X, 8533MT/s, integrated

Storage

1TB M.2 PCIe NVMe Solid State Drive


`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/5331304/1.jpg?5410",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/5331304/2.jpg?5410",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/5331304/3.jpg?5410",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/5331304/4.jpg?5410",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 3, 3, 3, 4, 5, 4],
  },

  {
    id: "0000081",

    name: "ADIDAS Advantage Lifestyle Court Lace Shoes",

    category: "shoes",

    brand: "adidas",

    price: 30600,
    oldPrice: 61200,

    desc: `
These kids' adidas lace-up sneakers are great for school, sports clubs and all the play that kids fit in between. They're made with a smooth, synthetic upper for a comfortable feel. A sturdy rubber outsole offers dependable traction.

Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.


`,

    variants: [
      { size: "EU 28", color: null, isAvailable: true },
      { size: "EU 29", color: null, isAvailable: true },
      { size: "EU 30", color: null, isAvailable: true },
      { size: null, color: "black", isAvailable: true },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/8904491/1.jpg?0570",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/8904491/2.jpg?4398",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/8904491/3.jpg?4398",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 3, 3, 3, 4, 5, 4],
  },

  {
    id: "0000036",

    name: "Bontel 5606,1.77,3000mah Battery,dual Sim,spot Light, Blue",

    category: "Phones",

    brand: "bontel",

    price: 14000,

    desc: `
 The Bontel 5606 is a affordable feature phone, that comes with 1.77inch screen, Dual SIM phone with 3,000mah big battery Capacity that last long.    Bontel 5606 can connect with wireless FM radio, support up to 32 GB expandable memory dare, spotlight and side torch key . It has digital camera and BT support. It is easy to use and mode. 
The Bontel 5606 is a affordable feature phone, that comes with 1.77inch screen, Dual SIM phone with 3,000mah big battery Capacity that last long.    Bontel 5606 can connect with wireless FM radio, support up to 32 GB expandable memory dare, spotlight and side torch key . It has digital camera and BT support. It is easy to use and mode. 
The Bontel 5606 is a affordable feature phone, that comes with 1.77inch screen, Dual SIM phone with 3,000mah big battery Capacity that last long.    Bontel 5606 can connect with wireless FM radio, support up to 32 GB expandable memory dare, spotlight and side torch key . It has digital camera and BT support. It is easy to use and mode. 
The Bontel 5606 is a affordable feature phone, that comes with 1.77inch screen, Dual SIM phone with 3,000mah big battery Capacity that last long.    Bontel 5606 can connect with wireless FM radio, support up to 32 GB expandable memory dare, spotlight and side torch key . It has digital camera and BT support. It is easy to use and mode. 

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/727144/1.jpg?5468",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/727144/2.jpg?5468",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000037",

    name: "Samsung Galaxy S10, 6.1 (8GB + 128GB ROM) Single Sim - Black",

    category: "Phones",

    brand: "samsung",

    price: 290000,

    desc: `
 Brand / Model Samsung Galaxy S10System OS Android 9.0CPU Exynox 9820 / Qualcomm Snapdragon 855 Octa Core 2.8GHzGPU Adreno 640RAM 8 GBROM 128 GB Extend card No supports SD Memory Card (TF-Card)ScreenDisplay Size 6.1 inch Quad HD+Screen Resolution 3040 x 1440Screen Type Super AMOLED HDR10+General Languages Default English, Etotalk Mod ROM has, Italian, Czech, German, Russian, Portuguese, Spanish, French, Dutch, Polish, Romanian, Danish, Greek, Brazil Portuguese, Croatian, Latvian, Lithuanian, Hungarian, Afrikaner, Ethiopic, Indonesian, Malay, Catalan, Norwegian, Roma, Slovak, Slovenian, Finnish, Swedish, Swahili, Filipino, Indonesian, Vietnamese, Turkish, Zulu, Bulgarian, Serbian, Ukrainian, Persian, Hindi, Thai, Korean, Japanese, Arabic, Hebrew, others please ask, (If you need your local language menu, please choose Etotalk Mod ROM.)Dimensions 162.6x77.1x7.94mmColor Silver /  BlackNet Weight 198gCameraFront Camera 10.0 mega pixelRear Camera 12.0 mega pixel 12.0 mega pixel 16.0 mega pixel Four CameraBand2G GSM: 850 / 900 / 1800 / 1900 MHz3G WCDMA: 850 / 900 / 1900 / 2100 MHz4G TDD-LTE: B34 / B39(1900MHz) / B40(2300MHz) / B41(2500MHz)FDD-LTE: B1(2100MHz) / B2(1900MHz) / B3(1800MHz) / B4(1700MHz) / B5(850MHz) / B7(2600MHz) / B8(900MHz) / B12(700MHz) / B13(700MHz) / B18(800MHz) / B19(800MHz) / B20(800MHz) / B25(1900MHz) / B26(850MHz) / B28(700MHz)5G 5G NR： / N260 (39GHz) / N261 (28GHz)SAR 0.5 W/KgSIM Card Slot Single SIMNano Sim, LTE/WCDMA/GSMData Transfer & ConnectivityData transfer Bluetooth 5.0 USB 3.1 Type-CMobile internet WiFi, EDGE, GPRS, UMTS, HSPA, HSPA+, FDD LTEGPS GPS Glonass BeidouFunctions / FeaturesFunctions / Features G-sensor, P-Sensor, L-Sensor, Wifi, GPS, OTG, Multi-touch, E-compass, Hall IC, NFC, Front Fingerprint Scanner, Single Sim, Air Pressure SensorSensor Gravity Sensor ,  Proximity Sensor ,  Light Sensor ,  Magnetic Sensor ,  Gyroscope SensorBattery Built-in Li-pol Battery 3400mAh

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/4149552/1.jpg?6813",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/4149552/2.jpg?6813",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/4149552/3.jpg?6813",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000011",

    name: "Berrykey 4Pcs Men's Underwear Breathable Comfortable Stretch Cotton Boxer Briefs",

    category: "Fashion",

    brand: "Berrykey",

    price: 6850,

    oldPrice: 8799,

    desc: `Comfortable soft, high quality fabric, with good scalability, good elasticity, no deformation. Creative design, full of fashion sense, show personality attitudeWell structured and designed Polos always score style points in any wardrobe, setting the tone for a fun outing at the mall with friends or a laid back dress-down day at the office. Be confident and engaging in this cotton-contrast tee casually sophisticated with a dash of simplicity.Fashion on Jumia never gets old. Shop the widest online range of first-rate clothing and accessories at the best prices.Have you been searching for a Store with the best creative, inspirational & soul lifting fashion outfit & shirt designs. Just stop by at Berrykey-sea-cod monthly.Thank you for your cooperation！`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/0923292/1.jpg?7050",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/0923292/2.jpg?7050",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/0923292/3.jpg?7050",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/0923292/4.jpg?5128",
    ],

    variants: [
      { size: "XL", color: null, isAvailable: true },
      { size: "XXL", color: null, isAvailable: true },
      { size: "XXXL", color: null, isAvailable: true },
      { size: "XXXXL", color: null, isAvailable: true },
    ],

    unitLeft: 33,

    rating: [4, 5, 4, 5, 5, 4, 5],
  },

  {
    id: "0000012",

    name: "Haier Thermocool 200 Litres Chest Freezer (HTF-200) - White + 3 Years Warranty",

    category: "Electronics",

    brand: "Haier Thermocool",

    price: 358155,

    oldPrice: 415460,

    desc: `Haier Thermocool’s energy efficient freezer with superior inverter technology enables saving of up to 50% energy and money and the large storage capacity enables you do bulk purchase without worries about wastage.
    100 Hours Frost Retention: Built with thick insulation with high-pressure micro foaming that keeps food frozen up to 100 hours after a power outage.
    Up To 50% Energy Saving: Power-saving technology making the product more energy-saving by cutting energy consumption by half versus any regular freezer.
High Efficiency Compressor: Fixed speed and wide voltage operation compressor the delivers voltage ranging from 160V to 260V.
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/1332231/1.jpg?5621",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/1332231/2.jpg?5595",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/1332231/3.jpg?5604",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/1332231/4.jpg?5611",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 3, 4, 5, 5, 5, 5],
  },

  {
    id: "0000013",

    name: "Hp EliteBook 840 G7 10th Gen Intel Core I5 Touchscreen 16GB RAM/512GB SSD Win 11 Pro",

    category: "Laptops",

    brand: "Hp",

    price: 550000,

    oldPrice: 635000,

    desc: `
  Hp EliteBook 840 G7 10th Generation touchscreen backlit keyboard is an advancement on the 7th and 8th gen models of 840 g5 and 840 G6. The laptops that know business. These PCs come with the manageability, security features and durability to handle your most demanding jobs.

A collaborative approach to work requires a powerful, secure, and durable laptop that keeps users connected and productive in any setting. Meet the demands of your multi-task, multi-place workday with the lightweight and beautifully designed HP EliteBook 840 G7
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/6886101/1.jpg?5276",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/6886101/2.jpg?5276",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/6886101/3.jpg?5276",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 3, 4, 5, 5, 5, 5],
  },

  {
    id: "00000118",
    name: "Bluetooth Dual-mode Rechargeable Wireless Mouse",

    category: "Computer Accessories",

    brand: "unknown",

    price: 7000,
    oldPrice: 10000,

    desc: `
1. Made of good quality ABS material, solid, durable 
2. 2.4G B receiver, can receive wireless within 10 meters.
4. Ergonomiwireless technology, optical technology, 1200dpi high precision, plug and play, convenient and practical.
3. With USc design, suitable for your hand posture, use without fatigue.
5. Lightweight and portable, suitable for PC, laptops, tablets, smartphones, etc.
6. With rechargeable inbuilt lithium battery and USB charging cable, easy to charge and use.

Specifications:
Material: ABS
Type: 2.4Ghz Wireless Mouse
Wireless Distance: within 10 meters
Work: Photoelectric
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/8763863/1.jpg?7862",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/8763863/2.jpg?7862",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 4, 5, 5, 5, 4, 5, 4, 4, 5, 5],
  },

  {
    id: "00000119",
    name: "Premium-Textured & Waterproof Computer Mousepad with Non-Slip Rubber Base, Gaming Mouse",

    category: "Computer Accessories",

    brand: "unknown",

    price: 3000,

    desc: `
Small and Perfect Size: Special square shape design, this small mouse pad is suitable for both work and games. 3 mm thickness offer a soft touch. Lightweight and portable, perfect for office, home, business trip and on the go

Ultra Smooth Surface: The surface is made of denser cloth with 230°F and high pressure treatment. Mouse can be quickly moved and accurately positioned on the smooth surface. Available for all types of mice, laser and optical mouse

Non-slip Rubber Base: Dense shading and anti-slip rubber pad base enhance the friction, can firmly grip the desktop. Fits all types of surfaces including wood, glass, marble, metal and more. Offers a more pleasant experience while working or gaming
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/3736904/1.jpg?5903",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/3736904/2.jpg?5903",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/3736904/3.jpg?5903",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "0000033",

    name: "itel A18s 5.0 Screen, 32GB + 2GB RAM, 3020mAh Battery,- Orange",

    category: "Phones",

    brand: "itel",

    price: 72290,

    desc: `Description-A18s
Multi-Functions Fingerprint
Multi Functions Fingerprint SensorFingerprint sensor is not just for unlock. A18 come with multi functions fingerprint sensor which allow you to unlock apps, take photos, record videos, answer phone calls, record phone calls, stop alarm clock, even customize any of your fingerprints as unique shortcut to launch apps in a second.

32GB, More Space For Storageitel A18 come with 32GB internal memory, available memory has 140% increase if compare to A32F, which means there is about 12GB will be available on A18 Other than that, the optimized Android Go OS with new and reimagined pre-installed apps, now your  plus has more free space to save photos, videos and install more apps.

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/4381452/1.jpg?9028",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/4381452/2.jpg?9028",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000034",

    name: "Samsung Galaxy S20 5G,Single SIM -Grey +pouch & Screen Guard",

    category: "Phones",

    brand: "samsung",

    price: 315000,

    desc: `
    Brand / ModelBrand / Model Samsung Galaxy S20 5G G981USystemOS Android 10CPU Qualcomm Snapdragon 865 Octa Core 2.8GHzRAM 8GBROM 128 GBExtend card MAX supports 512GB Class 10 Micro SD Memory Card (TF-Card)ScreenDisplay Size 6.2 inch Quad HD+Screen Resolution 3200 x 1440Screen Type AMOLEDGeneralLanguages Default English, Etotalk Mod ROM has, Italian, Czech, German, Russian, Portuguese, Spanish, French, Dutch, Polish, Romanian, Danish, Greek, Brazil Portuguese, Croatian, Latvian, Lithuanian, Hungarian, Afrikaner, Ethiopic, Indonesian, Malay, Catalan, Norwegian, Roma, Slovak, Slovenian, Finnish, Swedish, Swahili, Filipino, Indonesian, Vietnamese, Turkish, Zulu, Bulgarian, Serbian, Ukrainian, Persian, Hindi, Thai, Korean, Japanese, Arabic, Hebrew, others please ask, (If you need your local language menu, please choose Etotalk Mod ROM.)Dimensions 151.7x69.1x7.9mmColor Gray /  Blue /  PinkNet Weight 163gCameraFront Camera 10.0 mega pixelRear Camera 12.0 mega pixel 64.0 mega pixel 12.0 mega pixel Tri-lens CameraBand2G GSM: 850 / 900 / 1800 / 1900 MHz3G WCDMA: 850 / 900 / 1900 / 2100 MHz4G TDD-LTE: B34 / B39(1900MHz) / B40(2300MHz) / B41(2500MHz)FDD-LTE: B1(2100MHz) / B2(1900MHz) / B3(1800MHz) / B4(1700MHz) / B5(850MHz) / B7(2600MHz) / B8(900MHz) / B12(700MHz) / B13(700MHz) / B18(800MHz) / B19(800MHz) / B20(800MHz) / B25(1900MHz) / B26(850MHz) / B28(700MHz)5G 5G NR： / N41(2500Mhz) / N78(3500MHz) / N79(4500MHz)SAR 0.5 W/KgSIM Card Slot Single SimSim 1: Nano Sim/Micro SD, LTE/WCDMA/GSMData Transfer & ConnectivityData transfer Bluetooth 5.0 USB 3.1 Type-CMobile internet WiFi, EDGE, GPRS, UMTS, HSPA, HSPA+, FDD LTEGPS GPSFunctions / FeaturesFunctions / Features G-sensor, P-Sensor, L-Sensor, Wifi, GPS, OTG, Multi-touch, Single SIM, E-compass, Hall IC, NFC, IR Sensor, Face ID, Air Pressure Sensor, Screen Fingerprint ScannerSensor Gravity Sensor ,  Proximity Sensor ,  Light Sensor ,  Magnetic Sensor ,  Gyroscope SensorBatteryBattery Built-in Li-pol Battery 4000mAhWhat's in the box1 x Headset 1 x Micro-USB connector1 x Owner's Manual1 x Power adapter1 x SIM card removal tool1 x Device1 x USB connector (USB-C)1 x USB-C cable

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/0412342/1.jpg?9713",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/0412342/2.jpg?9713",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000014",

    name: "Haier Thermocool 1.25kVA/1kW Single Phase Petrol Generator (1500MS)",

    category: "Electronics",

    brand: "Haier Thermocool",

    price: 231920,

    oldPrice: 269027,

    desc: `
  This generator has been designed with reduced noise levels, reduced engine vibrations, and excellent fuel efficiency to give users maximum relaxation.

Pure copper ensures the generator coil does not burn while in use and thereby prolonging the service life of your generator.

Lower Noise Level
Protects the ears from disturbing high noise levels.

Automatic Voltage Regulator (AVR)
AVR ensure steady power output from your generator by minimising power fluctuations. This protects the life of your appliances. All TEC generators from the smallest to the biggest have AVR in them.

Fuel Efficient
Our fuel efficient generators saves extra fuel cost.
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/0371622/1.jpg?1545",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/0371622/2.jpg?1545",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/0371622/3.jpg?1529",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/0371622/4.jpg?1529",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 5, 5, 5, 5],
  },

  {
    id: "0000087",

    name: "Baby Girls Cute Summer Soft Pink Jelly Sandals With Bow",

    category: "shoes",

    brand: "unknown",

    price: 5500,
    oldPrice: 9000,

    desc: `
Beautiful soft pink adorable shoes for your adorable daughters. This cute pair of rubber jelly sandals are comfortable, lovely and very easy to wear. Your adorable little daughter will absolutely love it.
These girls' sandals are sure to keep your little ones feet cool as well as stylish this summer. Their touch fasten strap makes them ideal for both quick and easy fitting whilst ensuring that their feet stay secure. 
Make a pretty new statement in her Spring/Summer wardrobe this year with a pair of these ever so cute girls pink easy fasten sandals by with bow. They showcase an easy fasten strap meaning they provide quick and easy fitting and are perfect for on the go, everyday wear during the warmer months. Additionally, these sandals feature fine stitch detailing, a fully gripped outer sole, beautiful details and an open toe front. Perfect for Summer holidays, garden parties and everyday wear for your little one this season and all season. 

Rubber sole
Cushioned lining for increased all-day comfort
High quality materials, soft, breathable and comfortable.
Non-slip sole: Synthetic sole provides a good skid and wear resistance.
An Ideal Choice For Summertime and Holidays---This open-toe sandals come with an adjustable strap, giving her a comfortable fit that moves with her. Perfect for the beach or any summer assemble. 
`,

    variants: [
      { size: "EU 24", color: null, isAvailable: true },
      { size: "EU 25", color: null, isAvailable: true },
      { size: "EU 26", color: null, isAvailable: true },
      { size: "EU 27", color: null, isAvailable: true },
      { size: "EU 28", color: null, isAvailable: false },
      { size: "EU 30", color: null, isAvailable: false },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/2329622/1.jpg?1576",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/2329622/2.jpg?2987",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/2329622/3.jpg?2987",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/2329622/4.jpg?1664",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [3, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000015",

    name: "Mtng 4G LTE MiFi - M30S PRO + Free 30GB Data Bonus On Activation..",

    category: "Networking",

    brand: "Mtng",

    price: 15000,

    desc: `
  Universal Mobile Wi-Fi is a 4G LTE pocket size mobile internet hotspot Router that enables you to securely connect up to 10 Wifi devices at once.


This MiFi is a high-speed broadband portable Wi-Fi device compatible with both 3G and 4G LTE networks, ideal for use on the go!
The MiFi connects to a maximum of 10 Wi-Fi enabled devices at the same time – Smartphones, Tablets, Laptops, Computers, Game Consoles, Smart TVs, etc., for home or office use.


Customer Benefits:


Free 30GB data (valid for 30 days) upon purchase and activation
A 100% bonus on data bundles from N3,500 to N20,000 for 6 months after activation of the new SIM that is bundled with the MiFi device
Free daily data from the 7 month, on the following Super Plans upon exhaustion: 40GB Monthly Plan, 75GB Monthly Plan, and 120GB Monthly Plan
A top-up option on your active monthly data plan on the MiFi SIM with 3GB Top-up bundle for N1,000 only
Superfast online streaming experience, heavy downloads/uploads
Back-up power
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/7870093/1.jpg?4221",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/7870093/2.jpg?4221",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/7870093/3.jpg?4221",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 3, 4, 4, 5],
  },

  {
    id: "00000109",
    name: "New Age 55000 MAh PD 22.5W Digital Fast Charge Power Bank- FC55P",
    category: "Phone Accessories",

    brand: "new age",

    price: 45990,
    oldPrice: 80000,

    desc: `
Powerful Capacity Power Bank with Digital Display

Set Yourself Free

1 Charge = 3 Weeks of Power! Power up your devices and recharge your battery at high speed with USB-C Power Delivery, and provide optimized charging to your mobile devices.

Get freedom from your wall for THREE weeks. New Age FC55P 55000 PD Power Bank provides almost 16 iPhone 11 charges, 13 Samsung Galaxy S21 charges, 10 Tecno Phantom X charges or multiple charges for almost all tablets and other USB devices.

Four-Fold Protection Technology

With New Age’s Four-Fold Protection Technology, your device is protected from;

Short Circuit Protection
Overload Protection
Overheating Protection
Overload Protection of the Connected Device
Type-C Speed Recharge

With New Age Two-way Type-C port (input & output) recharge of 3A, a full charge takes just over 3 hours—twice as fast as a standard power bank. Recharge for a night; charge for THREE weeks.

High-Speed Charging



`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/8367953/1.jpg?2143",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/8367953/1.jpg?2143",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 3, 3],
  },

  {
    id: "00000110",
    name: "WIRELESS CHARGER Solid Magnetic Fast Wireless Charging Power Bank For IPhone X 11 12 13 14 15 PRO MAX, Samsung",
    category: "Phone Accessories",

    brand: "unknown",

    price: 11500,
    oldPrice: 25000,

    desc: `
For Magsafe External Battery Magnetic Power Bank For iphone 11 11pro 12 12Pro 12proMax 12mini 13 13pro 13 pro max 13mini 14 14 Pro 14 Promax 15 15 Pro 15 Pro max Magnet Wireless Charging Fast Charger

Product Name: magnetic wireless power bank 5W general charge Type-C port input 5v2a USB output 5v2.1a Wireless charging 5W Size: 98 * 63 * 15mm Electric quantity display: four electric quantity Weight: 120g 15W PD fast charge Product size: 98 * 63 * 15mm Capacity: 5000mAh; Key: Click to open; Electric quantity display: four electric quantity + one wireless charging indicator Type-C input / output PD: 5V / 3a, 9V / 2a, 12V / 1.5A USB output: 5V / 3a, 9V / 2a, 12V / 1.5A Wireless charging and output: 15W (compatible with 10W / 7.5W / 5W)
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/8402743/1.jpg?7471",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/8402743/2.jpg?7471",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 3, 3, 3, 4, 3, 3],
  },

  {
    id: "0000016",

    name: "TP-Link 300mbps Wireless N Router TL-WR840N",

    category: "Networking",

    brand: "TP-Link",

    price: 32000,

    desc: `
TP-Link Tl-wr840n 300mbps Wireless N Router 
USB1 x USB 2.0.ConnectivityWiFi + 4GNumber of Ports4 PortsColourWhiteBrand The 300Mbps Wireless N Router TL-WR840N is a combined wired/wireless network connection device designed specifically for small business and home office networking requirements. The TL-WR840N creates an exceptional and advanced wireless performance, making it ideal for streaming HD video, VoIP and online gaming. Also, Wi-Fi Protected Setup (WPS) button on the sleek and fashionable exterior ensures WPA2 encryptions, preventing the network from outside intrusions. 
Tp-Link TL-840 Wireless Router 3G/4G Overview.
Tp-Link TL-840 Wireless Router 3G/4G with an integrated 4G LTE modem and a built-in SIM card slot, all you need to do is insert a micro SIM card and turn it on the router. Enjoying fast, stable Wi-Fi on a 4G LTE network has never been easier.
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6980051/1.jpg?5388",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6980051/2.jpg?5388",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6980051/3.jpg?5388",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 3, 4, 3, 5, 3, 5],
  },

  {
    id: "0000017",

    name: "Mtng Universal MTNng 4G LTE ZTE MIFI WIFI ROUTER FOR ALL NETWORK PLUS 30GB DATA BONUS",

    category: "Networking",

    brand: "Mtng",

    price: 22999,

    oldPrice: 30000,

    desc: `
ntroducing the 4G Mobile Wi-Fi – Your Pocket-Size 4G LTE Hotspot for Reliable Internet Anywhere

Stay connected wherever life takes you with the 4G Mobile Wi-Fi. This compact and powerful mobile internet hotspot router lets you securely connect up to 8 devices at once, providing reliable 4G LTE connectivity for work, travel, and everyday use.

Universal Compatibility
The 4G Mobile Wi-Fi is compatible with major networks, including NTEL 4G, Airtel 4G/3G, MTNg 4G/3G, Glo 4G/3G, 9mobile 4G/3G, and Smile 4G. (Please note: Not compatible with Spectranet and Swift networks.)

Features
Multifunctionality
Not just a hotspot, this device also features a "NAS" function, allowing you to access data from an SD card effortlessly.

Enhanced Security
Enjoy peace of mind with support for IPv6, firewall, QoS, VLAN, and WPS one-key encryption, ensuring your network remains private and secure.

Blazing Speeds
Experience download speeds of up to 150 Mbps and upload speeds up to 50 Mbps, enabling smooth browsing, streaming, and working without interruptions.

Stylish and Portable
Featuring a sleek, pure white design, this device combines elegance with practicality, complementing your style while delivering top-notch performance.
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/2418192/1.jpg?8301",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/2418192/2.jpg?8301",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/2418192/3.jpg?8301",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/2418192/4.jpg?8301",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 4, 4, 3, 4, 3, 5],
  },

  {
    id: "0000018",

    name: "Century 50 Inches VIDA Smart 4K UHD TV (CTV-50) + 1 YEAR WARRANTY",

    category: "Appliances",

    brand: "Century",

    price: 433519,

    oldPrice: 446927,

    desc: `
Immerse yourself in a world of entertainment with the Century 50 inch 4K UHD Smart TV (CTV -50). Instantly access thousands of Apps, movie titles and games with our VIDA smart tv  for your complete and total entertainment. 
The 4K UHD (Ultra High Definition) is a bigger brighter and more colourful display, it has a 4 times performance display than regular high-definition displays which makes your movie, sports, and gaming experience completely out of this world. 
The slim bezel frameless design gives you end to end display for a better viewing experience. Our 50 inch 4K UHD TV also comes with Motion rate 120 for better motion clarity during fast paced movie scenes and sporting events. The input lag has also been developed for a more responsive gaming experience. 
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/0996104/1.jpg?8010",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/0996104/2.jpg?8010",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/0996104/3.jpg?8010",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/0996104/4.jpg?8010",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 3, 4, 5, 5],
  },

  {
    id: "0000019",

    name: "Apple MacBook Air 15.3 8GB/ 512GB SSD M3 Chip - Space Grey 2024",

    category: "Laptops",

    brand: "apple",

    price: 2599999,

    oldPrice: 5999999,

    desc: `
Powered by Apple M3 chip with next-generation CPU, GPU, and machine learning performance
Liquid Retina Display: 15-inch LED-backlit display with IPS technology; 2560-by-1664 native resolution at 224 pixels per inch
500 nits brightness
8-core CPU with 4 performance cores and 4 efficiency cores
10-core GPU, 10-core GPU :- Display Supports
Hardware-accelerated ray tracing
16-core Neural Engine
100GB/s memory bandwidth
8GB unified memory – Configurable to 16GB or 24G
512GB SSD Storage
Battery Life:- Up to 18 hours Apple TV app movie playback/ Up to 15 hours wireless web
6-watt‑hour lithium‑polymer battery
30W USB-C Power Adapter (included with M2 and M3 with 8‑core GPU)
35W Dual USB-C Port Compact Power Adapter (included with M2 and M3 with 10-core GPU and 512GB storage, configurable with M2 and M3 with 8‑core GPU)
MagSafe 3 charging port
5 mm headphone jack
Two Thunderbolt / USB 4 ports with support for:
Charging
DisplayPort
Thunderbolt 3 (up to 40Gb/s)
USB 4 (up to 40Gb/s)
USB-C to MagSafe 3 Cable
Fast-charge capable with 70W USB-C Power Adapter
Backlit Magic Keyboard and Touch ID for secure unlock
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1822963/1.jpg?8428",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1822963/2.jpg?8428",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1822963/3.jpg?8428",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1822963/4.jpg?8428",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 3, 4, 5, 5],
  },

  {
    id: "00000105",
    name: "Oraimo Charger Kit Oraimo Fast Charger With Micro Usb Blackberry Cable",
    category: "Phone Accessories",

    brand: "oraimo",

    price: 3990,

    desc: `
It ofers stable charging at 2A max speed.
It provides surge protection, short circuit prevention, temperature control and more to deliver unbeatable protection to you and your devices.
Hard-wearing exterior and high-gloss detailing are as durable as they are good looking, and the small body takes up minimal space.

Specifications:
CHARGER
Plug Type: UK Type
Input: 100-240V- 50/60Hz
Output: 5.0V=-2A (Max)
CABLE
Type: usb
Length: 1m

`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/9513231/1.jpg?0933",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/9513231/2.jpg?0933",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/9513231/3.jpg?0933",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/9513231/4.jpg?0933",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 3, 3],
  },

  {
    id: "00000106",
    name: "Oraimo Type-C And Micro-USB Port Power-Bank 20000mAh Fast Charging",
    category: "Phone Accessories",

    brand: "oraimo",

    price: 23190,
    oldPrice: 41997,

    desc: `
Product Features:

20000 mAh High Capacity-Say Goodbye to Battery Anxiety
20000mAh large capacity, filled to the brim with power. It lasts up to a week on a single charge, so whether you're on a personal business trip or a family trip, you just need one.
2.1A Dual Fast Charging-Always Best Choice
Powered by oraimo AniFast technology, it can intelligently identify the charging protocols of your device. The dual USB port configured with Traveler 4 can charge two devices at the same time with the fastest charging speed.

`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/6788701/1.jpg?8289",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/6788701/2.jpg?8289",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/6788701/3.jpg?8384",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/6788701/4.jpg?7914",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 3, 3],
  },

  {
    id: "0000093",

    name: "Women Shoulder Messenger Bag Chain Crossbody Ladies Bags",

    category: "bags",

    brand: "unknown",

    price: 7060,
    oldPrice: 9200,

    desc: `
Feature:
Fashion pure color, shoulder bag.
PU leather material, stylish and durable.

Specification:
Texture: PU
Size: 21*8*14cm
Shoulder strap height: 50cm
Shoulder strap style: single
Closing method: zipper
Pattern: plain
With or without interlayer: None
Applicable scene: Leisure
Applicable object: Youth
Popular style name: underarm bag
Function: shoulder bag, handbag
Color: Black/Brown/Pink/White
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7819543/1.jpg?5614",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7819543/2.jpg?5614",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7819543/3.jpg?5614",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7819543/4.jpg?5614",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },

  {
    id: "0000094",

    name: "12 Litre Insulated Lunch Box Black",

    category: "bags",

    brand: "unknown",

    price: 13500,
    oldPrice: 19999,

    desc: `
LARGE CAPACITY: Two zipped compartments, 1 zipped front pocket and 1 internal mesh pocket give you plenty of space for your lunch boxes, containers, drinks, fruit and other food items. The front pocket is designed to hold napkins and personal items, making it easier to organise and find your belongings (27*20*22 cm/10.2*7.4*8.2 inches).

The 8 mm thick PEVA foam lining maintains hot and cold temperatures for 8 to 10 hours, improving the quality, freshness and taste of your food.

INSULATION AND WATERPROOFING: The inner layer is made of aluminium foil (food-grade and with low thermal conductivity), which is highly insulating and keeps your food hot and cold for longer. The thick, soft PEVA lining is easy to clean and the dense seams make the bag extremely hard-wearing and prevent leaks.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/0592182/1.jpg?2599",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/0592182/2.jpg?2599",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/0592182/3.jpg?2599",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/0592182/4.jpg?2599",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },

  {
    id: "0000047",

    name: "XIAOMI Redmi Pad SE 8.7 4GB RAM / 128GB ROM Android 13 - Grey",

    category: "Tablets",

    brand: "xiaomi",

    price: 170318,

    desc: `
Redmi Pad SE 8.7 enhances visual comfort and audio immersion for a well-rounded entertainment offering. CertifieTÜV Rheinland for Low Blue Light and Flicker Free, along with fast DC dimming, the tablet aims to reduce eye strain and provide a comfortable reading and web browsing experience. It also offers two distinct reading modes to cater different user preferences — Paper Reading mode mimics a physical book, while Classic mode provides a traditional digital experience. These modes ensure a comfortable and personalized experience.

For audio, Redmi Pad SE 8.7 is equipped with dual stereo speakers that deliver immersive sound. Supported by DolbAtmos®, the tablet delivers enhanced audio quality. Whether streaming content, listening to music, or engaging in mobile gaming, Redmi Pad SE 8.7 provides a satisfying blend of visual and audio enhancements.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/8440473/1.jpg?6137",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/8440473/2.jpg?6137",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/8440473/3.jpg?6137",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000048",

    name: "XIAOMI Redmi Pad Pro 5G 12.1 6GB RAM / 128GB ROM Xiaomi HyperOS, Android U - Grey",

    category: "Tablets",

    brand: "xiaomi",

    price: 470071,

    desc: `
12.1-inch 2.5K ultra-clear display
Professional-grade eye protection screen

Enjoy a more comfortable large-screen experience with a 12.1-inch flagship display featuring a classic 16:10 aspect ratio, whether you're reading, gaming, or watching movies. With 2.5K ultra-clear WQHD+ resolution and 249 ppi, the display delivers professional-level performance with crystal-clear detail precision.

120Hz AdaptiveSync
High refresh rate and high brightness
Smoother user experience
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/1560473/1.jpg?9428",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/1560473/2.jpg?9428",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000020",

    name: "Apple 20Watts USB-C Power Adapter - 3 Pins",

    category: "Phone Accessories",

    brand: "apple",

    price: 38999,

    oldPrice: 50999,

    desc: `
The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office, or on the go. While the power adapter is compatible with any USB‑C-enabled device, Apple recommends pairing it with the iPad Pro and iPad Air for optimal charging performance. You can also pair it with iPhone 8 or later to take advantage of the fast-charging feature.

Charging cable sold separately.

The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office, or on the go.
While the power adapter is compatible with any USB‑C enabled device, Apple recommends pairing it with the 11-inch iPad Pro and 12.9-inch iPad Pro (3rd generation) for optimal charging performance.
You can also pair it with iPhone 8 or later to take advantage of the fast-charging feature.
Charging cable sold separately.
Charge your iPhone or iPad without a computer thanks to the Apple 20 W USB Type-C Power Adapter. It's compatible with all USB Type-C enabled devices, but Apple recomends using it with iPads or iPhones for optimal charging performance.
    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/3793101/1.jpg?4144",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/3793101/2.jpg?4144",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 3, 4, 5, 5],
  },

  {
    id: "0000021",

    name: "Samsung Galaxy S8+ S8 Plus LTE Android Cell Phone 6.2 12MP (4GB, 64GB ROM)- Blue",

    category: "Phones",

    brand: "samsung",

    price: 250000,

    desc: `
The Samsung S8+(Plus) is not afraid to show off its smarts! 


A combination of user-friendly features and innovative design make this one of the best of its range. Bring your best moments to life with the 8MP and 12MP front and back cameras respectively, you'll create powerful memories. Downloads, charging, and switching to incredibly fast speeds thanks to its octa core 10nm processor, the world's first. Gaming enthusiasts want to enjoy the life-like immersion that the 5.8 inch super AMOLED screen provides. Designed to take spills, splashes, and dunks, and still keep going, enjoy the super smart Samsung S8.  


    `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/747534/1.jpg?5026",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/747534/2.jpg?5026",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 5, 4, 5, 5],
  },

  {
    id: "0000022",

    name: "Tecno CAMON 20 Pro 5G Doodle Edition - 6.67 (256GB/8GB) 5000mAh",

    category: "Phones",

    brand: "tecno",

    price: 390000,

    desc: `Tecno Camon 20 Pro 5G Mr. Doodle Edition is the world-first graffiti-art style back cover designed in collaboration with the graffiti artist Mr Doodle. The doodle design is available on the Camon 20 Pro 4G, the Camon 20 Pro 5G, and the Camon 20 Premier Edition. In regards to specs, this 5G model is similar to its regular variant. It features a 6.67 inches, a custom user interface, triple camera lenses and powered by Mediatek Dimensity 8050 processor with 8GB of RAM and backed up by 5000mAh battery with 33W fast charging. `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/5196704/1.jpg?3533",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/5196704/2.jpg?3533",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 5, 4, 5, 5],
  },

  {
    id: "0000083",

    name: "Men's Industrial Safety Boots With Steel Toe, Kevlar Midsole",

    category: "shoes",

    brand: "unknown",

    price: 63000,
    oldPrice: 65000,

    desc: `
 Men's Industrial Safety Boots with Steel Toe and Kevlar Midsole

When it comes to workplace safety and comfort, our Men's Industrial Safety Boots with Steel Toe and Kevlar Midsole stand out as the ultimate choice for the modern professional. Designed for durability and engineered for performance, these boots are perfect for construction sites, factories, and any demanding environment.

Unmatched Protection

Safety is paramount, and our boots deliver with a robust steel toe cap that meets rigorous safety standards. This feature ensures your toes are shielded from heavy objects and accidental impacts, providing you with peace of mind on the job. Additionally, the Kevlar midsole offers exceptional puncture resistance, protecting your feet from sharp materials on the ground.
`,

    variants: [
      { size: "EU 41", color: null, isAvailable: true },
      { size: "EU 42", color: null, isAvailable: false },
      { size: "EU 43", color: null, isAvailable: true },
      { size: "EU 44", color: null, isAvailable: true },
      { size: "EU 45", color: null, isAvailable: true },
      { size: "EU 46", color: null, isAvailable: true },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/7607993/1.jpg?0280",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/7607993/2.jpg?0280",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/7607993/3.jpg?0280",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/7607993/4.jpg?0280",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [3, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000084",

    name: "NEW ARRIVAL SHINING STONE UP DESIGNERS SHOE BLACK",

    category: "shoes",

    brand: "unknown",

    price: 28400,
    oldPrice: 39800,

    desc: `
Introducing our latest collection of men's lace-up brogues, now available on Jumia!

You should expect to find a pair of high-quality and well-crafted shoes. Brogue shoes are characterized by their perforated detailing, typically on the toe cap, and serrated edges along the seams. They are typically made from high-quality materials such as leather, which gives them a polished and sophisticated look. The shoes should come in a box and wrapped in tissue paper or other protective materials. They should be laced up and ready to wear. The soles should be made of sturdy materials such as rubber or leather, providing good grip and durability.
`,

    variants: [
      { size: "EU 41", color: null, isAvailable: true },
      { size: "EU 42", color: null, isAvailable: false },
      { size: "EU 43", color: null, isAvailable: true },
      { size: "EU 44", color: null, isAvailable: true },
      { size: "EU 45", color: null, isAvailable: false },
      { size: "EU 46", color: null, isAvailable: true },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/3088183/1.jpg?5786",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/3088183/1.jpg?5786",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [3, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000023",

    name: "Realme Note 50 Dual SIM 4GB RAM 128GB 4G",

    category: "Phones",

    brand: "realme",

    price: 128200,

    oldPrice: 159900,

    desc: `Large 6.74-inch display
Secondary camera resolution 5 MP
Charging Type: Type-C
Number of SIM Cards Dual SIM Cards
Secondary camera 5 - 7.9 MP
RAM size 3 GB
The battery capacity is 5000 mAh
RAM 64 GB
Product weight 186 grams
Edition: Middle East Edition
The screen size is 6.74 inches
SIM type Nano SIM
Color name Sky Blue
Display type IPS LCD
OS version Android 13
Operating system Android
Voice call function Yes
Operating system number Realme UI T
Processor number T612
Fast charging Yes
What's in the box Earpiece, adapter, USB cable, quick guide, warranty card
Network Frequency Bands GSM/LTE/UMTS
Processor name Unisoc
Number of cores: Eight cores
Main camera function sheet
Model 2024
Network type 4G
Condition New
Product length 167.2 mm
Product height 8 mm
Product width/depth 76.7 mm
Sensor: Accelerometer, proximity sensor, fingerprint scanner
Model RMX3834
Model name: realme Note 50
Main camera (MP) 13`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/7136773/1.jpg?0928",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/7136773/2.jpg?0928",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/7136773/3.jpg?0928",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/7136773/4.jpg?0928",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 23,

    rating: [4, 3, 4, 5, 4, 5, 5],
  },

  {
    id: "00000126",
    name: "Super Scanner UareU 4500 Biometric Fingerprint Scanner",

    category: "Computer Accessories",

    brand: "unknown",

    price: 107000,

    desc: `
This is the only biometric reader that's recommended by JAMB, GCE, NYSC, NECO, WAEC, I.T, Project, research work and in organizations for biometric capturing of workers. It comes with the small disk which contains the RTE(drivers 32bit and 64bit) and the SDK file which serves as multipurpose especially for software designers  and programmers. On the other hand, if you don't know how to do the WAEC, JAMB, GCE, NYSC, NECO and other setups, you can always contact me because i know every single step to put you through. That's the added advantage you get when you buy my products.
Made for power-users and shared environments, the 4500 is the natural choice for those that want and need the very best. Here’s a look at just some of its features and benefits:

Blue LED

Soft, cool blue glow fits into any environment. Provides a pleasing presence; doesn't compete in low light environments, such as restaurants, or conflict with alarm condition colors, such as in healthcare.

Small form factor

Conserves valuable desk space.

Rugged construction
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/10/6106151/1.jpg?2727",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/10/6106151/1.jpg?2727",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },

  {
    id: "00000127",
    name: "For Macbook Pro Retina 12 Inch Protective Case(Green)",

    category: "Computer Accessories",

    brand: "unknown",

    price: 14080,

    oldPrice: 20114,

    desc: `
For Macbook Pro Retina 12 inch Starry Sky Patterns Apple Laptop Water Decals PC Protective Case(Green)
Feature
About the product
1. Ultra thin, super light design, perfect fit for your device.
2. Starry sky patterns + water decal + rubber oil coating finish, very stylish and extremely durable.
3. Soft rubber finish bring a comfortable handle as well as keep your MacBook stable and secure.
4. The outer surface coating delivers superior scratch resistance and protects from from scuffs,finger prints,water,oil,dust and other dirty.
5. Fully access to all ports, buttons and connectors. Unique protective design allows operating your Macbook freely without removing the case.
6. Fully vented for safe heat emitting.
7. Easy to clean up the sleek and smooth surface.

`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9596722/1.jpg?8407",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9596722/2.jpg?8407",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9596722/3.jpg?8407",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9596722/4.jpg?8407",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },
  {
    id: "0000024",

    name: "itel RS4 256GB ROM+8 GB RAM Silvery White",

    category: "Phones",

    brand: "itel",

    price: 159900,

    oldPrice: 250000,

    desc: `Display120Hz 6.56'' Punch-hole HD+ Display
Battery Capacity5000mAh
Charging45W PowerCharge
Processor Helio G99 Ultimate Gaming Processor
Memory 256GB ROM+8 GB RAM
Front Camera 8MP
Display
120Hz 6.56'' Punch-hole HD+ Display
Battery Capacity5000mAh
Charging45W PowerCharge
ProcessorHelio G99 Ultimate Gaming Processor
Memory 256GB ROM+24(12+12) GB RAM
Front Camera 8MPRear Camera 50MP
Photography Functions
50MP Mode, Super Night Mode, AI Clear Portrait, Magic Sky-change Mode, 10x Zoom, Filters, AI Scene Recognition, HDR Mode, Pro Mode, Panorama, Slow Motion, Time-lapse, etc.
System itel OS 13
Weight198g
Thickness8.15mm
Display120Hz 6.56'' Punch-hole HD+ Display
Battery Capacity5000mAh
Charging45W PowerCharge
ProcessorHelio G99 Ultimate Gaming Processor
Memory 256GB ROM+24(12+12) GB RAM
Front Camera 8MP
Display
120Hz 6.56'' Punch-hole HD+ Display
Battery Capacity5000mAh
Charging45W PowerCharge`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/5662933/1.jpg?2485",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/5662933/2.jpg?2479",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/5662933/3.jpg?2485",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/5662933/4.jpg?2485",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 43,

    rating: [4, 3, 4, 5, 4, 5, 5],
  },

  {
    id: "0000025",

    name: "Infinix Smart 9HD 6.7 4GB RAM/64GB ROM Titanium",

    category: "Phones",

    brand: "infinix",

    price: 136211,

    desc: `Smart 9HD

You can take advantage of a wide range of outstanding features that complement your lifestyle with the amazing Infinix SMART 9HD phone. You can show off your flair everywhere you go with this phone, which has a sizable 5000 mAh battery, up to 6 GB of RAM, and a 16.76 cm (6.7) -INCH Display that makes every image come to life. Also, you can enhance your online appearance with the SMART 9' 13MP Dual Camera, which is crisp and clear. The powerful Dual Flash provides you with the optimal lighting to spotlight your subject while it is possible 

Massive Battery
With the amazing 5000 Mah battery on the Infinix SMART 9HD smartphone, get through your day and stay productive. Leveraging it, a single charge allows you to enjoy up to 10 movies or listen to over 1200 songs. so, the 10Watt charging capability allows you to quickly recharge your phone.
Powerful RAM
This phone's capability for up to 4GB of RAM and 64GB of internal storage makes multitasking a pleasure. Thus, you can store whatever you need and run quite as many apps as you like without experiencing any hassles.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/9228483/1.jpg?5383",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/9228483/2.jpg?5383",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/9228483/3.jpg?5383",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/9228483/4.jpg?5383",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 43,

    rating: [4, 3, 4, 5, 4, 5, 5],
  },

  {
    id: "0000026",

    name: "XIAOMI Redmi A3 Pro 6.88 4GB RAM / 128GB ROM Android 14 - Midnight Black",

    category: "Phones",

    brand: "xiaomi",

    price: 118895,

    oldPrice: 121895,

    desc: `Type:IPS LCD
Aspect Ratio and PPI:260 ppi density
Size: 6.88 inches, 112.4 cm2 (~84.0% screen-to-body ratio)
Refresh Rate: 120 Hz
Resolution: 720 x 1640 pixels
Peak brightness (nit): 120Hz, 450 nits (typ), 600 nits (HBM)
Features: IPS LCD
Dimensions: 171.9 x 77.8 x 8.2 mm (6.77 x 3.06 x 0.32 in)
Weight: 204 / 207 / 211 g (7.20 oz)
Sensors: Fingerprint (side-mounted), accelerometer, compass
3.5mm Jack
NFC: (market/region dependent)
USB: Type-C 2.0
Loudspeaker Loudness (dB): Yes
SIM Card Type: Nano-SIM, dual stand-by
Number of SIM Area: Dual SIM
Wi-Fi 802.11 a/b/g/n/ac, dual-band
Bluetooth: 5.4, A2DP, LE
Mediatek Helio G81 Ultra
CPU:Octa-core 2.0 GHz
GPU: Mali-G52 MC2
Android 14, HyperOS
Memory: 4GB /128GB
SD Card Slot: microSDXC (dedicated slot)
Battery Capacity: 5160 mAh
Type: 18W
Fast Charging: Yes`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/2297973/1.jpg?8671",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/2297973/2.jpg?8671",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/2297973/3.jpg?8671",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/2297973/4.jpg?8671",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 43,

    rating: [4, 3, 3, 5, 4, 3, 5],
  },

  {
    id: "0000027",

    name: "Samsung Galaxy Z Fold 5 5G 12GB 512GB ROM Dual Sim - Black",

    category: "Phones",

    brand: "samsung",

    price: 2400000,

    oldPrice: 2500000,

    desc: `The Galaxy Z Fold5 of 2023 focuses on much-needed camera upgrades and throws in some subtle physical polishing, all the while maintaining the core concept of the productivity-driven phone-turns-tablet form factor.

The camera setup of the Z Fold3,  Z fold4 used some relatively ancient hardware, and the new model changes most of it. Having in principle the same wide-ultra wide-telephoto arrangement, the Z Fold5 gets more reach on the long end and a larger sensor main camera, while the ultra-wide remains untouched. Mind you, it's still not a cutting-edge configuration - it's almost the same as the one on the Galaxy S22 (+) with some fine print in the autofocusing section.

In the physical touches, we're seeing that the bezels have been trimmed down, the outer screen has adopted a slightly less tall aspect (still taller than virtually anything), and the whole thing now weighs ever so slightly less - all evolutionary changes that may or may be spotted in practice. It's certainly not the gapless foldable we've all been droning on that Samsung should make, while Chinese manufacturers are, in fact, making.

Speaking of the display, the foldable inner panel maintains the numbers of the old model the diagonal is 7.6 inches refresh rate mazes out at 120Hz, and it's a granularly adaptive refresh rate, as befitting the Fold's high-end status. The outer panel matches the big one for refresh rate capability, and while the diagonal remains unchanged from the predecessor at 6.2 inches, the new aspect should make it slightly more convenient while also marginally increasing the usable area.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/9527973/1.jpg?8992",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/9527973/2.jpg?8992",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/9527973/3.jpg?8992",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 43,

    rating: [4, 5, 5, 5, 4, 5, 5],
  },

  {
    id: "0000028",

    name: "Google Pixel Pixel 9 Pro Fold 256GB ROM 16GB RAM Nano SIM - Obsidian",

    category: "Phones",

    brand: "google",

    price: 2350000,

    desc: `Meet Pixel 9 Pro Fold with Gemini. It's engineered by Google and brings you the best of Google’s AI first. With a display of epic proportions, you can multitask in Split Screen and enjoy immersive entertainment. Snap brilliant selfies with the powerful rear camera, and use tabletop mode for hands-free pics. Pixel 9 Pro Fold is built to last. With a sturdy hinge and Corning® Gorilla® Glass Victus® 2 on the outer display and back, it can handle life's little "oops" moments. Pixel 9 Pro Fold easily fits in your pocket. And its elegant design features smooth matt glass and a sleek metal finish. Immerse yourself in entertainment and ease through daily tasks with the 8" Super Actua Flex inner display and 6.3" Actua outer display. Google Tensor G4 is Pixel's fastest, most powerful chip yet. It powers Google’s AI for innovative camera features, seamless multitasking and more help throughout the day. The Pixel 9 Pro Fold battery charges quickly and can last over 24 hours. Turn on Extreme Battery Saver, and it can last up to 72 hours. `,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/0934483/1.jpg?9656",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/0934483/2.jpg?9656",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 43,

    rating: [4, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000074",

    name: "Lenovo LEGION 5 GAMING 14TH GEN INTEL CORE I7 5.2GHZ 16GB RAM 1TB SSSD RTX 4060 (8GB) 16 WQXGA WINS 11",

    category: "Laptops",

    brand: "lenovo",

    price: 2955000,

    oldPrice: 3100000,

    desc: `
LENOVO 15 GAMING 16IRX9 LAPTOP


High-Speed Memory & Storage 

High-End Performance CPU] Latest powerful and efficient 14th Generation Intel i7-14650HX Processor (Up to 5.2 GHz with Intel Turbo Boost Technology, 30 MB Intel Smart cache, 16 Cores, 24 Threads)

16" WQXGA 165Hz Display] 2560 x 1600 pixels, IPS, 350 nits, Anti-glare, 100% sRGB, 165Hz, Dolby Vision, G-SYNC, Low Blue Light, 165Hz, Thin Bezel LCD; Powered by [NVIDIA GeForce RTX 4060] with 8GB GDDR6

Connection & Ports] Wi-Fi 6E (2x2) 802.11AX and Bluetooth 5.2 Combo; 1x USB 3.2 Gen 2 Type-C support Power Delivery / DisplayPort / 10Gbps, 1x USB 3.2 Gen 2 Type-C support DisplayPort / 10Gbps, 1x USB 3.2 Gen 1 Type-A support Always On / 5Gbps, 2x USB 3.2 Gen 1 Type-A support 5Gbps, 1x RJ-45, 1x HDMI v2.1, 1x Headphone and microphone combo 
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/0537104/1.jpg?7346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/0537104/2.jpg?7346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/0537104/3.jpg?7346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/0537104/4.jpg?7346",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "00000107",
    name: "Ace Elec 70,000MAh Large Capacity Portable Power Bank With 28 PCS LED Lights",
    category: "Phone Accessories",

    brand: "Ace Elec",

    price: 37529,

    desc: `
ACE ELEC multifunctional 70,000mAh large-capacity pøwer bank with 28PCS LED lights and digital display, supports charging 4 devices simultaneously with multiple interfaces and lanyard, convenient to use.
 

Product features:

[70,000mAh large capacity] Built-in 70,000mAh high-density safe polymer battery, can provide long-term power support for your smartphone, tablet computer, digital camera and a variety of electronic devices. Whether you are in daily work or on a long-distance trip, this pøwer bank can be your reliable energy guarantee, so that your device always stays active, without worrying about the trouble caused by running out of power. It is your ideal companion for daily life and outdoor travel.

`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/2686104/1.jpg?7543",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/2686104/2.jpg?7543",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/2686104/3.jpg?7543",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 3, 3],
  },

  {
    id: "00000108",
    name: "itel 40000mAh 22.5W Fast Charging Type-C Output Powerbank",
    category: "Phone Accessories",

    brand: "itel",

    price: 34950,
    oldPrice: 80000,

    desc: `
LARGER CAPACITY
LONGER USAGE
SUPER STRONG
40,000mAh Power Bank

SPECIFICATIONS
Battery Cell Type: Lithium BatteryCapacity: 40,000mAhRated Input: DC 5.0V, 3A: 9V, 2ARated Output: DC 5.0V - 3A , 9V - 2.22A, 12V - 1.67A (22.5W Max) 


40,000mAh High Capacity
It holds enough energy to charge a phone and most tablets for up to a week

Fast Charging for Up to 6 Devices
Itel exclusive charging technology ensures up to 22.5W charging speed for three device simultaneously.

`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6245773/1.jpg?5235",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6245773/2.jpg?1302",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 3, 3],
  },

  {
    id: "0000077",

    name: "Hp 15 VICTUS GAMING, 12TH GEN INTEL CORE I5, 16GB RAM, 512GB SSD,4GB NVIDIA RTX 3050 WINS 11",

    category: "Laptops",

    brand: "hp",

    price: 1339000,

    oldPrice: 1560000,

    desc: `
The 14-inch MacBook Pro blasts forward with M3, an incredibly advanced chip that brings serious speed and capability. With industry-leading battery life—up to 22 hours—and a beautiful Liquid Retina XDR display, it’s a pro laptop without equal. 

SUPERCHARGED BY M3—With an 8-core CPU and 10-core GPU using hardware-accelerated ray tracing, the Apple M3 chip can help you blaze through everyday multitasking and take on pro projects like editing thousands of photos or 4K video.

UP TO 22 HOURS OF BATTERY LIFE¹—Go all day thanks to the power-efficient design of Apple silicon. MacBook Pro delivers the same exceptional performance whether it’s running on battery or plugged in.

RESPONSIVE UNIFIED MEMORY AND STORAGE— 8GB of unified memory makes everything you do fast and fluid. Up to 512GB of superfast SSD storage launches apps and opens files in an instant.²

BRILLIANT PRO DISPLAY—The 14.2-inch Liquid Retina XDR display³ features Extreme Dynamic Range, 1000 nits of sustained brightness for stunning HDR content, up to 600 nits of brightness for SDR content, and pro reference modes for doing your best work on the go.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/0363162/1.jpg?0913",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/0363162/2.jpg?0913",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/0363162/3.jpg?0913",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/0363162/4.jpg?0913",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "0000029",

    name: "Apple IPhone 16 Pro Max - 8GB - 256GB -5G - Black Titanium",

    category: "Phones",

    brand: "apple",

    price: 2299000,
    oldPrice: 3000000,

    desc: `STUNNING TITANIUM DESIGN—iPhone 16 Pro Max has a strong and light titanium design with a larger 6.9-inch Super Retina XDR display. It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass.

BUILT FOR APPLE INTELLIGENCE—Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data. Coming fall 2024.

TAKE TOTAL CAMERA CONTROL—Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time.

MAGNIFICENT SHOTS—Take your videos to a whole new level with 4K 120 fps Dolby Vision, enabled by the 48MP Fusion camera. The improved 48MP Ultra Wide camera lets you capture mesmerizing detail in macro photos and wide-angle shots.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/5487973/1.jpg?3146",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/5487973/1.jpg?3146",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 43,

    rating: [4, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000030",

    name: "Apple IPhone 15 Pro Max 6.7 512GB Nano-SIM 5G - Natural Titanium",

    category: "Phones",

    brand: "apple",

    price: 2000000,

    desc: `iPhone. Forged in titanium.iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.Titanium has one of the best strength‑to‑weight ratios of any metal, making these our lightest Pro models ever. You’ll notice the difference the moment you pick one up.
A17 Pro chip.A monster win for gaming.It’s here. The biggest redesign in the history of Apple GPUs. A17 Pro is an entirely new class of iPhone chip that delivers our best graphics performance by far.Mobile games will look and feel so immersive, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
A camera that captures your wildest imagination.From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.With iPhone 15 Pro, you have multiple focal lengths to work with. It’s like having seven pro lenses in your pocket, everywhere you go.
Get in on the Action button.The all‑new Action button is a fast track to your favorite feature. Once you set the one you want, just press and hold to launch the action.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/4554283/1.jpg?3620",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/4554283/2.jpg?3620",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 43,

    rating: [4, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000031",

    name: "Apple iPhone 15 Pro Max 6.7 - 512GB Nano-SIM & ESIM 5G",

    category: "Phones",

    brand: "apple",

    price: 2000000,

    desc: `iPhone. Forged in titanium.iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars. Titanium has one of the best strength‑to‑weight ratios of any metal, making these our lightest Pro models ever. You’ll notice the difference the moment you pick one up.

A monster win for gaming. It’s here. The biggest redesign. A17 Pro is an entirely new class of iPhone that delivers our best graphics performance by far. Mobile games will look and feel so immersive, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.

A camera that captures your wildest imagination. From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.With iPhone 15 Pro, you have multiple focal lengths to work with. It’s like having seven pro lenses in your pocket, everywhere you go.`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/6163204/1.jpg?0887",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/6163204/2.jpg?0887",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000032",

    name: "Oneplus 13, 6.82 5G 16GB RAM 512GB Dual Sim - Midnight Ocean",

    category: "Phones",

    brand: "oneplus",

    price: 1900000,

    desc: `The OnePlus 13 has a unique brand design that’s now available in a vegan leather option as well. Accompanying the new design are new cases with magnets in place to hold the new wireless charging accessories. The phone is both IP68 and IP69 certified for dust and water resistance.

OnePlus has a new quad-curved screen for its mostly flat display, which is a departure from the curved edge displays on previous models. The phone runs OxygenOS 15, which is based on Android 15 and comes with many new and useful AI-enabled features.

The phone offers plenty of raw performance for regular use and demanding tasks like gaming and camera usage thanks to its new 3nm processor. The camera performance is unparalleled at this price point, and the same holds true for video recording.

`,

    variants: [{ size: "16GB 512Gb", color: null, isAvailable: true }],

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/5004004/1.jpg?5523",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/5004004/2.jpg?5523",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000040",

    name: "Huawei Honor 8X 6.5 6GB RAM 128GB ROM Kirin 710 3750mAh Dual Back 20MP Camera",

    category: "Phones",

    brand: "huawei",

    price: 80000,

    oldPrice: 189780,

    desc: `Full View Display with Nearly Borderless Design. Seamless HD full view screen, with advanced chip-on-film (COF) technology and special antenna design. Only 4. 25 mm width of bottom border, and incredible screen-to-body ratio of 91%. The display occupies nearly the entire front of the phone. 
6. 5-inch and 1080P High Definition. With its nearly borderless design, the phone can retain the same body size as a 5. 5-inch phone, making for an easier grip. The 19. 5: 9 aspect ratio and enhanced visual quality show more details and offer a better cinematic experience. 
Glass Body with Visual Grating Effect. Second-generation anti-glare film, with two visual effects and 15 layers of rich reflective craftsmanship on the same glass back. On the left border: complex intertwined and grained texture. On the right border: classic, unique pattern effect of Honor flagship phones. 

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/0652904/1.jpg?7628",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/0652904/2.jpg?1576",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/0652904/3.jpg?1576",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/0652904/4.jpg?1576",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 5, 4, 5, 4],
  },

  {
    id: "0000041",

    name: "VINSA 10x6 Inch Professional Graphic Drawing Tablet 12 Express",

    category: "Tablets",

    brand: "vinsa",

    price: 40640,

    oldPrice: 73034,

    desc: `
    10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course 
 
Features:

[Professional Graphics Tablet]: Graphics Drawing Tablet with 10x6 inch active area, provides you a sufficient creative area. 5080LPI resolution and 233PPS report rate, enabling the painting smooth and truly show you art works.

[8192 Levels Pressure]: Comes with a battery-free stylus, 8192 levels pressure, premium nibs makes the strokes more delicate. 60° tilt sensing ensure the accuracy of handwritten painting and restore the true hand-painted feel

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/755296/1.jpg?7876",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/755296/2.jpg?7876",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/755296/4.jpg?1431",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/755296/3.jpg?7876",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000042",

    name: "LCD Drawing Tablet For Children/Electronics Writing Board",

    category: "Tablets",

    brand: "unknown",

    price: 17500,

    oldPrice: 23000,

    desc: `
    NOTE: It display two different colorThis is a product that helps children to develop their drawing and writing talent without wasting of papers in the house or staining the wall of the house with ink or pencil. 
The LCD writing pad is Environment friendly, electronic alternative to memo pads, sticky notes, sketch books, dry erase boards and other writing/drawing mediums. Using the LCD writing tablet instead of paper memo pads everyday will SAVE a lot of trees. 
Large writing surface with 8.5 inch LCD screen gives you even more room to draw or write to show your imagination or education content. Let imaginations run wild without worrying about the mess from markers. The case and LCD screen are made from durable, shatter-proof, non-toxic plastic materials.
 LCD writing tablet uses flexible liquid crystal display technology. The screen is sensitive to the stylus pressure when writing text or drawing pictures and graphics. 8.5 inch eWriter is the model that that started the paperless writing revolution. Easily erase at a push of a button, comes with replaceable battery. As a result, the tablet very closely mimics drawing with a pen and paper.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/7290763/1.jpg?4823",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/7290763/1.jpg?4823",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000045",

    name: "Tablet 8GB+256GB 10.1 Inch Screen 5G Calling Snapdragon 888 Processor",

    category: "Tablets",

    brand: "unknown",

    price: 138130,

    oldPrice: 262450,

    desc: `
Features: 
【High-performance Processor】
The tablet uses the Snapdragon 888 processor, which can easily cope with running various apps or multitasking, providing a smooth user experience.

【Large Storage Capacity】 
8G+256GB storage space, which can be expanded to 128GB, has enough space to save your favorite movies, photos, and games, meeting your various needs.

【High-clear Large Screen】
The 10.1-inch large screen, with a high-clear resolution of 1920*1200, brings the ultimate visual enjoyment whether watching movies, playing games, or working.

【Long Standby Time】
The 7000mAh large battery can provide several hours of continuous use time whether it is for work, entertainment, or on the road.

【Multifunctional Network Connection】 
Supports 5G WiFi and 5G calls, dual card dual standby, and can maintain a stable network connection whether at home or outside.


`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4997372/1.jpg?9252",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4997372/2.jpg?2035",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4997372/4.jpg?9252",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000046",

    name: "XIAOMI Redmi Pad Pro 12.1 6GB RAM/128GB ROM Android 14 - Grey",

    category: "Tablets",

    brand: "xiaomi",

    price: 384276,

    desc: `
Enjoy a more comfortable large-screen experience with a 12.1-inch flagship display featuring a classic 16:10 aspect ratio, whether you're reading, gaming, or watching movies. With 2.5K ultra-clear WQHD+ resolution and 249 ppi, the display delivers professional-level performance with crystal-clear detail precision.

High refresh rate and high brightness
Smoother user experience
With a 120Hz adaptive refresh rate and a maximum brightness of 600 nits, the display offers smooth and stable visuals whether you're watching sports or playing fast-paced games.

Redmi Pad Pro
10,000mAh (typ) ultra-long battery life, with up to 33.9 days of standby time after a full charge
Reading, videos, games, in whatever scenario, can all meet your entertainment needs and enjoy the peace of mind brought by the long-lasting battery life
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/4219073/1.jpg?5523",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/4219073/2.jpg?5523",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 3, 4, 5, 4],
  },

  {
    id: "0000078",

    name: "Lenovo LEGION 9 161RX9-83G0CTO1WW- Intel Core I9-14900HX",

    category: "Laptops",

    brand: "lenovo",

    price: 7000000,

    oldPrice: 7800000,

    desc: `
Lenovo Legion Pro 9i Gen 9 16" Gaming Laptop (2024 Model) Intel 14th Gen i9-14900HX 24C, NVIDIA GeForce RTX 4090 16GB, 32GB RAM, 2TB (1TB+1TB) NVMe SSD, 16" 3.2K Mini-Led 165Hz 1200-nits, Win 11 Home. Liquid cooled. AI tuned. Your future is forged. Experience the laptop that’s changing the entire PC gaming industry, with revolutionary liquid cooling tech, AI features, and more. 
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/7448404/1.jpg?7965",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/7448404/2.jpg?7965",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/7448404/3.jpg?7965",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 3, 3, 3, 5, 5, 4],
  },

  {
    id: "0000079",

    name: "DELL Xps 13 9350 ( 34t4h74) Ultra 7 15th Gen 32gb Ram 1tb",

    category: "Laptops",

    brand: "dell",

    price: 3200000,

    desc: `
Dell XPS 13 9350 ( 34T4H74) Ultra 7 15TH GEN 32GB RAM 1TB

Tech Specs
Processor

Intel® Core™ Ultra 7 258V (8 cores, up to 4.8 GHz)

Operating System

Windows 11 Home, Copilot+ PC

Graphics Card

Intel® Arc™ graphics

Display

13.4", Touch, 3K 2880x1800, 60Hz, OLED, Anti-Reflect, 400 nit, InfinityEdge, Eyesafe®

Memory

 

32GB, LPDDR5X, 8533MT/s, integrated

Storage

1TB M.2 PCIe NVMe Solid State Drive


`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/6362704/1.jpg?4705",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/6362704/2.jpg?4705",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/6362704/3.jpg?4705",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 3, 3, 3, 5, 5, 4],
  },

  {
    id: "0000052",

    name: "Samsung GALAXY TAB A9+ 8GB RAM 128GB ROM 11inches 5G (Nano SIM)",

    category: "Tablets",

    brand: "samsung",

    price: 470000,

    oldPrice: 490000,

    desc: `
SAMSUNG GALAXY TAB A9+ 5G OVERVIEW 
Classic and contemporary
Stylish with a touch of cool, the Galaxy Tab A9 and Tab A9+ features a sleek design and a smooth metal body. Enjoy Samsung’s signature tablet design in Graphite, Silver and Navy with each hue highlighting effortless charm.

Expansive, bright visuals with smooth motion
Experience the joy of entertainment on the large, bright display. Galaxy Tab A9+'s high screen refresh rate lets you immerse in the visuals with smooth and fluid motion. Even when you are out in the sun, step into the captivating world of your favorite content.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/4322353/1.jpg?1246",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/4322353/2.jpg?1246",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/4322353/3.jpg?1246",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/4322353/4.jpg?1246",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000053",

    name: "Hp EliteBook 845 G8 - Ryzen 5 Pro 5650U/AMD 2.3 - 16GB RAM/512GB SSD WIN 11 PRO+BAG",

    category: "Laptops",

    brand: "hp",

    price: 585000,

    oldPrice: 590000,

    desc: `

HP EliteBook 845 G8
Operating System:	WINDOWS 11 PRO
CPU:	Ryzen 5 Pro 5650U/AMD 2.3
Max Turbo Speed:	UP TO 4.2 GHz With Intel Turbo boost system
Number of Cores:	Quad-Core
Cache:	L3 - 12MB
Features (Processor / Chipset):	Hyper-Threading Technology, Intel Turbo Boost Technology 2.0, Intel Smart Cache
Features (Display):	55% NTSC colour gamut, Full HD ultra wide-viewing angle (UWVA) eDP anti-glare
Features (Input):	Spill-resistant, multi-touch clickpad, gesture function, precision touchpad, glass clickpad, DuraKeys
Features (Communications):	Miracast, dual stream (2x2), MU-MIMO
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/3568032/1.jpg?3991",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/3568032/2.jpg?3991",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/3568032/3.jpg?3991",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000055",

    name: "DELL Latitude 5400 Touchscreen Intel Core I5-1TB SSD/16GB RAM Keyboard BACKLIT /WIN 11 PRO+ BAG",

    category: "Laptops",

    brand: "dell",

    price: 540000,

    oldPrice: 750000,

    desc: `

Designed to keep you productive and entertained from anywhere, the DELL 39.6 cm (14”) laptop combines a long battery life with a sleek and portable, micro-edge bezel design.

PROCESSOR FAMILY
Generation Intel® CORE i5 FAST PROCESSOR- FULL HD DISPLAY

39.6 cm (14") diagonal, FHD 1920x1080P, micro-edge, BrightView, 220 nits, 45% NTSC

PROCESSOR

Intel® CORE I5- (Up to 4.1 GHz with Intel® Turbo Boost Technology, 6 MB L3 cache, 4 cores)

CHIPSET
Intel® Integrated SoC


MEMORY
16GB DDR4-2666 MHz RAM Transfer rates up to 2666 MT/s.

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/6016943/1.jpg?7964",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/6016943/2.jpg?7964",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/6016943/3.jpg?7964",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000056",

    name: "Hp ELITEBOOK 830 G7 TOUCHSCREEN INTEL CORE I7 512SSD 16GB RAM BACKLIT KEYS FINGERPRINT WINS 11PRO+ Bag",

    category: "Laptops",

    brand: "hp",

    price: 710000,

    desc: `

The HP EliteBook 830 G7 is a high-quality, premium laptop designed for professionals and business users who require a combination of performance, portability, and advanced features. Here is a detailed description of the HP EliteBook 830 G7:

Processor: 10th Generation Intel Core i7 Processor The laptop is powered by a 10th Generation Intel Core i7 processor. This high-performance CPU provides excellent processing power, allowing you to handle demanding tasks, run resource-intensive applications, and multitask efficiently.

Memory: 16GB RAM The EliteBook 830 G7 comes equipped with 16GB of DDR4 RAM. This substantial amount of memory enables smooth multitasking, making it easy to work with multiple applications simultaneously without any performance slowdowns.

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/2828913/1.jpg?1967",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/2828913/2.jpg?1967",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/2828913/3.jpg?1967",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/2828913/4.jpg?1967",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000057",

    name: "DELL Latitude 3190 2in1 TOUCHSCREEN 8GB RAM, INTEL PENTIUM 128GB SSD WIN 10",

    category: "Laptops",

    brand: "dell",

    price: 230000,

    desc: `
The Dell latitude 3190  11 intel pentium  laptop is built to adjust to the way you work and relax, with battery to last all day. The 11-inch HD screen makes your entertainment look good. The slim, supremely flexible design lets you watch any way you want. This Dell Chromebook laptop is equipped with an Intel Pentium  processor for the perfect combination of performance, power consumption and value. The Chrome operating system was designed to be fast, easy to use and secure for every day use. Connect to the web with Wi-Fi 5 (2x2) and Bluetooth 5. Custom-tuned dual speakers are of exceptional setero quality. A good product with multi-touchscreen.

Operating system: Window 11
Processor: Intel Pentium 3190 
Touchscreen 
Display: 11.0-inch diagonal, HD (1366 x 768), micro-edge, BrightView
Memory: 8GB LPDDR4-2400 SDRAM (onboard)
Internal storage: 128GB Solid State Drive 
Graphics: Intel UHD Graphics 600
Battery life: Up to 12 hours and 30 minutes (mixed usage)
Wireless: Realtek RTL8822CE 802.11a/b/g/n/ac (2x2) Wi-Fi and Bluetooth 5.0 combo
Camera: Wide Vision 720p HD camera with integrated dual array digital microphones

`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/7855204/1.jpg?5049",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/7855204/2.jpg?5049",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/7855204/3.jpg?5049",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/7855204/4.jpg?5049",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000059",

    name: "Ace Elec 14.1'' Intel(R)Pentium(R) CPU N3700 16GB+128GB - Silver",

    category: "Laptops",

    brand: "ace elec",

    price: 220442,

    desc: `
ACE Laptop is equipped with   Intel(R)Pentium(R) CPU N3700 @ 1.60GHz 1601 processor, Quad-core, Quad-thread, Base Frequency 2.0GHz, Turbo up to 2.4GHz, efficiently running your programs as well as loading your tasks, running smoothly and smoothly, it's an excellent product.

16GB LPDDR4 + 128GB SSD + 64GB TF Card Expansion

ACE N141 laptop s come with a huge amount of RAM and storage space to fulfill your needs. The lap top comes with 16GB LPDDR4 RAM and 128GB storage, supports TF card expansion up to 64GB, realizing massive space.

14.1-inch Full HD IPS Display
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/8487963/1.jpg?3957",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/8487963/2.jpg?3957",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/8487963/4.jpg?3957",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000060",

    name: "DELL Latitude 7490 TOUCHSCREEN Intel Core I5- 512GB SSD/16GB RAM BACKLIGHT KEYBOARD/WIN 11 PRO+BAG",

    category: "Laptops",

    brand: "dell",

    price: 450000,
    oldPrice: 790000,

    desc: `
Designed to keep you productive and entertained from anywhere, the DELL 39.6 cm (14”) laptop combines a long battery life with a sleek and portable, micro-edge bezel design.


PROCESSOR FAMILY
Generation Intel® CORE i5 FAST PROCESSOR- FULL HD DISPLAY

39.6 cm (14") diagonal, FHD 1920x1080P, micro-edge, BrightView, 220 nits, 45% NTSC

PROCESSOR
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/3543403/1.jpg?1346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/3543403/2.jpg?1346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/3543403/3.jpg?1346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/3543403/4.jpg?0653",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000061",

    name: "DELL Latitude 7490 TOUCHSCREEN Intel Core I5- 512GB SSD/16GB RAM BACKLIGHT KEYBOARD/WIN 11 PRO+BAG",

    category: "Laptops",

    brand: "dell",

    price: 450000,
    oldPrice: 790000,

    desc: `
Designed to keep you productive and entertained from anywhere, the DELL 39.6 cm (14”) laptop combines a long battery life with a sleek and portable, micro-edge bezel design.


PROCESSOR FAMILY
Generation Intel® CORE i5 FAST PROCESSOR- FULL HD DISPLAY

39.6 cm (14") diagonal, FHD 1920x1080P, micro-edge, BrightView, 220 nits, 45% NTSC

PROCESSOR
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/3543403/1.jpg?1346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/3543403/2.jpg?1346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/3543403/3.jpg?1346",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/3543403/4.jpg?0653",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000062",

    name: "Apple MacBook Pro 14 Laptop - M3 Pro Chip - 18GB - 14-core GPU - 512 SSD - Space Black/2023",

    category: "Laptops",

    brand: "apple",

    price: 3050000,

    desc: `
Built for all types of creatives, including photographers, filmmakers, 3D artists, music producers, developers, and more, the space black Apple 14" MacBook Pro is the ultimate pro mobile workstation for the ultimate user.

The system features the Apple M3 Pro 11-Core Chip, which provides the power and performance efficiency needed to handle all your professional workflows. Now built on 3nm process technology, the M3 Pro 11-Core Chip is combined with a 14-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding pro apps and games.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/2178772/1.jpg?1191",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/2178772/2.jpg?1191",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000063",

    name: "Hp EliteBook G6 Laptop- Intel Core I5- TOUCHSCREEN -16GB RAM/512GB SSD/Backlit Keyboard/FP Reader Windows 11 Pro+ BAG",

    category: "Laptops",

    brand: "hp",

    price: 535000,

    desc: `
ELITEBOOK LAPTOP- TOUCHSCREEN - INTEL CORE I5 - FINGERPRINT READER- BACKLIT KEYBOARD- FULL HD DISPLAY
 

Product Type:	ELITEBOOK TOUCHSCREEN LAPTOP
Operating System:	WINDOWS 11 PRO
CPU:	Intel Core i5-8350U 
Max Turbo Speed:	UP TO 4.2 GHz With Intel Turbo boost system
Number of Cores:	Quad-Core
Cache:	L3 - 12MB
Features (Processor / 	Hyper-Threading Technology, Intel Turbo Boost Technology 2.0, Intel Smart Cache
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/3343404/1.jpg?2193",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/3343404/2.jpg?2193",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/3343404/3.jpg?2193",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/3343404/4.jpg?2193",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },

  {
    id: "0000070",

    name: "Hp 15 VICTUS GAMING, 12TH GEN INTEL CORE I5, 16GB RAM, 512GB SSD,4GB NVIDIA RTX 2050 WINS 11",

    category: "Laptops",

    brand: "hp",

    price: 1341000,

    desc: `
Keep up with the biggest games and the best players. Up to 12th gen Intel® Core ​and graphics.
Superior processing components
Play at your best with a 12th Gen Intel® Core™ processor , a modern graphics card, and plenty of memory.

Sophisticated and refined design
With a smaller footprint and up to three colors options , this spritely device looks good anywhere.

Every feature you could need
From the updated thermal design to the HD camera, this laptop has everything.

A dynamic processor that adapts to you for superior multi-tasking performance
12th Gen Intel® Core™ processors distributes performance where you need it the most — saving you time and increasing your ability to do the things you actually want.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6773042/1.jpg?1984",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6773042/2.jpg?1984",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6773042/3.jpg?1984",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6773042/4.jpg?1984",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "0000071",

    name: "Asus ROG Strix SCAR 18-G834JR-XS97-4090Windows 11 Pro 32GB",

    category: "Laptops",

    brand: "asus",

    price: 7300000,

    oldPrice: 7800000,

    desc: `
THE PINNACLE OF PERFORMANCE - Dominate the battlefield with Windows 11 Pro, a 14th Gen Intel Core i9-14900HX processor, and NVIDIA GeForce RTX 4090 Laptop GPU at 175W Max TGP.
BLAZING FAST MEMORY AND STORAGE – Multitask swiftly with 32GB of DDR5-5600MHz memory and 2TB of PCIe 4x4 in RAID 0 with a raw throughput up to 7000mb/s.
ROG NEBULA HDR – The Nebula standard guarantees a premium display with high specs for the best visuals. Featuring QHD 240Hz/3ms, 100% DCI-P3, Pantone Validation, among other premium features on the SCAR 18.
ROG INTELLIGENT COOLING – The SCAR 18 features upgraded liquid metal on both the CPU and GPU, and a third intake fan among other premium features, to allow for sustained performance over long gaming sessions.
MUX SWITCH WITH ADVANCED OPTIMUS - A MUX Switch increases laptop gaming performance by 5-10% by routing frames directly from the dGPU to the display. Advanced Optimus enables an automatic switch between the iGPU and dGPU, optimizing battery life.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/6939404/1.jpg?0461",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/6939404/2.jpg?0461",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/6939404/3.jpg?0461",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "0000072",

    name: "Lenovo IDEAPAD 1 INTEL CELERON 4GB RAM 256GB SSD 15.6 HD WINS 10+ Mouse",

    category: "Laptops",

    brand: "lenovo",

    price: 340000,

    oldPrice: 450765,

    desc: `
AboutThe Lenovo IdeaPad  is a 15.6-inch laptop with a screen resolution of 1920 x 1080. It has 4GB of memory and a 256 SSD drive. It has an Intel Celeron 1.1 to 2.6ghzGHz processor. It was with Windows 10 Home installed.
It has 3 full-size USB ports built-in on the laptop. Video outputs include: an HDMI full-size port. It supports WiFi 802.11ac, so it's compatible with high-speed routers. It has a 0.3MP webcam for video conferencing. 
The Lenovo IdeaPad  measures 15.6 inches wide by 9.9 inches deep by 1 inches high, and it weighs 3.7 lbs. It's backed by a 12-month warranty
The Lenovo Ideapad  breaks the mold of the contemporary 2-in-1 convertibles. Its design not only capitalizes on a more flattened and sleeker overall surface. It is ultimately a more distinctly commutable gadget to aid users to boot the system up wherever they wish to go. The Lenovo Ideapad V130 demonstrates a wide range of versatility when it comes to accomplishing essential tasks pertaining to productivity. 
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/7780942/1.jpg?0284",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/7780942/2.jpg?0284",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/7780942/3.jpg?0284",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/7780942/4.jpg?0284",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "0000073",

    name: "DELL Latitude 7490 1TB SSD/16GB RAM/ Intel Core I7/ BACKLIGHT KEYBOARD-WIN 11PRO+BAG",

    category: "Laptops",

    brand: "dell",

    price: 650000,

    oldPrice: 700000,

    desc: `
Designed to keep you productive and entertained from anywhere, the DELL 39.6 cm (15”) laptop combines a long battery life with a sleek and portable, micro-edge bezel design.


PROCESSOR FAMILY
Intel® CORE I7 FAST PROCESSOR- FULL HD DISPLAY

39.6 cm (15") diagonal, FHD 1920x1080P, micro-edge, BrightView, 220 nits, 45% NTSC

PROCESSOR

Intel® CORE I7- (Up to 4.1 GHz with Intel® Turbo Boost Technology, 6 MB L3 cache, 4 cores)
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/0977963/1.jpg?1847",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/0977963/2.jpg?1847",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/0977963/3.jpg?1847",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/0977963/4.jpg?1847",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 5, 5, 5, 4],
  },

  {
    id: "0000082",

    name: "Men Leather Shoes Strap Breathable Non-slip Casual Loafers",

    category: "shoes",

    brand: "unknown",

    price: 9980,
    oldPrice: 18900,

    desc: `
 Product Category: Loafers Opening depth: shallow mouth (below 7cm) Suitable season: summer, spring, autumn Popular elements: leather stitching style: fashion Applicable gender: male pattern: plain Upper material: artificial leather Toe shape: round Heel height: low heel (1-3CM) Function: wear-resistant Style: casual Gross weight: 0.55KG Sole Material: Plastic Applicable sports: general Way of wearing: front tie Heel shape: flat heel Inner material: imitation leather Applicable scene: leisure Upper height: low top Sole process: injection molding shoes Insole material: PU Help surface inner material: PU Color: black Size: 40,41,42,43,44


`,

    variants: [
      { size: "EU 40", color: null, isAvailable: false },
      { size: "EU 42", color: null, isAvailable: true },
      { size: "EU 43", color: null, isAvailable: true },
      { size: "EU 44", color: null, isAvailable: true },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/6733852/1.jpg?9200",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/6733852/3.jpg?9200 ",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/6733852/2.jpg?9997",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [3, 3, 3, 3, 4, 5, 4],
  },

  {
    id: "0000090",

    name: "Ladies Everything Womens Sneakers Canvas - Casual Trainers Chunky Loafers School Shoes For Girls - Highgrade Neoprene Rubber",

    category: "shoes",

    brand: "ladies everything",

    price: 13999,
    oldPrice: 22000,

    desc: `
Tips: Standard EU Leather shoe size, one size bigger than sneakers
If the leather shoes you wear are size 41, go for size 41
If you wear a size 41 sneaker, you buy a size 40
The comfortable round head design makes it easy to wear and fits your feet. The anti-collision toe cap releases a comfortable experience. The upper is made of breathable, comfortable and soft fabric, which has a light and shock-absorbing effect. The high-quality rubber sole adopts a non-slip texture design, which is wear-resistant and not easy to slip. It is fashionable and eye-catching. It is very suitable for men who are pursuing trend and unique personality design. The inner lining is made of breathable fabric, which makes it easy to wear and exercise.This pair of shoes is suitable for all men, with fashionable personality and trendy color matching, high-quality workmanship, and a must-have for trendy men.Tips: Measurements are the maximum size,please allow 0.5-1cm tolerance. Compare the chart size with your feet length carefully before ordering. Style: Casual，Sport.Features: Comfortable，Durable，Very Cool.Occasions: Sports、Casual、Office、Outdoor、Dating、Everyday、Shopping.7 days * 24 hours Customer Service.Free VIP Jumia Express Service，Enjoy fast arrival, delivery within 1-3 days.Free VIP Jumia Express Service，Enjoy package protection to prevent loss of goods. Tips1: If you follow the fashion trend, please FOLLOW our shop.Tips2: If you want to enjoy 50% or higher discount shopping, please FOLLOW our shop.Tips3: If you are looking for high-quality and inexpensive products, please FOLLOW our shop.Tips: Measurements are the maximum size,please allow 0.5-1cm tolerance. Compare the chart size with your feet length carefully before ordering.Please help me to light up 5 stars  
`,

    variants: [
      { size: "EU 38", color: null, isAvailable: true },
      { size: "EU 39", color: null, isAvailable: true },
      { size: "EU 40", color: null, isAvailable: false },
    ],
    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/6038933/1.jpg?4616",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/6038933/2.jpg?4616",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/6038933/3.jpg?4616",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/6038933/4.jpg?4616",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "0000092",

    name: "4-Piece Leather Shoulder Bag / Handbags Set - Pink",

    category: "bags",

    brand: "unknown",

    price: 10976,
    oldPrice: 24000,

    desc: `
Handbags are ladies indispensable tie-decoration. Look chic with the gorgeous set of bags perfect for all occasions. Spacious enough to hold all your essential stuff, magazine, iPad, phones, keys, umbrella etc. This bag is for that classy lady looking pull a " chic "appearance. It comes in different sizes and suit the varied events you attend.  Pamper your self with a new look and accompanying handbag.
Notice
1. The product size is measured by hand. There may be a difference of 1-3cm, which is in the normal range.

2. Please judge the product size according to the size marked in the product link, instead of your feelings based on the pictures. Since the same product can appear large or small due to the distance when taking the pictures.

3. During the shooting process of the product, due to the difference of light, there may be a slight color difference between the real object and the pictures, which is a normal phenomenon.

4. The product may be squeezed during delivery. If the product you received is not as flat as it looks in the pictures, please don't worry. This is a normal phenomenon and it will be fine after using it for a while.

5. The product will have some smell of the material itself when produced from the factory. This is normal for new products. Take the product out of the package and the smell will disappear in a few days.

6. Please store the product in a ventilated and cool place. Do not place in damp places or be exposed to strong sunlight for a long time.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/904987/1.jpg?6333",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/904987/2.jpg?6333",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/904987/3.jpg?6333",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/904987/4.jpg?6333",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [4, 4, 4, 3, 4, 5, 4],
  },

  {
    id: "00000100",

    name: "Camera Backpack Flexible Partition Padded Bag Shockproof Insert Protection",

    category: "bags",

    brand: "unknown",

    price: 17750,
    oldPrice: 22499,

    desc: `
Camera Backpack

Red color

Note: Backpack ONLY, the cameras, lenses and other accessories are not included.



Descriptions:

Multi use

This lightweight and sturdy backpack offers versatile storage compartments that allow you to store your camera, accessories and other personal items in a safe and convenient location

Compatible with Canon, Nikon, Sony, Olympus, Pentax digital cameras and other digital cameras and photographic equipment.
`,

    isAvailable: true,

    featured: true,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/767346/1.jpg?6748",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/767346/2.jpg?6748",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/767346/3.jpg?6748",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 4, 5, 4, 5, 4],
  },

  {
    id: "00000101",

    name: "Lenovo LP40 Pro Bluetooth 5.1 Headset - Black",

    category: "Phone Accessories",

    brand: "lenovo",

    price: 7732,
    oldPrice: 14580,

    desc: `
BT 5.1 technology provides high-speed data transfer rate, stable performance and low power consumption. With T W S technology, you can use headphones individually or in pairs. Equipped with a 350mAh charging box, which can store and charge the headset. The built-in microphone provides clearer and more realistic sound. It will bring you a perfect user experience.

Brand Name: Lenovo
Model: LP40
BT version: 5.1
Transmission range: up to 10m (without obstacles)
Unit diameter: 13mm
Frequency range: 20-20KHz
Speaker sensitivity: 98dB
Microphone sensitivity: -32dB±3dB
Impedance: 32Ω
Charging box battery capacity: 3.7V 350mAh
Headphone battery capacity (each): 3.7V 40mAh
Music playback time: about 3 hours (depending on the volume of the music)
Color: black, white (optional)
Headphone weight (each): 3.2g / 0.11oz
Packing size: 8.7*8.7*2.8cm/3.42*3.42*1.10oz
Package weight: 64g / 2.25oz
Lenovo LP40 gaming headset headset
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/3332221/1.jpg?5291",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/3332221/2.jpg?5291",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/3332221/3.jpg?5291",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 3, 3, 3, 4, 5, 4],
  },

  {
    id: "00000102",
    name: "Full Touch Screen Fashion Smartwatch X7 For IOS And Android",
    category: "Phone Accessories",

    brand: "unknown",

    price: 9677,
    oldPrice: 13184,

    desc: `
Finally, I've waited for you. Welcome to my store. I hope you can buy your favorite products in my store!
1.There are many high-quality imported products in the store. You can click "Seller Information" to enter my store to view.
2.I hope you can buy your favorite products here. Baby, come and have a pleasant shopping experience!
Product Description:

【Bluetooth Call Receive/Dial and Built-in Speaker】This smart watch has built-in high-fidelity speaker and microphone. After connecting to Bluetooth, you can directly dial the phone number on the watch to answer calls. This watch supports answering/making/rejecting calls (as well as playing music) from your wrist, allowing you to free your hands while exercising.
【1.44-Inch Large HD Color Touch Screen and Customized Dial】This smart watch for Android iOS phones comes with a 1.44-inch touch screen with smooth operation. Screen color saturation is better. It is designed with a functional UI and multiple watch faces. A variety of customized watch faces are provided, and you can switch the watch face style at any time according to your mood and occasion, or you can customize the watch face with your own photos!
【24/7 Accurate Health Monitoring】The upgraded heart rate and sleep monitoring watch can monitor your real-time heart rate and deep or light sleep status to help you better understand your health. A sensitive motion sensor smartwatch can also monitor blood pressure (BP) and blood oxygen (SPO2H). When the heart rate is abnormal, early warnings will be issued in time to help you better take care of your health from all aspects. 
【Sports Mode and Life Assistant Fitness Tracker】Supports sports mode, IP67 sweat-proof life, such as running, cycling, walking, etc., records your steps, distance, calories and other activity data. It can also serve as an assistant: music and camera control, weather display, sedentary reminder, stopwatch, alarm clock, stopwatch, find watch, etc., making your life more convenient.
【Wider Compatibility & Longer Battery Life】This digital sports smart watch is compatible with iOS 9.0 and above or Android 5.0 and above smartphones.
【Style adjustment】 Rotatable digital crown: zoom in/out, display changes 11 UI menu styles: smart full view style, grid style, circular style, list style, etc. Dial: a more beautiful dial, make every day more beautiful They all have built-in NFC always-on AI voice assistant.

`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/3497352/1.jpg?7263",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/3497352/2.jpg?9457",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/3497352/3.jpg?9457",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/3497352/4.jpg?9457",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 3, 3, 3, 4, 5, 3],
  },

  {
    id: "00000113",
    name: "Quality Silicone Protective Back Case IPHONE 16 Promax/16 Pro/16/15 Promax/15 Pro/14 Plus/15/14 Promax/14 Pro/14/13 Promax/13 Pro/13/12 Promax/12 Pro/12/11 Promax/11 Pro/11/Xs Max/X/Xs/Xr/8 Plus/7 Plus/7/8",

    category: "Phone Accessories",

    brand: "unknown",

    price: 4470,
    oldPrice: 7000,

    desc: `
All Iphone Quality Magnetic Magsafe Transparent Case.

Protect your high earned phone from scratch, cracks and breaks when it falls! It is unintentional and many times unavoidable to let it fall off our hands or hit the edges on an object. We obviously know that we spend about 40% (if not more) of the cost value of our high earned phones fixing the broken/cracked screen (if at all its available in the market). Hence, there is need to protect our phones adequately to ensure we feel more relaxed when it suddenly falls, spills or hit an object.
This clear view pouch provides maximum protection to both front and back of your phone, gives elegant look and also enable you view incoming calls, messages and other notifications without opening.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/1938013/1.jpg?6314",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/1938013/2.jpg?6314",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/1938013/3.jpg?6314",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/1938013/4.jpg?6314",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 3, 3, 3, 4, 3, 3],
  },

  {
    id: "00000114",
    name: "10inch BT Rechargeable Mini Keyboard Mouse Combo 78 Keys",

    category: "Computer Accessories",

    brand: "unknown",

    price: 10460,
    oldPrice: 18245,

    desc: `
Warm tips:Please pay attention to sufficient power before using lithium battery products.
If the keyboard is disconnected, it is recommended to charge the keyboard. If the battery is insufficient, the keyboard will be disconnected.



Features:

imageimageimage

Keyboard
Built-in BT3.0 chip, up to 10m stable connection, no latency, wide compatibility.
Multifunctional shortcut keys design, easy to realize different operations.
Scissor foot button structure, simple chocolate keycaps, good rebound effect, comfortable typing.
Support Windows/Android/iOS/Mac OS, compatible with mobile phone, tablet, PC and laptop with BT function.
Built-in rechargeable lithium battery, low power consumption and energy-saving, long endurance time.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/9570241/1.jpg?0974",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/9570241/2.jpg?0974",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/9570241/3.jpg?0363",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/9570241/4.jpg?0363",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 3, 4, 4, 3, 3],
  },

  {
    id: "00000115",
    name: "Wireless Vertical Mouse Ergonomic Vertical Mouse",

    category: "Computer Accessories",

    brand: "unknown",

    price: 20200,
    oldPrice: 28000,

    desc: `
Warm tips:Please pay attention to sufficient power before using lithium battery products.
If the keyboard is disconnected, it is recommended to charge the keyboard. If the battery is insufficient, the keyboard will be disconnected.



Features:

imageimageimage

Keyboard
Built-in BT3.0 chip, up to 10m stable connection, no latency, wide compatibility.
Multifunctional shortcut keys design, easy to realize different operations.
Scissor foot button structure, simple chocolate keycaps, good rebound effect, comfortable typing.
Support Windows/Android/iOS/Mac OS, compatible with mobile phone, tablet, PC and laptop with BT function.
Built-in rechargeable lithium battery, low power consumption and energy-saving, long endurance time.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/5719093/1.jpg?1783",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/5719093/2.jpg?1783",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/5719093/3.jpg?1783",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/5719093/4.jpg?1783",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 4, 5, 5, 5, 4, 5, 4, 4, 5, 5],
  },

  {
    id: "00000116",
    name: "Portable 2.4G Wireless Business Gaming Mouse/Mice 2400DPI",

    category: "Computer Accessories",

    brand: "unknown",

    price: 6950,
    oldPrice: 15000,

    desc: `
Warm tips:Please pay attention to sufficient power before using lithium battery products.
If the keyboard is disconnected, it is recommended to charge the keyboard. If the battery is insufficient, the keyboard will be disconnected.



Features:

imageimageimage

Keyboard
Built-in BT3.0 chip, up to 10m stable connection, no latency, wide compatibility.
Multifunctional shortcut keys design, easy to realize different operations.
Scissor foot button structure, simple chocolate keycaps, good rebound effect, comfortable typing.
Support Windows/Android/iOS/Mac OS, compatible with mobile phone, tablet, PC and laptop with BT function.
Built-in rechargeable lithium battery, low power consumption and energy-saving, long endurance time.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/5251172/1.jpg?6241",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/5251172/2.jpg?6241",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/5251172/3.jpg?6241",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/5251172/4.jpg?6241",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 4, 5, 5],
  },

  {
    id: "00000117",
    name: "Rgb Rechargeable Wireless Mouse, Ergonomic Gaming Mouse",

    category: "Computer Accessories",

    brand: "unknown",

    price: 9999,

    desc: `
Rgb Rechargeable Wireless Mouse, Ergonomic Gaming Mouse
YouTube URL：https://youtube.com/shorts/6Z6SdInZ86o?feature=share
[Control your own speed as you wish] 3 levels of DPI by pressing the button below the scroll wheel. (800/1200/1600) You can easily adjust the movement speed, perfect for gaming and office, meeting your various needs.
[Plug and Play] No need to install any drivers, just plug the USB receiver into your laptop and this 2.4G portable gaming wireless mouse will work normally.
[Ergonomic Design] Ergonomic design and soft rubber grip fit your hand perfectly, providing a comfortable grip while reducing wrist fatigue caused by long-term work. Whether you use your computer at home, at work, or anywhere else, its compact size makes it easy to take with you.
[Wide Compatibility] It is not only a wireless mouse, but also an artifact for office, home and gaming use. It is compatible with Android, Linux, Windows95/98/XP/2000/VISTA/ Windows 7/8/10/11 or Mac OS10.5.1 Wait for the latest version.
[Skin Friendly and Noiseless] The wireless mouse is made of frosted, anti-sweat, anti-slip material, with silent click characteristics, less interference and fatigue during work, so you don’t have to worry about disturbing your baby when working at home.
`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/3426113/1.jpg?8219",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/3426113/2.jpg?8219",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/3426113/3.jpg?8219",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/3426113/4.jpg?8219",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 4, 5, 5],
  },

  {
    id: "00000130",
    name: "Computer / Laptop Stand Adjustable Laptop Stand With Phone Holde",

    category: "Computer Accessories",

    brand: "unknown",

    price: 12500,

    oldPrice: 19900,

    desc: `
WIDE COMPATIBILITY】- Fits for Mac Stand is compatible with all laptop models and sizes from 8-18 inches, such as Tablet, MacBook, MacBook Air, Macbook Pro, M icrosoft Surface, Google Pixelbook, Dell XPS, H P, ASUS, Lenovo, Acer, Chromebook and more.
【Foldable&Portable Design】– This portable folding stand weighs only 0.7kg. Collapsible small size, Amazing construction. makes it ideal to carry, you can put it in backpack or laptop bag.
【ERGONOMIC DESIGN】- 6 Adjustable Ergonomics Levels - You can set multiple angles (maximum 5.34 "minimum 1.35") and the line of sight varies with the angle adjustment. This helps correct posture, relieve neck and back pain, wrist pain and eyestrain.
【Steadiness&Durability】Made of premium engeneering plastic makes the laptop riser more sturdy; Non-skid pads keep the notebook riser stable and protects your device/desktop surface once placed on.



`,

    isAvailable: true,

    featured: false,

    imgs: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/8739111/1.jpg?3843",

      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/8739111/2.jpg?3843",
    ],

    // sizes: [],

    // colors: [],

    unitLeft: 33,

    rating: [5, 4, 5, 4, 3, 5, 3, 5, 4, 3, 2, 4, 5, 5],
  },
];

export const addresses = [
  {
    id: "01",
    firstName: "Solomon",
    lastName: "Moses",
    address:
      "Ijebu ode... makelewo, back of cele churchhe celestial church after de-sky comfort hotel Ijebu Ode Folagbade, Ogun",
    phone: [{ no: "8025437724", countryCode: "+234" }],
    isDefault: false,
  },

  {
    id: "02",
    firstName: "Solomon",
    lastName: "Moses",
    address:
      "69 WInding way, Centralk plaza , ikeja Lagos 69 WInding way, Centralk plaza , ikeja Lagos69 WInding way, Centralk plaza , ikeja Lagos",
    phone: [{ no: "7063433942", countryCode: "+234" }],
    isDefault: false,
  },

  {
    id: "03",
    firstName: "Solomon",
    lastName: "Moses",
    address:
      "23 Adeola Odeku Street, Victoria Island, Lagos, NigeriaLet me know if you need addresses from a different city or in a specific format.",

    phone: [{ no: "7063433942", countryCode: "+234" }],
    isDefault: true,
  },
];

export const orders = [
  {
    id: "00000003",
    paymentMethod: "Pay with card",

    address:
      "umia Pickup Station Ondo RdSatina bustop Ondo road -benin Rd ijebu ode CAC Church Ijebu Ode Folagbade, Ogun",

    paymentDetails: {
      itemsTotal: 300000,
      deliveryFees: 9610,
      total: 309610,
    },

    products: [
      {
        id: "001",

        name: "Nexus 16 Inches Standing Fan (NX 4400B) - Black",

        price: 24500,

        img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/193928/1.jpg?9026",

        qty: 2,
        status: "delivered",
      },

      {
        id: "002",

        name: "Syinix 2.2L Electric Kettle - Silver",

        price: 5599,

        img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/1724373/1.jpg?0045",

        qty: 1,
        status: "inTransit",
      },

      {
        id: "0000010",

        name: "Skyrun 70 Litres Double Door Top Mount Fridge (BCD-85HC) - Black",

        price: 215990,

        img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/5037773/1.jpg?4575",

        qty: 1,
        status: "processing",
      },
    ],

    phoneNo: ["08067879476", "08057678409"],
  },

  {
    id: "00000014",

    paymentMethod: "Pay with card",

    address:
      "umia Pickup Station Ondo RdSatina bustop Ondo road -benin Rd ijebu ode CAC Church Ijebu Ode Folagbade, Ogun",

    paymentDetails: {
      itemsTotal: 300000,
      deliveryFees: 9610,
      total: 309610,
    },

    products: [
      {
        id: "0000014",

        name: "Haier Thermocool 1.25kVA/1kW Single Phase Petrol Generator (1500MS)",

        price: 231920,

        img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/0371622/1.jpg?1545",

        qty: 1,
        status: "inTransit",
      },
    ],

    phoneNo: ["08067879476", "08057678409"],
  },

  {
    id: "00000016",

    paymentMethod: "Pay with card",

    address:
      "umia Pickup Station Ondo RdSatina bustop Ondo road -benin Rd ijebu ode CAC Church Ijebu Ode Folagbade, Ogun",

    paymentDetails: {
      itemsTotal: 300000,
      deliveryFees: 9610,
      total: 309610,
    },

    products: [
      {
        id: "0000016",

        name: "TP-Link 300mbps Wireless N Router TL-WR840N",

        price: 32000,

        img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6980051/1.jpg?5388",

        qty: 1,
        status: "delivered",
      },
      {
        id: "0000019",

        name: "Apple MacBook Air 15.3 8GB/ 512GB SSD M3 Chip - Space Grey 2024",

        price: 2599999,

        img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1822963/1.jpg?8428",
        qty: 1,

        status: "delivered",
      },
    ],

    phoneNo: ["08067879476", "08057678409"],
  },
];

export const categories = [
  {
    id: "001",
    name: "Phones",
    img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  {
    id: "002",
    name: "Tablets",
    img: "https://images.pexels.com/photos/3727465/pexels-photo-3727465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: "003",
    name: "Laptops",
    img: "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: "004",
    name: "Shoes",
    img: "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: "005",
    name: "Bags",
    img: "https://images.pexels.com/photos/575435/pexels-photo-575435.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: "006",
    name: "Phone Accessories",
    img: "https://images.pexels.com/photos/583843/pexels-photo-583843.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: "007",
    name: "Computer Accessories",
    img: "https://images.pexels.com/photos/28297692/pexels-photo-28297692/free-photo-of-modern-desktop-setup-with-computer-accessories.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: "015",
    name: "Networking",
    img: "https://images.pexels.com/photos/29711663/pexels-photo-29711663/free-photo-of-modern-wireless-router-with-antennas.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "008",
    name: "Kitchen",
    img: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "009",
    name: "Appliances",
    img: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "010",
    name: "Fashion",
    img: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "011",
    name: "Gym",
    img: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "012",
    name: "Electronics",
    img: "https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: "014",
    name: "Baking",
    img: "https://images.pexels.com/photos/1450907/pexels-photo-1450907.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const brands = [
  {
    id: "001",
    name: "apple",
    img: "/brand/apple-brand.jpg",
    topBrand: true,
  },

  {
    id: "002",
    name: "samsung",
    img: "/brand/samsung-brand.avif",
    topBrand: true,
  },

  {
    id: "003",
    name: "nexus",
    img: "/brand/nexus-brand.svg",
    topBrand: true,
  },

  {
    id: "004",
    name: "ecoflow",
    img: "/brand/ecoflow-brand.png",
  },

  {
    id: "004",
    name: "SILVER CREST",
    img: "/brand/silvercrest-brand.jpg",
    topBrand: true,
  },

  {
    id: "005",
    name: "Hisense",
    img: "/brand/hisense-brand.png",
    topBrand: true,
  },

  {
    id: "006",
    name: "Syinix",
    img: "/brand/syinix-brand.png",
  },

  {
    id: "007",
    name: "unknown",
    img: "/brand/unknown-brand.png",
  },

  {
    id: "008",
    name: "Hikers",
    img: "/brand/hikers-brand.png",
  },

  {
    id: "009",
    name: "Skyrun",
    img: "/brand/skyrun-brand.png",
    topBrand: true,
  },

  {
    id: "010",
    name: "Berrykey",
    img: "/brand/berrykey-brand.png",
  },

  {
    id: "011",
    name: "Haier Thermocool",
    img: "/brand/haier-brand.png",
    topBrand: true,
  },

  {
    id: "012",
    name: "Hp",
    img: "/brand/hp-brand.svg",
    topBrand: true,
  },

  {
    id: "013",
    name: "Mtng",
    img: "/brand/mtn-brand.png",
    topBrand: true,
  },

  {
    id: "014",
    name: "TP-Link",
    img: "/brand/Tplink-brand.svg",
  },

  {
    id: "015",
    name: "Century",
    img: "/brand/century-brand.jpg",
    topBrand: true,
  },
  {
    id: "016",
    name: "tecno",
    img: "/brand/techno-brand.png",
    topBrand: true,
  },
  {
    id: "017",
    name: "itel",
    img: "/brand/itel-brand.png",
    topBrand: true,
  },
  {
    id: "018",
    name: "infinix",
    img: "/brand/infinix-brand.png",
    topBrand: true,
  },
  {
    id: "019",
    name: "xiaomi",
    img: "/brand/xiaomi-brand.png",
  },
  {
    id: "020",
    name: "bontel",
    img: "/brand/bontel-brand.png",
  },
  {
    id: "021",
    name: "vinsa",
    img: "/brand/vinsa-brand.jpeg",
  },
  {
    id: "022",
    name: "tilecc",
    img: "/brand/tilecc-brand.jpg",
  },
  {
    id: "023",
    name: "redbeat",
    img: "/brand/redbeat-brand.jpeg",
  },

  {
    id: "024",
    name: "dell",
    img: "/brand/dell-brand.png",
    topBrand: true,
  },
  {
    id: "025",
    name: "ace elec",
    img: "/brand/aceelec-brand.png",
  },
  {
    id: "026",
    name: "asus",
    img: "/brand/asus-brand.jpg",
  },
  {
    id: "027",
    name: "lenovo",
    img: "/brand/lenovo-brand.svg",
    topBrand: true,
  },
  {
    id: "028",
    name: "addidas",
    img: "/brand/addidas-brand.png",
    topBrand: true,
  },
  {
    id: "029",
    name: "oraimo",
    img: "/brand/oraimo-brand.png",
    topBrand: true,
  },
];

export const placements = [
  { id: "02", name: "best selling" },
  { id: "01", name: "hot deals" },
  // { id: "03", name: "top rated" },
  { id: "04", name: "flash sales" },
  { id: "05", name: "reconmended" },
];
