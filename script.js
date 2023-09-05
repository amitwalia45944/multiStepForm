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
const plan_card = document.querySelectorAll(".card-plan");
const plan_choose = document.querySelector(".plan-add-ons");
const finishContainer = document.querySelector(".inner-finish-container");
const thanksContainer = document.querySelector(".thanks");


let flag_click_card_plan = false;
let budget = false;
let update_extra_price = 0;
let plan_info;
let total_price1;
let total_price2;
let number1;
let number2;
let flag_click_add_ons = false;

function plan_change() {

    let budgets = document.querySelectorAll('#money-charges')
    let choice = document.querySelector('#choice');
    let yearly_content = document.querySelectorAll('#yearly')

    if (choice.value === '1') {
        budget = true;
        budgets[0].textContent = '$90/yr';
        yearly_content[0].style.display = "block";
        budgets[1].textContent = '$120/yr';
        yearly_content[1].style.display = "block";
        budgets[2].textContent = '$150/yr';
        yearly_content[2].style.display = "block";

    } else {
        budgets[0].textContent = '$9/mo';
        yearly_content[0].style.display = "none";
        budgets[1].textContent = '$12/mo';
        yearly_content[1].style.display = "none";
        budgets[2].textContent = '$15/mo';
        yearly_content[2].style.display = "none";
    }
};

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

            if (flag_click_card_plan) {
                customer_plan.style.display = "none";
                customer_plan_add_ons.style.display = "block";
                two.style.backgroundColor = "transparent";
                three.style.backgroundColor = "aqua";
            }

            let extra_add_on_price = document.querySelectorAll('.extra-add-on-price');

            if (budget) {
                extra_add_on_price[0].innerText = "+$10/yr";
                extra_add_on_price[1].innerText = "+$20/yr";
                extra_add_on_price[2].innerText = "+$20/yr";
            } else {
                extra_add_on_price[0].innerText = "+$1/mo";
                extra_add_on_price[1].innerText = "+$2/mo";
                extra_add_on_price[2].innerText = "+$2/mo";
            }

        } else if (event.target.parentElement.parentElement.classList.contains("customer-plan-add-ons")) {

            if (flag_click_add_ons) {
                customer_plan_add_ons.style.display = "none";
                customer_finish_form.style.display = "block";
                three.style.backgroundColor = "transparent";
                four.style.backgroundColor = "aqua";
            }

            let splitted_plan = plan_info.split('\n');

            let basic_package = document.querySelector('#basic-package');
            let basic_package_price = document.querySelector('#basic-package-price');

            basic_package.textContent = splitted_plan[0];
            basic_package_price.textContent = splitted_plan[2];
            total_price1 = splitted_plan[2];
            number1 = parseInt(total_price1.replace(/\D+/g, ''), 10);

            let total_price_basic_add_ons = document.querySelector('#total-price-basic-add-ons');

            total_price_basic_add_ons.textContent = number1 + update_extra_price;
            total_price_basic_add_ons.textContent = total_price_basic_add_ons.textContent + "$";

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

    } else if (event.target.className === "card-plan") {

        if (!event.target.classList.contains('active')) {
            
            let cardPlans = document.querySelectorAll('.card-plan');
            
            cardPlans.forEach(function(card) {
                card.classList.remove('active');
            });

            event.target.classList.add('active');
            flag_click_card_plan = true;
            plan_info = event.target.innerText;

        } else {
            event.target.classList.remove('active');

            flag_click_card_plan = false;
            plan_info = "";
        }

    } else if (event.target.classList.contains("checkbox")) {

        let item_id = event.target.getAttribute("data-item-id");
        let content_element = document.querySelector(`.services#${item_id} .content`);

        let extra_add_on_detail = event.target.parentElement.nextElementSibling.firstElementChild.innerText;
        let extra_add_on_price = event.target.parentElement.parentElement.nextElementSibling.firstElementChild.innerText;

        if (event.target.checked) {

            let add_ons_service1 = document.querySelector("#add-on-services-detail");

            let ad_container = document.createElement('div');

            ad_container.style.display = 'flex';
            ad_container.style.justifyContent = 'space-between';

            let ad_content = document.createElement('p');
            ad_content.setAttribute('data-ad-identifier', item_id);

            ad_content.textContent = extra_add_on_detail;

            let ad_price = document.createElement('p');
            ad_price.textContent = extra_add_on_price;

            ad_container.appendChild(ad_content);
            ad_container.appendChild(ad_price);

            add_ons_service1.appendChild(ad_container);

            number2 = parseInt(extra_add_on_price.replace(/\D+/g, ''), 10);

            update_extra_price += number2;

            flag_click_add_ons = true;

        } else {
            update_extra_price -= number2;

            let adContentToRemove = document.querySelector(`[data-ad-identifier="${item_id}"]`);
            
            if (adContentToRemove) {
                adContentToRemove.parentElement.remove();
            }
        }

    } else if (event.target.classList.contains('change')) {

        customer_finish_form.style.display = "none";
        customer_plan.style.display = "block";
        four.style.backgroundColor = "transparent";
        two.style.backgroundColor = "aqua";
    }
};