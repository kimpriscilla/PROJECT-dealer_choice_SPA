const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const data = require("./data");
const homePage = require("./views/homePage");
const detailsPage = require("./views/detailsPage");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

const routes = require("./routes/posts");

app.use("/cats", routes);

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
