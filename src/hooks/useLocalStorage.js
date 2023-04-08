import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultArray) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultArray
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
export { useLocalStorage };
