
let money,time;

//Спрашиваем у человека
function start() {
    money = prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    //Проверка
    /*Проверка на число*/
    while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", "");
    }
}
start();


// Создание объекта с переменными
let appData = {
    budget: money,
    TimeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        //Спрашиваем у человека
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", '');
            // Условия для логического вычисления
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                    console.log("done");
                    appData.expenses[a] = b
                } else {
                    i = i - 1;
                }
        }
    },
    //Вычисляем дневной бюджет
    detectDayBudget: function () {
        appData.DayBudget = (appData.monthIncome/30).toFixed();
        alert("Дневной достаток равен: " + appData.DayBudget);
    },
    // Вычисляем уровень достатка
    detectLevel: function () {
        if(appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    // Функция накоплений
    checkSavings: function () {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');
            //Прибыль за месяц
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    // Вычисляем дневной уровень достатка
    detectDayLevel: function () {
        if (appData.DayBudget < 50){
            console.log("Минимальный дневной достаток");
        } else if (appData.DayBudget > 50 && appData.DayBudget < 100) {
            console.log("Средний дневной достаток");
        } else if (appData.DayBudget > 100) {
            console.log("Высокий дневной достаток");
        } else {
            console.log("Произошла ошибка");
        }
    },
    //Определение необязательных расходов
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }
};
