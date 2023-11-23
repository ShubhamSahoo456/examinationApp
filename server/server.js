const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

module.exports = (app) => {
  app.use(cors());
  userRoutes(app);
};
