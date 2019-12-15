const boatCards = document.querySelectorAll('.boat-card');

function focusCard(target) {
    boatCards.forEach(card => {
        if (card.id === target.id) card.classList.add('bc--inView');
        else card.classList.remove('bc--inView');
    })
}

boatCards.forEach(card => {
    const ob = new IntersectionObserver(payload => {
        if (payload[0].isIntersecting) focusCard(card);
    }, { threshold: 0.75 })
    ob.observe(card);
});