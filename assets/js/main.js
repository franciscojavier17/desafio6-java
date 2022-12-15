const convertButton = document.querySelector("#convertButton");
const canvasChart = document.querySelector("#canvasChart");
const errorSpan = document.querySelector("#errorSpan");
let myChart;

convertButton.addEventListener("click", () => {
    try {
        const clpAmount = document.querySelector("#clpAmount").value;
        if (clpAmount === "") throw "No se ha agregado ningún monto a convertir.";
        else if (clpAmount <= 0 || isNaN(clpAmount))
        throw  "Se ha ingresado uno de los siguientes valores: -Números negativos / -'0' / -letras y/o símbolos";
        const moneyChange = document.querySelector("#moneyChange").value;
        const moneyPlural = document.querySelector(
        `#plural${moneyChange}`
        ).className;
        if (moneyPlural === "") {
        convert(clpAmount, moneyChange);
        } else {
        convert(clpAmount, moneyChange, moneyPlural);
    }
    } catch (error) {
        result.innerHTML = "";
        errorSpan.innerHTML = "ERROR: " + error;
        if (myChart) {
        myChart.destroy();
    }
    }
});