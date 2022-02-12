const crypto = require("crypto");

const mainControllers = {
  index: (req, res) => res.render("pages/home"),
  results: (req, res) => {
    const { str: stringToHash } = req.query;
    const hashedText = crypto
      .createHash("md5")
      .update(stringToHash)
      .digest("hex");

    res.render("pages/home", { hashedText });
  },
};

module.exports = mainControllers;
