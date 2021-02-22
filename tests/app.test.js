const request = require("supertest");
const server = require("../src/server");

describe("Hi Endpoints", () => {
  it("Hi return Hello world!", async () => {
    const res = await request(server).get("/hi");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello world!");
  });
});
