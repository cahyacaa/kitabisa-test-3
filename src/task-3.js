function countBox(...number) {
    let count = 1;
    const temporary = [];
    number.forEach(element => {
        while (count <= element) {
            if (element % count === 0) temporary.push(count);
            count++;
        }
        count = 1;
    });
    var map = new Map();
    temporary.forEach(a => map.set(a, (map.get(a) || 0) + 1));
    const hcfEach = temporary.filter(a => map.get(a) === number.length);
    return Math.max(...hcfEach);
}

const kue = 20;
const apple = 25;

const box = countBox(apple,kue);
console.log(`Banyaknya kotak yang dapat dibuat oleh Ainun dengan membagi rata masing masing item per kotak adalah ${box} kotak`)

module.exports= countBox;