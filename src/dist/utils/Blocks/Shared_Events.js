import DropdownManager from '../Dropdowns/DropdownManager.js';
import setTippysContent from "../Tippy/Tippy.js";

export default class SharedEvents{

    dropdown = new DropdownManager();

    constructor(block){
        if (typeof SharedEvents.instance === "object") {
            this.applyEvents(block);
            return SharedEvents.instance;
        }

        this.applyEvents(block);
        SharedEvents.instance = this;
    }

    applyEvents(block) {
        const self = this;
    
        block.addEventListener("click", (e) =>
          self.handleClickOptionBlock(e, block)
        );
        block.addEventListener("mouseover", e => 
            self.handleMouseEventBlock(e, "over")
        );
        block.addEventListener("mouseout", e => 
            self.handleMouseEventBlock(e, "out")
        );

        setTippysContent(block);
    }

    //EVENTOS ANIDADOS
    handleClickOptionBlock(event, block){
        event.preventDefault();

        if (event.target.closest("[data-option-dragging]")) 
        {
            const trigger = event.target.closest("[data-option-dragging]");
            this.dropdown.openDropdown("option_block", trigger, block);
        }

        if (event.target.closest("[data-option-create]")) {
            const trigger = event.target.closest("[data-option-create]");
            this.dropdown.openDropdown("create_block", trigger, block);
        }
    }

    handleMouseEventBlock(event, typeEvent){
        event.preventDefault();
        const blockId = event.target.closest("[data-block-id]");

        if (blockId && !this.dropdown.stateDropdown && typeEvent === "over") {
            const content = blockId.querySelector("[data-content-options]");
            content.classList.add("hover");
        }

        if (blockId && typeEvent === "out") {
            const content = blockId.querySelector("[data-content-options]")
            content.classList.remove("hover");
        }
    }

}