const request = require("supertest");
const app = require("../src/server");

describe("server", () => {
  it("/ping should return with a 200 response code", () => {
    return request(app)
      .get("/ping")
      .expect(200)
      .then((res) => {
        expect(res.text).toEqual("pong");
      });
  });

  it("/ should return with a 404 response code", () => {
    return request(app).get("/").expect(404);
  });
});
