import BlockEvent from "../BlockEvent.js";

class Heading_Event extends BlockEvent {

    current;

    constructor(props) {
        super(props);
        this.current = props;
    }

    setEvent(){
        const self = this;

        self.current.editable.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === "Intro") {
                e.preventDefault();
                self.current.type = "text";
                self.handleCreateDefaultBlock(self.current);
            }

            if (e.key === "Backspace" || e.key === "Delete") {
                self.handleRemoveAnyBlock(self.current);
            }
        });
    }

}

export default Heading_Event;