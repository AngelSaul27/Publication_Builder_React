import BlockEvent from "../BlockEvent";

class Highlight_Event extends BlockEvent {

    current = {};

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

export default Highlight_Event;