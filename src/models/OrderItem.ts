import { Burrito } from "./Burrito";

export interface OrderItem {
  burrito: Burrito;
  quantity: number;
}
