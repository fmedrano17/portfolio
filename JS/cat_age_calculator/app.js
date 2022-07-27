const catAge = document.getElementById("age");
const catName = document.getElementById("name");
const submit = document.getElementById("submit");
const chart = document.getElementById("chart");
const result = document.getElementById("result");

// Checks for valid values and calculates age
submit.onclick = function(){

    if (catName.value.length != 0) {

        if (catAge.value.length != 0 && catAge.value >= 0) {
            calculate();
        }

        else {
            alert("Invalid age. Please enter a vaild age.")
        }
    }

    else {
        alert("Invalid name. Please enter a valid name.");
    }
}

// Displays age-chart.txt in "result" div when "chart" btn is pressed
chart.onclick = function() {
    ageChart();
}

// Numbers 0-2 have special ages and messages, every age after that is just 4 years added
function calculate(){

    let catMsg = document.createElement('p');

    if (result.hasChildNodes()) {
        result.removeChild(result.firstChild);
    }

    if (catAge.value == 0) {
        catMsg.innerHTML = catName.value + " is 0 years old in human years! Who wudda thunk.";
        result.appendChild(catMsg);
    }

    else if (catAge.value == 1) {
        catMsg.innerHTML = catName.value + " is 15 years old in human years! They're getting big!";
        result.appendChild(catMsg);
    }

    else if (catAge.value == 2) {
        catMsg.innerHTML = catName.value + " is 24 years old in human years! They're all grown up!";
        result.appendChild(catMsg);
    }

    else {
        let humanAge = 24 + ((catAge.value-2) * 4);
        catMsg.innerHTML = catName.value + " is " + humanAge + " years old in human years! Awesome!";
        result.appendChild(catMsg);
    }
}

// Reads age-chart.txt file w/ AJAX
function ageChart() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("result").innerHTML = this.responseText;
    }
    xhttp.open("GET", "age-chart.txt");
    xhttp.send();
}