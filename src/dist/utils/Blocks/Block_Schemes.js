export default class Schemes {
  getSchemeText() {
    const schemeText = document.createElement("div");
    schemeText.setAttribute("contentEditable", "true");
    schemeText.setAttribute("placeholder", "Escribe aquí");
    return schemeText;
  }

  getSchemeHeading(nivel) {
    const schemeHeading = document.createElement("div");
    schemeHeading.setAttribute("contentEditable", "true");
    schemeHeading.setAttribute("placeholder", "Escribe aquí");

    if(nivel === "1") {
      schemeHeading.setAttribute("class", "text-4xl font-bold");
    }else if(nivel === "2") {
      schemeHeading.setAttribute("class", "text-3xl font-bold");
    }else{
      schemeHeading.setAttribute("class", "text-2xl font-bold");
    }
    
    return schemeHeading;
  }

  getSchemeListNumerada() {
    const schemeContainer = document.createElement("div");
    schemeContainer.setAttribute("class", "list-decimal w-full flex items-center");
    const schemeList = document.createElement("li");
    const schemeEdit = document.createElement("div");
    schemeEdit.setAttribute("placeholder", "Escribe aquí");
    schemeEdit.setAttribute("contentEditable", "true");

    schemeContainer.appendChild(schemeList);
    schemeContainer.appendChild(schemeEdit);

    return schemeContainer;
  }

  getSchemeListVinetada() {
    const schemeContainer = document.createElement("div");
    schemeContainer.setAttribute("class", "list-disc w-full flex items-center");
    const schemeList = document.createElement("li");
    const schemeEdit = document.createElement("div");
    schemeEdit.setAttribute("placeholder", "Escribe aquí");
    schemeEdit.setAttribute("contentEditable", "true");

    schemeContainer.appendChild(schemeList);
    schemeContainer.appendChild(schemeEdit);

    return schemeContainer;
  }

  getSchemeDivider(){
    const schemeContainer = document.createElement("div");
    schemeContainer.setAttribute("contentEditable", "false");
    const schemeHr = document.createElement("hr");
    schemeHr.setAttribute("class", "dark:border-[#494848]");
    schemeContainer.appendChild(schemeHr);
    return schemeContainer;
  }

  getSchemeHighlight(){
    const schemeContainer = document.createElement("div");
    schemeContainer.setAttribute("class", "px-3 py-2 bg-[#BCD6F9] rounded-md");
    const schemeEdit = document.createElement("div");
    schemeEdit.setAttribute("contentEditable", "true");
    schemeContainer.appendChild(schemeEdit)
    return schemeContainer;
  }
}
