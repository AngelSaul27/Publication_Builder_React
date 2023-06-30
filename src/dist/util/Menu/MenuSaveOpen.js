
class MenuSaveOpen {

    Menu = null;
    Initmenu = false;

    constructor (){
        if (typeof MenuSaveOpen.intance === "object") {
            return MenuSaveOpen.intance;
        }
        
        MenuSaveOpen.intance = this;
    }


    saveMenuOpen(menu){
        this.Menu = menu;
    }

    removeMenuOpen(){
        this.Menu = null;
    }

    getSaveMenu(){
        return this.Menu;
    }

}

export default MenuSaveOpen;