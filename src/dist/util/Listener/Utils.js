class UtilsEvents {

    removeBlock(block){
        const prev = block.previousElementSibling;
        const next = block.nextElementSibling;

        if(prev) {
            const editable = prev.querySelector("[contentEditable]");
            if(editable){
                editable.focus();
                block.remove();
                return;
            }
        }
 
        if(next){
            const editable = next.querySelector("[contentEditable]");
            if (editable) {
                block.remove();
                editable.focus();
                return;
            }
            
            if (next.nextElementSibling) {
                const newNext = next.nextElementSibling;
                const editable = newNext.querySelector("[contentEditable]");

                if (editable) {
                    block.remove();
                    editable.focus();
                }
            }
        }
    }
}

export default UtilsEvents;