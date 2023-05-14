const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

click = document.getElementById("click").onclick = function() {
    hex_code = "#"
    for(let i = 0; i < 6; i++) {
        hex_code += hex[Math.floor(Math.random() * hex.length)]
    }

    document.getElementById("color-code").innerHTML = hex_code
    document.body.style.backgroundColor = hex_code

    // using event listener
}