import { getCountries } from "./helpers/getCountries.helpers.js";
import { Card } from "./components/Card.js";
import { getCountryByName } from "./helpers/getCountryByName.helpers.js";

const searchInput = document.getElementById("searchInput");
const countriesWrapper = document.querySelector(".countries");

const countries = await getCountries();

const render = (data, body) => {
  body.innerText = "";
  data.map((i) => {
    const card = Card(i);
    card.classList.add("country");
    body.appendChild(card);
  });
};

render(countries, countriesWrapper);

searchInput.addEventListener("input", async (e) => {
  const name = e.target.value;
  const country = await getCountryByName(name);
  render(country, countriesWrapper);
});
