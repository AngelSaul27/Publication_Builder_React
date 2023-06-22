import EventsFactory from './utils/EventFactory/EventsFactory'
import BlockSave from './utils/BlockFactory/BlockSave';

const ListBlock = [];

class IndexBuilder{
    
    Init (){
        const root = document.querySelector("[data-content-editable-root]");

        if (root == null) {
            console.error("please add template default");
            return false;
        }

        if (root.querySelectorAll("[data-block-id]") === null) {
          console.error("please add template block default");
          return false;
        }

        const blocks = root.querySelectorAll("[data-block-id]"); // Root -> BlocksID
        blocks.forEach((Block, Idx) => 
            this.ExtractDataBlock(Block, Idx)
        );
    }

    ExtractDataBlock(Block, Idx){
        const BLOCK = Block; // Root -> BlockID
        const ROOT = BLOCK.querySelector("[data-block='root']"); // BlockID -> Root
        const TYPE = ROOT.getAttribute("type"); // Block type
        const EDITABLE = ROOT.querySelector("[contentEditable]"); // Block Editable
        const ISDEFAULT = Idx === 0 ? true : false; // isDefualt Block
        const POSITION = Idx; // Position

        const data = {
            Block : BLOCK, //Bloque
            Root : ROOT, //Contendor padre del EditBlock
            Type : TYPE,
            Editable : EDITABLE,
            isDefault : ISDEFAULT,
            Position : POSITION
        }

        new EventsFactory().setBlockEvent(data);

        if (ISDEFAULT) {
            new BlockSave().setSaveDefaultBlock(Block.getAttribute("data-block-id"));
        }

        new BlockSave().setListBlock(
            ListBlock.push({
                Position: POSITION,
                Data: data,
            })
        );
    }
}

export {IndexBuilder};