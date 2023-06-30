import BlockEvent from "../BlockEvent";

class Divider_Event extends BlockEvent {
    
    current;

    constructor(props) {
        super(props);
        this.current = props;
    }

    executeProcess(){
        this.current.type = "text";
        this.handleCreateDefaultBlock(this.current);
    }
    
}

export default Divider_Event;