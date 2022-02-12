const { toMd5Hash } = require("../utils/stringUtils");

const mainControllers = {
  index: (req, res) => res.render("pages/home"),
  results: (req, res) => {
    const { str: stringToHash } = req.query;
    const hashedText = toMd5Hash(stringToHash);

    res.render("pages/home", { hashedText });
  },
};

module.exports = mainControllers;
