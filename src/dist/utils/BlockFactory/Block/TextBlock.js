import Block from "../Block";
import Schemes from "../BlockSchemes";

export default class TextBlock extends Block {

    currentData = {};
    newElement = "";
    schemes = new Schemes();

    constructor(props) {
        super(props);

        this.currentData = props;
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeText());
        this.clone.nodeRoot.setAttribute("type", "text");
        this.clone.nodeRoot.setAttribute("class", "text-white");
        this.newElement = this.clone.node;
    }

    render() {
        const block = this.currentData.Block;
        const editable = this.newElement.querySelector("[contentEditable]");
        block.after(this.newElement);
        editable.focus();

        return {
            Block: this.newElement,
            Editable: editable,
            isDefault: false,
            Type: "text",
        };
    }
}
