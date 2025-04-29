document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    function transitionCards() {
        // Remove active class from all cards
        cards.forEach(card => card.classList.remove('active'));
        
        // Add active class to current card
        cards[currentIndex].classList.add('active');
        
        // Increment index, loop back to 0 if at end
        currentIndex = (currentIndex + 1) % cards.length;
    }

    // Initial transition
    transitionCards();

    // Set interval for automatic transitions
    setInterval(transitionCards, 2000); // Change card every 2 seconds
});