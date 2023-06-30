import tippy from "tippy.js";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import { getTippyCreateBlock } from "../template/getTippyCreateBlock";
import { getTippyOptionBlock } from "../template/getTippyOptionBlock";

export default class setTippyContent{

  constructor(block){
    tippy(block.querySelector("[data-option-dragging]"), {
      content: getTippyCreateBlock,
      allowHTML: true,
      animation: "scale",
      delay: [200, 230],
    });

    tippy(block.querySelector("[data-option-create]"), {
      content: getTippyOptionBlock,
      allowHTML: true,
      animation: "scale",
      delay: [200, 230],
    });
  }
  
}