

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 1000,
});
ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
});
ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});
ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});
ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500,
});
ScrollReveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 5000,
});
ScrollReveal().reveal(".container .next", {
    duration: 1000,
    delay: 5500,
});
ScrollReveal().reveal(".container p", {
    duration: 1000,
    interval: 500,
    delay: 3000,
});
ScrollReveal().reveal(".container .feature-1", {
    duration: 1000,
    interval: 500,
    delay: 3000,
});
ScrollReveal().reveal(".container .img-1", {
    duration: 1000,
    
    delay: 3000,
});
ScrollReveal().reveal(".container .img-2", {
    duration: 1000,
    
    delay: 4000,
});
ScrollReveal().reveal(".container .img-3", {
    duration: 1000,
    
    delay: 3500,
});
ScrollReveal().reveal(".container .img-4", {
    duration: 1000,
    
    delay: 4500,
});
ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 7000,
});
ScrollReveal().reveal(".nav__links", {
    ...scrollRevealOption,
    origin: "top",
    // duration: 2000,
    // interval: 200,
    delay: 2000,
});
ScrollReveal().reveal(".header__circlee", {
    ...scrollRevealOption,
    origin: "right",
    delay: 4000,
});
ScrollReveal().reveal(".header__circle", {
    ...scrollRevealOption,
    origin: "left",
    delay: 3000,
});