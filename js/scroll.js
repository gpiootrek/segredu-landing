const margins = {
  "O aplikacji": -200,
  Pobierz: -80,
  Kontakt: -60,
  Partnerzy: -50,
  Segredu: 0,
  "": 0,
};

$(".nav-link, .branding").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top + margins[this.innerText],
      },
      600
    );
  }
});

// Revealing features in about section
const allFeatures = [
  ...document.querySelectorAll(".feature"),
  ...document.querySelectorAll(".feature-2"),
];

const revealFeature = function (entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;
    entry.target.classList.remove('feature-hidden');
    observer.unobserve(entry.target);
};

const featuresObserver = new IntersectionObserver(revealFeature, {
    root: null,
    threshold: 0.2
});

allFeatures.forEach((feature) => {
    featuresObserver.observe(feature);
    feature.classList.add('feature-hidden');
});
