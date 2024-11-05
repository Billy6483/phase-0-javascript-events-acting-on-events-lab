const dodger = document.getElementById('dodger');

dodger.style.background = '#FF69B4'; 
dodger.style.bottom = '100px';
dodger.style.left = '0px'; // Set an initial left position if not set in CSS

// Move dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) { // Ensure the dodger doesn't move out of bounds
        dodger.style.left = `${left - 1}px`;
    }
}

// Move dodger right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left < 360) { // Adjust this value to keep within container width
        dodger.style.left = `${left + 1}px`;
    }
}

// Event listeners for left and right arrow keys
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});
