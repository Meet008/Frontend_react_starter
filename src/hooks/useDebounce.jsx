import { useState, useEffect } from "react";

/**
 * useDebounce - returns a debounced value
 * @param {any} value - value to debounce
 * @param {number} delay - debounce delay in ms
 * @returns debouncedValue
 */
export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    // cleanup if value changes before delay
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
