document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    let currentIndex = 0;
    const rotationInterval = 5000; // 5 seconds

    function updateCards() {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        const offset = -currentIndex * 320; // 320px is the width of each card + margin
        document.querySelector('.card-container').style.transform = `translateX(${offset}px)`;
    }

    function rotateCards() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCards();
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCards();
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCards();
    }

    setInterval(rotateCards, rotationInterval);

    // Set initial state
    updateCards();

    // Expose functions for manual control
    window.prevCard = prevCard;
    window.nextCard = nextCard;
});
