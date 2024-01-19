import { OrderItem } from "./OrderItem";

export interface Order {
  id: number;
  items: OrderItem[];
  totalCost: number;
}
