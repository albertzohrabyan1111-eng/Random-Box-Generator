var cell = 10;
var a = 0;
var colorArr = [];
var positionArr = [];
var elem1 = document.createElement(`div`)
elem1.style = `
    border: 1px solid;
    width: 100%;
    height: 100vh;
    position: relative;
    `
document.body.append(elem1)
function f1() {
    if (cell > a) {
        var min_box = document.createElement(`div`);
        do {
            var payman = true;
            var red = Math.floor(Math.random() * 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255);
            var colorConcat = `${red}-${green}-${blue}`;
            var positionTop = Math.floor(Math.random() * 80);
            var positionRight = Math.floor(Math.random() * 80);
            var positionConcat = `${positionRight}-${positionTop}`;
            for (var b = 0; b < colorArr.length; b++) {
                if (colorArr[b] == colorConcat || positionArr[b] == positionConcat) {
                    payman = false;
                }
            }
        } while (!payman)
        colorArr.push(colorConcat);
        positionArr.push(positionConcat)
        elem1.append(min_box)
        min_box.style = `
            border: 1px solid;
            width: 150px;
            height: 150px;
            position: absolute;
            top: ${positionTop}%;
            right: ${positionRight}%;
            background: rgb(${red},${green},${blue});
            `
    } else (
        clearInterval(qanak)
    )
    a++
}

var qanak = setInterval(f1, 1000)
