import { getMenuOptionBlock as menu } from "../template/getMenuOptionBlock";
import MenuSaveOpen from "./MenuSaveOpen";
import Menu from "./Menu";
import UtilsEvents from "../Listener/Utils";

class MenuOptionBlock extends Menu{
    
    constructor (trigger, block){
        super();
        this.openMenu(trigger, block, menu());
        this.setEventMenu(block);
    }

    setEventMenu(block){
        const menu = new MenuSaveOpen().getSaveMenu();
        const item = this.getItemsMenu(menu);

        if(!item){ return }

        item.forEach((selected) => {
            selected.addEventListener("click", (event) => {
                
                if (!event.disabled) {
                    event.disabled = true;
                    this.handleOptionSelected(menu, block, selected);
                } else return;

            });
        });
    }

    handleOptionSelected(menu, block, selected){
        const dataset = "data-dropdown-item";
        const type = selected.getAttribute(dataset);

        this.asiggnedEventToMenuOptions(type, block);
        this.closeMenu(menu);
    }

    asiggnedEventToMenuOptions(type, block){
        switch (type) {
            case "Eliminar" :
               new UtilsEvents().removeBlock(block);
            break;
            default :
                console.error("Error the option cannot be processed.");
            break
        }
    }
}

export default MenuOptionBlock;