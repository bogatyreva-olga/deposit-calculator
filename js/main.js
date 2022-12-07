const DEFAULT_DEPOSIT = 10000000;
const DEFAULT_PROFITABILITY = 5;
const DEFAULT_BID = 5;
const DEFAULT_COUNT_DEPOSIT_DAYS = 30;

let getDepositElement = () => document.querySelector("#deposit-amount");
let getInterestElement = () => document.querySelector("#interest");
let getBidElement = () => document.querySelector(".calculation__bid");
let getProfitabilityElement = () => document.querySelector(".calculation__profitability");
let getDepositTermElement = () => document.querySelector("#deposit-term");
let getRateIncreaseElement = () => document.querySelector("#raise-rate");
let getResultDepositElement = () => document.querySelector(".calculation__saving");
let getSubscriptionElement = () => document.querySelector("#deposit-with-subscription");

const interestProfit = {
     6: 0.03,
    13: 0.04,
    14: 0.05,
    15: 0.07,
    16: 0.08,
    17: 0.09,
    18: 0.1,
    19: 0.12,
    20: 0.13,
    21: 0.14,
    22: 0.16,
    23: 0.17,
    24: 0.18
}

let showResultDeposit = () => {
    let profitability = DEFAULT_PROFITABILITY;
    let bid = DEFAULT_BID;
    let deposit = DEFAULT_DEPOSIT;
    let countDayDeposit = DEFAULT_COUNT_DEPOSIT_DAYS * getDepositTermElement().value;

    if (getDepositTermElement().value >= 6) {
        bid += 0.5;
        profitability += 0.5;
    }

    if (getDepositTermElement().value >= 18 && getRateIncreaseElement().checked) {
        bid += 0.5;
        profitability += 0.5;
    }

    if (getDepositTermElement().value >= 23 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 24 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositElement().value) {
        deposit = parseInt(getDepositElement().value);
    }

    if (getRateIncreaseElement().checked) {
        bid += 1;
        profitability += 1;
    }

    if (getInterestElement().checked && getRateIncreaseElement().checked) {
        profitability += 0.19;
    }

    if (getInterestElement().checked && !getRateIncreaseElement().checked && !getSubscriptionElement().checked) {
        profitability += 0.11;
    }

    if (getInterestElement().checked && getSubscriptionElement().checked && !getRateIncreaseElement().checked) {
        profitability += 0.14;
    }

    if (getSubscriptionElement().checked) {
        bid += 0.5;
        profitability += 0.5;
    }

    let result = (deposit + (deposit * profitability * countDayDeposit / 364 / 100)).toFixed();
    console.log(result)

    getProfitabilityElement().value = profitability.toFixed(2);
    getBidElement().value = bid;
    getResultDepositElement().value = result;
}

document.addEventListener('DOMContentLoaded', () => {
    showResultDeposit();

    getDepositElement().addEventListener("change", () => {
        showResultDeposit()
    });

    getRateIncreaseElement().addEventListener("change", () => {
        showResultDeposit()
    });

    getInterestElement().addEventListener("change", () => {
        showResultDeposit()
    });

    getSubscriptionElement().addEventListener("change", () => {
        showResultDeposit()
    });

    getDepositTermElement().addEventListener("change", () => {
        showResultDeposit()
    });
});


