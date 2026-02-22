const crypto = require('crypto');
const { createElement } = require('react');
const addBookBtn = document.querySelector(".addBookBtn");

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



addBookBtn.addEventListener('submit', function(e){
    e.preventDefault();
})

addBookBtn.addEventListener('click', function(){
    addBookBtn,createElement("form");
})