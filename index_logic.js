function getNumOfBoxes() {
    var counter = 0;
    let boxes = [];
    // Get every element on the page
    let allElements = document.getElementsByTagName("*");

    // For every element on the page
    for(let i = 0; i < allElements.length; i++) {
        // If the element contains the word box in the ID
        if(allElements[i].id.match(/[box]/)) {
            boxes[i] = allElements[i];
            counter += 1;
        }
    }

    //alert(((allElements.length - boxes.length) + counter) - 1);
    return ((allElements.length - boxes.length) + counter) - 1;
}

function boxListen() {
    const box = document.getElementById("box" + (getNumOfBoxes() - 1));
    box.addEventListener("click", () => {
        let goal = prompt("Bingo goal", "");
        box.textContent = goal;
        });
}

function newButton() {
    var numOfBoxes = getNumOfBoxes.length;
    var counter = 0;

    // Create new box tag
    const box = document.createElement("div");

    // Set box classname
    box.className = "box";

    // Set box id
    box.id = "box" + getNumOfBoxes();

    // Create text node to go in box tag
    const boxTxt = document.createTextNode("");

    // Append text node to box tag
    box.appendChild(boxTxt);

    // Get the box container element
    const boxContainer = document.getElementById("boxContainer");

    // Append the new box tag to the box container element
    boxContainer.appendChild(box);

    boxListen();
}

function delButton() {
    var toRemove = document.getElementById("box" + (getNumOfBoxes() - 1));

    toRemove.remove();
}