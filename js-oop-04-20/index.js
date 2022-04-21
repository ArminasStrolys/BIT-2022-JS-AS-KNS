// import Book from './src/modules/Book.js'
// import BookList from './src/modules/Booklist.js'

// const book = new Book()
// const books = new BookList()
// books.populate(10)

// // console.table(book)

// console.table(books)

// // console.log(books.list[2].bookRead)
// books.markRead()
// books.markRead()
// books.markRead()
// console.log(books)

// console.log(books.filterPages())

// console.log(books.deleteBook())
// // console.log(books.length)


//--------------------------------- DESTYTOJO KODAS

import BookList from './src/modules/BookList.js'
import Book from './src/modules/Book.js'

const bookList = new BookList(10)

// new Book()

// console.log(Book.getCount())

// //Perskaiciau
console.log(bookList.markRead())
console.log(bookList.markRead())

// //Isfiltruota pagal puslapiu kieki
// //console.log(bookList.filterPages())

// //Istriname daugiau puslapiu kieki turincia knyga
console.log(bookList.deleteBook())
console.log(bookList.deleteBook())
console.log(bookList.deleteBook())

// console.log(bookList.list.length)

//Map

// const map = new Map()

// map.set('indeksas', 10) //Priskiriamas elementas su reiksme 10

// console.log(map.get('indeksas')) // Grazinama 10

// console.log(map.size) //Grazinamas objekto ilgis

// console.log(map.delete('indeksas'))

//console.log(Book.perskaitytos_knygos)

if(bookList.checkRead(bookList.list[5].id)) {
    console.log('Knyga yra perskaityta')
} else {
    console.log('Knyga yra neperskaityta')
}

//console.log(bookList.list.length)

//console.log(BookList.bookCount())

bookList.fillGaps(10)

console.log(bookList.list)

console.log(BookList.bookCount())