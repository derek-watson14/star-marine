class Cards {
    constructor(className = 'boat-card') {
        const rawList = document.querySelectorAll(`.${className}`);
        const cardInfo = [];
        rawList.forEach(function(card) {
            cardInfo.push({
                name: card.id,
                classes: card.classList,
                bottom: Math.round(window.scrollY + card.getBoundingClientRect().bottom)
            });
        });
        this.cards = cardInfo;
    }
};

let cards = new Cards();

window.addEventListener('resize', () => { cards = new Cards(); }),

window.addEventListener("scroll", function changeCards() {
    function focusCurrent(focusedBoat) {
        cards.cards.forEach(boat => {
            if (boat.name === focusedBoat) boat.classes.toggle('bc--inView', true);
            else boat.classes.toggle('bc--inView', false);
        });
    };

    function atBottom() {
        const windowBottom = Math.round(document.body.offsetHeight);
        const scrollBottom = Math.round(window.innerHeight + window.scrollY);
        return windowBottom - scrollBottom < 1 ? true : false;
    };

    function determineFocus() {
        const windowCenter = Math.round(window.scrollY + (window.innerHeight / 2));
        
        for (let c of cards.cards) {
            if (c.bottom >= windowCenter) {
                focusCurrent(c.name);
                break;
            }
        }
    }

    (function testPosition() {
        if (atBottom()) focusCurrent(cards.cards[cards.cards.length - 1].name);
        else determineFocus();
    })();
})