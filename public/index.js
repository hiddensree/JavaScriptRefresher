
// we can access the variable from the outside of the function
// DOM - Document Object Model

// Initialize
let count = 0;
var docElement = document.getElementById("count_el")
var saveElement = document.getElementById("save_el")
function increment(){
    count++
    docElement.textContent = count
    console.log("Button was clicked")
}

function save(){
    saveElement.textContent += count + " - "
    console.log("Saved" + docElement.innerText)
    count = 0
    docElement.textContent = count
}


