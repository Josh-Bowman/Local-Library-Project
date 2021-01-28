function findAuthorById(authors, id) {
  return authors.find((key) => key.id === id)
}

function findBookById(books, id) {
  return books.find((key) => key.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  //split books by status: borrowed || returned
  //declare the borrowed || returned arrays
  let returned = []
  let borrowed = []
  // terenary opperation: if book is borrowed, .push() to [borrowed] || if returned, .push() to [returned]
  for (let book of books) {
    //debugging --- console.log(book.borrows[0].returned)
    (book.borrows[0].returned === true) ? returned.push(book.id) : borrowed.push(book.id)
  }
  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  let retArr = []
  let {borrows} = book
  for ( let borrow of borrows) {
    const account = accounts.find((account) => borrow.id === account.id)
    retArr.push({...account, returned: borrow.returned})
  }
  retArr.length = 10
  return retArr
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
