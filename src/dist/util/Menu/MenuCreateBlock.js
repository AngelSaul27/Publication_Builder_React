import { getMenuCreateBlock as menu } from "../template/getMenuCreateBlock";
import MenuSaveOpen from "./MenuSaveOpen";
import Menu from "./Menu";
import BlockFactory from "../Block/BlockFactory";

class MenuCreateBlock extends Menu{

    constructor(trigger, block) {
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
                    this.handleOptionSelected(event, block, selected);
                    this.closeMenu(menu);
                } else return;

            });
        });
    }

    handleOptionSelected(event, block, selected){
        const dataset = "data-dropdown-item";
        const editable = block.querySelector("[contentEditable]");
        const clickedType = event.target.closest("[" + dataset + "]").getAttribute(dataset);

        const data = {
            block: block,
            editable: editable,
            type: clickedType,
            item: selected,
        };

        if (selected.getAttribute(dataset) === "imagen") {
            var URL = null;
            while(URL === null){
                URL = prompt("Ingrese una URL", "");
            }
            data.src = URL;
        }

        setTimeout(() => {
            event.disabled = false;
            new BlockFactory().createNewBlock(data);
        }, 100);
    }
}

export default MenuCreateBlock;
