import request from "supertest";
import app from "../app";

describe("API Tests", () => {
  it("should list all burritos", async () => {
    const res = await request(app).get("/api/burrito");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
