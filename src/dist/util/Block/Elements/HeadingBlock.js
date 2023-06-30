import Block from "../Block.js";

class HeadingBlock extends Block {

    current = {};
    newBlock = {};

    constructor(props) {
        super(props);

        const self = this;
        const level = props.item.getAttribute("data-level");

        self.current = props;
        self.model.root.appendChild(self.getSchemeHeading(level));
        self.model.root.setAttribute("type", "heading");
        self.newBlock = self.model.block;
    }

    execute() {
        const self = this;
        const current = self.current.block;        
        const editable = self.newBlock.querySelector("[contentEditable]");
        
        current.after(self.newBlock);
        editable.focus();

        const data = {
            block: self.newBlock,
            editable: editable,
            type: "heading",
        };

        return data;
    }

}
export default HeadingBlock;