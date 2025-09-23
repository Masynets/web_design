

/*

const a = 3;

let b = 4;
var c = 6;



// Завдання 1
{
    var num = 88;
    //let num = 5;
    alert("Завдання 1. num = " + num);
}

// Завдання 2
{
    let a = 98, b = 2;
    b = 4;
    alert(
        "Завдання 2. Сума = " + (a + b) +
        ", Різниця = " + (a - b) +
        ", Добуток = " + (a * b) +
        ", Частка = " + (a / b)
    );
}

// Завдання 3
{
    const c = 15, d = 2;
    const result = c + d;
    alert("Завдання 3. result = " + result);
}

// Завдання 4
{
    const a = 10, b = 2, c = 5;
    alert("Завдання 4. Сума a+b+c = " + (a + b + c));
}

// Завдання 5
{
    const a = 17, b = 10;
    const c = a - b;
    const d = 7;
    const result = c + d;
    alert("Завдання 5. result = " + result);
}

// Завдання 6
{
    const str = "Привіт, світ!";
    alert("Завдання 6. " + str);
}

// Завдання 7
{
    let str1 = "Привіт, ";
    const str2 = "світ!";
    alert("Завдання 7. " + (str1 + str2));
}

// Завдання 8
{
    const name = "J.Epstein";
    alert("Завдання 8. Hello, " + name + "!");
}

// Завдання 9
{
    const age = 19;
    alert("Завдання 9. Мені " + age + " років!");
}

// Завдання 10
{
    const userName = prompt("Введіть ваше ім’я:", "");
    alert("Завдання 10. Ваше ім’я " + userName);
}

// Завдання 11
{
    const userNumRaw = prompt("Введіть число:", "");
    const userNum = Number(userNumRaw);
    const message = Number.isFinite(userNum)
        ? "Квадрат числа = " + (userNum * userNum)
        : "Ви ввели не число.";
    alert("Завдання 11. " + message);
}

// Завдання 12
{
    const str = "abcde";
    alert("Завдання 12 " + str[0]); // a
    alert("Завдання 12 " + str[2]); // c
    alert("Завдання 12 " + str[4]); // e
}

// Завдання 13
{
    const num = "12345";
    const product = num[0] * num[1] * num[2] * num[3] * num[4];
    alert("Завдання 13. Добуток цифр = " + product);
}

// Завдання 14
{
    const secInHour = 60 * 60;
    const secInDay = secInHour * 24;
    const secInMonth = secInDay * 30; // умовно 30 діб
    alert(
        "Завдання 14. Секунд у годині = " + secInHour +
        ", у добі = " + secInDay +
        ", у місяці = " + secInMonth
    );
}

// Завдання 15
{
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");
    alert("Завдання 15. Поточний час: " + hour + ":" + minute + ":" + second);
}

// Завдання 16
{
    const number = 7;
    alert("Завдання 16. Квадрат числа " + number + " = " + (number * number));
}
*/


// Завдання 1
function getDigitsSum(n) {
    const s = String(Math.abs(n));
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum = sum + Number(s[i]);
    }
    return sum;
}

function solveTask1() {
    const out = document.getElementById("task1-output");
    const years = [];
    for (let y = 1; y <= 2020; y++) {
        if (getDigitsSum(y) === 13) {
            years.push(y);
        }
    }

    // Виводимо у кілька рядків (по 20 значень у рядку)
    let text = "Знайдено " + years.length + " років:\n\n";
    for (let i = 0; i < years.length; i++) {
        text += years[i];
        if (i === years.length - 1) {
            // кінець списку
        } else if ((i + 1) % 20 === 0) {
            text += "\n";
        } else {
            text += ", ";
        }
    }
    out.textContent = text;
}

// Завдання 2
function isLeapYear(y) {
    if (y % 400 === 0) return true;
    if (y % 100 === 0) return false;
    return y % 4 === 0;
}

function daysInMonth(month, year) {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31;
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }
    // Лютий
    return isLeapYear(year) ? 29 : 28;
}

function addOption(selectEl, value, text) {
    const opt = document.createElement("option");
    opt.value = String(value);
    opt.textContent = String(text);
    selectEl.appendChild(opt);
}

function pad2(n) {
    if (n < 10) return "0" + n;
    return String(n);
}

function initDateSelectors() {
    const dayEl = document.getElementById("day");
    const monthEl = document.getElementById("month");
    const yearEl = document.getElementById("year");
    const selectedDateEl = document.getElementById("selected-date");

    const monthNames = [
        "Січень","Лютий","Березень","Квітень","Травень","Червень",
        "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"
    ];

    // Максимально доступна дата: 2025-09-24
    const YEAR_MIN = 1;
    const YEAR_MAX = 2025;
    const MAX_YEAR = 2025;
    const MAX_MONTH_IN_MAX_YEAR = 9;  // вересень
    const MAX_DAY_IN_MAX_MONTH = 24;  // 24-те

    // Роки (1..2025)
    yearEl.innerHTML = "";
    for (let y = YEAR_MIN; y <= YEAR_MAX; y++) {
        addOption(yearEl, y, y);
    }
    yearEl.value = String(MAX_YEAR);

    // Місяці — залежно від року
    function fillMonths() {
        const y = Number(yearEl.value);
        const oldMonth = Number(monthEl.value) || MAX_MONTH_IN_MAX_YEAR;
        const maxMonth = (y === MAX_YEAR) ? MAX_MONTH_IN_MAX_YEAR : 12;

        monthEl.innerHTML = "";
        for (let m = 1; m <= maxMonth; m++) {
            addOption(monthEl, m, monthNames[m - 1]);
        }

        const newMonth = oldMonth > maxMonth ? maxMonth : oldMonth;
        monthEl.value = String(newMonth);

        // після оновлення місяців — оновити дні
        fillDays();
    }

    function fillDays() {
        const y = Number(yearEl.value);
        const m = Number(monthEl.value);
        const oldDay = Number(dayEl.value) || MAX_DAY_IN_MAX_MONTH;

        let max = daysInMonth(m, y);
        if (y === MAX_YEAR && m === MAX_MONTH_IN_MAX_YEAR && max > MAX_DAY_IN_MAX_MONTH) {
            max = MAX_DAY_IN_MAX_MONTH;
        }

        dayEl.innerHTML = "";
        for (let d = 1; d <= max; d++) {
            addOption(dayEl, d, d);
        }

        const newDay = oldDay > max ? max : oldDay;
        dayEl.value = String(newDay);

        updateSelectedText();
    }

    function updateSelectedText() {
        const d = Number(dayEl.value);
        const m = Number(monthEl.value);
        const y = Number(yearEl.value);
        selectedDateEl.textContent = "Обрана дата: " + pad2(d) + " " + monthNames[m - 1] + " " + y + " р.";
    }

    // Початкове заповнення: місяці (з урахуванням обмеження) → дні
    fillMonths();

    // Обробники подій
    yearEl.addEventListener("change", fillMonths);
    monthEl.addEventListener("change", fillDays);
    dayEl.addEventListener("change", updateSelectedText);
}

// Запуск коли DOM готовий
document.addEventListener("DOMContentLoaded", function () {
    solveTask1();
    initDateSelectors();
});
