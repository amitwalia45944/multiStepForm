const back_button = document.querySelector("#back");

function show_successful_mssg() {
    
};

function clear_error() {

    let errors = document.getElementsByClassName('show-error');

    for (let item of errors) {
        item.textContent = "";
    }
}

function set_error(id, error) {
    let element = document.getElementById(id);

    element.getElementsByClassName('show-error')[0].textContent = error;
}

function validate(event) {

    event.preventDefault();

    let flag = true;
    clear_error();

    let name = document.forms['log-in-form']["name"].value;

    if (name.length == 0) {
        set_error("fname", "*Required");
        flag = false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(name)) {
        set_error("fname", "*Invalid Name Format.");
        flag = false;
    } else if (name.length <= 4) {
        set_error("fname", "*shorter length");
        flag = false;
    }

    let email = document.forms['log-in-form']["email"].value;

    if (email === '') {
        set_error("femail", "*Required");
        flag = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        set_error("femail", "*Invalid Email Format.");
        flag = false;
    }

    let phone = document.forms['log-in-form']["phone"].value;

    if (phone.length > 10 || phone.length < 10) {
        set_error("fphone", "*Required 10 digits!");
        flag = false;
    } else if (!/^\d{10}$/.test(phone)) {
        set_error("fphone", "*Invalid mobile format.")
        flag = false;
    }
    
    if (flag) {
        show_successful_mssg();
    }
}