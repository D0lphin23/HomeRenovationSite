const callBackModal = () => {
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".header-modal");
    const callBackButton = document.querySelector(".button");
    const closeButton = document.querySelector(".header-modal__close");

    if (!overlay || !modal || !callBackButton) return;

    const setVisible = (visible) => {
        const value = visible ? "block" : "none";
        modal.style.display = value;
        overlay.style.display = value;
    };

    callBackButton.addEventListener("click", () => setVisible(true));
    overlay.addEventListener("click", () => setVisible(false));
    if (closeButton) closeButton.addEventListener("click", () => setVisible(false));
};

export default callBackModal;
