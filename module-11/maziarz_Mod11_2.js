var elementsArray = [];
var input = document.querySelector("#useritem");
var elementlist = document.querySelector(".elementslist");

function addElement(){
    if(input.value == ''){
        alert("You must enter a to do item");
    }
    else{
        elementsArray.push(input.value);
        input.value = '';
    }
    
}

function deleteElement(){
    var deleted = elementsArray.pop();
}

function displayElements(){
    elementlist.innerHTML = '';
    if(elementsArray.length === 0){
        alert("There are no items in the to do list");
    }
    else{
        
        for(i = 0; i<elementsArray.length; i++){
            var itemdiv = document.createElement("div");
            itemdiv.classList.add("itemdiv");
            var item = document.createElement("p");
            item.innerHTML = "Item " + (i+1) + ": "+ elementsArray[i];
            itemdiv.appendChild(item); 
            elementlist.appendChild(itemdiv);
        
        }
    }
    
}

document.addEventListener("keypress", (e) => {
    if(e.code == 'Enter' && input.value != ''){
       
            elementsArray.push(input.value);
            input.value = '';
        
    }
})
