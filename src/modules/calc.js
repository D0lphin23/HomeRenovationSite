import { animate } from "./helpers";

const calc = () => {
    const calcBlock = document.getElementById("calc");
    const calcType = document.getElementById("calc-type");
    const calcMaterial = document.getElementById("calc-type-material");
    const calcInput = document.getElementById("calc-input");
    const total = document.getElementById("calc-total");

    const duration = 500;

    const calcFunc = () => {
        const calcTypeValue = +calcType.value;
        const calcMaterialValue = +calcMaterial.value;
        const calcInputValue = +calcInput.value;

        if (calcTypeValue && calcMaterialValue && calcInputValue) {
            let totalValue = calcTypeValue * calcMaterialValue * calcInputValue;

            const startValue = +total.value;

            animate({
                duration,
                timing: (percent) => percent,
                draw: (progress) => {
                    const currentValue = Math.floor(
                        startValue + (totalValue - startValue) * progress,
                    );
                    total.value = currentValue;
                },
            });
        } else {
            total.value = "";
            return;
        }
    };
    if (calcBlock) {
        calcBlock.addEventListener("input", (e) => {
            if (
                e.target === calcType ||
                e.target === calcMaterial ||
                e.target === calcInput
            ) {
                calcFunc();
            }
        });
    }
};

export default calc;
