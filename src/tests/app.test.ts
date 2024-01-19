import request from "supertest";
import app from "../app";
import { Server } from "http";

let server: Server;

beforeAll((done) => {
  server = app.listen(0, done); // Start server on a dynamic port
});

afterAll((done) => {
  server.close(done); // Close server after tests
});

describe("GET /api/burrito", () => {
  it("should return a list of burritos", async () => {
    const res = await request(server).get("/api/burrito");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

describe("POST /api/orders", () => {
  it("should create a new order", async () => {
    const apiKey =
      process.env.BURRITO_SHOP_API_KEY || "default-api-key-for-testing"; // Fallback value
    const res = await request(app)
      .post("/api/orders")
      .set("x-api-key", apiKey) // Use the environment variable or fallback
      .send({
        items: [{ burritoId: 1, quantity: 2 }], // Example order data
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("totalCost");
  });
});
