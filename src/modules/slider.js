const slider = ({
    container,
    wrapper,
    items,
    visibleCount = 1,
    timeInterval = 3000,
    nextBtn = null,
    prevBtn = null,
}) => {
    console.log(container);
    console.log(wrapper);
    console.log(items);
    console.log(visibleCount);
    console.log(timeInterval);
    console.log(nextBtn);
    console.log(prevBtn);

    let isAnimating = false;

    const itemWidth = 100 / visibleCount;

    items.forEach((item) => {
        item.style.flex = `0 0 ${itemWidth}%`;
    });

    const moveNext = () => {
        if (isAnimating) return;
        isAnimating = true;

        wrapper.style.transform = `translateX(-${itemWidth}%)`;

        wrapper.addEventListener("transitionend", function handler() {
            wrapper.appendChild(wrapper.firstElementChild);
            wrapper.style.transition = "none";
            wrapper.style.transform = "translateX(0)";

            void wrapper.offsetWidth; // перерисовка

            wrapper.style.transition = "transform 0.5s ease";
            wrapper.removeEventListener("transitionend", handler);
            isAnimating = false;
        });
    };

    const movePrev = () => {
        if (isAnimating) return;
        isAnimating = true;

        wrapper.style.transition = "none";
        wrapper.insertBefore(
            wrapper.lastElementChild,
            wrapper.firstElementChild,
        );
        wrapper.style.transform = `translateX(-${itemWidth}%)`;

        void wrapper.offsetWidth;

        wrapper.style.transition = "transform 0.5s ease";
        wrapper.style.transform = "translateX(0)";

        wrapper.addEventListener("transitionend", function handler() {
            wrapper.removeEventListener("transitionend", handler);
            isAnimating = false;
        });
    };

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);

    // let currentIndex = 0;
    // let interval;

    // items.forEach((item) => {
    //     item.style.flex = `0 0 ${100 / items.length}%`;
    // });

    // const moveSlider = () => {
    //     const offset = currentIndex * (100 / (items.length / visibleCount));
    //     wrapper.style.transform = `translateX(-${offset}%)`;
    // };

    // nextBtn.addEventListener("click", () => {
    //     if (currentIndex < items.length - visibleCount) {
    //         currentIndex++;
    //     } else {
    //         currentIndex = 0;
    //     }

    //     moveSlider();
    // });

    // prevBtn.addEventListener("click", () => {
    //     if (currentIndex > 0) {
    //         currentIndex--;
    //     } else {
    //         currentIndex = items.length - visibleCount;
    //     }

    //     moveSlider();
    // });

    // const startAutoSlide = () => {
    //     interval = setInterval(() => {
    //         nextBtn.click();
    //     }, timeInterval);
    // };

    // startAutoSlide();
};

export default slider;
