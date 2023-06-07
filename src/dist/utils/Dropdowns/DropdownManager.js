import Templates from "./Templates.js";
import { startCreationBlock } from "./DropdownCreateEvent.js";

export default class DropdownManager {

    templates = false;
    stateDropdown = false; //Dropdown state reference
    triggerEvent = false; //Event trigger elements

    constructor(){
        if (typeof DropdownManager.intance === "object") {
          return DropdownManager.intance;
        }

        const self = this;
        document.addEventListener("click", function (e) {
            if(!(e.target.hasAttribute("data-content-options") || 
                e.target.closest("[data-content-options]")))
            {
                if(!(e.target.hasAttribute("data-dropdown-content") || 
                    e.target.closest("[data-dropdown-content]")))
                {
                    if (self.triggerEvent && self.stateDropdown) {
                        self.closeDropdown();
                    }
                }
            }
        });

        DropdownManager.intance = self;
    }

    openDropdown(type, trigger, block){
        const self = this;
        self.templates = new Templates();

        if(self.stateDropdown !== false){ return }
        if(!self.templates.getlistTemplate(type)){ return }

        const dropdown = self.templates.getlistTemplate(type);
        block.after(dropdown);
        self.setPositionDropdown(trigger, dropdown);
        self.setEventToDropdown(type, dropdown, block);

        setTimeout(() => {
            dropdown.classList.add("hover");
            self.stateDropdown = dropdown;
            self.triggerEvent = block;
        }, 50);
    }

    closeDropdown(){
        if(this.stateDropdown !== false){
            const dropdown = this.stateDropdown;
            setTimeout(() => {
                this.stateDropdown = false;
                this.triggerEvent = false;
                dropdown.remove();
            }, 350);
            dropdown.classList.remove("hover");
        }
    }

    setEventToDropdown(type, dropdown, block){
        const self = this;
        switch (type) {
          case "create_block":
                const items = dropdown.querySelectorAll("[data-dropdown-item]");
                items.forEach((item) => {
                    item.addEventListener("click", (e) => {
                        if (e.disabled) return;
                        e.disabled = true;
                        startCreationBlock(e, block, item);
                        self.closeDropdown();
                    });
                });          
            break;
          case "option_block":
            
            break;
          default:
            return;
        }
    }

    setPositionDropdown(trigger, dropdown){
        /* Posición relativa del dropdown con respecto al borde superior de la Ventana*/
        const dropdownTop = dropdown.getBoundingClientRect().top - window.pageYOffset;
        /* Espacio entre el Content Editble Root y el elemento Main*/
        const container = trigger.closest(
          "[data-content-editable-root]"
        );
        const mainTop = parseInt(getComputedStyle(container.closest("main")).paddingTop);
        
        const containerHeight = container.offsetHeight;
        const dropdownHeight = dropdown.offsetHeight;
    
        /* Ventana */
        const windowHeight = window.innerHeight;
        const winPageY = window.pageYOffset;  /*Posición vertical */

        /* Boton Desencadenante */
        const triggerLeft = trigger.offsetLeft;
        const triggerTop = trigger.offsetTop; 
        const triggerWidth = trigger.offsetWidth;
        const triggerHeight = trigger.offsetHeight;

        /* Si el dropdown cabe en la ventana posicionamos por encima del trigger */
        if (dropdownTop + dropdownHeight - mainTop * 2 < windowHeight - winPageY) {
            dropdown.style.top = triggerTop - triggerHeight + "px";
        } else {
            /*Si el dropdown no cabe en la ventana posicionamos por debajo del trigger*/
            dropdown.style.bottom = containerHeight - triggerTop + "px";
        }

        /* Posición horizontal del menú desplegable con respecto al trigger */
        dropdown.style.left = triggerLeft + triggerWidth + 10 + "px";
    }

    getStateDropdown(){
        return this.stateDropdown
    }

    setStateDropdown(state){
        this.stateDropdown = state;
    }

    getTriggerEvent(){
        return this.triggerEvent;
    }

    setTriggerEvent(element){
        this.triggerEvent = element;
    }
}