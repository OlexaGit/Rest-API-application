require("dotenv").config();

const supertest = require("supertest");
const mongoose = require("mongoose");
const { app } = require("./../../app");
const { User } = require("../../models/user");

mongoose.set("strictQuery", false);

const { DB_HOST } = process.env;

describe("login", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_HOST);

    // await supertest(app).get("/register").send({
    //   email: "testUser1@gmail.com",
    //   password: "123456",
    // });

    // await supertest(app).post("/api/auth/register").send({
    //   email: "User1@example.com",
    //   password: "1examplepassword",
    // });

    // await User.deleteMany();
  });

  afterAll(async () => {
    await mongoose.disconnect(DB_HOST);
  });

  //   it("should login user", async () => {
  //     const response = await supertest(app).post("/api/auth/login").send({
  //       email: "testUser1@gmail.com",
  //       //   email: "User1@example.com",
  //       password: "123456",
  //       //   password: "1examplepassword",
  //     });

  //     expect(response.statusCode).toBe(200);
  //     // expect(response.body.data.user.email).toBe("testUser1@gmail.com");
  //     expect(response.body.token).toBe(token);
  //     expect(response.body.User.email).toBe("testUser1@gmail.com");
  //     expect(response.body.User.subscription).toBe("starter");
  //   });

  //   it("should register new user", async () => {
  //     const response = await supertest(app).post("/api/auth/register").send({
  //       email: "testUser1@gmail.com",
  //       password: "123456",
  //     });
  //     console.log(response);
  //     expect(response.statusCode).toBe(201);
  //     expect(response.body.data.user.email).toBe("testUser1@gmail.com");
  //   });

  it("should register new user", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "User1@example.com",
      password: "1examplepassword",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.data.user.email).toBe("testUser1@gmail.com");
  });

  // *****
  //   it("should register new user", async () => {
  //     const response = await supertest(app).post("/api/auth/register").send({
  //       email: "testUser1@gmail.com",
  //       password: "123456",
  //     });
  //
  //     expect(response.statusCode).toBe(201);
  //     expect(response.body.data.user.email).toBe("testUser1@gmail.com");
  //   });

  //   it("should not register the same user 2 times", async () => {
  //     await supertest(app).post("/api/auth/register").send({
  //       email: "testUser2@gmail.com",
  //       password: "123456",
  //     });

  //     const response = await supertest(app).post("/api/auth/register").send({
  //       email: "testUser2@gmail.com",
  //       password: "123456",
  //     });

  //     expect(response.statusCode).toBe(409);
  //   });
});
