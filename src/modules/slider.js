const slider = ({
    container,
    viewport,
    wrapper,
    items,
    visibleCount = 1,
    timeInterval,
    nextBtn = null,
    prevBtn = null,
}) => {
    const vp = viewport || wrapper.parentElement;

    vp.style.overflow = "hidden";
    wrapper.style.display = "flex";
    let isAnimating = false;
    let interval;

    const getItemWidth = () => vp.offsetWidth / visibleCount;

    const setItemWidths = () => {
        const itemWidth = getItemWidth();
        items.forEach((item) => {
            item.style.flex = `0 0 ${itemWidth}px`;
            item.style.maxWidth = `${itemWidth}px`;
        });
        wrapper.style.width = `${items.length * itemWidth}px`;
        wrapper.style.transform = "translateX(0)";
    };

    setItemWidths();

    const snapTo = (px) => {
        wrapper.style.transition = "none";
        wrapper.style.transform = `translateX(${px}px)`;
        void wrapper.offsetWidth;
        wrapper.style.transition = "transform 0.5s ease";
    };

    const moveNext = () => {
        if (isAnimating) return;
        isAnimating = true;

        const itemWidth = getItemWidth();
        wrapper.style.transition = "transform 0.5s ease";
        wrapper.style.transform = `translateX(-${itemWidth}px)`;

        wrapper.addEventListener("transitionend", function handler() {
            wrapper.removeEventListener("transitionend", handler);
            wrapper.appendChild(wrapper.firstElementChild);
            snapTo(0);
            isAnimating = false;
        });
    };

    const movePrev = () => {
        if (isAnimating) return;
        isAnimating = true;

        const itemWidth = getItemWidth();
        wrapper.insertBefore(
            wrapper.lastElementChild,
            wrapper.firstElementChild,
        );
        snapTo(-itemWidth);
        wrapper.style.transform = "translateX(0)";

        wrapper.addEventListener("transitionend", function handler() {
            wrapper.removeEventListener("transitionend", handler);
            isAnimating = false;
        });
    };

    if (nextBtn) nextBtn.addEventListener("click", moveNext);
    if (prevBtn) prevBtn.addEventListener("click", movePrev);

    if (timeInterval) {
        const startAutoSlide = () => {
            interval = setInterval(moveNext, timeInterval);
        };

        const stopAutoSlide = () => {
            clearInterval(interval);
        };

        if (container) {
            container.addEventListener("mouseenter", stopAutoSlide);
            container.addEventListener("mouseleave", startAutoSlide);
        }

        startAutoSlide();
    }

    window.addEventListener("resize", setItemWidths);
};

export default slider;
