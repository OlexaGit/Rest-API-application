const { User } = require("../models/user");

const updateUserSubscription = async (req, res) => {
  const { subscription } = req.body;
  console.log(subscription);
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { subscription });

  res.status(200).json({ message: "change subscription" });
};

module.exports = updateUserSubscription;
