import { renderButtons, renderMenuItems } from "./scripts/ui.js";

export const buttonsArea = document.getElementById("buttons");
export let data;

async function fetcMenu() {
  const res = await fetch("./db.json");

  data = await res.json();
  //   console.log(data);
}
// await fetcMenu();

// console.log("DISARIDAKI GORUNTU",data)

window.addEventListener("DOMContentLoaded", () => {
  renderButtons("Hepsi");

  fetcMenu()
    //islem basarili oldugunda ekrana kartlari basacak fonksiyon
    .then(() => renderMenuItems(data.menu));
});

buttonsArea.addEventListener("click", (e) => {
  // eger butona tiklanmadiysa fonksiyonu durdur
  // return un bir diger islevi de fonksiyonu durdurmaktir
  if (e.target.id == "buttons") return;

  renderButtons(e.target.innerText);
  //   console.log(e.target.data-id);
  const selectedCategory = e.target.dataset.id;

  if (selectedCategory === "all") {
    renderMenuItems(data.menu);
  } else {
    const filtered = data.menu.filter(
      (name) => name.category === selectedCategory
    );
    //   console.log(filtered)

    renderMenuItems(filtered);
  }
});
