const baseC = document.getElementById(`base_currency_type`);
const desiredC = document.getElementById(`desired_currency_type`);
const amount = document.getElementById(`amount`);
const result = document.getElementById(`result_amount`);
const convert = document.getElementById(`button`);

function converter() {
    const currency1 = baseC.value;
    const currency2 = desiredC.value;
    fetch(`https://api.exchangerate-api.com/v5/latest`)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            let obj = JSON.parse(data);
            result.value =
                (amount.value * obj.rates[currency2]) / obj.rates[currency1];
        });
}

convert.addEventListener(`click`, converter);

converter();