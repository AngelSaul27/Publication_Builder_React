import { v4 as uuidv4 } from "uuid";
import BlockSchemes from "./BlockSchemes.js";

class Block extends BlockSchemes{

    model = {};

    constructor(props) {
        super();
        this.model = this.generatedBaseBlock(props.block);
    }

    generatedBaseBlock(block){
        const id = this.generatedIdentifier();
        const model = block.cloneNode(true);
        const options = model.querySelector('[data-content-options]');
        const root = model.querySelector('[data-block="root"]');
        
        root.removeChild(root.querySelector("div")); //DELETED ANY CONTENT
        model.setAttribute("data-block-id", id);

        if (options.classList.contains("hover")) {
            options.classList.remove("hover");
        }

        return {
            block: model,
            root: root,
            options: options
        };
    }

    generatedIdentifier(){
        return uuidv4();
    }
}

export default Block;