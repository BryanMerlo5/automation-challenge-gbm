//**e)Write a program to find the number of days in a month*/
function daysInMonth() {
    let date = new Date();
    let month = date.getMonth() + 1;
    console.log("Number of days in " + month);

}

daysInMonth();
