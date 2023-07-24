var bookArray = [];

var books = document.querySelectorAll("li")
var list = document.querySelector("#orderedlist");


for(var i = 0; i < 10; i++){
    bookArray.push(books[i].innerHTML);
}

function topToBottom(){
    list.innerHTML = ''
    bookArray.forEach(e => {
        var li = document.createElement("li");
        li.innerHTML = e
        list.append(li)
    })
     
}

function bottomToTop(){
   list.innerHTML = ''
   for(var i = 1; i <= 10; i++){
    var li = document.createElement("li")
    li.innerHTML = bookArray[bookArray.length - i]
    list.appendChild(li)
   }
}
    

    