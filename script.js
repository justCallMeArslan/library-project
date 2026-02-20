const crypto = require('crypto');

const personalLibrary = [];

function Book(id, title, author, pages, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    const book = new Book(crypto.randomUUID(), "The Hobbit", "J.R.R Tolkien", 295, "not read yet");
    personalLibrary.push(book);
}

addBookToLibrary();
console.log(personalLibrary);
