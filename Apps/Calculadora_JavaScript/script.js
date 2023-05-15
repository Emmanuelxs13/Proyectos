const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//ForEach selecciona todos elementos de una tabla
buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            //Para borrar todo el texto se usa el innerText
            display.innerText="";
        } else if(item.id=="backspace"){
            //Para que todo se convierta en una cadena de caracteres toString()
            let string = display.innerText.toString();
            //Para buscar dentro de una cadena de caracteres se usa la funcion substr() 
            display.innerText=string.substr(0,string.length-1);
        } else if(item.innerText !="" && item.id=="equal"){
            //Para que tome los números con una operación aritmetica se usa eval()
            display.innerText=eval(display.innerText);
        } else if(display.innerText=="" && item.id=="equal"){
            display.innerText = "Null";
            setTimeout(()=>(display.innerText=""), 2000);
        } else {
            display.innerText+=item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
/* const toggleIcon = doc.querySelector("toggler-icon"); */
let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark=!isDark
};