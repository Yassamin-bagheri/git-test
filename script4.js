function calculateP(N) {
    let p = 0;
    for (let i = 1; i <= N; i++) {
        p += 1 / (3 * i);
    }
    return p;
}

const N = prompt("لطفا عدد N را وارد کنید:");
const result = calculateP(N);

console.log(`مقدار محاسبه شده برابر است با: ${result}`);