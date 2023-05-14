import Block from "../Block";
import Schemes from "../Block_Schemes";

export default class HighlightBlock extends Block {
    data = {};
    newElement = "";
    schemes = new Schemes();

    constructor(props) {
        super(props);

        this.data = props;
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeHighlight());
        this.clone.nodeRoot.setAttribute("type", "highlight");
        this.clone.nodeRoot.setAttribute("class", "py-2 text-white font-light");
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
          type: "highlight",
          isDefault: false,
        };
    }

}
