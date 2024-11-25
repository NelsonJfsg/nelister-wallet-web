export function totalSum (numbers : number[]) {
  let total = 0;

  numbers.map((number ) => {
    total = total + number;
  });

  return total;
}