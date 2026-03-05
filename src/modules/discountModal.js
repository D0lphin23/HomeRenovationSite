const discountModal = () => {
  const discountModals = document.querySelectorAll(".order-inner.row");

  discountModals.forEach((modal) => {
    const nameInput = modal.querySelector("input[name='fio']");
    const phoneInput = modal.querySelector("input[name='phone']");
    const button = modal.querySelector(".btn.btn-warning.btn-block.feedback");

    const validateInput = (input) => {
      let validate = false;

      if (input.value.trim() === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
        validate = true;
      }

      return validate;
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

      const nameValid = validateInput(nameInput);
      const phoneValid = validateInput(phoneInput);

      if (!nameValid || !phoneValid) return;

      const form = modal.querySelector("form");

      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((val, key) => {
        formBody[key] = val;
      });

      console.log(formBody);

      alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
      form.reset();
    });
  });
};

export default discountModal;
