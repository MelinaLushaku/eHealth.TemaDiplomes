function changeForm(form) {
    let forms = document.querySelectorAll("form>div");
    if (form == 0) {
        forms[0].classList.remove("hidden");
        forms[0].classList.add("form-style");
        forms[1].classList.add("hidden");
        forms[1].classList.remove("form-style");
    } else {
        forms[1].classList.remove("hidden");
        forms[1].classList.add("form-style");
        forms[0].classList.add("hidden");
        forms[0].classList.remove("form-style");
    }
}

function validate(form) {
    let inputs = document.querySelectorAll("input");
    let test = document.getElementsByTagName("input");

    if (form == 0 && login[username] == "" && login[password] == "") {
        return false;
    } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
        return false;
    }
    return true
}
var login = {
    username: "",
    password: ""
}

