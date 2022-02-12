const crypto = require("crypto");

const stringUtils = {
  toMd5Hash: (stringToHash) => {
    const hashedText = crypto
      .createHash("md5")
      .update(stringToHash)
      .digest("hex");

    return hashedText;
  },
};

module.exports = stringUtils;
