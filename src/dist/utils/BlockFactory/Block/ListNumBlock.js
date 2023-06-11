import Block from "../Block";
import Schemes from "../BlockSchemes";

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
        const block = this.currentData.Block;
        const editable = this.newElement.querySelector("[contentEditable]");
        
        block.after(this.newElement);
        editable.focus();

        return {
          Block: this.newElement,
          Editable: editable,
          isDefault: false,
          Type: "listDecimal",
        };
    }
}
