/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// definition interraction utilisateur
let numbersIpt = document.getElementById("numbers-ipt")
const btn = document.getElementById("btn")
const meter = 0.3048
const feet = 3.281
const gallon = 0.264
const liter = 3.7854
const pound = 0.264
const kilo = 0.4536
const numbersValue = JSON.parse(localStorage.getItem("value"))
// evenement du bouton
if(numbersValue){
         numbersIpt.value = numbersValue
    }
btn.addEventListener( "click" , function (){
    if (numbersIpt.value <=0 || isNaN(numbersIpt.value)) {
    alert("Veuillez entrer une longueur valide.");
        return;
}
    convMeterToFeet()
    convLiterToGallon()
    convKiloToPound()
    localStorage.setItem("value", JSON.stringify(numbersIpt.value))
})

// fonction de conversion

function convMeterToFeet(){
    const meterParagraph = document.getElementById("meter-paragraph")
    let meterToFeet = numbersIpt.value * feet
    let feetToMeter = meter * numbersIpt.value
    meterParagraph.innerHTML = `<p>${numbersIpt.value} meters = ${meterToFeet.toFixed(3)} feets | ${numbersIpt.value} feets = ${feetToMeter.toFixed(3)} meters</p>`  
}
function convLiterToGallon(){
    const literParagraph = document.getElementById("liter-paragraph")
    let literToGallon = numbersIpt.value * gallon
    let gallonToLiter = numbersIpt.value * liter
    literParagraph.innerHTML = `<p>${numbersIpt.value} liters = ${literToGallon.toFixed(3)} gallons | ${numbersIpt.value} gallons = ${gallonToLiter.toFixed(3)} liters</p>`
}
function convKiloToPound(){
    const kiloParagraph = document.getElementById("kilo-paragraph")
    let kiloToPound = numbersIpt.value * pound
    let poundToKilo = numbersIpt.value * kilo
    kiloParagraph.innerHTML = `<p>${numbersIpt.value} kilos = ${kiloToPound.toFixed(3)} pounds | ${numbersIpt.value}  pounds = ${poundToKilo.toFixed(3)} kilos</p>`  
}
