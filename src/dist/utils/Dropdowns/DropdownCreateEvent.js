import BlockFactory from "../Blocks/BlockFactory.js";
import AssignedEvents from "../Blocks/Assigned_Events.js";

//AGREGAR LOS EVENTOS DEL DROPDOWN OPTONS CREATE AQUÍ
export function setEventCreateBlock(e, block, item) {
    const dataset = "data-dropdown-item";
    const clickedType = e.target.closest("["+dataset+"]").getAttribute(dataset);
    const editable = block.querySelector("[contentEditable]");
    
    const data = {
      block: block,
      editable: editable,
      type: clickedType,
      isDefault: false,
      item: item
    };

    setTimeout(() => {
        e.disabled = false;
        const result = new BlockFactory().createNewBlock(data);
        if(result){
          new AssignedEvents().assignBlockEvent(result.type, result);
        }
    }, 100);

    return true;
}