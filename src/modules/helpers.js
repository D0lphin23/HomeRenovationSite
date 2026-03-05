let animateId;

const animate = ({ duration, timing, draw }) => {
    let startTime = null;

    if (animateId) {
        cancelAnimationFrame(animateId);
    }

    const step = (time) => {
        if (!startTime) {
            startTime = time;
        }

        const progress = time - startTime;
        let percent = progress / duration;

        if (percent > 1) percent = 1;

        const value = timing(percent);

        draw(value);

        if (percent < 1) {
            animateId = requestAnimationFrame(step);
        }
    };

    animateId = requestAnimationFrame(step);
};

export { animate };
