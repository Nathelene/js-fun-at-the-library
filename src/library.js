
function createLibrary(name){
 var library = {
  name : name,
  shelves : {
    fantasy : [],
    fiction : [],
    nonFiction : []
  }
}
return library
}

// function addBook(library,book){

//   library.shelves.fantasy.push(book)

// }

function addBook(library,books){

  library.shelves[books.genre].push(books)

}


function checkoutBook(library,title,genre){
  var titlePresent = false
  var shelf = library.shelves[genre]
  for (var i=0; i < shelf.length; i++){
    if (library.shelves[genre][i].title === title){
      library.shelves[genre].splice(i, 1)
      titlePresent = true
    }
  } 
    if (titlePresent === true){
     return `You have now checked out ${title} from the ${library.name}.` 

    } else {
     return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
    }
  }


function takeStock(library,genre){
 if(genre){
  return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
} else {
  return `There are a total of ${Object.values(library.shelves).length} books at the ${library.name}.` 
}
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};