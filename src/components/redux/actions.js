export function increment() {
  return {
    type: "INCREMENT",
  };
}

export function decrement() {
  return {
    type: "DECREMENT",
  };
}

export function resetCounter() {
  return {
    type: "RESET",
  };
}

export function setCounter(value) {
  return {
    type: "SETCOUNTER",
    payload: value,
  };
}
