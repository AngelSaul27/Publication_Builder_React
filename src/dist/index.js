import AssignedEvents from "./utils/Blocks/Assigned_Events.js";

export class IndexBuilder{

    init(){
        const root = document.querySelector('[data-content-editable-root]'); // Root
        
        if(root == null){
            console.error("please add template default");
            return false;
        }

        const blocks = root.querySelectorAll("[data-block-id]"); // Root -> BlocksID

        if(root.querySelectorAll("[data-block-id]") === null){
            console.error("please add template block default");
            return false;
        }

        blocks.forEach((blocks, index) => this.processCurrentBlocks(blocks, index));
    }

    processCurrentBlocks(block, index){
        const block_Id = block; // Root -> BlockID
        const block_Root = block_Id.querySelector("[data-block='root']"); // BlockID -> Root
        const block_Type = block_Root.getAttribute("type"); // Block type
        const block_Edit = block_Root.querySelector("[contentEditable]"); // Block Editable
        const is_Default = index === 0 ? true : false; // isDefualt Block

        new AssignedEvents(block).assignBlockEvent(block_Type, {
            block: block,
            root: block_Root,
            type: block_Type,
            editable: block_Edit,
            isDefault: is_Default
        });
    }
}