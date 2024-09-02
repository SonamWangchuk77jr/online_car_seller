document.getElementById('searchBtn').addEventListener('click', function() {
    const carModel = document.getElementById('carModel').value.trim();
    const location = document.getElementById('location').value.trim();

    let isValid = true;

    // Validate car model
    if (!carModel) {
        document.getElementById('carModelError').style.display = 'block';
        document.getElementById('carModelError').textContent = 'Please enter a car model';
        isValid = false;
    } else {
        document.getElementById('carModelError').style.display = 'none';
    }

    // Validate location
    if (!location) {
        document.getElementById('locationError').style.display = 'block';
        document.getElementById('locationError').textContent = 'Please enter a location';
        isValid = false;
    } else {
        document.getElementById('locationError').style.display = 'none';
    }
});
