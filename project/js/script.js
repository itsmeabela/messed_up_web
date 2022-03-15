var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {

        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
let elcart = document.getElementById('cart');
console.log(elcart);
let count = 0;

function cart() {
    count += 1;
    elcart.innerText = count;
}

function add() {
    if (count > 1) {

    }
}




function check() {
    var elname = document.getElementById("name");
    var elmsg = document.getElementById("msg");
    if (elname.value.length < 4) {
        elmsg.textContent = "please enter 4 or more characters";
    } else {
        elmsg.textContent = " ";
    }
}

function save() {
    var elpass = document.getElementById("password");
    var elp = document.getElementById("pass");
    if (elpass.value.length < 4) {
        elp.textContent = "it must be greater than four characters";
    } else if (elpass.value.length <= 6) {
        elp.textContent = "successfully saved (weak password)";
    } else if (elpass.value.length > 6) {
        elp.textContent = "successfully saved (strtong password)";
    } else {
        elp.textContent = " ";
    }
}