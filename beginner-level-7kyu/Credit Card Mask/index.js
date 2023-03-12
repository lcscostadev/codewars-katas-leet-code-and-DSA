// 1st aproach
function maskify(cc) {
    let n = cc.length;
    const maskedCC = [];

    for (let i = 0; i < n; i++) {
        if (i >= n - 4) {
            maskedCC.push(cc[i]);
        } else {
            maskedCC.push("#");
        }
    }
    let maskedString = maskedCC.join("");
    return maskedString
}

const cc = [4, 5, 5, 6, 3, 6, 4, 6, 0, 7, 9, 3, 5, 6, 1, 6];
let maskedString = maskify(cc);
console.log(maskedString);

// 2° aproach
function maskify(cc) {
    cc = cc.split("");
    for (let i = 0; i < cc.length - 4; i++) {
        cc[i] = "#";
    }

    cc = cc.join("");
    return cc;
}
