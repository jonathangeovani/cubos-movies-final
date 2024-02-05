export const debounce = (cb: (...args: any) => void, delay: number) => {
  let timeout: number;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
