import Events from "../Events";
import EventsFactory from "../EventsFactory";
import BlockFactory from "../../BlockFactory/BlockFactory";

class LisNum_Event extends Events {
    Data;
    Editable;

    constructor(props) {
        super(props);
        this.Data = props;
        this.Editable = props.Editable;
    }

    setEvent(){
        const self = this;

        self.Editable.addEventListener("keydown", (evt) => {
            evt.preventDefault();

            if (evt.keyCode === 13) {
                const result = new BlockFactory().createNewBlock(self.Data);
                new EventsFactory().setBlockEvent(result);
            }

            if (evt.keyCode === 8 || evt.keyCode === 46) {
                self.handleRemoveAnyBlock(self.Data);
            }
        });
    }
}

export default LisNum_Event;
