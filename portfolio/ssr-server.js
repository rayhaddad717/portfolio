const express = require("express");
const next = require("next");
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev: false });
const handle = app.getRequestHandler();
const fs = require("fs");
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.post("/api/contactus", async (req, res) => {
      try {
        let data = req.body;
        let dataString = `First Name: ${data.fn}\nLast Name: ${data.ln}\nEmail: ${data.email}\nMessage: ${data.message}`;
        const fileName = new Date().getTime().toString() + ".txt";
        fs.writeFileSync(fileName, dataString);
        return res.json({ success: true }).status(200);
      } catch (error) {
        return res.json({ success: false }).status(500);
      }
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:" + process.env.PORT);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
