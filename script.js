
const scriptURL = 'https://script.google.com/macros/s/AKfycbzqQduBDsJSjSjV0ctqIbNnvFfCoHKa5f0B9r75MJIP/dev';
const form = document.getElementById('portfolio-form');
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
    // STOP the page from going to the top
    e.preventDefault(); 
    
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // Show success on the button itself
        btn.innerHTML = "Message Sent! ✓";
        btn.style.backgroundColor = "#28a745"; // Green for success
        
        // Reset form fields but STAY at the bottom of the page
        form.reset(); 

        setTimeout(() => {
            btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            btn.style.backgroundColor = "#ff004f"; // Back to your pink
            btn.disabled = false;
        }, 4000);
    })
    .catch(error => {
        console.error('Error!', error.message);
        btn.innerHTML = "Error! Try Again";
        btn.disabled = false;
    });
});