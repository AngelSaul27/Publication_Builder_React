/* 
* MANEJADOR DE ASIGNACIÓN DE EVENTOS 
*/
import EventsFactory from "../Listener/EventsFactory.js";
/* 
* BLOQUES DE EDICIÓN 
*/
import TextBlock from "./Elements/TextBlock.js";
import HeadingBlock from "./Elements/HeadingBlock.js";
import ListVinetaBlock from "./Elements/ListVinetaBlock.js";
import ListNumBlock from "./Elements/ListNumBlock.js";
import DividerBlock from "./Elements/DividerBlock.js";
import HighlightBlock from "./Elements/HighlightBlock.js";
import ImageBlock from "./Elements/ImageBlock.js";

class BlockFactory {
    
    constructor() {
        if (typeof BlockFactory.instance === "object") {
        return BlockFactory.instance;
        }

        return (BlockFactory.instance = this);
    }

    createNewBlock(props) {
        const newBlock = this.getNewBlockCreate(props);
        if(newBlock){
            new EventsFactory().setBlockEvent(newBlock);
        }
    }

    getNewBlockCreate(props){
        switch (props.type) {
            case "text":
                return new TextBlock(props).execute();
            case "heading":
                return new HeadingBlock(props).execute();
            case "listDisc":
                return new ListVinetaBlock(props).execute();
            case "listDecimal":
                return new ListNumBlock(props).execute();
            case "divider":
                return new DividerBlock(props).execute();
            case "highlight":
                return new HighlightBlock(props).execute();
            case "imagen":
                return new ImageBlock(props).execute();
            default:
                console.log(`Block ${props.type} is not supported`);
                return [];
        }
    }
}
export default BlockFactory;
