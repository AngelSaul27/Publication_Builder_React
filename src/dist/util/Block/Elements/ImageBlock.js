import Block from "../Block";

class ImageBlock extends Block {
    
    current = {};
    newBlock = {};

    constructor(props) {
        super(props);

        const self = this;
        self.current = props;
        self.model.root.appendChild(self.getSchemeImage(props.src));
        self.model.root.setAttribute("class", "overflow-hidden");
        self.model.root.setAttribute("type", "image");
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
            type: "image",
        };

        return data;
    }
}

export default ImageBlock;