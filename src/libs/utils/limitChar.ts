export const limitChar = (char: string, max = 50) => {
  return char.length > max ? `${char.substring(0, max)}...` : char;
};
