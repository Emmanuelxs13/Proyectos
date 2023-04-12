import Buttons from "./buttons.js";
import { dataInterface } from "../interfaces.js";

export default class SettingButtons extends Buttons {
  private dataButtons: dataInterface;

  constructor(data: dataInterface) {
    super();
    this.dataButtons = data;
  }

  public settingButtons(): void {
    if (typeof this.dataButtons.next === "string") {
      this.$nextButton?.setAttribute("data-href", this.dataButtons.next);
      this.$nextButton?.removeAttribute("disabled");
    } else {
      this.$nextButton?.setAttribute("data-href", "#");
      this.$nextButton?.setAttribute("disabled", "disabled");
    }

    if (typeof this.dataButtons.previous === "string") {
      this.$previousButton?.setAttribute("data-href", this.dataButtons.previous);
      this.$previousButton?.removeAttribute("disabled");
    } else {
      this.$previousButton?.setAttribute("data-href", "#");
      this.$previousButton?.setAttribute("disabled", "disabled");
    }
  }
}
