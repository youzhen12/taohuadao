const MAX = 2026;
const THRESHOLD = 2020;

let s1 = 0;
let s2 = 0;

const el1 = document.getElementById('score1');
const el2 = document.getElementById('score2');

const clamp = (n) => Math.max(0, Math.min(MAX, n));

const inc = (n) => {
  if (n < THRESHOLD) return clamp(Math.min(THRESHOLD, n + 10));
  return clamp(n + 1);
};

const dec = (n) => {
  if (n > THRESHOLD) return clamp(Math.max(THRESHOLD, n - 1));
  return clamp(n - 10);
};

const render = () => {
  el1.textContent = String(s1);
  el2.textContent = String(s2);
};

document.getElementById('plus1').addEventListener('click', () => {
  s1 = inc(s1);
  render();
});
document.getElementById('minus1').addEventListener('click', () => {
  s1 = dec(s1);
  render();
});

document.getElementById('plus2').addEventListener('click', () => {
  s2 = inc(s2);
  render();
});
document.getElementById('minus2').addEventListener('click', () => {
  s2 = dec(s2);
  render();
});

render();

