import Block from "../Block";

class DividerBlock extends Block {

    current = {};
    newBlock = {};

    constructor(props) {
        super(props);

        const self = this;
        self.current = props;
        self.model.root.appendChild(self.getSchemeDivider());
        self.model.root.setAttribute("class", "text-white h-[30px]");
        self.model.root.setAttribute("type", "divider");
        self.newBlock = self.model.block;
    }

    execute() {
        const self = this;
        const current = self.current.block;
        const editable = self.newBlock.querySelector("[contentEditable]");
        
        current.after(self.newBlock);
        
        const data = {
            block: self.newBlock,
            editable: editable,
            type: "divider",
        };

        return data;
    }

}

export default DividerBlock;