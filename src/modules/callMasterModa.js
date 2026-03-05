const callMasterModa = () => {
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".services-modal");
    const buttons = document.querySelectorAll(".service-button");
    const closeButton = document.querySelector(".services-modal__close");

    if (!overlay || !modal || !buttons.length) return;

    const setVisible = (visible) => {
        const value = visible ? "block" : "none";
        modal.style.display = value;
        overlay.style.display = value;
    };

    buttons.forEach((button) =>
        button.addEventListener("click", () => setVisible(true)),
    );

    overlay.addEventListener("click", () => setVisible(false));
    if (closeButton)
        closeButton.addEventListener("click", () => setVisible(false));
};

export default callMasterModa;
