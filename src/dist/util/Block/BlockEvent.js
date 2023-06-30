import Text_Event from "./Listeners/Text_Event";
import TextBlock from "./Elements/TextBlock";
import MenuCreateBlock from "../Menu/MenuCreateBlock.js";
import MenuOptionBlock from "../Menu/MenuOptionBlock.js";
import BlockFactory from "./BlockFactory";
import Tippy from "../Listener/Tippy.js"

class BlockEvent {
    current = {};

    constructor(props) {
        if (props !== undefined && props !== null) {
            this.current = props;
            this.setEventToBlock();
        }else{
            console.error("Blocks params no dected");
        }
    }
    
    /* 
    * INICIALIZACIÓN DE ASIGNACIÓN DE EVENTOS
    */
    setEventToBlock() {
        const self = this;
        self.addEventsToBlockOptions(self.current.block);
        self.addHoverEventToBlock(self.current.block);
        self.addHoverEventToEditableBlock(self.current.editable, self.current.block);
    }

    addEventsToBlockOptions(block) {
        const dragging = block.querySelector("[data-option-dragging]");
        const creating = block.querySelector("[data-option-create]");
        
        if (dragging == null || creating == null) {
            console.error("Block options item not found.");
            return;
        }

        dragging?.addEventListener("click", (e) => {
            e.preventDefault();
            new MenuOptionBlock(dragging, block);
        });

        creating?.addEventListener("click", (e) => {
            e.preventDefault();
            new MenuCreateBlock(creating, block);
        });
    }

    /*
    * ASIGNACIÓN DE EVENTOS DE MOUSE SOBRE EL BLOQUE
    */
    addHoverEventToBlock(block) {
        block.addEventListener("mouseover", (e) => { this.handleBlockMouseHover(e); });
        block.addEventListener("mouseout", (e) => { this.handleBlockMouseHover(e); });
        new Tippy(block);
    }

    /* 
    * ASIGNACIÓN EVENTOS DE KEYDOWN PARA EL 
    * CONTENT EDITABLE DE UN BLOQUE.
    */
    addHoverEventToEditableBlock(editable, block){
        if(editable === null){
            console.error("Editable element not found.")
            return
        }

        editable.addEventListener("keydown", (e) => {
            const previous = block.previousElementSibling;
            const next = block.nextElementSibling;
            this.handleKeyEventToEditableBlock(e, previous, next);
        });
    }

    /*
    * MANEJO DEL MOVIMIENTO ENTRE LOS BLOQUES POR
    * MEDIO DE LAS TECLAS UP Y DOWN 
    */
    handleKeyEventToEditableBlock(evt, previous, next){
        const dataset = "contentEditable";

        if(evt.key === "ArrowDown"){
            if(!next){
                return;
            }
            
            let editable = next.querySelector("[" + dataset + "]");
            if(!editable) return;

            if (editable.getAttribute(dataset) === "false") {
                const newNext = next.nextElementSibling;
                editable = newNext.querySelector("[" + dataset + "]");

                if(!editable) return;
            }

            if (editable.innerText) {
                const range = document.createRange();
                const selection = window.getSelection();
                range.selectNodeContents(editable);
                range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(range);
            }

            editable.focus();
        }

        if (evt.key === "ArrowUp") {
            if(!previous) return;

            let editable = previous.querySelector("[" + dataset + "]");

            if (!editable) return;

            if (editable.getAttribute(dataset) === "false") {
                const newPrev = previous.nextElementSibling;
                editable = newPrev.querySelector("[" + dataset + "]");

                if(!editable) return
            }

            editable.focus();
        }
    }

    /*
    * CONTROL DE LA VISUALIZACIÓN DE LAS OPCIONES DEL BLOQUE
    * TALES COMO: LA OPCIÓN DE CREACIÓN Y MODIFICACIÓN.
    */
    handleBlockMouseHover(e){
        const trigger = e.target;
        const idBlock = trigger.closest("[data-block-id]");
        const content = idBlock.querySelector("[data-content-options]");
        
        if(content ==  null){
            console.error("Data content options not found.")
            return 
        }

        (e.type === "mouseover") ? content.classList.add("hover") : content.classList.remove("hover");
    }

    /*
    * CREACIÓN DE UN TEXT BLOCK (BLOQUE POR DEFECTO)
    */
    handleCreateDefaultBlock(data){
        const newBlock = new TextBlock(data).execute();
        if(newBlock){
            new Text_Event(newBlock).setEvent();
        }
    }

    /*
    * CREACIÓN DE CUALQUIER TIPO DE BLOQUE
    */
    handleCreateAnyBlock(data){
        new BlockFactory().createNewBlock(data);
    }

    /*
    * ELIMINACIÓN DE UN BLOQUE, SIEMPRE Y CUANDO EXISTA UNO
    * DELANTE O DE ATRAS DEL BLOQUE A ELIMINAR.
    */
    handleRemoveAnyBlock(data){
        this.disabled = true;
        const block = data.block;
        const dataset = "contentEditable";
        let editable = data.editable;

        if (editable.getAttribute("["+dataset+"]") === "false") 
        {
            return;
        }

        if (editable.textContent.length !== 0) return;

        const prev = block.previousElementSibling;
        
        if(prev) {
            editable = prev.querySelector("["+dataset+"]")
            
            if(!editable.textContent){
                editable.focus();
                block.remove();
                this.disabled = false; //EVITAR DUPLICIDADES
                return;
            }

            const range = document.createRange();
            range.selectNodeContents(editable);
            range.collapse(false);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range); 

            block.remove();
            this.disabled = false; //EVITAR DUPLICIDADES
        }
        else
        {
            const next = block.nextElementSibling;

            if(next){
                editable = next.querySelector("[" + dataset + "]");

                if(!editable){
                    return;
                }

                if (!editable.textContent) {
                    block.remove();
                    editable.focus();
                    this.disabled = false; //EVITAR DUPLICIDADES
                    return;
                }

                block.remove();
                editable.focus();
                this.disabled = false; //EVITAR DUPLICIDADES
            }
        }
    }
}
export default BlockEvent;