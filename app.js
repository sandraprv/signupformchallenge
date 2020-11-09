const form = document.getElementById("form");
const inputs = document.getElementsByTagName("input");
var arr = [...inputs];


form.addEventListener("submit", (event) => {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value === "") {
      arr[i].classList.add("error");
      arr[i].nextElementSibling.classList.add("is-visible");
    } else {
      arr[i].classList.remove("error");
      arr[i].nextElementSibling.classList.remove("is-visible");
    }
  }
  event.preventDefault();

});
