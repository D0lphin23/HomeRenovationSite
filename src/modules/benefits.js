import slider from "./slider";

const benefits = () => {
    const sliderBlock = document.getElementById("benefits");
    const wrapper = sliderBlock.querySelector(".benefits-wrap");
    const viewport = sliderBlock.querySelector(".benefits-inner");
    const sliderItems = sliderBlock.querySelectorAll(".benefits__item");
    const prevBtn = sliderBlock.querySelector(".benefits__arrow--left");
    const nextBtn = sliderBlock.querySelector(".benefits__arrow--right");

    let step = window.innerWidth > 576 ? 3 : 1;

    // viewport.style.overflow = "hidden";
    // wrapper.style.display = "flex";
    // wrapper.style.transition = "transform 0.5s";
    // viewport.style.width = "30%";

    const paramSlider = {
        container: sliderBlock,
        wrapper,
        items: Array.from(sliderItems),
        nextBtn,
        prevBtn,
        visibleCount: step,
        timeInterval: 5000,
    };

    slider(paramSlider);
};

export default benefits;
