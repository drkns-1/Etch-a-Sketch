// global variables

// Slider
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;


slider.oninput = function() {
    output.innerHTML = this.value;
}

let container = document.getElementById("container");

// Removes all the squares then triggers a new grid build
function reset(){
    container.innerHTML = "";
    gridBuild();

}

// Declare global variables
let pixelBlock = document.createElement('div');
pixelBlock.setAttribute('id', 'pixel');

// Function that loops through and builds grid with the correct amount of squares
function gridBuild(){
    let userInput = slider.value;
    let gridSize = userInput*userInput;
    // creates the EaS pixel
    const containter = document.getElementById("container").style.gridTemplateColumns = "repeat("+userInput+", 1fr)"; 
    // loop to relvant pixel amount
    for(i = 0; i < gridSize; i++){
        container.append(pixelBlock.cloneNode(true)); 
    }

}


// Change colour to black when hovering
container.addEventListener("mouseover", function() {
    console.log(pixelBlock); 
    pixelBlock.style.backgroundColor = 'Black'; 
});