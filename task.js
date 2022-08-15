const modal = document.querySelectorAll('.modal');

const modalMain = document.getElementById('modal_main');
modalMain.classList.add("modal_active");

const modalCloseTimes = document.querySelectorAll('.modal__close_times');

modalCloseTimes.forEach((item) => {
    item.onclick = close;
})

function close () {
    modal.forEach((item) => {
        item.className = 'modal';
    })
}

const show = document.querySelector('.show-success');
const modalSuccess = document.getElementById ('modal_success');

show.onclick = open;
function open () {
    modalSuccess.classList.add("modal_active");
    modalMain.className = 'modal';
}