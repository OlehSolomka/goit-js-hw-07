const refs = {
  input: document.querySelector("input"),
};
const numberValueRef = parseInt(refs.input.getAttribute("data-length"));

const onFocusLossCheck = () => {
  if (refs.input.value.length === numberValueRef) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
};
refs.input.addEventListener("blur", onFocusLossCheck);
