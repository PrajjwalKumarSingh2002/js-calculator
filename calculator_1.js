let string = ""
let display_area = document.getElementById("display_area")
let buttons = document.querySelectorAll(".btn")

Array.from(buttons).forEach((button) => {
    button.addEventListener("click",(e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            display_area.innerText = string;
        }
        else if(e.target.innerHTML == "Clr"){
            string = "";
            display_area.innerText = string;
        }
        else if(e.target.innerHTML == "BS"){
            string = string.substring(0,string.length - 1);
            display_area.innerText = string;
        }
        else{
            
            string = string + e.target.innerHTML
            display_area.innerText = string;
        }
        
        // console.log(e.target)
        // string = string + button.innerHTML
        // console.log(string);
        // display_area.innerHTML = string;

    })
})