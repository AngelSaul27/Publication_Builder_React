import Block from "../Block";

class ListNumBlock extends Block {

    current = {};
    newBlock = {};

    constructor(props) {
        super(props);

        const self = this;
        self.current = props;
        self.model.root.appendChild(self.getSchemeListNumerada(props.block));
        self.model.root.setAttribute("type", "listDecimal");
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
          type: "listDecimal",
        };

        return data;
    }
}

export default ListNumBlock;