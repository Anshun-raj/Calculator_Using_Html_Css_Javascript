var li = document.querySelectorAll("li");

var res = document.getElementById("res");

for (i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      res.innerHTML = eval(res.innerHTML);
    } else if (this.innerHTML == "C") {
      res.innerHTML = "";
    } else {
      res.innerHTML += this.innerHTML;
    }
  });
}
