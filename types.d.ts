type ColorType = {
  color: string;
  isAvailable: boolean;
};

type SizeType = {
  size: string;

  isAvailable: boolean;
};

type VariantType = {
  color: string | null;
  size: string | null;
  isAvailable: boolean;
};

type CartProductType = {
  id: string;
  img: string;
  name: string;
  price: number;
  oldPrice?: number;
  qty: number;
  isAvailable: boolean;
  unitLeft: number;
  brand: string;
  variant?: {
    color: string | null;
    size: string | null;
  };
};

type ProductCardType = {
  id: string;
  name: string;
  desc: string;
  price: number;
  oldPrice?: number;
  isAvailable: boolean;

  featured: boolean;
  imgs: string[];
  variants?: VariantType[];
  // colors: ColorType[];
  // sizes: SizeType[];
  unitLeft: number;
  category: string;
  brand: string;
  rating: number[];
};

type OrderedProductType = {
  id: string;

  name: string;

  price: number;

  img: string;

  oldPrice?: number;

  qty: number;

  status: string;

  variant?: {
    color: string | null;
    size: string | null;
  };
};

type WishlistType = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  img: string;
  isAvailable: boolean;

  variant?: {
    size: string | null;
    color: string | null;
  };

  brand: string;
  unitLeft: number;
  qty: number;
};

type UserOrderType = {
  id: string;
  paymentMethod: string;

  address: string;

  paymentDetails: {
    itemsTotal: number;
    deliveryFees: number;
    total: number;
  };

  phoneNo: string[];

  products: OrderedProductType[];
};

type CategoryType = {
  id: string;
  name: string;
  img: string;
};

type PhoneType = {
  no: string;
  countryCode: string;
};

type AddressType = {
  id: string;
  firstName: string;
  lastName: string;
  state: string;
  lga: string;
  address: string;
  phone: PhoneType[];
  isDefault: boolean;
};
