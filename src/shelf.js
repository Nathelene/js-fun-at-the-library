
function shelfBook(book,shelf){
 
  if (shelf.length < 3){
   return shelf.unshift(book)
  }
};

function unshelfBook(title,shelf) {

  for (var i=0; i < shelf.length; i++){
  if (shelf[i].title === title){
    return shelf.splice(i, 1)
   }
 }
}

 
function listTitles(shelf){
  var name = [];
  for (var i = 0; i < shelf.length; i++){
    name.push(shelf[i].title)
  }
  return name.join(', ')
}

function searchShelf(shelf,title){
  var tF = true
  for (var i = 0; i < shelf.length; i++){
     if (shelf[i].title === title){
        tF = true 
       } else {
        tF = false
       }
      }
      return tF
     }
  

module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
  };