const certificateModal = () => {
    const serteficates = document.querySelectorAll(".sertificate-document");
    const overlay = document.querySelector(".overlay");

    if (!serteficates.length || !overlay) return;

    const modal = document.createElement("div");

    modal.id = "certificate-modal";
    modal.innerHTML = `
        <div class="cert-modal-content">
            <img class="cert-modal-img" src="" alt="">
        </div>
    `;

    overlay.appendChild(modal);

    const modalImg = modal.querySelector(".cert-modal-img");

    const setVisible = (visible, src = "") => {
        const value = visible ? "block" : "none";
        const classActive = "cert-modal-active";

        modalImg.src = src;
        visible
            ? modal.classList.add(classActive)
            : modal.classList.remove(classActive);
        overlay.style.display = value;
    };

    serteficates.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const imgSrc = link.getAttribute("href");

            setVisible(true, imgSrc);
        });
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) setVisible(false);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setVisible(false);
    });
};

export default certificateModal;
