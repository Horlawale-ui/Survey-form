//Listen for form submit
document.getElementById('contact-form').addEventListener('submit', SubmitForm);

// Submit form
function SubmitForm(e) {
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    
    // Save message
    saveMessage(name, email, phone, message);
    
    // Show alert
    document.getElementById('alert-msg').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
       document.getElementById('alert-msg').style.display = 'none'; 
    }, 3000);
    
    // Clear form after submit
    document.getElementById('contact-form').reset();
}

// Function to get form values

