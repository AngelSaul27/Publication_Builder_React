import BlockFactory from "../BlockFactory/BlockFactory.js";
import EventsFactory from "../EventFactory/EventsFactory.js"

//INICIALIZA LOS DATOS PARA LA CREACIÓN DEL NUEVO BLOQUE
function ItemCreate(e, Block, Item) {
    const dataset = "data-dropdown-item";
    const editable = Block.querySelector("[contentEditable]");
    const selectItem = Item;
    const clickedType = e.target
        .closest("[" + dataset + "]")
        .getAttribute(dataset);

    const data = {
        Block: Block,
        Editable: editable,
        Type: clickedType,
        isDefault: false,
        Item: selectItem,
    };

    setTimeout(() => {
        e.disabled = false;
        const result = new BlockFactory().createNewBlock(data);

        if (result) {
            new EventsFactory().setBlockEvent(result);

            if (result.Type === "divider") {
                DividerCreateSpace(result);
            }

        }else{
            console.log("Error creating new block");
        }

    }, 100);
}

function DividerCreateSpace(result){
    result.Type = "text";
    const AuxiliarBlock = new BlockFactory().createNewBlock(result);

    if (AuxiliarBlock) {
        new EventsFactory().setBlockEvent(AuxiliarBlock);
    }
}

export { ItemCreate };
