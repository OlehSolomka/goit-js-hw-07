let counterValue = 0;

const incrButtonRef = document.querySelector('[data-action="increment"]');
const decrButtonRef = document.querySelector('[data-action="decrement"]');

const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};
const decrement = () => {
  counterValue--;
  document.getElementById("value").textContent = counterValue;
};

incrButtonRef.addEventListener("click", increment);
decrButtonRef.addEventListener("click", decrement);
