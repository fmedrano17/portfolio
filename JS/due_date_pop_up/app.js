// Object with multiple properties
const dueDate = {
    month: "2",
    date: "4",
    year: "2022"
};

// Gets due date by passing in paramaters, and passes out the due date
function getDueDate(month, date, year) {
    var dueDateString = (month + "-" + date + "-" + year);
    return dueDateString;
}

// Gets todays date using methods, passes out todays date
function todaysDate() {
    const d = new Date();
    let month = d.getMonth()+1;
    let date = d.getDate();
    let year = d.getFullYear();
    var dateString = (month + "-" + date + "-" + year);
    return dateString;
}

//  Pushes an alert with the due date and current date
function dateAlert() {
    alert("The current date is: " + todaysDate() +
          "\nThe due date is: " + getDueDate(dueDate.month, dueDate.date, dueDate.year));
}
