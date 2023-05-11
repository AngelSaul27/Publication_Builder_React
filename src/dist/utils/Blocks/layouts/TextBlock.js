import Block from "../Block";
import Schemes from "../Block_Schemes";

export default class TextBlock extends Block {
    data = {};
    newElement = "";
    schemes = new Schemes();

    constructor(props) {
        super(props);

        this.data = props;
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeText());
        this.clone.nodeRoot.setAttribute("type", "text");
        this.newElement = this.clone.node;
    }

    render() {
        const block = this.data.block;
        const editable = this.newElement.querySelector("[contentEditable]");
        block.after(this.newElement);
        editable.focus();

        return {
          block: this.newElement,
          editable: editable,
          type: "text",
          isDefault: false,
        };
    }
}
