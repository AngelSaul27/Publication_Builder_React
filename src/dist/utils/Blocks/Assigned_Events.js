import SharedEvents from "./Shared_Events";
import BlockFactory from "./BlockFactory.js";

export default class AssignedEvents {

    factory = new BlockFactory();
    lastKeyPressedTime = 0;

    constructor(){
        if(typeof AssignedEvents.instance === "object"){
            return AssignedEvents.instance
        }

        this.factory = new BlockFactory();
        return AssignedEvents.instance = this
    }

    assignBlockEvent(type, data){
        /* SIN ASIGNACIÓN DE EVENTOS DE TECLADO */
        if(type !== "divider"){
            this.setKeyboardEvent(type, data);
        }
        new SharedEvents(data.block);
    }

    setKeyboardEvent(type, data){
        const self = this;
        const editable = data.editable;

        editable.addEventListener("keydown", (evt) => {
            if (evt.keyCode === 13) {
                if(type === "listDisc" || type === "listDecimal"){
                    self.createNewListBlock(evt, data);
                    return 
                }

                self.createDefaultBlock(evt, data);
            }

            if (evt.keyCode === 8 || evt.keyCode === 46) {
                self.removeAnyBlock(data);
            }
        });
    }

    /* CREA UN NUEVO BLOQUE DE TIPO LIST */
    createNewListBlock(event,data){
        event.preventDefault();
        const result = this.factory.createNewBlock(data);
        this.assignBlockEvent(result.type, result);
    }

    /* CREA UN NUEVO BLOQUE DE TIPO TEXT */
    createDefaultBlock(event, data){
        event.preventDefault();
        data.type = "text";
        const result = this.factory.createNewBlock(data);
        this.assignBlockEvent(result.type, result);
    }

    /* REMUEVE CUALQUIER TIPO DE BLOQUE */
    removeAnyBlock(data){
        const self = this;
        const editable = data.editable;
        const isDefault = data.isDefault;
        const attribute = editable.getAttribute("contentEditable");

        if(isDefault){
            return
        }

        if (attribute === "false") {
            return;
        }

        if (editable.textContent.length === 0) {
            /* FUNCIÓN DE BLOCK FACTORY PARA ELIMINAR BLOQUES */
            self.factory.removeCurrentBlock(data.block);
        }
    }
}