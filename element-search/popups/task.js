const modalEl = document.getElementById('modal_main');
modalEl.classList.add('modal_active');

const modalButtons = document.getElementsByClassName('modal__close')
const closuerButtonEl = modalButtons.item(0);
const successButtonEl = modalButtons.item(1);
const successModalClosure = modalButtons.item(2);
const successEl = document.getElementById('modal_success');

const modalClosure = () => modalEl.classList.remove('modal_active');
const modalAccept = () => {
    modalClosure();
    successEl.classList.add('modal_active');
    return false;
}

successButtonEl.onclick = modalAccept;
closuerButtonEl.onclick = modalClosure;

const successModalCls = () => { 
    successEl.classList.remove('modal_active');
    return false;
}
const successBtnGreen = document.getElementsByClassName('btn_success').item(0);

successModalClosure.onclick = successModalCls;
successBtnGreen.onclick = successModalCls;