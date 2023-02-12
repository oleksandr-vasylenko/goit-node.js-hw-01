// index.js
const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      //   console.log("id", id);
      getContactById(id);
      break;

    case "add":
      console.log("name email phone", name, email, phone);
      break;

    case "remove":
      console.log("id", id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
