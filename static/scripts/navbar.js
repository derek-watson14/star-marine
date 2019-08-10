(function navTransform() {
    const navContainer = document.querySelector(".nav-links");
    const menuButton = document.querySelector(".nav-links__menu-btn");

    function displayMenu() {
        if (navContainer.className === 'nav-links') navContainer.className += ' responsive';
        else navContainer.className = 'nav-links';
    }

    function transformButton() {
        menuButton.classList.toggle("change");
    }

    menuButton.addEventListener("click", () => {
        displayMenu(); 
        transformButton();
    });
})();