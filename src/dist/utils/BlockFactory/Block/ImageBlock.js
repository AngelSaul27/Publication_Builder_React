import Block from "../Block";
import Schemes from "../BlockSchemes";

export default class ImageBlock extends Block {
    
    data = {};
    newElement = "";
    schemes = new Schemes();

    constructor(props) {
        super(props);

        this.data = props;
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeImage(props.Src));
        this.clone.nodeRoot.setAttribute("class", "overflow-hidden");
        this.clone.nodeRoot.setAttribute("type", "image");
        this.newElement = this.clone.node;
    }

    render() {
        const block = this.data.Block;
        const editable = this.newElement.querySelector("[contentEditable]");
        block.after(this.newElement);

        return {
            Block: this.newElement,
            Editable: editable,
            Type: "image",
            isDefault: false,
        };
    }
}