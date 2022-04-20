import Book from './src/modules/Book.js'
import BookList from './src/modules/Booklist.js'

const book = new Book()
const books = new BookList()
books.populate(10)

// console.table(book)

console.table(books)

// console.log(books.list[2].bookRead)
books.markRead()
books.markRead()
books.markRead()
console.log(books)

console.log(books.filterPages())

console.log(books.deleteBook())
// console.log(books.length)
