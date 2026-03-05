const discountModal = () => {
    const discountModals = document.querySelectorAll(".order-inner.row");

    console.log(discountModals);

    discountModals.forEach((modal) => {
        const nameInput = modal.querySelector("input[name='fio']");
        const phoneInput = modal.querySelector("input[name='phone']");
        const button = modal.querySelector(
            ".btn.btn-warning.btn-block.feedback",
        );
        console.log(nameInput);
        console.log(phoneInput);
        console.log(button);

        const validateInput = (input) => {
            input.value.trim() === ""
                ? input.classList.add("error")
                : input.classList.remove("error");
        };

        const removeErrorClass = (input) => {
            input.addEventListener("input", (e) => {
                let val = e.target.value.trim();

                if (e.target.closest(".error") && val) {
                    e.target.classList.remove("error");
                }
            });
        };

        removeErrorClass(nameInput);
        removeErrorClass(phoneInput);

        button.addEventListener("click", (e) => {
            e.preventDefault();

            validateInput(nameInput);
            validateInput(phoneInput);
        });
    });
};

export default discountModal;
