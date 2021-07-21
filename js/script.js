window.onload = function () {
    document.addEventListener('click',documentActions);

    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth > 768) {
            if (targetElement.classList.contains('menu_arrow')) {
                targetElement.closest('.menu_item').classList.toggle("_hover")
            }
        }
    }
}

// window.addEventListener('scroll', showModalByScrol);
