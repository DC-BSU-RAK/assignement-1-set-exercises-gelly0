// Wait for the page to load before running the script
window.onload = () => {
    // Select all input fields in the document
    const inputs = document.querySelectorAll("input");

    // Add an event listener to each input field to trigger the calculate function when the value changes
    inputs.forEach(input => {
        input.addEventListener('change', calculate);  // Trigger 'calculate' function on change
    });
}

// Function to calculate the total amount based on the petrol price and liters purchased
function calculate () {
    // Get the value of the Petrol Price and Liters input fields
    const Petrol_Price = document.querySelector('#Petrol_Price').value;
    const liters = document.querySelector('#liters').value;

    // If either input is empty, exit the function early to prevent calculation
    if (!Petrol_Price || !liters) return;

    // Calculate and display the total amount in the element with id 'totalAmount'
    document.querySelector('#totalAmount').innerText = Petrol_Price * liters;
}