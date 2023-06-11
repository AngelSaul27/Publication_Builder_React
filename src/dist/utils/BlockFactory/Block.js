import { v4 as uuidv4 } from "uuid";

export default class Block {

    props = [];
    clone = {};

    constructor(props) {
        this.props = props;
        this.clone = this.cloneElement();
    }

    cloneElement(){
        const newElement = this.props.Block.cloneNode(true); // Clone Block
        const options = newElement.querySelector('[data-content-options]'); // Clone Block Content Options
        const root = newElement.querySelector('[data-block="root"]'); // Clone Block Root
        const child = root.querySelector('div'); //

        if(options.classList.contains("hover")){
            options.classList.remove("hover");
        }

        newElement.setAttribute("data-block-id", this.generatedIdentifier());
        root.removeChild(child);

        return {
            node: newElement,
            nodeRoot: root,
            nodeOptions: options
        };
    }

    generatedIdentifier(){
        return uuidv4();
    }

    render() {
        throw new Error('Method not implemented');
    }
}