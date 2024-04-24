// Mendapatkan elemen-elemen yang dibutuhkan dari HTML
const celciusInput = document.querySelector('.celcius-section textarea');
const fahrenheitInput = document.querySelector('.fahrenheit-section textarea');
const calculationTextarea = document.querySelector('.calculation-section textarea');
const convertButton = document.getElementById('convert-button');
const reverseButton = document.getElementById('reverse-button');
const resetButton = document.getElementById('reset-button');

// Event listener untuk button konversi dari Celcius ke Fahrenheit
convertButton.addEventListener('click', () => {
    const celcius = parseFloat(celciusInput.value);
    if (!isNaN(celcius)) {
        const fahrenheit = celcius * 9 / 5 + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        calculationTextarea.value = `${celcius}°C * 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
    }
});

// Event listener untuk button konversi dari Fahrenheit ke Celcius
reverseButton.addEventListener('click', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celcius = (fahrenheit - 32) * 5 / 9;
        celciusInput.value = celcius.toFixed(2);
        calculationTextarea.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
    }
});

// Event listener untuk button reset
resetButton.addEventListener('click', () => {
    celciusInput.value = '';
    fahrenheitInput.value = '';
    calculationTextarea.value = '';
});
