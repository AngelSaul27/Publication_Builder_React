import Templates from "./Templates.js";
import { ItemCreate } from "./ItemCreateBlock.js";
import { DeleteBlock } from "./ItemOptionBlock.js";

export default class DropdownManager {

    templates = false;
    stateDropdown = false; //Dropdown state reference
    triggerEvent = false; //Event trigger elements

    constructor(){
        if (typeof DropdownManager.intance === "object") {
          return DropdownManager.intance;
        }

        const self = this;
        self.HandleWindowEventToModal();
        DropdownManager.intance = self;
    }

    HandleWindowEventToModal(){
        const self = this;
        document.addEventListener("click", function (e) {
            const hasOptions = e.target.hasAttribute("data-content-options")
            const closestOptions = e.target.closest("[data-content-options]")

            if ((hasOptions || closestOptions)) {
                return 
            }

            const hasContent = e.target.hasAttribute("data-dropdown-content");
            const closestContent = e.target.closest("[data-dropdown-content]");

            if (hasContent || closestContent) {
                return;
            }

            if (self.triggerEvent && self.stateDropdown) {
                self.CloseDropdown();
            }
        });
    }

    HandleSelectCreateBlock(item, block){
        const self = this;
        const items = item;

        items.forEach((selected) => {
            selected.addEventListener("click", (e) => {

                if (!e.disabled)
                {
                    e.disabled = true;
                    ItemCreate(e, block, selected);
                    self.CloseDropdown();
                }
                else{ return; }

            });
        });
    }

    HandleSelectOptionBlock(item, block){
        const items = item;

        items.forEach((selected) => {
            selected.addEventListener("click", (e) => {
                const type = selected.getAttribute("data-dropdown-item");
                if(!type){ return false; }

                if(type === "Eliminar"){
                    DeleteBlock(block);
                    this.CloseDropdown();
                }
            });
        });
    }

    OpenDropdown(type, trigger, block){
        const self = this;

        if(self.stateDropdown !== false){ return }

        self.templates = new Templates();
        if(!self.templates.GetlistTemplate(type)){ return }

        const dropdown = self.templates.GetlistTemplate(type);
        const items = dropdown.querySelectorAll("[data-dropdown-item]");
        block.after(dropdown);

        self.SetPositionDropdown(trigger, dropdown);

        setTimeout(() => {
            dropdown.classList.add("hover");
            self.stateDropdown = dropdown;
            self.triggerEvent = block;
        }, 50);

        switch (type) {
            case "create_block":
                    self.HandleSelectCreateBlock(items, block);
                break;
            case "option_block":
                    self.HandleSelectOptionBlock(items, block);
                break;
            default:
            console.log("Event not found")
        }
    }

    CloseDropdown(){
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

    SetPositionDropdown(trigger, dropdown){
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

    GetStateDropdown(){
        return this.stateDropdown
    }

    SetStateDropdown(state){
        this.stateDropdown = state;
    }

    GetTriggerEvent(){
        return this.triggerEvent;
    }

    SetTriggerEvent(element){
        this.triggerEvent = element;
    }
}