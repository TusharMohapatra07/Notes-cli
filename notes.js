const fs = require("fs");
const chalk = require("chalk");

const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => {
    return title === note.title;
  });

  if (!duplicateNotes) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
  } else {
    console.log(chalk.red("Duplicate note"));
  }
};

const saveNotes = function (notes) {
  fs.writeFileSync("./data.json", JSON.stringify(notes));
};

const loadNotes = function () {
  try {
    const notes = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    return notes;
  } catch (err) {
    return [];
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();
  // const index = notes.findIndex(function (note) {
  //   return note.title === title;
  // });
  // if (index !== 0) {
  //   notes.splice(index, 1);
  //   saveNotes(notes);
  // }
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green("Note removed successfully!"));
  } else {
    console.log(chalk.red("No note found!!"));
  }
  saveNotes(notesToKeep);
};

const readNotes = function (title) {
  const notes = loadNotes();
  const note = notes.find((element) => element.title === title);
  if (note) {
    console.log(chalk.white.inverse("Title:") + " " + note.title);
    console.log(chalk.blue.inverse("Body:") + " " + note.body);
  } else {
    console.log(chalk.red("No note found"));
  }
};

const listNotes = function () {
  const notes = loadNotes();
  console.log(chalk.white.inverse("Your Notes:"));
  notes.forEach((note) => {
    console.log(chalk.blue("   " + note.title));
  });
};

module.exports = { addNotes, removeNotes, readNotes, listNotes };
