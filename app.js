const yargs = require("yargs");
const notes = require("./notes.js");

//adding a note
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "add a title to a note",
      demand: true,
      type: "string",
    },
    body: {
      describe: "write into the note",
      demand: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

//removing a note
yargs.command({
  command: "remove",
  describe: "remove an existing note",
  builder: {
    title: {
      describe: "title of the note that you want to remove",
      demand: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

//read a note
yargs.command({
  command: "read",
  describe: "read an existing note",
  builder: {
    title: {
      describe: "title of the note that you want to read",
      deman: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNotes(argv.title);
  },
});

//listing notes
yargs.command({
  command: "list",
  describe: "list all the existing notes",
  handler: function () {
    notes.listNotes();
  },
});

yargs.parse();
