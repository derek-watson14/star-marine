(function gallery() {
    const images = document.querySelectorAll(".gallery__photos__img");
    const captions = document.querySelectorAll(".gallery__photos__cap");
    const indicators = document.querySelectorAll(".gallery__photos__marks__mark");
    const leftButton = document.querySelector(".gallery__photos__left-btn");
    const rightButton = document.querySelector(".gallery__photos__right-btn");

    let current = 0;
    const end = images.length - 1;

    (function firstIndicator(){
        indicators[current].className += " mark--active";
    })()

    function turnOff(){
        images[current].style.display = "none";
        captions[current].style.display = "none";
        indicators[current].className = "gallery__photos__marks__mark";
    }

    function turnOn(){
        images[current].style.display = "block";
        captions[current].style.display = "block";
        indicators[current].className += " mark--active";
    }

    leftButton.addEventListener("click", () => {
        if (current > 0) {
            turnOff();
            current--;
            turnOn();
        }
    });

    rightButton.addEventListener("click", () => {
        if (current < end) {
            turnOff();
            current++;
            turnOn();
        }
    });

    indicators.forEach((item, index) => {
        item.addEventListener("click", () => {
            turnOff();
            current = index;
            turnOn();
        })
    })
})();