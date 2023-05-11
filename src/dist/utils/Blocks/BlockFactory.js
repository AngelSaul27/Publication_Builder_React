import TextBlock from "./layouts/TextBlock";
import HeadingBlock from "./layouts/HeadingBlock";

export default class BlockFactory{

    constructor(){
        if(typeof BlockFactory.instance === "object"){
            return BlockFactory.instance;
        }

        return BlockFactory.instance = this;
    }

    createNewBlock(props){
        const type = props.type;
        switch (type) {
            case "text":
                return new TextBlock(props).render();
            case "heading" :
                return new HeadingBlock(props).render();
             default:
                console.log(`Block ${type} is not supported`);
        }
    }

    removeCurrentBlock(block){
        this.disabled = true;
        const prevBlock = block.previousElementSibling;
        block.remove();

        if (prevBlock) {
            const editable = prevBlock.querySelector("[contentEditable='true']");
            if (editable.textContent) {
                const range = document.createRange();
                range.selectNodeContents(editable);
                range.collapse(false);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            } else {
                editable.focus();
            }
        }
        
        this.disabled = false;
    }
}