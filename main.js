const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Corrected method name

    const weight = parseFloat(document.querySelector('[name="weight"]').value); // Changed parseInt to parseFloat to handle decimal values
    const height = parseFloat(document.querySelector('[name="height"]').value); // Changed parseInt to parseFloat to handle decimal values

    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10)).toFixed(2); // Calculate BMI
        result.innerHTML = `<span>${bmi}</span>`; // Display BMI result
    }
});
