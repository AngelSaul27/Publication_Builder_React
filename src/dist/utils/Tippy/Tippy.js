import { getCreateBlockHTML, getDragDropHTML } from "./Tippy_Layouts.js";
import tippy from "tippy.js";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";

export default function setTippysContent(block) {
    tippy(block.querySelector('[data-option-dragging]'), {
        content: getDragDropHTML,
        allowHTML: true,
        animation: "scale",
        delay: [200, 230],
    });

    tippy(block.querySelector('[data-option-create]'), {
      content: getCreateBlockHTML,
      allowHTML: true,
      animation: "scale",
      delay: [200, 230],
    });  
}