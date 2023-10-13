import banana from "../assets/banana.png";
import strawberry from "../assets/strawberry.png";
import yogurt from "../assets/yogurt.png";
import blackberry from "../assets/blackberry.png";

export type FoodItem = {
  title: string;
  price: string;
  quantity: string;
  image: string;
};

type FoodCategory = {
  id: number;
  category: string;
  foods: FoodItem[];
};

const imageUrls = [banana, yogurt, strawberry, blackberry];

export const FoodData: FoodCategory[] = [
  {
    id: 1,
    category: "produce",
    foods: [
      {
        title: "Apples",
        price: "$0.69",
        quantity: "18 oz",
        image: imageUrls[0],
      },
      {
        title: "Bananas",
        price: "$0.49",
        quantity: "per piece",
        image: imageUrls[1],
      },
      {
        title: "Carrots",
        price: "$1.29",
        quantity: "16 oz",
        image: imageUrls[2],
      },
      {
        title: "Cucumbers",
        price: "$0.99",
        quantity: "per piece",
        image: imageUrls[3],
      },
      {
        title: "Grapes",
        price: "$2.99",
        quantity: "per pound",
        image: imageUrls[0],
      },
    ],
  },
  {
    id: 2,
    category: "sweets",
    foods: [
      {
        title: "Brownies",
        price: "$2.99",
        quantity: "4-pack",
        image: imageUrls[1],
      },
      {
        title: "Chocolate bars",
        price: "$1.99",
        quantity: "3.5 oz",
        image: imageUrls[2],
      },
      {
        title: "Cookies",
        price: "$3.49",
        quantity: "12-pack",
        image: imageUrls[3],
      },
    ],
  },
  {
    id: 3,
    category: "bakery",
    foods: [
      {
        title: "Bagels",
        price: "$2.00",
        quantity: "4-pack",
        image: imageUrls[0],
      },
      {
        title: "Bread loaves",
        price: "$2.99",
        quantity: "each",
        image: imageUrls[1],
      },
    ],
  },
  {
    id: 4,
    category: "canned",
    foods: [
      {
        title: "Baked beans",
        price: "$1.79",
        quantity: "15 oz",
        image: imageUrls[2],
      },
      {
        title: "Corn kernels",
        price: "$0.99",
        quantity: "15 oz",
        image: imageUrls[3],
      },
      {
        title: "Peaches",
        price: "$1.99",
        quantity: "15 oz",
        image: imageUrls[0],
      },
    ],
  },
  {
    id: 5,
    category: "dairy",
    foods: [
      {
        title: "Cheese slices",
        price: "$2.50",
        quantity: "8 oz",
        image: imageUrls[2],
      },
      {
        title: "Milk cartons",
        price: "$1.99",
        quantity: "1 gallon",
        image: imageUrls[3],
      },
      {
        title: "Sour cream tubs",
        price: "$1.29",
        quantity: "16 oz",
        image: imageUrls[0],
      },
      {
        title: "Yogurt cups",
        price: "$0.99",
        quantity: "6 oz",
        image: imageUrls[1],
      },
    ],
  },
  {
    id: 6,
    category: "frozen",
    foods: [
      {
        title: "Chicken nuggets",
        price: "$3.99",
        quantity: "20 oz",
        image: imageUrls[1],
      },
      {
        title: "French fries",
        price: "$2.49",
        quantity: "32 oz",
        image: imageUrls[2],
      },
      {
        title: "Frozen vegetables mix",
        price: "$2.79",
        quantity: "16 oz",
        image: imageUrls[3],
      },
      {
        title: "Ice cream bars",
        price: "$4.29",
        quantity: "4-pack",
        image: imageUrls[0],
      },
    ],
  },
  {
    id: 7,
    category: "grains",
    foods: [
      {
        title: "Brown rice",
        price: "$2.49",
        quantity: "32 oz",
        image: imageUrls[0],
      },
      {
        title: "Oatmeal packets",
        price: "$3.99",
        quantity: "12-pack",
        image: imageUrls[2],
      },
      {
        title: "Pasta boxes",
        price: "$1.79",
        quantity: "16 oz",
        image: imageUrls[3],
      },
      {
        title: "Quinoa bags",
        price: "$3.99",
        quantity: "16 oz",
        image: imageUrls[1],
      },
    ],
  },
  {
    id: 8,
    category: "seafood",
    foods: [
      {
        title: "Crab legs",
        price: "$9.99",
        quantity: "8 oz",
        image: imageUrls[0],
      },
      {
        title: "Lobster tails",
        price: "$12.99",
        quantity: "each",
        image: imageUrls[2],
      },
      {
        title: "Salmon fillets",
        price: "$7.99",
        quantity: "12 oz",
        image: imageUrls[3],
      },
      {
        title: "Shrimp cocktail",
        price: "$6.99",
        quantity: "8 oz",
        image: imageUrls[1],
      },
    ],
  },
  {
    id: 9,
    category: "candy",
    foods: [
      {
        title: "Gummy bears",
        price: "$1.29",
        quantity: "6 oz",
        image: imageUrls[1],
      },
      {
        title: "Jelly beans",
        price: "$1.49",
        quantity: "7 oz",
        image: imageUrls[2],
      },
      {
        title: "Lollipops",
        price: "$0.99",
        quantity: "per piece",
        image: imageUrls[0],
      },
    ],
  },
  {
    id: 10,
    category: "beverages",
    foods: [
      {
        title: "Coffee beans (ground)",
        price: "$6.99",
        quantity: "12 oz",
        image: imageUrls[1],
      },
      {
        title: "Green tea bags (loose)",
        price: "$3.99",
        quantity: "24-pack",
        image: imageUrls[1],
      },
      {
        title: "Orange juice cartons",
        price: "$2.99",
        quantity: "64 oz",
        image: imageUrls[0],
      },
    ],
  },
];
