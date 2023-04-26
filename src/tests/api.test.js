const request = require("supertest");
const app = require("../app");

describe("GET /api/products", () => {
  it("should return an array of products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should contain 10 products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(10);
  });

  it("should contain product with id 1", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    const product = response.body.data.find((p) => p.id === 1);
    expect(product).toBeDefined();
    expect(product.name).toBe("Product 1");
  });
});

