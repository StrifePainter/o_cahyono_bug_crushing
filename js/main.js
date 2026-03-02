console.log("JavaScript File is linked");

// variables

const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
// add variable for reset button;

//function
function dragStart() {
    console.log("Start Dragging");
    currentDraggedElement = this;
}

function dragOver() {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    //prevent doulbe drops here
    //if this dropzone has a child, don't let it drop
    //use a return statement

    if(this.children.length>=1) {
        return;
    }

    //drop the piece
    this.appendChild(currentDraggedElement);

    //reset the reference
    currentDraggedElement = null;
}

//function reset() {
    //collect all the labels and put them back
    //check all target zones/loop through them, see IF the dropzone has a label in it
    //if it doesn add that label back to the pieces
    // labelBox.appendChild(); put back piece
//}


//Event Listeners
labels.foreEach(label => {
    label.addEventListener("dragstart", dragStart);
})

targetZones.forEach(zone => {
    zone.addEventListener("dragover", drag0ver);
    zone.addEventListener("drop", dropped);
})

//add event listener for the reset button (hw)
//listen for click event and then call for a reset function