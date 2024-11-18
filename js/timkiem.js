const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#btn-search");
const checkSearch = () => {
  if (
    searchInput.value === "Iphone" ||
    searchInput.value === "iphone" ||
    searchInput.value === "IPHONE"
  ) {
    window.location.href = "IPhone.html";
    return;
  }
  if (searchInput.value === "realme") {
    window.location.href = "realme.html";
    return;
  }
  if (searchInput.value === "samsung") {
    window.location.href = "SamSung.html";
    return;
  }
};
searchButton.addEventListener("click", checkSearch);
