let sum1 = 0;
let sum2 = 0;

let sum3 = 0;

let sum5 = 0;
let sum4 = 0;

const numbers = [];
const x = [10, 7, 1, 2, 8, 7, 4, 8, 6, 5, 12, 3 , 7, 5 , 14, 1];
const s = 100;

for (let i = 0; i < x.length; i++) {
    console.log("x" + i + ": " + (x[i] / s))
    numbers.push(x[i] / s);
    sum4 += x[i] / s;
}

console.log("Сумма всех P(x) должна быть равны 1, то что дальше это проверка, если оно не равно 1, то проверяйте свои значения, иначе все последующие будут неправельными: " + sum4);

for (let i = 0; i < numbers.length; i++) {
    sum5 += numbers[i] * i;
}

console.log("Математическое ожидание:" + sum5);

for (let i = 0; i < 15; i++) {
    sum1 = sum1 + (numbers[i] * Math.pow((i + 1), 2));
}

for (let i = 0; i < 15; i++) {
    sum2 = sum2 + (numbers[i] * (i + 1));
}

sum2 = Math.pow(sum2, 2);

console.log("Расчет дисперсии информационного блока системы: " + (sum1 - sum2), "Расчет среднеквадратического отклонения: " + Math.sqrt(sum1 - sum2));

for (let i = 0; i < 15; i++) {
    sum3 = sum3 + (numbers[i] * Math.log2(numbers[i]));
}

console.log("Расчет энтропии системы: " + (-1 * sum3))

/*let sum4 = 0;

for (let i = 0; i < x.length; i++) {
    console.log(x[i]/46);
    sum4 = sum4 + x[i]/46;
}

console.log(sum4);*/
