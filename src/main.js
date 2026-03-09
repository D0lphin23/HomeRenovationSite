import callBackModal from "./modules/callBackModal";
import callMasterModal from "./modules/callMasterModal";
import benefits from "./modules/benefits";
import services from "./modules/services";
import timer from "./modules/timer";
import validateInputs from "./modules/validateInputs";
import certificateModal from "./modules/certificateModal";
import scrollTapBtn from "./modules/scrollTapBtn";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

callBackModal();
benefits();
services();
callMasterModal();
timer("09 March 2026");
validateInputs();
certificateModal();
scrollTapBtn();
calc();

["form1", "form2", "form3", "form4"].forEach((id) => {
    sendForm({
        formId: id,
        someElem: [
            {
                type: "input",
                id: "calc-total",
            },
        ],
    });
});
