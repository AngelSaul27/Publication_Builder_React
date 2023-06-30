import BlockEvent from "../BlockEvent";

class Image_Event extends BlockEvent {

    current = {};
    isResizing = false;
    startX;
    startY;
    startWidth;
    startHeight;

    constructor(props) {
        super(props);

        this.current = props;
    }
    
    setEvent(){
        const self = this;
        const Image = self.current.block.querySelector("img");
        const MoveX = self.current.editable.querySelector(
          "[data-option-image='resize-y']"
        );
        const MoveY = self.current.editable.querySelector(
          "[data-option-image='resize-x']"
        );

        MoveX.addEventListener("mousedown", (e) => {
            self.isResizing = true;
            self.startX = e.clientX;
            self.startWidth = Image.offsetWidth;
        });

        MoveX.addEventListener("mousemove", (e) => {
            if (self.isResizing) {
                Image.classList.remove("max-w-[300px]");
                const deltaX = e.clientX - self.startX;
                const newWidth = self.startWidth + deltaX;
                Image.style.width = newWidth + "px";
            }
        });

        MoveX.addEventListener("mouseup", (e) => {
            self.isResizing = false;
        });

        //RESIZE X

        MoveY.addEventListener("mousedown", (e) => {
            self.isResizing = true;
            self.startY = e.clientY;
            self.startHeight = Image.offsetHeight;
        });

        MoveY.addEventListener("mousemove", (e) => {
            if (self.isResizing) {
                Image.classList.remove("max-w-[300px]");
                const deltaY = e.clientY - self.startY;
                const newHeight = self.startHeight + deltaY;
                Image.style.height = newHeight + "px";
            }
        });

        MoveY.addEventListener("mouseup", (e) => {
            self.isResizing = false;
        });
        
    }
}

export default Image_Event; //https://i.ibb.co/s5whBRt/Tecno-02.jpg