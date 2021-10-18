const refs = {
  input: document.querySelector("input"),
  text: document.querySelector("span"),
};
const onInputChange = (e) => {
  refs.text.style.fontSize = e.target.value + "px";
};

refs.input.addEventListener("input", onInputChange);
