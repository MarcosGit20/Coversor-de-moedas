const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues (){
    const imputCurrencyValue = document.querySelector (".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log (currencySelect.value)    
    const dolarToday = 5.2
    const euroToday = 6.2
  

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style:"currency",
            currency: "USD"
        }).format(imputCurrencyValue / dolarToday )//VALOR CONVERTIDO DOLAR
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE",{
            style   : "currency",
            currency: "EUR"
        }).format(imputCurrencyValue / dolarToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: "BRL"

    }).format(imputCurrencyValue) 

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()
   
}    

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)