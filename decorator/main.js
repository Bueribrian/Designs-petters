const { Book, HotAndNew, BestSeller } = require("./objects");

const newBook = new Book("Libro 1", 300, 455);
const BestSellerBook = new BestSeller(newBook);
const HotAndNewBook = new HotAndNew(newBook);

newBook.toString(BestSellerBook);
newBook.toString(HotAndNewBook);
