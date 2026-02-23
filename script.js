// const crypto = require('crypto');
const addBookBtn = document.querySelector(".addBookBtn");
const bodyProgTable = document.querySelector(".bodyMyCol")

const personalLibrary = [];

function Book(id, title, author, pages, notesReview, readCheckbox, removeButton) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.notesReview = notesReview;

}

function addBookToLibrary() {
    const book = new Book(crypto.randomUUID(), "The Hobbit", "J.R.R Tolkien", 295,
        "Good book, main hero is funny");
    personalLibrary.push(book);
}

addBookToLibrary();
console.log(personalLibrary);


function displayBooks() {

    bodyProgTable.innerHTML = "";

    personalLibrary.forEach(book => {
        const newRow = document.createElement("tr");
        const newID = document.createElement("td");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newNumOfPages = document.createElement("td");
        const newNotesReview = document.createElement("td");
        newRow.append(newID, newTitle, newAuthor, newNumOfPages, newNotesReview);
        bodyProgTable.appendChild(newRow);

        newID.textContent = book.id;
        newTitle.textContent = book.title;
        newAuthor.textContent = book.author;
        newNumOfPages.textContent = book.pages;
        newNotesReview.textContent = book.notesReview;

    });
}



addBookBtn.addEventListener('submit', function (e) {
    e.preventDefault();
})
