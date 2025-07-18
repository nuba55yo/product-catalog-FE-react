export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 44900,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.HdFzMBPOKKKvmqjw28b1NAHaE7?w=300&h=300&c=7",
    category: "Phone",
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 74900,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.hz-sCwdtIL3FA9riLKJjKQHaFj?w=300&h=300&c=7",
    category: "Laptop",
  },
  {
    id: 3,
    name: "iPad Air",
    price: 23900,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.bv0GP-uXN0tXVELzBwpIMAAAAA?w=300&h=300&c=7",
    category: "Tablet",
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 15900,
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s9-alum-pink-sport-loop?wid=600&hei=600&fmt=jpeg&qlt=90&.v=1693184309037",
    category: "Watch",
  },
  {
    id: 5,
    name: "AirPods Pro (2nd Gen)",
    price: 8990,
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=600&hei=600&fmt=jpeg&qlt=90&.v=1660803972361",
    category: "Audio",
  },
  {
    id: 6,
    name: "Apple Vision Pro",
    price: 124900,
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/vision-pro-hero-230606?wid=600&hei=600&fmt=jpeg&qlt=90&.v=1685740993181",
    category: "AR",
  },
];
