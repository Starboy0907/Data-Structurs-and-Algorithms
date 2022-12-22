//Knowledge Base. 1: Know Switch Case w/ if statements. 2: Setup a variable that counts 3: Setup an array of parens. 4: Setup a condition that falsifies a closing bracket at index of 0
const parensValid = () => {
    const y = "y(3(p)p(3)r)s";
    const n = "n(0(p)3";
    const k = "n)0(t(0)k";
    const a = [];

    for (i = 0; i < y.length; i++) {
        if (y[i] == '(') {
            a.push(y[i]);
        }
        if (y[i] == ')') {
            a.push(y[i]);
        }
    }
    if (a[0] == ')') {
        console.log(false)
    }
    if (a.length % 2 == 0) {
        console.log(true)
    }
    if (a.length % 2 == 1) {
        console.log(false)
    }
    console.log(a);
}
parensValid();