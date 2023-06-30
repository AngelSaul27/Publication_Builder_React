import MenuSaveOpen from "./MenuSaveOpen";

const MenuSave = new MenuSaveOpen();

class Menu {

    constructor(){
        if(!(MenuSave.Initmenu))
        {
            document.addEventListener("click", (e) => 
                this.outsideMenuClick(e)
            );
            MenuSave.Initmenu = true;
        }
    }

    openMenu(trigger, block, menu){
        if (!menu) return; //MENU NO EXISTENTE
        if (!block) return; //BLOQUE NO EXISTENTE
        if (!trigger) return; //DESENCADENANTE NO EXISTENTE 
        if (MenuSave.getSaveMenu() != null) return; //EXISTE UN MENU

        block.after(menu);
        this.setPositionMenu(trigger, menu);
        this.showMenu(menu);
    }

    showMenu(menu){
        setTimeout(() => {
          menu.classList.add("hover");
        }, 50);
        MenuSave.saveMenuOpen(menu);
    }

    setPositionMenu(trigger, menu){
        const container = trigger.closest("[data-content-editable-root]");
        const container_Computed = getComputedStyle(container.closest("main"));

        /* Ventana */
        const windowHeight = window.innerHeight;
        const winPageY = window.scrollY; /*Posición vertical */

        /* Boton Desencadenante */
        const triggerLeft = trigger.offsetLeft;
        const triggerTop = trigger.offsetTop;
        const triggerWidth = trigger.offsetWidth;
        const triggerHeight = trigger.offsetHeight;

        /* Posición relativa del menu con respecto al borde superior de la ventana*/
        const menuTop = menu.getBoundingClientRect().top - window.scrollY;
        const mainTop = parseInt(container_Computed.paddingTop);
        const menuHeight = menu.offsetHeight;
        const position = menuTop + menuHeight - mainTop * 2;
        const containerHeight = container.offsetHeight;

        if (position < windowHeight - winPageY) {
            /*Cabe en la ventana, posicionamos por encima*/
            menu.style.top = triggerTop - triggerHeight + "px";
        } else {
            /*No cabe en la ventana, posicionamos debajo*/
            menu.style.bottom = containerHeight - triggerTop + "px";
        }

        /*Posición horizontal con respecto al trigger */
        menu.style.left = triggerLeft + triggerWidth + 10 + "px";
    }

    closeMenu(menu){
        setTimeout(() => {
            menu.remove();
            MenuSave.removeMenuOpen();
        }, 350);
        menu.classList.remove("hover");
    }

    outsideMenuClick(e){
        const hasOptions = e.target.hasAttribute("data-content-options");
        const closestOptions = e.target.closest("[data-content-options]");

        if (hasOptions || closestOptions) {
            return;
        }

        const hasContent = e.target.hasAttribute("data-dropdown-content");
        const closestContent = e.target.closest("[data-dropdown-content]");

        if (hasContent || closestContent) {
            return;
        }

        const menu = MenuSave.getSaveMenu();
        if(menu != null){
            this.closeMenu(menu);
        }
    }

    getItemsMenu(menu){
        const dataset = "[data-dropdown-item]";
        const items = menu.querySelectorAll(dataset);

        return items;
    }
}

export default Menu;