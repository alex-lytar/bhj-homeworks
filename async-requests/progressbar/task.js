const formEl = document.getElementById('form');
const progressEl = document.getElementById('progress');

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    //от строки ниже
    const file = document.getElementById('file').files;
    const fileName = document.querySelector('.input__wrapper-desc');
    const formData = new FormData();
    formData.append(`${fileName.innerText}`, file[0]);
    /*аналогичный код:
    const formElement = document.getElementById('form');
    // some code
    xhr.send(new FormData(formElement)); */
    request.upload.addEventListener('progress', function (ev){
        progressEl.value = (ev.loaded / ev.total).toFixed(2);
    }, false);
    request.send(formData);
});