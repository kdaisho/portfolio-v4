import { sendMessage } from "../mail";
import "babel-polyfill";

describe("mail", () => {
  it("should require email, name and message", () => {
    const req = { body: {} };
    const res = {
      status(statusCode) {
        expect(statusCode).toBe(400);
        return this;
      },
      send(result) {
        expect(typeof result.message).toBe("string");
      },
    };

    sendMessage(req, res);
  });

  it("should reject when request body includes an address", () => {
    const req = {
      body: {
        name: "test-man",
        email: "testman@testman.ca",
        address: "2020 avenue testman, montreal",
        message: "Hello humans.",
      },
    };

    const res = {
      status(statusCode) {
        expect(statusCode).toBe(401);
        return this;
      },
      send(result) {
        expect(typeof result.message).toBe("string");
      },
    };

    sendMessage(req, res);
  });
});
