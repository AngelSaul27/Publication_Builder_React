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

  getSchemeListNumerada() {}

  getSchemeListViñetada() {}
}
