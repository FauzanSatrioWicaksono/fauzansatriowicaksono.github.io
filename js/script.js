function konversi() {
    var inputField = document.getElementById("input-field-celsius");
    var inputValue = parseFloat(inputField.value);
    var result = document.getElementById("hasil-form");
    var calculation = document.getElementById("celsius-calculation");

    if (!isNaN(inputValue)) {
        var fahrenheit = (inputValue * 9/5) + 32;
        result.innerHTML = `
            <label for="hasil-fahrenheit">Hasil Konversi:</label>
            <input type="number" id="hasil-fahrenheit" value="${fahrenheit.toFixed(2)}" readonly>
        `;
        calculation.innerText = `Cara kalkulasi: (${inputValue} × 9/5) + 32`;
    } else {
        result.innerHTML = '';
        calculation.innerText = '';
    }
}

function konversiFahrenheit() {
    var inputField = document.getElementById("input-field-fahrenheit");
    var inputValue = parseFloat(inputField.value);
    var result = document.getElementById("hasil-form-fahrenheit");
    var calculation = document.getElementById("fahrenheit-calculation");

    if (!isNaN(inputValue)) {
        var celcius = (inputValue - 32) * 5/9;
        result.innerHTML = `
            <label for="hasil-celcius">Hasil Konversi:</label>
            <input type="number" id="hasil-celcius" value="${celcius.toFixed(2)}" readonly>
        `;
        calculation.innerText = `Cara kalkulasi: (${inputValue} - 32) × 5/9`;
    } else {
        result.innerHTML = '';
        calculation.innerText = '';
    }
}

function resetForm(inputId, resultId, explanationId) {
    document.getElementById(inputId).value = '';
    document.getElementById(resultId).innerHTML = '';
    document.getElementById(explanationId).innerText = '';
}