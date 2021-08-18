import { v4 } from "uuid";

const merchItems =  [
  {
    name: "Macho Dirt Tee Shirt",
    price: 24.99,
    description: "The coolest, most rad tee shirt you could ever want.",
    id: v4()
  },
  {
    name: "Macho Dirt Baseball Tee",
    price: 29.99,
    description: "Cause what's better than Macho Dirt and baseball?.",
    id: v4()
  },
  {
    name: "Macho Dirt Self Titles Album CD",
    price: 9.99,
    description: "Good tunage for your morning commute.",
    id: v4()
  },
  {
    name: "Macho Dirt Vinyl",
    price: 29.99,
    description: "For the analog enthusiast/wanna be hipsters.",
    id: v4()
  },
  {
    name: "Macho Dirt Baseball Cap",
    price: 14.99,
    description: "Keep the sun out of your eyes while representing the coolest band in history.",
    id: v4()
  }
];

export default merchItems;