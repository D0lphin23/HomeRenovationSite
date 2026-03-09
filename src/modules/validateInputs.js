const validateInputs = () => {
    const fioInputs = document.querySelectorAll("input[name='fio']");
    const phoneInputs = document.querySelectorAll("input[name='phone']");
    const calcInputs = document.querySelectorAll("input[name='calc-input']");

    const regExpCyrillic = /[^а-яёa-z\s]/gi;
    const regExpTel = /[^0-9+]/g;
    const regExpCalc = /[^0-9]/g;

    const setValidation = (inputs, regex, maxLength) => {
        inputs.forEach((input) => {
            input.addEventListener("input", (e) => {
                let val = (e.target.value = e.target.value.replace(regex, ""));
                if (maxLength) val = val.slice(0, maxLength);
                e.target.value = val;
            });
        });
    };

    setValidation(fioInputs, regExpCyrillic);
    setValidation(phoneInputs, regExpTel, 16);
    setValidation(calcInputs, regExpCalc);
};

export default validateInputs;
