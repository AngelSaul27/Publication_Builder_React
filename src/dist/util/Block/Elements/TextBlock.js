import Block from "../Block.js";

class TextBlock extends Block {

    current = {};
    newBlock = {};

    constructor(props) {
        super(props);

        const self = this;
        self.current = props;
        self.model.root.appendChild(self.getSchemeText());
        self.model.root.setAttribute("type", "text");
        self.model.root.setAttribute("class", "text-white");
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
            type: "text",
        }

        return data;
    }
}

export default TextBlock;