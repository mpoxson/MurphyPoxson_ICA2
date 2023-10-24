const hideButtons = document.querySelector(".hiders");
const A = document.querySelector("#A");
const B = document.querySelector("#B");
const C = document.querySelector("#C");
hideButtons.addEventListener("click", (e) => {
  const { target } = e;
  const { value } = target;

  console.log(value);

  switch (value) {
    case "hideA":
      A.style.visibility = "hidden";
      break;
    case "hideB":
      B.style.visibility = "hidden";
      break;
    case "hideC":
      C.style.visibility = "hidden";
      break;
  }

  return;
});

const showButtons = document.querySelector(".buttons");
showButtons.addEventListener("click", (e) => {
  const { target } = e;
  const { value } = target;

  console.log(value);

  switch (value) {
    case "showA":
      A.style.visibility = "visible";
      break;
    case "showB":
      B.style.visibility = "visible";
      break;
    case "showC":
      C.style.visibility = "visible";
      break;
  }

  return;
});
