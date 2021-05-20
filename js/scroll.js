const margins = {
    "O aplikacji": -200,
    "Pobierz": -80,
    "Kontakt": -60,
    "Partnerzy": -50,
    "Segredu": 0,
    "": 0
}

$('.nav-link, .branding').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top + margins[this.innerText]
        }, 600);
    }
});