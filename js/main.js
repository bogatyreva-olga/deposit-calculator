const DEFAULT_DEPOSIT = 50000;
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

let showResultDeposit = () => {
    let profitability = DEFAULT_PROFITABILITY;
    let bid = DEFAULT_BID;
    let deposit = DEFAULT_DEPOSIT;
    let countDayDeposit = DEFAULT_COUNT_DEPOSIT_DAYS * getDepositTermElement().value;

    if (getDepositTermElement().value >= 6) {
        bid += 0.5;
        profitability +=0.5;
    }

    if (getDepositTermElement().value >= 18 && getRateIncreaseElement().checked) {
        bid += 0.5;
        profitability += 0.5;
    }

    if (getDepositTermElement().value >= 6 && getInterestElement().checked) {
        profitability += 0.03;
    }

    if (getDepositTermElement().value >= 13 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 14 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 15 && getInterestElement().checked) {
        profitability += 0.02;
    }

    if (getDepositTermElement().value >= 16 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 17 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 19 && getInterestElement().checked) {
        profitability += 0.02;
    }

    if (getDepositTermElement().value >= 18 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 20 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 21 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 22 && getInterestElement().checked) {
        profitability += 0.02;
    }

    if (getDepositTermElement().value >= 23 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if (getDepositTermElement().value >= 24 && getInterestElement().checked) {
        profitability += 0.01;
    }

    if(getDepositElement().value){
        deposit = parseInt(getDepositElement().value);
    }

    if (getRateIncreaseElement().checked) {
        bid += 1;
        profitability +=1;
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

    let result = (deposit + (deposit * profitability *  countDayDeposit / 364 / 100)).toFixed();
    console.log(result)

    getProfitabilityElement().value = profitability.toFixed(2);
    getBidElement().value = bid;
    getResultDepositElement().value = result;
}

document.addEventListener('DOMContentLoaded', () => {
    getDepositElement().addEventListener("change", (evt) => {
        showResultDeposit()
    });

    getRateIncreaseElement().addEventListener("change", (evt) => {
        showResultDeposit()
    });

    getInterestElement().addEventListener("change", (evt) => {
        showResultDeposit()
    });

    getSubscriptionElement().addEventListener("change", (evt) => {
        showResultDeposit()
    });

    getDepositTermElement().addEventListener("change", (evt) => {
        showResultDeposit()
    });
});


