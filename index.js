const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      await listContacts().then(console.table);
      break;

    case "get":
      await getContactById(id).then(console.table);
      break;

    case "add":
      await addContact(name, email, phone).then(console.table);
      break;

    case "remove":
      await removeContact(id).then(console.table);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
