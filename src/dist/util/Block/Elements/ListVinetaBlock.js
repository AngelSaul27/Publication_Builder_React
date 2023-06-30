import Block from "../Block";

class ListVinetaBlock extends Block {

    current = {};
    newBlock = {};

    constructor(props) {
        super(props);

        const self = this;
        self.current = props;
        self.model.root.appendChild(self.getSchemeListVinetada());
        self.model.root.setAttribute("type", "listDisc");
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
            type: "listDisc",
        };

        return data;
    }
}

export default ListVinetaBlock;