const screen = document.getElementById('screen')
const buttons = document.querySelectorAll('button')
let expression = "";
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        const value = button.innerText

        if(value === "ac"){
            expression = "";
            screen.innerText = "0";
        }
        else if(value === "c"){
            expression = expression.slice(0,-1);
            screen.innerText = expression || "0"
        }
        else if(value === "=" || value === "enter"){
            try{
                expression = expression.replace("x","*").replace("%","/100");
                screen.innerText = eval(expression);
                expression = screen.innerText;
            }catch{
                screen.innerText = "Error";
                expression = "";

            }
        }else{
            expression += value;
            screen.innerText = expression;
        }
    })
})