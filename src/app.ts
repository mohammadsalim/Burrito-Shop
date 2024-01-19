import express from "express";
import { Burrito } from "./models/Burrito";
import { Order } from "./models/Order";
import { OrderItem } from "./models/OrderItem";

const app = express();
app.use(express.json());

let burritos: Burrito[] = [
  { id: 1, name: "Chicken Burrito", size: "regular", price: 3 },
  // We will add more burritos as needed
];
let orders: Order[] = [];
let nextOrderId = 1;

// Endpoints
app.get("/api/burrito", (req, res) => res.json(burritos));

app.get("/api/orders", (req, res) => res.json(orders));

app.post("/api/orders", (req, res) => {
  const order: Order = {
    id: nextOrderId++,
    items: req.body.items,
    totalCost: req.body.items.reduce(
      (acc: number, item: OrderItem) =>
        acc + item.burrito.price * item.quantity,
      0
    ),
  };
  orders.push(order);
  res.status(201).json(order);
});

app.get("/api/orders/:id", (req, res) => {
  const order = orders.find((o) => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).send("Order not found");
  }
  res.json(order);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
