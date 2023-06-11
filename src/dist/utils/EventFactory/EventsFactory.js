import Text_Event from "./Blocks/Text_Event";
import Heading_Event from "./Blocks/Heading_Event";
import ListVineta_Event from "./Blocks/ListVineta_Event";
import ListNum_Event from "./Blocks/ListNum_Event";
import Divider_Event from "./Blocks/Divider_Event";
import Highlight_Event from "./Blocks/Highlight_Event";

class EventsFactory {
    
    constructor() {
        if (typeof EventsFactory.instance === "object") {
        return EventsFactory.instance;
        }

        return (EventsFactory.instance = this);
    }

    setBlockEvent(props) {
        const type = props.Type;

        switch (type) {
            case "text":
                    new Text_Event(props).setEvent();
                break;
            case "heading":
                    new Heading_Event(props).setEvent();
                break;
            case "listDisc":
                    new ListVineta_Event(props).setEvent(); 
                break;
            case "listDecimal":
                    new ListNum_Event(props).setEvent(); 
                break;
            case "divider":
                    new Divider_Event(props).setEvent(); 
                break;
            case "highlight":
                    new Highlight_Event(props).setEvent(); 
                break;

            default:
                console.log(`Block ${type} is not supported for events`);
        }
    }
}

export default EventsFactory;
