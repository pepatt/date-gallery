let inputbox = document.getElementById("inputbox"); 
let form = document.getElementById("form"); 
console.log(form);

let textReplace = document.getElementById("textReplace");
let button = document.getElementById("button");
console.log(button);

function inputCompare(event){ 
    event.preventDefault();
    console.log("testing"); 
    console.log(inputbox.value);
    if(inputbox.value === "one") {
        textReplace.innerText = "yes";

        setTimeout(() => {
            window.location.href = "./pages/gallery.html";
        }, 2000);
    } else {
        textReplace.innerText = "no";
    }

    // textReplace.innerText = inputbox.value === "one" ? "yes" : "no";


} 

form.addEventListener("submit", inputCompare);

// setTimeout();