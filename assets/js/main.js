const callback = () => {
    if (document.querySelectorAll(".display-toggler")) {
        let displayTogglers = document.querySelectorAll(".display-toggler");
        let displayImages = document.querySelectorAll(".display-image");
        let prevToggler = displayTogglers[0];
        let prevImages = displayImages[0];
        for (let index = 0; index < displayTogglers.length; index++) {
            displayTogglers[index].addEventListener('click', () => {
                if (prevToggler) {
                    prevToggler.classList.remove("btn-primary")
                    prevToggler.classList.add("btn-secondary")
                    prevImages.classList.add("d-none")
                }
                displayTogglers[index].classList.add("btn-primary")
                displayTogglers[index].classList.remove("btn-secondary")
                displayImages[index].classList.remove("d-none")
                prevToggler = displayTogglers[index];
                prevImages = displayImages[index];
            })
        }
    }
}

document.addEventListener('DOMContentLoaded', callback())