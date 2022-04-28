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
    const storedBooks = [
      {
        title: "the art of war",
        author: "Tzun Zu",
        pages: "300",
        isbn: "2134",
        read: "not read",
      },
      {
        title: "The psycology of Money",
        author: "IDK",
        pages: "366",
        isbn: "2098",
        read: "read",
      },
    ];
    const books = storedBooks;
    let count = 0;
    books.forEach((book) => {
      book.isbn = count;
      UserInterface.addBookToGrid(book);
      count++;
    });
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
    <button>${book.read}</button>
    <button>Remove</button>
    `;
    booksCards.appendChild(bookCard);
  }

  static displayForm() {
    const form = document.querySelector();
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
  if (e.target.classList.contains("form-space")) {
    form.setAttribute("data-visible", false);
  }
});

// ADD BOOK
document.addEventListener("DOMContentLoaded", UserInterface.displayBooks());

// Add new book when btn is pressed
// document.querySelector("");

// REMOVE BOOK
