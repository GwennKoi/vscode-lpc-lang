// FluffOS syntax: async/await, template literals, new operators

async int fetch_score(promise p, buffer raw) {
    mixed result = await p;
    string err = acatch(await async_yield());
    mixed caught = acatch {
        await p;
    };

    int elapsed = time_expression {
        result ??= 0;
    };

    return result;
}

void operators(mapping m, int a, int b) {
    int x, y, z;

    x ||= 1;
    y &&= 2;
    z = a ?? b;

    mixed v = m.key;
    mixed w = m?.key;
    mixed u = m?.[0];
    mixed nested = m?.a?.b;
    float f = a ? .5 : 1.0;
}

void functionals(object tp) {
    function add = (: $1 + $2 :);
    function tell = (: tell_object($(tp), $1) :);
}

string greet(string name) {
    return `Hello ${capitalize(name)}!
Escapes: \` and \$ stay literal, while ${"nested \"strings\""} interpolate.`;
}
