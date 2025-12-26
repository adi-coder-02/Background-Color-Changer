const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        const color = e.target.id;
        document.body.style.backgroundColor = color;
        if (color === "black") {
            document.body.style.color = "white"; 
        } else {
            document.body.style.color = "black";
        }

        const textElement = document.querySelectorAll("header , h3")
        textElement.forEach( function(element) {
            element.style.color = document.body.style.color;
        })
    })
})