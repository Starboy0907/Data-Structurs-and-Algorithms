//Knowledge Base. 1: Know Switch Case w/ if statements. 2: Setup a variable that counts 3: Setup an array of parens. 4: Setup a condition that falsifies a closing bracket at index of 0
const parensValid = () => {
    const y = "y(3(p)p(3)r)s";
    const n = "d(i{a}l[t]o)n{e";
    const k = "n)0(t(0)k";
    const g = "a(1)s[O(n]0{t)0}k";
    const a = [];
    let temp = "";

    for (i = 0; i < g.length; i++) {
        if (g[i] == '(') {
            a.push(g[i]);
        }
        if (g[i] == ')') {
            a.push(g[i]);
        }
        if (g[i] == ']') {
            a.push(g[i]);
        }
        if (g[i] == '[') {
            a.push(g[i]);
        }
        if (g[i] == '}') {
            a.push(g[i]);
        }
        if (g[i] == '{') {
            a.push(g[i]);
        }
    }
    if (a[0] == ')') {
        console.log(false)
    }
    if (a.length % 2 == 1) {
        console.log(false)
    }
    for (i = 0; i < a.length; i++) {
        console.log(temp)
        if ((a[i] == '(' || a[i] == '{') && (temp == '[')) {
            console.log(false);
        }
        if ((a[i] == '(' || a[i] == ')') && (temp == '{')) {
            console.log(false);
        }
        temp = a[i];
        
    };

    console.log(a);
}
parensValid();
