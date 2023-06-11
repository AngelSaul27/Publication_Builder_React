import TextBlock from "./Block/TextBlock";
import HeadingBlock from "./Block/HeadingBlock";
import ListVinetaBlock from "./Block/ListVinetaBlock";
import ListNumBlock from "./Block/ListNumBlock";
import DividerBlock from "./Block/DividerBlock";
import HighlightBlock from "./Block/HighlightBlock";

export default class BlockFactory{

    constructor(){
        if(typeof BlockFactory.instance === "object"){
            return BlockFactory.instance;
        }

        return BlockFactory.instance = this;
    }

    createNewBlock(props){
        const type = props.Type;
        switch (type) {
            case "text":
                return new TextBlock(props).render();
            case "heading" :
                return new HeadingBlock(props).render();
            case "listDisc" :
                return new ListVinetaBlock(props).render();
            case "listDecimal" :
                return new ListNumBlock(props).render();
            case "divider" :
                return new DividerBlock(props).render();
            case "highlight" :
                return new HighlightBlock(props).render();
             default: console.log(`Block ${type} is not supported`);
        }
    }
}