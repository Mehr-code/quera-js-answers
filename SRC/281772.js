const s = String(readline()).split("");
const len = s.length;
let flag = false;
for (let i = 0; i <= len; i++) {
  if (s[i] === "m") {
    flag = true;
    break;
  }
}
if (flag) {
  print("No");
} else {
  print("Yes");
}
