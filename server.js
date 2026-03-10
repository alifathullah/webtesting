const cors = require("cors");
const jsonServer = require("json-server");
const path = require("path");

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({
  static: false,
});
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(middlewares);
app.use(jsonServer.bodyParser);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}/`);
});
