import express, { Request, Response } from "express";
import { Burrito } from "./models/Burrito";
import { Order } from "./models/Order";
import { OrderItem } from "./models/OrderItem";
import { authenticate } from "./middleware/authenticate";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/orders", authenticate);

let burritos: Burrito[] = [
  { id: 1, name: "Chicken Burrito", size: "regular", price: 3, options: [] },
];
let orders: Order[] = [];
let nextOrderId = 1;

app.get("/api/burrito", (req: Request, res: Response) => res.json(burritos));

app.get("/api/orders", (req: Request, res: Response) => res.json(orders));

app.post("/api/orders", (req: Request, res: Response) => {
  // Validate the request body
  if (!req.body.items || !Array.isArray(req.body.items)) {
    return res.status(400).send("Invalid order format");
  }

  // Calculate total cost and construct the order
  let totalCost = 0;
  const orderItems: OrderItem[] = [];

  for (const item of req.body.items) {
    const burrito = burritos.find((b) => b.id === item.burritoId);
    if (!burrito) {
      return res
        .status(404)
        .send(`Burrito with ID ${item.burritoId} not found`);
    }

    totalCost += burrito.price * item.quantity;
    orderItems.push({ burrito, quantity: item.quantity });
  }

  const order: Order = { id: nextOrderId++, items: orderItems, totalCost };
  orders.push(order);

  res.status(201).json(order);
});

app.get("/api/orders/:id", (req: Request, res: Response) => {
  const orderId = parseInt(req.params.id);
  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return res.status(404).send("Order not found");
  }

  res.json(order);
});

export default app;
