const express = require("express");
const app = express();
const port = 3032;
const cors = require('cors');
const fetch = require('node-fetch');
const os = require('os');
const networkInterfaces = os.networkInterfaces();
const ipAddress = networkInterfaces['eth0'][0].address; // replace eth0 with the interface name that you want to use
console.log(ipAddress);
const localhost = 'http://'+ipAddress;
const controller = require("./routes/controller");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
const corsOptions = {
    origin: localhost+":3032"
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
  console.log(`Example app listening at `+localhost+`:${port}`);
});
