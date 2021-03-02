async function  getResponce() {
    let response = await fetch('https://bank.gov.ua/ua/markets/exchangerates?date=02.03.2021&period=daily');

    let text = await response.text();

    alert(response.text);
}
getResponce()