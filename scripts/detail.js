const outlet = document.getElementById("outlet");

//! URLSearchParams

const params = new URLSearchParams(window.location.search);

const paramId = params.get("id");
// console.log(paramId);

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("../db.json");
  const data = await res.json();

  const product = data.menu.find((item) => item.id == paramId);

  //   console.log(product);
  renderPage(product);
});

function renderPage(product) {
  outlet.innerHTML = `
            <div class="d-flex justify-content-between fs-5">
            <a href="/">
              <img
                src="images/home.png"
                alt=""
                width="40px"
                style="
                  border-radius: 100%;
                  background-color: white;
                  padding: 4px;
                  box-shadow: inset 0 0 12px black, 0 0 7px white;
                "
              />
            </a>
            <p class="">anasayfa / shakes / oreo</p>
          </div>
    
          <h1 class="text-center my-3">${product.title}</h1>
          <img
            class="rounded-4 object-fit-cover shadow"
            src="images/item-${product.id}.jpeg"
            alt=""
          />
          <h3 class="mt-3">
            <span>Urunun Kategorisi: </span>
            <span class="text-warning">${product.category}</span>
          </h3>
          <h3 class="mt-3">
            <span>Urunun Fiyati: </span>
            <span class="text-warning"> ${(product.price*30).toFixed(2)}₺</span>
          </h3>
          <p class="lead">
            ${product.desc}
          </p>
    
            `;
}

