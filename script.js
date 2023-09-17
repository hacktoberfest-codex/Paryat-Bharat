document.addEventListener('DOMContentLoaded', function () {
    const villageForm = document.querySelector('#villageForm'); // Assuming you have a form with the id "villageForm"

    villageForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting traditionally

        // Create a FormData object to collect form data
        const formData = new FormData(villageForm);

        // Send the form data to the server using a POST request
        fetch('/villages', { // Make sure this URL matches your server's endpoint
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Village registration was successful
                alert('Village registration successful!');
                // You can add more logic here, e.g., redirect to another page

                // Clear the form fields (optional)
                villageForm.reset();
            } else {
                // Village registration failed
                alert('Village registration failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while registering the village.');
        });
    });
});
