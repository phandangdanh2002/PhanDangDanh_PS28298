document.addEventListener("DOMContentLoaded", function() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");
    const sign_up_btn2 = document.querySelector("#sign-up-btn2");

    const container = document.querySelector(".container");
  
    sign_up_btn.onclick = function() {
      container.classList.add("sign-up-mode");
    };
  
    sign_in_btn.onclick = function() {
      container.classList.remove("sign-up-mode");
    };

    sign_up_btn2.onclick = function() {
      container.classList.add("sign-up-mode2");
    };
  
    sign_in_btn2.onclick = function() {
      container.classList.remove("sign-up-mode2");
    };
  });
