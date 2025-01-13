import express from "express";
const app = express();
const port = 3333;

let count = 1;

app.get("/count", (req, res) => {
  res.json({ count });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});
