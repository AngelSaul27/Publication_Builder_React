import DropdownManager from "../Dropdowns/DropdownManager.js";
import BlockFactory from "../BlockFactory/BlockFactory.js";
import EventsFactory from "./EventsFactory.js";

const Dropdown = new DropdownManager();

class Events {

    Block;
    Editable;

    constructor(props) 
    {
        if(!props){
            return 
        }

        this.Block = props.Block;
        this.Editable = props.Editable;

        const self = this;
    
        self.Block.addEventListener("click", (e) => {
            self.handleModalOptionsBlock(e)
        });

        self.Block.addEventListener("mouseover", (e) => {
            self.handleMouseOutAndOverBlock(e, "over")
        });

        self.Block.addEventListener("mouseout", (e) => {
            self.handleMouseOutAndOverBlock(e, "out")
        });

        self.Editable.addEventListener("keydown", (e) => {
            self.handleKeydownEditableBlock(e);
        });
    }

    handleModalOptionsBlock(e) 
    {
        const self = this;
        const target = e.target;

        if (target.closest("[data-option-dragging]")) {
            const trigger = target.closest("[data-option-dragging]");
            Dropdown.OpenDropdown("option_block", trigger, self.Block);
        }

        if (target.closest("[data-option-create]")) {
            const trigger = target.closest("[data-option-create]");
            Dropdown.OpenDropdown("create_block", trigger, self.Block);
        }
    }

    handleMouseOutAndOverBlock(trigger, event) 
    {
        const target = trigger.target;
        const stateDropdown = Dropdown.stateDropdown;
        const blockId = target.closest("[data-block-id]");

        if (blockId && !stateDropdown && event === "over") {
            const content = blockId.querySelector("[data-content-options]");
            content.classList.add("hover");
        }

        if (blockId && event === "out") {
            const content = blockId.querySelector("[data-content-options]");
            content.classList.remove("hover");
        }
    }

    handleKeydownEditableBlock(event) 
    {
        const self = this;

        if(!self.Block){
            return
        }

        const previousBlock = self.Block.previousElementSibling;
        const nextBlock = self.Block.nextElementSibling;
        
        const target = "[contentEditable]";

        if (event.keyCode === 40 || event.key === "ArrowDown") {
            if (!nextBlock) {
                return;   
            }
            
            var editable = nextBlock.querySelector(target);

            if (!editable) {
                return;
            }

            if (editable.getAttribute("contentEditable") === "false") {
                const nextNextBlock = nextBlock.nextElementSibling;
                editable = nextNextBlock.querySelector(target);

                if (!editable) {
                  return;
                }
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

        if (event.key === "ArrowUp") {
            if (!previousBlock) {
                return;
            }

            let editable = previousBlock.querySelector(target);

            if (!editable) {
                return;
            }

            if (editable.getAttribute("contentEditable") === "false") {
                const newPrevBlock = previousBlock.previousElementSibling;
                editable = newPrevBlock.querySelector(target);

                if (!editable) {
                    return;
                }
            }

            editable.focus();
        }
    }

    handleCreateDefaultBlock(e, data){
        e.preventDefault();
        const newBlock = new BlockFactory().createNewBlock(data);
        new EventsFactory().setBlockEvent(newBlock);
    }

    handleRemoveAnyBlock(data){
        const block = data.Block;
        const editable = data.Editable;
        const isDefault = data.isDefault;
        const attribute = editable.getAttribute("contentEditable");

        if(isDefault){
            return
        }

        if (attribute === "false") {
            return;
        }

        if (editable.textContent.length !== 0) {
            return;
        }

        this.disabled = true; //Controlador de evento de eliminación

        const prevBlock = block.previousElementSibling;
        block.remove();

        if (prevBlock) {
            const editable = prevBlock.querySelector("[contentEditable='true']");

            if (!editable) {
                this.disabled = false;
                return;
            }

            if (!editable.textContent) {
                editable.focus();
                this.disabled = false;
                return;
            }

            const range = document.createRange();
            range.selectNodeContents(editable);
            range.collapse(false);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }

        this.disabled = false; //Controlador de evento de eliminación
    }
}

export default Events;