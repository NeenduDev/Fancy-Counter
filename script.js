const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
// console.log(decreaseButtonEl, increaseButtonEl, resetButtonEl);

const counterValueEl = document.querySelector(".counter__value");
// let counterValue = counterValueEl.innerHTML;
let counterValue = parseInt(counterValueEl.innerHTML, 10) || 0;

let titleEl = document.querySelector(".counter__title");
console.log(titleEl);

function handlePremium() {
  titleEl.innerHTML = "Limit! buy pro for >5";
  return counterValue;
}

function handleDecreaseWithoutMinus() {
  if (counterValue === 0) return 0;
  if (counterValue <= 5) {
    titleEl.innerHTML = "Fancy counter";
  }
  return --counterValue;
}

function handleReset() {
  titleEl.innerHTML = "Fancy counter";
  counterValue = 0;
  return counterValue;
}

// Correct event name: 'click' instead of 'onClick'
increaseButtonEl.addEventListener(
  "click",
  () =>
    (counterValueEl.innerHTML =
      counterValue < 5 ? ++counterValue : handlePremium())
); // This will log the updated count each time the button is clicked;

decreaseButtonEl.addEventListener(
  "click",
  () => (counterValueEl.innerHTML = handleDecreaseWithoutMinus())
);

resetButtonEl.addEventListener(
  "click",
  () => (counterValueEl.innerHTML = handleReset())
);
