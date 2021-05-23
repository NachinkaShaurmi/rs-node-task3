const express = require("express");
const app = express();
const db = require("./db");
const user = require("./controllers/usercontroller");
const game = require("./controllers/gamecontroller");

const SERVER_PORT = process.env.SERVER_PORT || 4000;
db.sync();
app.use(express.json());
app.use("/api/auth", user);
app.use(require("./middleware/validate-session"));
app.use("/api/game", game);
app.listen(SERVER_PORT, function () {
  console.log(`App is listening on ${SERVER_PORT}`);
});
