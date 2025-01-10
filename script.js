const COUNTER_LIMIT = 5;

const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
// console.log(decreaseButtonEl, increaseButtonEl, resetButtonEl);

const counterValueEl = document.querySelector(".counter__value");
// let counterValue = counterValueEl.textContent;
let counterValue = parseInt(counterValueEl.textContent, 10) || 0;

let titleEl = document.querySelector(".counter__title");
console.log(titleEl);

// Update title in DOM
function updateTitle(message = "Fancy counter") {
  titleEl.textContent = message;
}

// Update counter value in DOM
function updateCounterValue() {
  counterValueEl.textContent = counterValue;
}

// handle premium limit
function handlePremium() {
  updateTitle(`Limit! buy pro for >${COUNTER_LIMIT}`);
  return counterValue; // return unchanged value
}

function handleDecreaseWithoutMinus() {
  if (counterValue === 0) return 0;
  if (counterValue <= COUNTER_LIMIT) updateTitle();
  return --counterValue;
}

// Reset counter and title
function handleReset() {
  updateTitle();
  counterValue = 0;
  return counterValue;
}

// Correct event name: 'click' instead of 'onClick'
increaseButtonEl.addEventListener("click", () => {
  counterValue =
    counterValue < COUNTER_LIMIT ? ++counterValue : handlePremium();
  updateCounterValue();
}); // This will log the updated count each time the button is clicked;

decreaseButtonEl.addEventListener("click", () => {
  counterValue = handleDecreaseWithoutMinus();
  updateCounterValue();
});

resetButtonEl.addEventListener("click", () => {
  counterValue = handleReset();
  updateCounterValue();
});
