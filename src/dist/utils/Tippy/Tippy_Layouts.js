function getDragDropHTML() {
  const htmlStr = `<span><strong class='text-blue-300'>Click aquí</strong> para abrir el menu</span> 
        <span><strong class='text-blue-300'>Arrastra</strong> para mover</span>`;

  const newHtml = document.createElement("div");
  newHtml.setAttribute(
    "class",
    "flex flex-col items-center font-light text-xs"
  );
  newHtml.innerHTML = htmlStr.trim();

  return newHtml;
}

function getCreateBlockHTML() {
  const htmlStr = `<span><strong class='text-blue-300'>Click aquí</strong>
        para crear un bloque</span>`;

  const newHtml = document.createElement("div");
  newHtml.setAttribute("class", "flex flex-col items-center text-xs");
  newHtml.innerHTML = htmlStr.trim();

  return newHtml;
}

export { getDragDropHTML, getCreateBlockHTML };
