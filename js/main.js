console.log("JavaScript File is linked");

// variables

const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
const labelBox = document.querySelector("#label-box");
// grabs element from HTML, aka the label-box for promblem 1
const resetBtn = document.querySelector("#reset-btn");
// grabbing the reset button to have variable for problem 1

//function
function dragStart() {
    console.log("Start Dragging");
    currentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
    //for bug 3, when zone is being hovered over
}

function dragLeave() {
    this.classList.remove("hovered");
    //for bug 3, when zone is not being hovered, remove
}


function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    //prevent double drops here for bug 2!!!!
    //if this dropzone has a child, don't let it drop
    //use a return statement, using an !!IF STATEMENT!!

    if(this.children.length>=1) {
        console.log("Zone is filled!");
        return;
    }

    //drop the piece
    this.appendChild(currentDraggedElement);

    //reset the reference
    currentDraggedElement = null;

    // bug 3 removes the highlight when it gets dropped
    this.classList.remove("hovered");
}

// bug 1 function to make it go reset all labels, append the children. Added log to say reset process.
function reset() {
    console.log("Puzzle is resetting!");

    labels.forEach(label => {
        labelBox.appendChild(label);
    });
}



//Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
})

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
    zone.addEventListener("dragenter", dragEnter);
    zone.addEventListener("dragleave", dragLeave);
// bug 3 listen for when label enters and leaves the target zones
})

resetBtn.addEventListener("click", reset);
// fix bug 1, listen to when the reset button is clicked and divert it to the reset function




//add event listener for the reset button (homework)
//listen for click event and then call for a reset function