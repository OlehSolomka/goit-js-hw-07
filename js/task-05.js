const refs = {
  input: document.querySelector("input"),
  name: document.querySelector("h1 span"),
};
const onInputNameChanger = () => {
  if (refs.input.value === "") {
    refs.name.textContent = "незнакомец";
  } else {
    refs.name.textContent = refs.input.value;
  }
};
refs.input.addEventListener("input", onInputNameChanger);