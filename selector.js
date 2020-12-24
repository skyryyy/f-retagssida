function clickedTop() {
  localStorage.setItem("location", "C");
}

function clickedBottom() {
  localStorage.setItem("location", "A");
}

function clickedTop2() {
  localStorage.setItem("hungriness", "U");
}

function clickedBottom2() {
  localStorage.setItem("hungriness", "M");
}

function clickedTop3() {
  localStorage.setItem("distance", "F");

  let target =
    localStorage.getItem("location") +
    "_" +
    localStorage.getItem("hungriness") +
    "_" +
    localStorage.getItem("distance") +
    ".html";

  window.location = target;
}

function clickedBottom3() {
  localStorage.setItem("distance", "m");

  let target =
    localStorage.getItem("location") +
    "_" +
    localStorage.getItem("hungriness") +
    "_" +
    localStorage.getItem("distance") +
    ".html";

  window.location = target;
}
