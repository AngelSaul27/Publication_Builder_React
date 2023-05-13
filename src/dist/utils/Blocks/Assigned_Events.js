import SharedEvents from "./Shared_Events";
import BlockFactory from "./BlockFactory.js";

export default class AssignedEvents {

    factory = new BlockFactory();

    constructor(){
        if(typeof AssignedEvents.instance === "object"){
            return AssignedEvents.instance
        }

        this.factory = new BlockFactory();
        return AssignedEvents.instance = this
    }

    assignBlockEvent(type, data){
        switch (type) {
            case 'text' : 
                this.setTextEvent(data);
                break; 
            
            default: return
        }
        new SharedEvents(data.block);
    }

    setTextEvent(data){
        const self = this;
        const editable = data.editable;
        editable.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                const result = self.factory.createNewBlock(data);
                self.assignBlockEvent(result.type, result);
            }

            if (event.keyCode === 8 || event.keyCode === 46) {
                if (!data.isDefault && editable.textContent.length === 0) {
                    self.factory.removeCurrentBlock(data.block);
                }
            }
        });
    } 

}