const sendForm = ({ formId, someElem }) => {
    const form = document.getElementById(formId);

    console.log(form);

    const validateInput = (input) => {
        console.log(input);

        if (input.value.trim() === "") {
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    };

    const removeErrorClass = (input) => {
        input.addEventListener("input", (e) => {
            let val = e.target.value.trim();

            if (e.target.closest(".error") && val) {
                e.target.classList.remove("error");
            }
        });
    };

    const closeModal = (form) => {
        const overlay = document.querySelector(".overlay");
        const modal = form.closest(".header-modal, .services-modal");

        if (!overlay || !modal) return;

        modal.style.display = "none";
        overlay.style.display = "none";
    };

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }
            return res.json();
        });
    };

    const submitForm = () => {
        const inputs = form.querySelectorAll(
            "input:not([type='hidden']):not([disabled])",
        );

        inputs.forEach((input) => validateInput(input));

        const allValid = Array.from(inputs).every(
            (input) => !input.classList.contains("error"),
        );

        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);

            if (element) {
                if (elem.type === "block") {
                    formBody[elem.id] = element.textContent;
                } else if (elem.type === "input") {
                    formBody[elem.id] = element.value;
                }
            }
        });

        if (allValid) {
            sendData(formBody)
                .then((data) => {
                    inputs.forEach((input) => {
                        input.value = "";
                    });

                    alert(
                        "Спасибо за заявку! Мы свяжемся с вами в ближайшее время.",
                    );

                    closeModal(form);
                })
                .catch((err) => {
                    console.error("Error sending form data:", err);
                    alert(
                        "Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.",
                    );
                });
        } else {
            {
                alert(
                    "Поля ввода не должны быть пустыми, пожалуйста, заполните все поля корректно.",
                );
            }
        }
    };

    try {
        if (!form) {
            throw new Error(`Верните форму отправки на место, пожалуйста!`);
        }

        const inputs = form.querySelectorAll(
            "input:not([type='hidden']):not([disabled])",
        );
        inputs.forEach((input) => removeErrorClass(input));

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            submitForm();
        });
    } catch (e) {
        console.error(e.message);
    }
};

export default sendForm;
