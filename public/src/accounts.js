const { currentCheckedOut } = require("./helpers");
const { addAuthor } = require("./helpers");

function findAccountById(accounts, id) {
  return accounts.find((key) => key.id === id)
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA,accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()? 1 : -1);
  return accounts;
}

function numberOfBorrows(account, books) {
  //not working

  //declare var to tally id matches in book's borrow history
  let counter = 0
  //for/of loop to check objects for matches
  for (let book of books) {
    (book.borrows.find((instance) => instance.id === account.id)) ? counter++ : counter += 0
  }
  return counter
}  

function getBooksPossessedByAccount(account, books, authors) {
// get list of books checked out by account
const checkedOut = currentCheckedOut(account,books);
// console.log(checkedOut);
// go thorough list of books and add corresponding author object
const result = addAuthor(checkedOut,authors);
// console.log(result);
return result;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
