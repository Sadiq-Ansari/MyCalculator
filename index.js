let num_btns = document.querySelectorAll(".num");
let optrs_btns = document.querySelectorAll(".optr");
let clear_btn = document.querySelector(".clear");
let equal_btn = document.querySelector("#equal");
let backspace_btn = document.querySelector(".backspace");
let cal_text = document.querySelector("h1");
let display = document.querySelector(".display");

function change_h1() {
  if (display.innerHTML === "") {
    // h1 should have margin top
    cal_text.classList.remove("active");
  } else {
    // h1 should not have margin top and text size should be small
    cal_text.classList.add("active");
  }
}
function add_to_display(e) {
  let current_btn = e.target;
  let value = current_btn.value;
  display.innerHTML = display.innerHTML + value;
  change_h1();
}

num_btns.forEach((num) => {
  num.onclick = (e) => {
    add_to_display(e);
  };
});

optrs_btns.forEach((optr) => {
  optr.onclick = (e) => {
    // if last text is optr then skip
    add_to_display(e);
  };
});

// equal operation
equal_btn.onclick = () => {
  let value = display.innerText;
  display.innerText = eval(value);
};

clear_btn.onclick = () => {
  display.innerHTML = "";
  change_h1();
};
backspace_btn.onclick = () => {
  let string = display.innerText;
  display.innerText = string.slice(0, -1);
  change_h1();
};
