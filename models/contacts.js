const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "contacts.json");

async function read() {
  const data = await fs.readFile(contactsPath, { encoding: "utf8" });
  return JSON.parse(data);
}

function write(data) {
  return fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
}

const listContacts = async () => {
  const data = await read();
  return data;
};

const getContactById = async (contactId) => {
  const data = await read();
  const result = data.find((contact) => contact.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  try {
    const data = await read();
    const index = data.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const newContact = [...data.slice(0, index), ...data.slice(index + 1)];
    await write(newContact);
    return data[index];
  } catch (error) {
    error.message("Cannot delete contact");
    throw error;
  }
};

const addContact = async (body) => {
  const data = await read();
  const newContact = {
    ...body,
    id: crypto.randomUUID(),
  };
  data.push(newContact);
  await write(data);
  return newContact;
};

const updateContact = async (contactId, body) => {
  try {
    const contacts = await read();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    contacts[index] = { contactId, ...body };
    await write(contacts);
    return contacts[index];
  } catch (error) {
    error.message("Cannot updated contact");
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
