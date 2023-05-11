import Block from "../Block";
import Schemes from "../Block_Schemes";

export default class HeadingBlock extends Block {

    currentData = {};
    newElement = {};
    schemes = new Schemes();

    constructor(props) {
        super(props);

        this.currentData = props;
        const level = props.item.getAttribute("data-level");
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeHeading(level));
        this.newElement = this.clone.node;
    }

    render() {
        const block = this.currentData.block;
        block.after(this.newElement);

        const editable = this.newElement.querySelector("[contentEditable]");
        editable.focus();

        return {
          block: this.newElement,
          editable: editable,
          isDefault: false,
          type: "text",
        };
    }

}