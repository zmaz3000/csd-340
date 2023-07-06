var cave = document.querySelector("#cave");
var moon = document.querySelector("#moon");
var header1 = document.querySelector("#firstheader");
var header2 = document.querySelector("#secondheader");

cave.addEventListener("click", ()=>{
   
        cave.src = "Example_10/cave_02.jpg";
        
    
})

moon.addEventListener("click", ()=>{
   
        moon.src = "Example_10/moon_02.jpg";
        
    
})

header1.addEventListener("mouseover", () => {
    header1.style.color = "red";
    header1.addEventListener("mouseout", () => {
        header1.style.color = "black";
    })
})

header2.addEventListener("mouseover", () => {
    header2.style.color = "blue";
    header2.addEventListener("mouseout", () => {
        header2.style.color = "black";
    })
})

function onClickFunction(id){
    document.getElementById(`${id}`).style.marginLeft = "500px"; 
}

