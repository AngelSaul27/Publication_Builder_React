import Block from "../Block";
import Schemes from "../BlockSchemes";

export default class DividerBlock extends Block {
    data = {};
    newElement = "";
    schemes = new Schemes();

    constructor(props) {
        super(props);

        this.data = props;
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeDivider());
        this.clone.nodeRoot.setAttribute("class", "text-white h-[30px]");
        this.clone.nodeRoot.setAttribute("type", "divider");
        this.newElement = this.clone.node;
    }

    render() {
        const block = this.data.Block;
        const editable = this.newElement.querySelector("[contentEditable]");
        block.after(this.newElement);
        
        return {
            Block: this.newElement,
            Editable: editable,
            Type: "divider",
            isDefault: false,
        };
    }
}
