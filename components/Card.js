import { countryPageUrl } from "../constants/url.constnats.js";

export function Card({ name, flags }) {
  const wrapper = document.createElement("div");
  const flag = document.createElement("img");
  flag.src = flags.png;
  const title = document.createElement("h3");
  const anchor = document.createElement("a");
  anchor.appendChild(title);
  anchor.href = countryPageUrl;

  const url = new URL(anchor.href);
  url.searchParams.set("name", name);
  anchor.href = url;

  title.innerText = name;

  wrapper.appendChild(anchor);
  wrapper.appendChild(flag);

  return wrapper;
}
