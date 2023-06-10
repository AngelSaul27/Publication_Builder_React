import BlockFactory from "../Blocks/BlockFactory.js";
import AssignedEvents from "../Blocks/Assigned_Events.js";

//INICIALIZA LOS DATOS PARA LA CREACIÓN DEL NUEVO BLOQUE
export function startCreationBlock(e, block, item) {
  const dataset = "data-dropdown-item";
  const editable = block.querySelector("[contentEditable]");
  const clickedType = e.target.closest("[" + dataset + "]").getAttribute(dataset);
  const selectItem = item

  const data = {
    block: block,
    editable: editable,
    type: clickedType,
    isDefault: false,
    item: selectItem,
  };

  setTimeout(() => { 
    processCreationBlock(e, data); 
  }, 100);

  return true;
}

//PROCESA LA CREACIÓN DEL BLOQUE
function processCreationBlock(e, data){
    e.disabled = false;
    const result = new BlockFactory().createNewBlock(data);

    if (!result) {
      return
    }

    new AssignedEvents().assignBlockEvent(result.type, result);

    if (result.type === "divider") {
      result.type = "text";
      const newRelsult = new BlockFactory().createNewBlock(result);

      if (newRelsult) {
        new AssignedEvents().assignBlockEvent(result.type, newRelsult);
      }
  }
}