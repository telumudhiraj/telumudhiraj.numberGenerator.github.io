var count = 1;
function box() {
  var num = document.getElementById("num").value;
  var color = document.getElementById("color").value;
  for (let i = 0; i < num; i++) {
    var box = document.createElement("button");
    box.id = "btn" + i + "";
    box.className = "btn";
    box.innerHTML = count++;
    box.style = "background-color:" + color + ";";
    document.body.appendChild(box);
  }

  var num = document.getElementById("num").value;

  for (let j = 0; j < 100; j++) {
    let id = "btn" + j;
    document.getElementById(id).onclick = (evt) => {
      evt.target.style.visibility = "hidden";
    };
  }
}
