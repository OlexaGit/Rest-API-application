const fs = require("fs/promises");
const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "..", "..", "models", "contacts.json"),
      "utf-8"
    );
    res.send(JSON.parse(data));
  } catch (error) {
    console.error(error);

    res.status(500).send("Internul server error");
  }
  // res.json({ message: "template message" });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
