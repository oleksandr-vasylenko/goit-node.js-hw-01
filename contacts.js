const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();

    const result = contacts.find((item) => parseInt(item.id) === contactId);

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

function addContact(name, email, phone) {
  // ...твій код
}

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();

    const objWithIdIndex = contacts.findIndex(
      (item) => parseInt(item.id) === contactId
    );

    contacts.splice(objWithIdIndex, 1);

    // if (!result) {
    //   return null;
    // }
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
