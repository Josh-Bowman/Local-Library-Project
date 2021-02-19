const {findAuthorById} = require("./books")

function partitionBooksHelper(books) {
    //split books by status: borrowed || returned
    //declare the borrowed || returned arrays
    let returned = []
    let borrowed = []
    // terenary opperation: if book is borrowed, .push() to [borrowed] || if returned, .push() to [returned]
    for (let book of books) {
      //debugging --- console.log(book.borrows[0].returned)
      (book.borrows[0].returned === true) ? returned.push(book.id) : borrowed.push(book.id)
    }
    return {borrowed, returned}
  }

  function findAuthById(authors,id)
  {
    const author = findAuthorById(authors,id);
    return (`${author.name.first} ${author.name.last}`);
  }

  function currentCheckedOut(account,books)
  {
    const id = account.id;
    const checkedOut = [];
    for(let theBook of books)
    {
       if(theBook.borrows.some((person) => person.id === id && !person.returned))
        {
            checkedOut.push(theBook);
        }
    }
    return checkedOut
  }

  function addAuthor(books,authors) {
    for(let theBook of books)
  {
     const authorId = theBook.authorId;
     const theAuthor = authors.find((author) => author.id === authorId);
     theBook[`author`] = theAuthor;
  }
 // console.log(books);
  return books;
  }

  module.exports = {
      partitionBooksHelper,
      findAuthById,
      currentCheckedOut,
      addAuthor,
  }
