const { Contact } = require("../models/contact");
const { HttpError } = require("../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  console.log(contactId);
  const result = await Contact.findById(contactId, "-favorite");
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getById;
