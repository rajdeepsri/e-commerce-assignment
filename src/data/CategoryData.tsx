import { FaCarrot } from "react-icons/fa";
import {
  GiWrappedSweet,
  GiCannedFish,
  GiMilkCarton,
  GiFrozenRing,
} from "react-icons/gi";
import { BiCake, BiCoffee } from "react-icons/bi";
import { PiGrainsLight } from "react-icons/pi";
import { FaShrimp } from "react-icons/fa6";
import { LuCandy } from "react-icons/lu";

export type Item = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

export const CategoryData: Item[] = [
  { id: 1, title: "produce", icon: <FaCarrot /> },
  { id: 2, title: "sweets", icon: <GiWrappedSweet /> },
  { id: 3, title: "bakery", icon: <BiCake /> },
  { id: 4, title: "canned", icon: <GiCannedFish /> },
  { id: 5, title: "dairy", icon: <GiMilkCarton /> },
  { id: 6, title: "frozen", icon: <GiFrozenRing /> },
  { id: 7, title: "grains", icon: <PiGrainsLight /> },
  { id: 8, title: "seafood", icon: <FaShrimp /> },
  { id: 9, title: "Candy", icon: <LuCandy /> },
  { id: 10, title: "beverages", icon: <BiCoffee /> },
];
