const input = `5 100
3 1 2 4 5`.toString().trim().split("\n").map(e => e.split(" ").map(Number));
const [n, k] = input[0].map(BigInt);
const list = input[1].sort((a, b) => a - b).map(BigInt);
let ans = BigInt(k);
let min = list[0];
let tmp

for (let i = BigInt(1); i < n; i++) {
    tmp = k / (list[i] * (n - i) + min * i);
    if (k % (list[i] * (n - i) + min * i) != 0) tmp++;
    ans = ans < tmp ? ans : tmp;

}
console.log(ans.toString());