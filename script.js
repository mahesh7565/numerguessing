function processHW() {
    // Get values from the form
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    // Check if input values are valid
    if (height <= 0 || weight <= 0) {
        document.getElementById('output').textContent = 'Please enter valid height and weight!';
    } else {
        // Display height and weight
        document.getElementById('output').textContent = 'Height: ' + height + ' cm, Weight: ' + weight + ' kg';
    }
}