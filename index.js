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
      await listContacts().then(console.log);
      break;

    case "get":
      await getContactById(id).then(console.log);
      break;

    case "add":
      await addContact(name, email, phone).then(console.log);
      break;

    case "remove":
      await removeContact(id).then(console.log);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
