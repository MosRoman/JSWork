'use strick';
let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

// let first = +prompt("Введите обязательную статью расходов в этом месяце");
// let second = +prompt("Во сколько обойдется?");

// console.log(money);
// console.log(time);

let appData = {
    name: "Jo",
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};
// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     a2 = prompt("Во сколько обойдется?", ""),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     a4 = prompt("Во сколько обойдется?", "");

//     appData.expenses.a1 = a2;
//     appData.expenses.a3 = a4;

console.log(appData.name);
console.log(appData.moneyData);
console.log(appData.timeData);

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ((typeof (a)) === "string" &&
            (typeof (a)) !== null &&
            (typeof (b)) !== null &&
            a !== "" &&
            b !== "" &&
            a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    window.alert(appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 200) {
        console.log("Low money");
    } else if (appData.moneyPerDay <= 2000) {
        console.log("Midle money");
    } else if (appData.moneyPerDay <= 10000) {
        console.log("higth level money");
    } else {
        console.log("Doesnt have money");
    }
}
detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений ?"),
            percent = +prompt("Под какой процент ?");

        appData.mounthIncome = save / 100 / 12 * percent;
    }
    alert("Доход с депозита : " + appData.mounthIncome)
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?"),
        b = prompt("Ответ на вопрос");

        if ((typeof (a)) === "string" &&
            (typeof (a)) != null &&
            (typeof (b)) != null &&
            a != "" &&
            b != "" &&
            a.length < 50) {
            console.log("done");
            appData.optionalExpenses[a] = b;
        }
    }
}

chooseOptExpenses();