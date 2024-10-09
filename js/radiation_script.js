document.querySelectorAll('.hover-div').forEach(div => {
    let leaveTimeout; // Declare a variable to store the timeout

    div.addEventListener('mouseenter', function() {
        // Clear the timeout if mouse enters again before the 5 seconds pass
        clearTimeout(leaveTimeout);

        const message = this.getAttribute('data-message');
        document.getElementById('description-area').innerHTML = message;
    });

    div.addEventListener('mouseleave', function() {
        // Set a timeout to delay changing the text back by 5 seconds (5000 milliseconds)
        leaveTimeout = setTimeout(() => {
            document.getElementById('description-area').innerHTML = "Hover over an item to see the message here.";
        }, 5000);
    });
});
