const scrollTapBtn = () => {
    const scrollBtn = document.querySelector(".smooth-scroll");

    if (!scrollBtn) return;

    const firstSection = document.querySelector(".section");

    const isAfterFirstSection = () => {
        if (!firstSection) return window.scrollY > 0;

        const sectionBottom =
            firstSection.getBoundingClientRect().bottom + window.scrollY;
        return window.scrollY >= sectionBottom;
    };

    const visiableBtn = () => {
        isAfterFirstSection()
            ? (scrollBtn.style.display = "block")
            : (scrollBtn.style.display = "none");
    };

    window.addEventListener("scroll", visiableBtn);

    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    visiableBtn();
};

export default scrollTapBtn;
