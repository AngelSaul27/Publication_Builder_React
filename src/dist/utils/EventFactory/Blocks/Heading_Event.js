import Events from "../Events";

class Heading_Event extends Events {
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
            if (evt.keyCode === 13) {
                self.Data.Type = "text";
                self.handleCreateDefaultBlock(evt, self.Data);
            }

            if (evt.keyCode === 8 || evt.keyCode === 46) {
                self.handleRemoveAnyBlock(self.Data);
            }
        });
    }
}

export default Heading_Event;
