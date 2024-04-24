// Get the form element
const form = document.getElementById('formID');

// Get the input fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email1');
const phNumberInput = document.getElementById('phnumber');
const messageInput = document.getElementById('message');

// Function to validate email address
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate phone number
function validatePhoneNumber(phNumber) {
    const re = /^[6-9]\d{9}$/;
    return re.test(phNumber);
}

// Function to validate the form before submission
function validateForm(event) {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phNumberValue = phNumberInput.value.trim();
    const messageValue = messageInput.value.trim();

    const isNameValid = nameValue !== '';
    const isEmailValid = validateEmail(emailValue);
    const isPhNumberValid = validatePhoneNumber(phNumberValue);
    const isMessageValid = messageValue !== '';

    const isFormValid = isNameValid && isEmailValid && isPhNumberValid && isMessageValid;

    if (!isFormValid) {
        alert('Please fill in all fields before submitting.');
        event.preventDefault(); // Prevent form submission
    } else {
        // Additional validation (e.g., server-side validation)

        // Clear form entries
        nameInput.value = '';
        emailInput.value = '';
        phNumberInput.value = '';
        messageInput.value = '';

        // Refresh the page
        location.reload();
    }
}

// Event listener for form submission
form.addEventListener('submit', validateForm);
