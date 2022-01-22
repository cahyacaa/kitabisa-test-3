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


module.exports= countBox;