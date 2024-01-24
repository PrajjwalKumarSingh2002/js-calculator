let display_area = document.getElementById("display_area_input")
let string = ""
let buttons = document.querySelectorAll(".btn")
//let values = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","Clr",""]

const input_range = Array.from(buttons)

input_range.forEach((button) => {
    button.addEventListener("click",(e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == "Clr"){
            string = "";
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == "BS"){
            string = string.substring(0,string.length - 1);
            document.querySelector('input').value = string
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})