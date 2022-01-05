//define grid size

let userInput = prompt("how many columns would you like?");
let gridSize = userInput*userInput;

// Log outcome of gridSize
console.log(gridSize);

// create grid with numbers input

// const container = document.getElementById("container").style.gridTemplateColumns = userInput;




// creates the EaS pixel
const containter = document.getElementById("container").style.gridTemplateColumns = userInput; 
const pixelBlock = document.createElement('div');
pixelBlock.classList.add("pixel");
container.append(pixelBlock);

// loop to relvant pixel amount
for(i = 1; i < gridSize; i++){
    container.append(pixelBlock.cloneNode(true));
    
}