const addBookBtn = document.querySelector(".addBookBtn");
const bodyMyCol = document.querySelector(".bodyMyCol");
const form = document.querySelector(".form-container");
const formTitle = document.querySelector("#formTitle");
const formAuthor = document.querySelector("#formAuthor");
const formNumOfPages = document.querySelector("#formNumOfPages");
const formNotesReview = document.querySelector("#formNotesReview");
const modal = document.querySelector(".formPopUp")
const closeFormBtn = document.querySelector(".closeModal");

const personalLibrary = [];

class Book {
    constructor(id, title, author, pages, notesReview, isRead = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.notesReview = notesReview;
        this.isRead = isRead;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }
}

function addBookToLibrary() {
    const bookID = crypto.randomUUID().slice(0, 13);
    const book = new Book(bookID, formTitle.value, formAuthor.value, parseInt(formNumOfPages.value),
        formNotesReview.value);
    personalLibrary.push(book);
    displayBooks();
}

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
        readCheckbox.checked = book.isRead; // returns true or false
        newRow.style.backgroundColor = book.isRead ? "#90EE90" : "white";
        readCheckbox.addEventListener('change', function () {
            book.toggleRead();
            newRow.style.backgroundColor = book.isRead ? "#90EE90" : "white";
        });
        newReadUnread.appendChild(readCheckbox);
        const newRemoveButton = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener('click', function () {
            const arrayIndex = personalLibrary.findIndex(arrayBook => arrayBook.id === book.id);
            if (arrayIndex > -1) {
                personalLibrary.splice(arrayIndex, 1);
            }
            newRow.remove();
        });

        newRemoveButton.appendChild(deleteButton);

        newRow.append(newID, newTitle, newAuthor, newNumOfPages, newNotesReview,
            newReadUnread, newRemoveButton);
        bodyMyCol.appendChild(newRow);
        newID.textContent = book.id;
        newTitle.textContent = book.title;
        newAuthor.textContent = book.author;
        newNumOfPages.textContent = book.pages;
        newNotesReview.textContent = book.notesReview;
    });
}


addBookBtn.addEventListener('click', function () {
    modal.showModal();
})

form.addEventListener('submit', function (event) {
    event.preventDefault();
    addBookToLibrary();
    modal.close();
    form.reset();
});


