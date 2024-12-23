# Notes App

## Introduction
This is a simple notes app built using Node.js. It allows you to create, read, update, and delete notes from the command line interface (CLI).

## Features
- **Create**: Add new notes with a title and content.
- **Read**: View existing notes with their titles and content.
- **Update**: Modify the content of existing notes.
- **Delete**: Remove unwanted notes.

## Usage
### Adding a Note
To add a new note, use the following command:
```bash
node app.js add --title="Your Note Title" --content="Your Note Content"
```
### Reading a Note
To view a specific note, provide its title:
```bash
node app.js read --title="Note Title"
```
### Updating a Note
To update the content of a note, use the following command:
```bash
node app.js update --title="Note Title" --content="New Note Content"
```
### Deleting a Note
To delete a note, specify its title:
```bash
node app.js delete --title="Note Title"
```
## Technologies Used
- Node.js
- JavaScript
- npm (Node Package Manager)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
