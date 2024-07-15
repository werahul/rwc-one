document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".section");

    function activateTab(target) {
        tabs.forEach(tab => {
            if (tab.dataset.target === target) {
                tab.classList.add("active");
                document.querySelector(`.${target}`).classList.add("active");
            } else {
                tab.classList.remove("active");
                document.querySelector(`.${tab.dataset.target}`).classList.remove("active");
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            activateTab(tab.dataset.target);
        });
    });

    // Initialize the first tab as active
    activateTab(tabs[0].dataset.target);
});
