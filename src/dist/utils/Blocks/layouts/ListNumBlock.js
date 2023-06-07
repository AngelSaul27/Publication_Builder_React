import Block from "../Block";
import Schemes from "../Block_Schemes";

export default class ListNumBlock extends Block {
    currentData = {};
    newElement = {};
    schemes = new Schemes();

    constructor(props) {
        super(props);

        //DATOS DE ORIGEN
        this.currentData = props;

        //NUEVOS DATOS CREADOS
        this.clone.nodeRoot.appendChild(this.schemes.getSchemeListNumerada(props));
        this.clone.nodeRoot.setAttribute("type", "listDecimal");
        this.newElement = this.clone.node;
    }

    render() {
        const block = this.currentData.block;
        const editable = this.newElement.querySelector("[contentEditable]");
        
        block.after(this.newElement);
        editable.focus();

        return {
          block: this.newElement,
          editable: editable,
          isDefault: false,
          type: "listDecimal",
        };
    }
}
