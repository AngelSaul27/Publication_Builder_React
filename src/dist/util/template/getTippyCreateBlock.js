function getTippyCreateBlock() {
    const htmlStr = `
        <span>
            <strong class='text-blue-300'>Click aquí</strong> para abrir el menu
        </span> 
        <span>
            <strong class='text-blue-300'>Arrastra</strong> para mover
        </span>`;

    const newHtml = document.createElement("div");
    newHtml.setAttribute(
        "class",
        "flex flex-col items-center font-light text-xs"
    );
    newHtml.innerHTML = htmlStr.trim();

    return newHtml;
}
export { getTippyCreateBlock }