import Block from "../Block";
import Schemes from "../Block_Schemes";

export default class ListViñetaBlock extends Block {

    currentData = {};
    newElement = {};
    schemes = new Schemes();

    constructor(props) {
        super(props);

        this.currentData = props;
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeHeading());
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
