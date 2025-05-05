import { Heart, History, Mail, ShoppingBag } from "lucide-react";

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
    name: "Wishlist",
    link: "/customer/wishlist",
    icon: Heart,
  },
  {
    id: 3,
    name: "Recently Viewed",
    link: "/customer/history",
    icon: History,
  },

  {
    id: 4,
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

    price: 2100999, // fallback if sizes are not selected

    oldPrice: 2999999,

    category: "phones",

    brand: "apple",

    sizes: [{ size: "256gb", isAvailable: true }],

    colors: [{ color: "#d9c7b8", isAvailable: true }],

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

    sizes: [],
    category: "phones",

    brand: "samsung",
    colors: [{ color: "silver", isAvailable: true }],
    unitLeft: 20,
    rating: [3.5, 5, 5, 4, 3, 3, 3, 5],
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

    sizes: [],

    colors: [{ color: "black", isAvailable: true }],

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

    sizes: [],

    colors: [{ color: "black", isAvailable: true }],

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

    sizes: [],

    colors: [{ color: "black", isAvailable: true }],

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

    sizes: [],

    colors: [],

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

    sizes: [],

    colors: [],

    unitLeft: 13,
    rating: [4, 4, 4, 4, 4, 4, 5],
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

    colors: [
      { color: "black", isAvailable: true },
      { color: "white", isAvailable: true },
      { color: "red", isAvailable: true },
      { color: "gray", isAvailable: true },
    ],

    unitLeft: 13,

    rating: [4, 4, 3, 4, 5, 4, 5],
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

    sizes: [],

    colors: [{ color: "black", isAvailable: true }],

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

    sizes: [],

    colors: [{ color: "black", isAvailable: true }],

    unitLeft: 33,

    rating: [4, 5, 3, 3, 5, 4, 5],
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

    sizes: [
      { size: "XL", isAvailable: true },
      { size: "XXL", isAvailable: true },
      { size: "XXXL", isAvailable: true },
      { size: "XXXXL", isAvailable: false },
    ],

    colors: [],

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

    sizes: [],

    colors: [],

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

    sizes: [],

    colors: [],

    unitLeft: 23,

    rating: [4, 3, 4, 5, 5, 5, 5],
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

    sizes: [],

    colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 5, 5, 5, 5],
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

    sizes: [],

    colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 3, 4, 4, 5],
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

    sizes: [],

    colors: [],

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

    sizes: [],

    colors: [],

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

    sizes: [],

    colors: [],

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

    sizes: [],

    colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 3, 4, 5, 5],
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

    sizes: [],

    colors: [],

    unitLeft: 23,

    rating: [4, 5, 4, 3, 4, 5, 5],
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
  { id: "001", name: "apple", img: "" },

  { id: "002", name: "samsung", img: "" },

  { id: "003", name: "nexus", img: "" },

  { id: "004", name: "ecoflow", img: "" },

  { id: "004", name: "SILVER CREST", img: "" },

  { id: "005", name: "Hisense", img: "" },

  { id: "006", name: "Syinix", img: "" },

  { id: "007", name: "unknown", img: "" },

  { id: "008", name: "Hikers", img: "" },

  { id: "009", name: "Skyrun", img: "" },

  {
    id: "010",
    name: "Berrykey",
    img: "",
  },

  { id: "011", name: "Haier Thermocool", img: "" },

  { id: "012", name: "Hp", img: "" },

  { id: "013", name: "Mtng", img: "" },

  { id: "014", name: "TP-Link", img: "" },

  { id: "015", name: "Century", img: "" },
];

export const placements = [
  { id: "02", name: "best selling" },
  { id: "01", name: "hot deals" },
  // { id: "03", name: "top rated" },
  { id: "04", name: "flash sales" },
  { id: "05", name: "reconmended" },
];

// https://images.pexels.com/photos/5447070/pexels-photo-5447070.jpeg?auto=compress&cs=tinysrgb&w=1200
