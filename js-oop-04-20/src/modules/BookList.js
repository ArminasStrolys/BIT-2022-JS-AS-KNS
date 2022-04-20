import Book from "./Book.js";

class BookList {
  constructor(size) {
    this.list = [];
    this.current = 0
    this.populate(size)
  }
  populate(length) {
    // sugeneruojamas sarasas panaudojant book class
    this.list = [...Array(length).keys()].map(() => new Book());
  }

markRead(){
this.current += 1
if ((this.list.length + 1) > this.current){
    let book = this.list[this.current - 1]
    book.bookRead()
    console.log(this.current)
    return `Next book is ${book.title}`
}
}

filterPages(){
   return this.list.sort((a, b) => a.pages - b.pages)
}

deleteBook(){
    const max = this.filterPages()
    max.splice(max.length-1, 1)
    return 'Entry deleted'
}

}
export default BookList;
