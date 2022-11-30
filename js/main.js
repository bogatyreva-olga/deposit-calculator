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

let showResultDeposit = () => {
    let profitability = DEFAULT_PROFITABILITY;
    let bid = DEFAULT_BID;
    let deposit = DEFAULT_DEPOSIT;
    let countDayDeposit = DEFAULT_COUNT_DEPOSIT_DAYS * getDepositTermElement().value;

    if(getDepositElement().value){
        deposit = getDepositElement().value;
    }

    if (getRateIncreaseElement().checked) {
        bid += 1;
        profitability +=1;
    }

    if (getInterestElement().checked && getRateIncreaseElement().checked) {
        profitability += 0.16;
    }

    if (getInterestElement().checked && !getRateIncreaseElement().checked) {
        profitability += 0.11;
    }

    let result = deposit + (deposit * bid *  countDayDeposit / 365 / 100);

    getProfitabilityElement().value = profitability;
    getBidElement().value = bid;
    getResultDepositElement().value = result;
}

document.addEventListener('DOMContentLoaded', () => {
    getRateIncreaseElement().addEventListener("change", (evt) => {
        showResultDeposit()
    });

    getInterestElement().addEventListener("change", (evt) => {
        showResultDeposit()
    });
});


