let timer: any = null;
export const debounceTwo = (callback: any, delay: any) => {
  try {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback();
    }, delay);
  } catch (error: any) {}
};

export function debounce(fn: any, delay = 250) {
  let timeout: any;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
