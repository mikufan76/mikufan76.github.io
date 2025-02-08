/// https://gist.github.com/Tony1324/bbd45f3f87c480b6f205906242000f2a
function dot([a, b, c], [x, y, z]) {
    return a * x + b * y + c * z
}

function normalize(v) {
    let magnitude = mag(v)
    return mul(v, 1 / magnitude)
}

function mul([x, y, z], s) {
    return [x * s, y * s, z * s]
}

function cross(v1, v2) {
    if (v1.length !== 3 || v2.length !== 3) {
        throw new Error("Vectors must be 3D");
    }

    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0],
    ];
}

function mag([x, y, z]) {
    return Math.sqrt(x ** 2 + y ** 2 + z ** 2)
}

function add([a, b, c], [x, y, z]) {
    return [a + x, b + y, c + z]
}


function sub(v, w) {
    return add(v, mul(w, -1))
}

function scale(v, s) {
    return [v[0] * s, v[1] * s, v[2] * s]
}

export { dot, normalize, mul, mag, add, sub, cross, scale }