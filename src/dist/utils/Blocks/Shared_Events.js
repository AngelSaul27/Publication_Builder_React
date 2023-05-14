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

        const editable = block.querySelector('[contentEditable]');
    
        block.addEventListener("click", (e) =>
          self.handleClickOptionBlock(e, block)
        );
        block.addEventListener("mouseover", e => 
            self.handleMouseEventBlock(e, "over")
        );
        block.addEventListener("mouseout", e => 
            self.handleMouseEventBlock(e, "out")
        );

        editable.addEventListener("keydown", e => {
            self.handleKeydownEditableBlock(e, block);
        });

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

    //KEYDOWN 
    handleKeydownEditableBlock(event, block){
        const previousBlock = block.previousElementSibling;
        const nextBlock = block.nextElementSibling;
        const target = "[contentEditable]";

        if (event.keyCode === 40 || event.key === "ArrowDown") {
            if(nextBlock){
                let editable = nextBlock.querySelector(target);
                if(!editable){ return}

                if(editable.getAttribute("contentEditable") === "false"){
                    const nextNextBlock = nextBlock.nextElementSibling;
                    editable = nextNextBlock.querySelector(target);
                    if(!editable){ return}
                }

                if (editable.innerText) {
                    const range = document.createRange();
                    range.selectNodeContents(editable);
                    range.collapse(false);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                editable.focus();
            }
        }

        if (event.key === "ArrowUp") {
            if(previousBlock){
                let editable = previousBlock.querySelector(target);
                if(!editable){ return }

                if(editable.getAttribute("contentEditable") === "false"){
                    const newPrevBlock = previousBlock.previousElementSibling;
                    editable = newPrevBlock.querySelector(target);
                    if(!editable){ return}
                }

                editable.focus();
            }
        }
    }
}