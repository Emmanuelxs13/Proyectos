import Buttons from "./buttons.js";
export default class SettingButtons extends Buttons {
    constructor(data) {
        super();
        this.dataButtons = data;
    }
    settingButtons() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (typeof this.dataButtons.next === "string") {
            (_a = this.$nextButton) === null || _a === void 0 ? void 0 : _a.setAttribute("data-href", this.dataButtons.next);
            (_b = this.$nextButton) === null || _b === void 0 ? void 0 : _b.removeAttribute("disabled");
        }
        else {
            (_c = this.$nextButton) === null || _c === void 0 ? void 0 : _c.setAttribute("data-href", "#");
            (_d = this.$nextButton) === null || _d === void 0 ? void 0 : _d.setAttribute("disabled", "disabled");
        }
        if (typeof this.dataButtons.previous === "string") {
            (_e = this.$previousButton) === null || _e === void 0 ? void 0 : _e.setAttribute("data-href", this.dataButtons.previous);
            (_f = this.$previousButton) === null || _f === void 0 ? void 0 : _f.removeAttribute("disabled");
        }
        else {
            (_g = this.$previousButton) === null || _g === void 0 ? void 0 : _g.setAttribute("data-href", "#");
            (_h = this.$previousButton) === null || _h === void 0 ? void 0 : _h.setAttribute("disabled", "disabled");
        }
    }
}
