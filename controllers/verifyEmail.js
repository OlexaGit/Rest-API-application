const { HttpError } = require("../helpers");
const { User } = require("../models/user");

const verifyEmail = async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });
  if (!user) {
    throw HttpError(404, "User not found");
  }
};

module.exports = verifyEmail;
