//define grid size


// Slider
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}


// Removes all the squares when you change the grid size
function reset(){
    let container = document.getElementById("container");
    container.innerHTML = "";
    gridBuild();

}


function gridBuild(){
    userInput = slider.value;
    let gridSize = userInput*userInput;
    // creates the EaS pixel
    const containter = document.getElementById("container").style.gridTemplateColumns = "repeat("+userInput+", 1fr)"; 
    const pixelBlock = document.createElement('div');
    pixelBlock.classList.add("pixel");

    container.append(pixelBlock);
    // loop to relvant pixel amount
    for(i = 1; i < gridSize; i++){
        container.append(pixelBlock.cloneNode(true)); 
    }
 
}

