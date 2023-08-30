require("dotenv").config();

const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("./../../app");
const { User } = require("../../models/user");

mongoose.set("strictQuery", false);

const { DB_TEST_URI } = process.env;

describe("login", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_TEST_URI);
    await User.deleteMany();
  });

  afterAll(async () => {
    await mongoose.disconnect(DB_TEST_URI);
  });

  it("should register new user for login", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "testUser1@gmail.com",
      password: "1examplepassword",
    });

    expect(201);
    expect(response.body.User.email).toBe("testUser1@gmail.com");
    expect(response.body.User.subscription).toBe("starter");
  });

  it("should login user", async () => {
    const response = await supertest(app).post("/api/auth/login").send({
      email: "testUser1@gmail.com",
      password: "1examplepassword",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBe(response.body.token);
    expect(response.body.User.email).toBe("testUser1@gmail.com");
    expect(response.body.User.subscription).toBe("starter");
  });
});
