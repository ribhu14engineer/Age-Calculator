let userInput = document.getElementById("date");
currentDate = new Date().toISOString().split("T")[0]; //Get current Date in YYYY-MM-DD Format
userInput.max = currentDate;
let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + (m2 - m1);
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3} years</span> <span>${m3} months</span> and <span>${d3} days</span> old`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}