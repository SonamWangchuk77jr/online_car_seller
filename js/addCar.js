// add car validation 
document.getElementById('addCarBtn').addEventListener('click', function() {
    const carMake = document.getElementById('carMake').value.trim();
    const carModel = document.getElementById('carModel').value.trim();
    const carYear = document.getElementById('carYear').value.trim();
    const carMileage = document.getElementById('carMileage').value.trim();
    const carLocation = document.getElementById('carLocation').value.trim();
    const carPrice = document.getElementById('carPrice').value.trim();

    let isValid = true;

    if (!carMake) {
        document.getElementById('carMakeError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('carMakeError').style.display = 'none';
    }

    if (!carModel) {
        document.getElementById('carModelError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('carModelError').style.display = 'none';
    }

    if (!carYear) {
        document.getElementById('carYearError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('carYearError').style.display = 'none';
    }

    if (!carMileage) {
        document.getElementById('carMileageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('carMileageError').style.display = 'none';
    }

    if (!carLocation) {
        document.getElementById('carLocationError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('carLocationError').style.display = 'none';
    }

    if (!carPrice) {
        document.getElementById('carPriceError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('carPriceError').style.display = 'none';
    }

    if (isValid) {
        alert('Car added successfully!');
    }
});
