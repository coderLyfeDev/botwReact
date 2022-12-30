const express = require("express");
const app = express();
const port = 3032;
const cors = require('cors');
const fetch = require('node-fetch');

const controller = require("./routes/controller");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
const corsOptions = {
    origin: "http://localhost:3032"
};
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/botw-react", controller);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
