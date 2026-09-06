const request = require("supertest");
const app = require("../app");

describe("DevOps Demo Application", () => {
  test("GET / should return the application message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("DevOps Demo Application is running!");
  });
});