// index.js
const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      await listContacts().then(console.log);
      break;

    case "get":
      await getContactById(id).then(console.log);
      break;

    case "add":
      console.log("name email phone", name, email, phone);
      break;

    case "remove":
      await removeContact(id).then(console.log);
      break;

    default:
      await addContact(id).then(console.log);
  }
};

invokeAction(argv);
