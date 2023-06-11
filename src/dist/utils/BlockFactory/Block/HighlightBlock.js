import Block from "../Block";
import Schemes from "../BlockSchemes";

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
        const block = this.data.Block;
        const editable = this.newElement.querySelector("[contentEditable]");
        block.after(this.newElement);
        editable.focus();

        return {
            Block: this.newElement,
            Editable: editable,
            Type: "highlight",
            isDefault: false,
        };
    }

}
