import Templates from "./Templates.js";
import { setEventCreateBlock } from "./DropdownCreateEvent.js";

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
                        setEventCreateBlock(e, block, item);
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
        const triggerPos = trigger.getBoundingClientRect();
        const triggerWidth = trigger.getBoundingClientRect().width
        const menuHeight = dropdown.offsetHeight;
        const menuWidth = dropdown.offsetWidth;

        const menuPos = {
            top: triggerPos.top + trigger.offsetHeight + window.pageYOffset - 80,
        }

        if((menuPos.top + menuHeight) > (window.innerHeight + window.pageYOffset)) {
            menuPos.top = triggerPos.top - menuHeight + window.pageYOffset;
        }

        if (menuPos.top < window.pageYOffset ) {
            menuPos.top = window.pageYOffset;
        }

        if (menuWidth > 200){
            dropdown.style.left = triggerWidth*1.5 + "px";
        }

        if (menuWidth < 200) {
            dropdown.style.left = triggerWidth*2.5 + "px";
        }

        dropdown.style.top = menuPos.top + "px";
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