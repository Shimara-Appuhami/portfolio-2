document.querySelector('form').addEventListener('submit',sendEmail);

function sendEmail(event) {
    event.preventDefault();

    var params = {
        user_name: document.getElementById("user_name").value,
        organization_name: document.getElementById("user_organization").value,
        message_content: document.getElementById("user_message").value,
        email_id: document.getElementById("user_email").value
    };

    emailjs.send('service_1ocos02', 'template_9k45ayn', params)
        .then(function (res) {
            alert("Success! Email sent with status: " + res.status);

            document.getElementById("email-form").reset();

        })
        .catch(function (error) {
            alert("Failed to send email: " + error.text);
        });
}
