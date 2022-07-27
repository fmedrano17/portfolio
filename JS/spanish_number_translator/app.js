function checkNum(){
    let numMsg = "The number you chose was zero.";
    let chosenNum = document.getElementById("num").value;
    if (chosenNum >= 1 && chosenNum <= 10) {
        numMsg = numMsg.replace("zero", chosenNum);
        switch (Number(chosenNum)){
            case 1:
                alert(numMsg + "\nThis is 'Uno' in spanish!");
                break;
            case 2:
                alert(numMsg + "\nThis is 'Dos' in spanish!");
                break;
            case 3:
                alert(numMsg + "\nThis is 'Tres' in spanish!");
                break;
            case 4:
                alert(numMsg + "\nThis is 'Cuatro' in spanish!");
                break;
            case 5:
                alert(numMsg + "\nThis is 'Cinco' in spanish!");
                break;
            case 6:
                alert(numMsg + "\nThis is 'Seis' in spanish!");
                break;
            case 7:
                alert(numMsg + "\nThis is 'Siete' in spanish!");
                break;
            case 8:
                alert(numMsg + "\nThis is 'Ocho' in spanish!");
                break;
            case 9:
                alert(numMsg + "\nThis is 'Nueve' in spanish!");
                break;
            case 10:
                alert(numMsg + "\nThis is 'Diez' in spanish!");
                break;
        }
    } else {
        alert("The number entered is not between 1 and 10.\nPlease enter a new number.");
    }

}