const COUNTER_LIMIT = 5;

const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
console.log(counterEl, decreaseButtonEl, increaseButtonEl, resetButtonEl);

const counterValueEl = document.querySelector(".counter__value");
// let counterValue = counterValueEl.textContent;
let counterValue = parseInt(counterValueEl.textContent, 10) || 0;

let titleEl = document.querySelector(".counter__title");
console.log(titleEl);

// Update title in DOM
function updateTitle(message = "Fancy counter") {
  titleEl.innerHTML = message;
}

// Update counter value in DOM
function updateCounterValue() {
  counterValueEl.textContent = counterValue;
}

// handle premium limit with styling
function handlePremium() {
  updateTitle(`Limit! buy <b>pro</b> for >${COUNTER_LIMIT}`);
  counterEl.classList.add("counter--limit");
  return counterValue; // return unchanged value
}

// Handle decrease while managing limit styling
function handleDecreaseWithoutMinus() {
  if (counterValue === 0) {
    alert("No negative values");
    return 0;
  }
  if (counterValue <= COUNTER_LIMIT) updateTitle();
  counterEl.classList.remove("counter--limit");
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
