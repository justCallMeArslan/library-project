// const crypto = require('crypto');
const addBookBtn = document.querySelector(".addBookBtn");
const bodyMyCol = document.querySelector(".bodyMyCol")

const personalLibrary = [];

function Book(id, title, author, pages, notesReview, readCheckbox, removeButton) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.notesReview = notesReview;
    this.readCheckbox = readCheckbox;
    this.removeButton = removeButton;

}

function addBookToLibrary() {
    const book = new Book(crypto.randomUUID(), "The Hobbit", "J.R.R Tolkien", 295,
        "Good book, main hero is funny");
    personalLibrary.push(book);
}

addBookToLibrary();
console.log(personalLibrary);


function displayBooks() {

    bodyMyCol.innerHTML = "";

    personalLibrary.forEach(book => {
        const newRow = document.createElement("tr");
        const newID = document.createElement("td");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newNumOfPages = document.createElement("td");
        const newNotesReview = document.createElement("td");
        const newReadUnread = document.createElement("td");
        const readCheckbox = document.createElement("input");
        readCheckbox.type = "checkbox";
        const newRemoveButton = document.createElement("td");
        const button = document.createElement("button");
        newRemoveButton.textContent = "Remove book";

        newReadUnread.appendChild(readCheckbox);
        newRemoveButton.appendChild(button);
        const arrayIndex = personalLibrary.findIndex(arrayBook => arrayBook.id === book.id);
        if (arrayIndex > -1) {
            personalLibrary.splice(arrayIndex, 1);
        }
        newRow.append(newID, newTitle, newAuthor, newNumOfPages, newNotesReview, newReadUnread);
        bodyMyCol.appendChild(newRow);
        newID.textContent = book.id;
        newTitle.textContent = book.title;
        newAuthor.textContent = book.author;
        newNumOfPages.textContent = book.pages;
        newNotesReview.textContent = book.notesReview;
    });
}




// need to create toggle behavior for the add item button and prevent to form with submit button
addBookBtn.addEventListener('submit', function (e) {
    e.preventDefault();
})
