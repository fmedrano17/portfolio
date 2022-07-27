const submitBtn = document.getElementById("button");
const dragonfruit = document.getElementById("morphText");
const fontNum = document.getElementById("fontNum");

var currentSize = 16;

submitBtn.onclick = function(){
    if (fontNum.value == currentSize){
        alert("That's the current font size!");
    }
    else if(fontNum.value < currentSize && fontNum.value >= 1){
        shrink();
    }
    else if(fontNum.value >= currentSize && fontNum.value <= 100){
        grow();
    } else {
        alert("Invalid number, try again.");
    }
};

function shrink(){
    
    for(let i=currentSize; i>=fontNum.value; i--){
        dragonfruit.style.fontSize = i + "px";
        console.log(i);
    }

    console.log("For loop complete!");
    currentSize = fontNum.value;
}

function grow(){
    console.log(currentSize);
    while(currentSize < fontNum.value){
        dragonfruit.style.fontSize = currentSize + "px";
        currentSize++;
        console.log(currentSize);
    }

    console.log("While loop complete!");
    currentSize = fontNum.value;
}