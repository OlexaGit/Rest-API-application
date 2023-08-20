const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const { HttpError } = require("../helpers");

// const regloginister = async (req, res, next) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw HttpError(409, "Email in use");
//   }

//   const hashPassword = await bcrypt.hash(password, 10);

//   const newUser = await User.create({ ...req.body, password: hashPassword });

//   res.status(201).json({
//     User: {
//       email: newUser.email,
//       subscription: newUser.subscription,
//     },
//   });
// };

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const token = "sdosmgsv.doivdv86588d.ff86734j49";

  res.json({
    token,
    User: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
