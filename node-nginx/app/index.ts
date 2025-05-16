import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
