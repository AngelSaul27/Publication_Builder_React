import EventsFactory from "./util/Listener/EventsFactory";
import "../dist/css/global.css";
import "../dist/css/block.css";

class Builder {
    Init() {
        const root = document.querySelector("[data-content-editable-root]");
        
        if (root == null) {
            console.error("please add template default");
            return false;
        }

        const blocks = root.querySelectorAll("[data-block-id]");
        if (blocks === null) {
            console.error("please add template block default");
            return false;
        }

        const self = this;
        blocks.forEach((block) => {
            const data = self.getDataBlock(block);
            new EventsFactory().setBlockEvent(data);
        });
    }

    getDataBlock(block) {
        const root = block.querySelector("[data-block='root']");
        const type = root.getAttribute("type")
        const edit = root.querySelector("[contentEditable]")

        return {
            block: block, //Bloque (text, h1, ...)
            root: root, //Contendor del Editable Block
            type: type, // Block type
            editable: edit, // Block Editable
        };
    }
}
export default Builder;