import BlockSave from "../BlockFactory/BlockSave";

function DeleteBlock(Block) {
    const root = document.querySelector("[data-content-editable-root]");
    
    if (root == null) {
        console.error("please add template default");
        return false;
    }

    const blocks = root.querySelectorAll("[data-block-id]"); 

    if (blocks.length === 1) {
        return false;
    }

    const BlockId = Block.getAttribute("data-block-id");
    const currentSaveId = new BlockSave().getSaveDefaultBlock()

    if (BlockId === currentSaveId) {
        return false;
    }

    Block.remove();
}

export { DeleteBlock };