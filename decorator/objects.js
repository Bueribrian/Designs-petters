class Book {
  constructor(name, price, pages) {
    this.name = name;
    this.price = price;
    this.pages = pages;
  }

  toString(value) {
    console.log(JSON.stringify(value));
  }
}

class BestSeller {
  constructor(book) {
    this.name = `${book.name} is a bestSeller`;
  }
}

class HotAndNew {
  constructor(book) {
    this.name = `${book.name} is hot and new!`;
  }
}

module.exports = { Book, BestSeller, HotAndNew };
