(function () {
    var text = `1 & 2 = ${1 & 2}
                1 | 2 = ${1 | 2}
                1 ^ 2 = ${1 ^ 2}
                ~ 2 = ${~2}
                2 << 1 = ${2 << 1}
                2 >> 1 = ${2 >> 1}
                -2 >> 1 = ${-2 >> 1}
                -2 >>> 1 = ${-2 >>> 1}
                -2 bit = ${(-2 >>> 0).toString(2)}
    `;
    document.getElementById("content").innerText = text;
})();
