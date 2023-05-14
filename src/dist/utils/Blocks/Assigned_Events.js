import SharedEvents from "./Shared_Events";
import BlockFactory from "./BlockFactory.js";

export default class AssignedEvents {

    factory = new BlockFactory();
    lastKeyPressedTime = 0;

    constructor(){
        if(typeof AssignedEvents.instance === "object"){
            return AssignedEvents.instance
        }

        this.factory = new BlockFactory();
        return AssignedEvents.instance = this
    }

    assignBlockEvent(type, data){
        if(type !== "divider"){
            this.setKeyboardEvent(type, data);
        }
        new SharedEvents(data.block);
    }

    setKeyboardEvent(type, data){
        const self = this;
        const editable = data.editable;

        editable.addEventListener("keydown", (evt) => {
            if (evt.keyCode === 13) {
                if(type === "listDisc" || type === "listDecimal"){
                    self.createNewListBlock(evt, data);
                    return 
                }

                self.createNewTextBlock("text", evt, data);
            }

            if (evt.keyCode === 8 || evt.keyCode === 46) {
                if(type === "listDisc" || type === "listDecimal"){
                    self.removeListBlock(data);
                    return
                }

                self.removeTextBlock(data);
            }
        });
    }

    createNewListBlock(event,data){
        event.preventDefault();
        const result = this.factory.createNewBlock(data);
        this.assignBlockEvent(result.type, result);
    }

    removeListBlock(data){
        const editable = data.editable;
        const isDefault = data.isDefault;
        const attribute = editable.getAttribute("contentEditable");
        
        if (isDefault){
            return;
        }

        if (attribute !== "false") {
            if (editable.textContent.length !== 0) {
                return;
            }
        }

        const currentTime = new Date().getTime();
        if (currentTime - this.lastKeyPressedTime < 600) {
            this.factory.removeCurrentBlock(data.block);
            this.lastKeyPressedTime = 0;
            return
        }
        this.lastKeyPressedTime = currentTime;
    }

    createNewTextBlock(type, event, data){
        event.preventDefault();
        data.type = type;
        const result = this.factory.createNewBlock(data);
        this.assignBlockEvent(result.type, result);
    }

    removeTextBlock(data){
        const self = this;
        const editable = data.editable;
        const isDefault = data.isDefault;
        const attribute = editable.getAttribute("contentEditable");

        if(isDefault){
            return
        }

        if (attribute === "true" && editable.textContent.length === 0) {
            self.factory.removeCurrentBlock(data.block);
        }
    }
}