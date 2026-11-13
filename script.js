// Quanddo o o usuário clicar no botão, a função de conversão será chamada.
// A função de conversão pega o valor do input, converte para o valor desejado e exibe o resultado na tela.
const convertButton = document.getElementById("convert-button");
const currencySelect = document.getElementById("currency-select");

function convertCurrency() {
    const inputReal = document.getElementById("input-real").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // valor convertido
    const dolarToDay = 5.64;
    const euroToDay = 6.20;
    const libraToDay = 7.30;
    const bitcoinToDay = 0.0000047;


    if (currencySelect.value == "usd") {
        convertedValue = inputReal / dolarToDay; // valor convertido em Dólar
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedValue); // Alterando o valor convertido na Div
    }
    if (currencySelect.value == "eur") {
        convertedValue = inputReal / euroToDay; // valor convertido em Euro
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(convertedValue); // Alterando o valor convertido na Div
    }
    if (currencySelect.value == "gbp") {
        convertedValue = inputReal / libraToDay; // valor convertido em Libra
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(convertedValue); // Alterando o valor convertido na Div
    }
    if (currencySelect.value == "btc") {
        convertedValue = inputReal * bitcoinToDay; // valor convertido em Bitcoin
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(convertedValue); // Alterando o valor convertido na Div
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReal); // Alterando o valor em Real na Div

}

function changeCurrency() {
    const currencyName = document.querySelector(".currency-name");

    if (currencySelect.value == "usd") {
        currencyName.innerHTML = "Dólar";
        document.getElementById("currency-box-img").src = "./img/estados-unidos.png";
    }
    if (currencySelect.value == "eur") {
        currencyName.innerHTML = "Euro";
        document.getElementById("currency-box-img").src = "./img/logo-euro.png";
    }
    if (currencySelect.value == "gbp") {
        currencyName.innerHTML = "Libra";
        document.getElementById("currency-box-img").src = "./img/logo-libra.png";
    }
    if (currencySelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin";
        document.getElementById("currency-box-img").src = "./img/logo-bitcoin.png";
    }

    convertCurrency(); // Chama a função de conversão para atualizar o valor convertido quando a moeda for alterada
}




currencySelect.addEventListener("change", changeCurrency);

convertButton.addEventListener("click", convertCurrency);