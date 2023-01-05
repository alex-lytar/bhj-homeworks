const image = document.getElementById('cookie');
let timer = Date.now();
let flag = 0;
let counter = 0;
function sizeChange() {
    let clickTimer = Date.now();
    image.width = ++counter % 2 ? 250 : 200;
    document.getElementById('clicker__counter').textContent = counter + '\n' + 'Скорость клика: ' + (1 / ((clickTimer - timer) / 1000)).toFixed(2);
    timer = Date.now();
}
image.onclick = sizeChange;