import Block from "../Block";

class HighlightBlock extends Block {

    current = {};
    newBlock = {};

    constructor(props) {
        super(props);

        const self = this;
        self.current = props;
        self.model.root.appendChild(self.getSchemeHighlight());
        self.model.root.setAttribute("type", "highlight");
        self.model.root.setAttribute("class", "py-2 text-white font-light");
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
            type: "highlight",
        };

        return data;
    }

}

export default HighlightBlock;