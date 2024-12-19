// Select the input file element, image display area, textarea, and copy button
const fileInput = document.getElementById('fileInput');
const imageFile = document.getElementById('imageFile');
const base64Textarea = document.getElementById('base64Textarea');
const copyButton = document.querySelector('button');

// Function to handle the file upload and conversion
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        // When the file is successfully read
        reader.onload = function(e) {
            const base64String = e.target.result; // Get the Base64 string

            // Display the image in the image area
            imageFile.src = base64String;

            // Display the Base64 string in the textarea
            base64Textarea.value = base64String;
        };

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(file);
    }
});

// Function to copy the Base64 string to the clipboard
function copyImage() {
    base64Textarea.select();  // Select the textarea content
    base64Textarea.setSelectionRange(0, 99999);  // For mobile devices

    navigator.clipboard.writeText(base64Textarea.value).then(() => {
        alert('Base64 string copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy the text: ', err);
    });
}

// Add an event listener to the copy button to trigger the copy function
copyButton.addEventListener('click', copyImage);


