import express from "express";
import { Burrito } from "./models/Burrito";
import { Order } from "./models/Order";

const app = express();
app.use(express.json());

let burritos: Burrito[] = [
  { id: 1, name: "Chicken Burrito", size: "regular", price: 3 },
  // We will add more burritos as needed
];
let orders: Order[] = [];

// Endpoints
app.get("/api/burrito", (req, res) => res.json(burritos));
app.get("/api/orders", (req, res) => res.json(orders));
app.post("/api/orders", (req, res) => {
  /* ... order logic ... */
});
app.get("/api/orders/:id", (req, res) => {
  /* ... individual order logic ... */
});

app.listen(3000, () => console.log(`Server running`));
