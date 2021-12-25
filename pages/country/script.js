const url = new URL(window.location.href);
const name = url.searchParams.get("name");

console.log("name", name);
