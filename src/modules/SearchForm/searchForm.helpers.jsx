let timeout;
export function debounce(fn, timeoutMs) {
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), timeoutMs);
  };
}
