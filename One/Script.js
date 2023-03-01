const containerbox = document.querySelector(".containerbox");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes = 21  ;


const generatePalette = () => {
    containerbox.innerHTML = ""; //clearing The Continer 
    for (let i = 0; i < maxPaletteBoxes; i++) {
        //Genrating A Random Hex Color Code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
                        <span class="hex-value"> ${randomHex}</span>`;
        // Adding Copy Event to Copy HexColor 
        color.addEventListener("click", () => copyColor(color, randomHex));
        containerbox.appendChild(color);
    }

}
generatePalette();
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then ( () => {
        colorElement.innerText = "Copied";      
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!"));
}

refreshBtn.addEventListener("click", generatePalette)