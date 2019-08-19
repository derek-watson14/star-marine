(function gallery() {
    const images = document.querySelectorAll(".gallery__photos__img");
    const captions = document.querySelectorAll(".gallery__photos__cap");
    const indicators = document.querySelectorAll(".gallery__photos__marks__mark");
    const leftButton = document.querySelector(".gallery__photos__left-btn");
    const rightButton = document.querySelector(".gallery__photos__right-btn");

    let currentImg = 0;
    const firstImg = 0;
    const lastImg = images.length - 1;

    function turnOn(){
        images[currentImg].style.display = "block";
        captions[currentImg].style.display = "block";
        indicators[currentImg].classList.toggle("mark--active", true);
    };

    function turnOff(){
        images[currentImg].style.display = "none";
        captions[currentImg].style.display = "none";
        indicators[currentImg].classList.toggle("mark--active", false);
    };

    turnOn();

    leftButton.addEventListener("click", () => {
        if (currentImg > firstImg) {
            turnOff();
            currentImg--;
            turnOn();
        }
    });

    rightButton.addEventListener("click", () => {
        if (currentImg < lastImg) {
            turnOff();
            currentImg++;
            turnOn();
        }
    });

    indicators.forEach((item, index) => {
        item.addEventListener("click", () => {
            turnOff();
            currentImg = index;
            turnOn();
        })
    })
})();