const express = require("express");
const path = require("path");
const cors = require("cors");
const jsonServer = require("json-server");

const app = express();
const PORT = process.env.PORT || 3000;
const root = path.resolve(__dirname);
const router = jsonServer.router(path.join(__dirname, "db.json"));

app.use(cors());
app.use(express.static(root));
app.use(jsonServer.bodyParser);
app.use(router);

app.get("*", (req, res) => {
  if (req.method === "GET" && req.accepts("html")) {
    res.sendFile(path.join(root, "login.html"));
  } else {
    res.status(404).end();
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}/`);
  console.log("API ready");
});
