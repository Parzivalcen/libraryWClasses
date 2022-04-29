// BOOK Class
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isbn = "isbn";
    this.read = read;
  }
}

// USER ITERFACE
class UserInterface {
  static displayBooks() {
    const storedBooks = [];
    const books = storedBooks;
    return books;
  }

  static addBookToGrid(book) {
    const booksCards = document.querySelector(".container--cards");
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    // --- if book.read, do book.read = read, else do book.read = not read
    bookCard.innerHTML = `
    <h2>${book.title}</h2>
    <h3>${book.author}</h3>
    <p>${book.pages} pages</p>
    <p class="book-n">Book ID: ${book.isbn}</p>
    <button>${book.read}</button>
    <button>Remove</button>
    `;
    booksCards.appendChild(bookCard);
  }

  // Clear Fields
  static clearFields() {
    const title = (document.querySelector("#btitle").value = "");
    const author = (document.querySelector("#bauthor").value = "");
    const pages = (document.querySelector("#bpages").value = "");
  }
}
// LOCAL STORAGE

// log in with google

// CLOUD STORAGE

/*-------
EVENTS
--------*/
// Show form
document.querySelector(".new-book-btn").addEventListener("click", () => {
  const visibility = document
    .querySelector(".add-Container")
    .getAttribute("data-visible");
  if (visibility == "false") {
    document.querySelector(".add-Container").setAttribute("data-visible", true);
  }
});

// Hide form when clicked anywhere else
document.addEventListener("click", (e) => {
  console.log("user clicked", e.target);
  const form = document.querySelector(".add-Container");
  if (
    e.target.classList.contains("form-space") ||
    e.target.classList.contains("container--cards") ||
    e.target.classList.contains("addBook")
  ) {
    form.setAttribute("data-visible", false);
  }
});

// ADD BOOK
document.addEventListener("DOMContentLoaded", UserInterface.displayBooks());

let count = 0;
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#btitle").value;
  const author = document.querySelector("#bauthor").value;
  const pages = document.querySelector("#bpages").value;
  let read = document.querySelector("#bread");
  if (read.checked) {
    read = "read";
  } else {
    read = "not read";
  }
  const book = new Book(title, author, pages, read);
  let books = UserInterface.displayBooks();
  books.push(book);
  books.forEach((book) => {
    book.isbn = count;
    UserInterface.addBookToGrid(book);
    count++;
  });

  UserInterface.clearFields();
  // UserInterface.addBookToGrid(book);
});

// Add new book when btn is pressed
// document.querySelector("");

// REMOVE BOOK
