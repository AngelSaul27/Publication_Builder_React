import Text_Event from "../Block/Listeners/Text_Event.js";
import Heading_Event from "../Block/Listeners/Heading_Event.js";
import ListVineta_Event from "../Block/Listeners/ListVineta_Event.js";
import ListNum_Event from "../Block/Listeners/ListNum_Event.js";
import Divider_Event from "../Block/Listeners/Divider_Event.js";
import Highlight_Event from "../Block/Listeners/Highlight_Event.js";
import Image_Event from "../Block/Listeners/Image_Event.js";

class EventsFactory {
    
    constructor() {
        if (typeof EventsFactory.instance === "object") {
            return EventsFactory.instance;
        }

        return (EventsFactory.instance = this);
    }

    setBlockEvent(props) {
        const type = props.type;

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
                new Divider_Event(props).executeProcess(); 
                break;
            case "highlight":
                new Highlight_Event(props).setEvent(); 
                break;
            case "image":
                new Image_Event(props).setEvent();
                break;
            default:
                console.log(`Block ${type} is not supported for events`);
        }
    }
}

export default EventsFactory;