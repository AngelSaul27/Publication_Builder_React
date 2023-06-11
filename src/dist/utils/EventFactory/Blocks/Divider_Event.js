import Events from "../Events";

class Divider_Event extends Events {
    Data;
    Editable;

    constructor(props) {
        super(props);
        this.Data = props;
        this.Editable = props.Editable;
    }

    setEvent(){
        //SIN EVENTOS
    }
}

export default Divider_Event;
