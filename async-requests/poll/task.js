const quizTitle = document.getElementById('poll__title');
const quizOptions = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
        let quizObject = JSON.parse(xhr.responseText).data;
        quizTitle.innerText = quizObject.title;
        for (let option of quizObject.answers) {
            quizOptions.innerHTML +=  
                `<button class="poll__answer" style="margin: 3px">
                    ${option}
                </button>`;
        }
    }
})
quizOptions.addEventListener('click', () => {
    const popUpMsg = document.querySelector('body');
    popUpMsg.insertAdjacentHTML("beforeEnd",
    `<div class="modal_mask">
       <div class="modal">
            <div class="modal_msg">Спасибо, ваш голос засчитан!</div>
            <button class="close_btn">Закрыть</button>
        </div>
    </div>`
    );
    const clsModalBtn = document.querySelector('.close_btn');
    clsModalBtn.addEventListener('click', (ev) => ev.target.closest('div.modal_mask').remove());
});