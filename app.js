// BOOK Class
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// USER ITERFACE
class UserInterface {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UserInterface.addBookToGrid(book));
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
    <button class="read">${book.read}</button>
    <button class="remove-btn">Remove</button>
    `;
    booksCards.appendChild(bookCard);
  }

  // Clear Fields
  static clearFields() {
    const title = (document.querySelector("#btitle").value = "");
    const author = (document.querySelector("#bauthor").value = "");
    const pages = (document.querySelector("#bpages").value = "");
  }
  // Change read Status
  static readStatus(el) {
    if (el.textContent == "read") {
      el.textContent = "not read";
    } else {
      el.textContent = "read";
    }
  }
  // Delete a book from the display, not LS
  static removeFromgrid(el) {
    if (el.classList.contains("remove-btn")) {
      el.parentElement.remove();
    }
  }
}
// LOCAL STORAGE
class Store {
  // Store in LS
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  // Delete from LS
  static deleteBookLS(title) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.title == title) {
        books.splice(index, 1);
      }
      localStorage.setItem("books", JSON.stringify(books));
    });
  }

  // change read status in LS
  static readStatus() {
    const books = Store.getBooks();
    books.forEach((book) => {
      if (book.read == "read") {
        book.read = "not read";
      } else {
        book.read = "read";
      }
      localStorage.setItem("books", JSON.stringify(books));
    });
  }
}

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

  UserInterface.addBookToGrid(book);
  Store.addBook(book);

  UserInterface.clearFields();
  // UserInterface.addBookToGrid(book);
});

// REMOVE BOOK
document.querySelector(".container--cards").addEventListener("click", (el) => {
  UserInterface.removeFromgrid(el.target);

  // Read Status
  UserInterface.readStatus(el.target);
  Store.readStatus();
  // remove from Local Storage
  if (el.target.classList.contains("remove-btn")) {
    let title =
      el.target.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .textContent;
    Store.deleteBookLS(title);
  }
});
