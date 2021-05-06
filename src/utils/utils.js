import { useState, useEffect } from 'react';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let timeout;
export function debounce(fn, timeoutMs) {
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), timeoutMs);
  };
}

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
