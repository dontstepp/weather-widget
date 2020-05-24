const buttons = document.querySelectorAll("button");

function GetData(index) {
  fetch(`/api/${index}/`)
    .then(e => e.json())
    .then(data => {
      const img = document.querySelector("img");
      const city = document.querySelector("h3");
      const city_temp = document.querySelector("p");

      img.src = data.img;
      city.innerHTML = data.city;
      city_temp.innerHTML = data.temp;
    });
}

buttons[0].addEventListener("click", () => {
  GetData(0);
});

buttons[1].addEventListener("click", () => {
  GetData(1);
});

buttons[2].addEventListener("click", () => {
  GetData(2);
});
