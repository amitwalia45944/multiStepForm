const back_button = document.querySelector("#back");
const customer_info = document.querySelector("#customer-information");
const customer_plan = document.querySelector("#customer-plan");
const customer_plan_add_ons = document.querySelector("#plan-add-ons");
const customer_finish_form = document.querySelector("#finish-form");
const customer_last_part = document.querySelector("#last-part");
const one = document.querySelector("#box-1");
const two = document.querySelector("#box-2");
const three = document.querySelector("#box-3");
const four = document.querySelector("#box-4");
const container = document.querySelector(".container");
const check_boxes = document.querySelectorAll(".checkbox");
const plan_card = document.querySelectorAll(".card");
const plan_choose = document.querySelector(".plan-add-ons");
const finishContainer = document.querySelector(".inner-finish-container");
const thanksContainer = document.querySelector(".thanks");

function form_validation() {

    function clear_error() {

        let errors = document.getElementsByClassName('show-error');

        for (let item of errors) {
            item.textContent = "";
        }
    };

    function set_error(id, error) {
        let element = document.getElementById(id);

        element.getElementsByClassName('show-error')[0].textContent = error;
    }

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
        return true;
    }
};

container.addEventListener("click", change_page);

function change_page(event) {

    if (event.target.classList.contains("next")) {

        event.preventDefault();

        if (event.target.parentElement.parentElement.classList.contains("customer-info")) {

            if (form_validation()) {

                customer_info.style.display = "none";
                customer_plan.style.display = "block";
                one.style.backgroundColor = "transparent";
                two.style.backgroundColor = "aqua";
            }

        } else if (event.target.parentElement.parentElement.classList.contains("customer-plan-info")) {

            customer_plan.style.display = "none";
            customer_plan_add_ons.style.display = "block";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "aqua";

            

        } else if (event.target.parentElement.parentElement.classList.contains("customer-plan-add-ons")) {

            customer_plan_add_ons.style.display = "none";
            customer_finish_form.style.display = "block";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "aqua";

        } else if (event.target.parentElement.parentElement.classList.contains("customer-finish-form")) {

            customer_finish_form.style.display = "none";
            customer_last_part.style.display = "block";
        }

    } else if (event.target.classList.contains("back")) {

        event.preventDefault();

        if (event.target.parentElement.parentElement.classList.contains("customer-plan-info")) {

            customer_info.style.display = "block";
            customer_plan.style.display = "none";
            one.style.backgroundColor = "aqua";
            two.style.backgroundColor = "transparent";

        } else if (event.target.parentElement.parentElement.classList.contains("customer-plan-add-ons")) {

            customer_plan_add_ons.style.display = "none";
            customer_plan.style.display = "block";
            three.style.backgroundColor = "transparent";
            two.style.backgroundColor = "aqua";

        } else if (event.target.parentElement.parentElement.classList.contains("customer-finish-form")) {

            customer_finish_form.style.display = "none";
            customer_plan_add_ons.style.display = "block";
            three.style.backgroundColor = "aqua";
            four.style.backgroundColor = "transparent";
        }
    } else if (event.target.className === "plan") {


    } else if (event.target.classList.contains("checkbox")) {


    } else if (event.target.dataset.change === "change") {


    }
};
