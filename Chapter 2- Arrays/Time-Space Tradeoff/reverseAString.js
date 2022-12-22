const { performance } = require('perf_hooks');
const start = performance.now();

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!;"
// const reversed1 = story.split("").reverse().join("");
// console.log(reversed1);
// console.log(`This too ${performance.now() - start} milliseconds to run`);

const reverse = () => {
    rev = [];
    var str = story
    for (i = str.length-1; i > 0; i--) {
        rev.push(str[i]);
    }
    rev.join("");
    console.log(rev, str.length);
}
console.log(`This too ${performance.now() - start} milliseconds to run`);
reverse();




