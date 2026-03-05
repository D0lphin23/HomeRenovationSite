import slider from "./slider";

const services = () => {
    const sliderBlock = document.getElementById("services");
    const row = sliderBlock.querySelector(".row");
    const viewport = sliderBlock.querySelector(".services-inner");
    const sliderItems = sliderBlock.querySelectorAll(".col-md-12.col-lg-6");
    const prevBtn = sliderBlock.querySelector(".services__arrow--left");
    const nextBtn = sliderBlock.querySelector(".services__arrow--right");

    let step = window.innerWidth > 576 ? 2 : 1;

    const paramSlider = {
        container: sliderBlock,
        viewport,
        wrapper: row,
        items: Array.from(sliderItems),
        nextBtn,
        prevBtn,
        visibleCount: step,
        // timeInterval: 3000,
    };

    slider(paramSlider);
};

export default services;
