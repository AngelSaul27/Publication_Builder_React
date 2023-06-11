import Block from "../Block";
import Schemes from "../BlockSchemes";

export default class HeadingBlock extends Block {

    currentData = {};
    newElement = {};
    schemes = new Schemes();

    constructor(props) {
        super(props);

        this.currentData = props;
        const level = props.Item.getAttribute("data-level");
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeHeading(level));
        this.clone.nodeRoot.setAttribute("type", "heading");
        this.newElement = this.clone.node;
    }

    render() {
        const block = this.currentData.Block;
        block.after(this.newElement);

        const editable = this.newElement.querySelector("[contentEditable]");
        editable.focus();

        return {
            Block: this.newElement,
            Editable: editable,
            isDefault: false,
            Type: "heading",
        };
    }

}