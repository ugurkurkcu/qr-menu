import { buttonData } from "./constants.js";
import { buttonsArea } from "../main.js";

const menuList = document.getElementById("menu-list");

export const renderMenuItems = (a) => {
  // map yeni bir dizi olustrur
  menuList.innerHTML = a
    .map(
      (item) => `
<a
  href="/detail.html?id=${item.id}"
  id="card"
  class="d-flex flex-column flex-md-row text-decoration-none text-white gap-3"
>
  <img class="rounded-5 shadow img-fluid" src="${item.img}" alt="" />
  <div>
    <div class="d-flex justify-content-between">
      <h5>${item.title}</h5>
      <p class="fw-bold text-warning font-weight-bolder text-decoration-underline">${(
        item.price * 30
      ).toFixed(2)}₺</p>
    </div>
    <p class="lead ">
      ${item.desc}
    </p>
  </div>
</a>

  `
    )
    .join("");
  // console.log(yeni_dizi);
};

// ekrana butonlari basan fonksiyon

export const renderButtons = (activeBtn) => {
  buttonsArea.innerHTML = "";

  buttonData.forEach((btn) => {
    const buttonElement = document.createElement("button");
    buttonElement.className = "btn btn-outline-warning ";
    buttonElement.setAttribute("data-id", btn.value);
    buttonElement.innerHTML = btn.text;

    if (activeBtn === btn.text) {
      buttonElement.classList.add("btn-warning", "text-white");
    }

    buttonsArea.appendChild(buttonElement);
  });
};

// <button data-id="breakfast" class="btn btn-outline-warning text-white">Breakfast</button>
