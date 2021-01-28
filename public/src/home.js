
//getAuthById() = require("./helpers")
const {findAuthById} = require("./helpers")

function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  //can i use my partitionByBorrowed function to do this?
  //partitionBooksByBorrowedStatus(books)

  //split books by status: borrowed || returned
  //declare the borrowed || returned arrays
  let returned = []
  let borrowed = []
  // terenary opperation: if book is borrowed, .push() to [borrowed] || if returned, .push() to [returned]
  for (let book of books) {
    //debugging --- console.log(book.borrows[0].returned)
    (book.borrows[0].returned === true) ? returned.push(book.id) : borrowed.push(book.id)
  }
  return borrowed.length
}

function getMostCommonGenres(books) {
  //returns list of genres by amount owned by library

  //declare and make genreArray, that contains an array of this object: {genreName: "", count: X}
  const genArr = []
  for (let book of books) {
    !(genArr.find((key) => key.name === book.genre)) ? genArr.push({name: book.genre, count: 1}) : genArr.find((key) => key.name === book.genre).count++ 
  }
  //sort genArr by key{:}.count
  genArr.sort((b, a) => a.count - b.count)
  //limit & return retArr
  genArr.length = 5
  return genArr;
}

function getMostPopularBooks(books) {
  //return book titles in an array sorted by most BORROWS

  //declare and make popArray, that contains an array of this object: {bookName: "", borrowCount: X}
  const popArr = []
  for (let book of books) {
    popArr.push({name: book.title, count: book.borrows.length})
  }
  //sort popArray by key{:}.borrowCount
  popArr.sort((b, a) => a.count - b.count)
  //limit & return popArr
  popArr.length = 5
  return popArr;
}

function getMostPopularAuthors(books, authors) {
  //return authors in an array sorted by most borrows
  const popuArr = []
  for (let book of books) {
    //pre-emptivley declaring a "popular author" object, will check if it exists later!
    const popAuth = popuArr.find((author) => findAuthById(authors,book.authorId) === author.name)
    //run ternary operation to: 1) push(popAuth) if the object exists, 2) generate it if it doesnt exist
    popAuth ? popAuth.count += book.borrows.length : popuArr.push({name: findAuthById(authors,book.authorId), count: book.borrows.length})
  }
  //sort popArray by key{:}.borrowCount
  popuArr.sort((b, a) => a.count - b.count)
  //limit & return popArr
  popuArr.length = 5
  return popuArr;
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
