export const listColor: string[] = [
  '#1890FF',
  '#FFC107',
  '#FF426F',
  '#0AFFE2',
  '#720915',
  '#fb8500',
  '#3e5c76',
  '#41ead4',
  '#38b000',
  '#7209b7',
];

export function getRandomColor() {
  // get random index value
  const randomIndex = Math.floor(Math.random() * listColor.length);

  // get random item
  const item = listColor[randomIndex];

  return item;
}
