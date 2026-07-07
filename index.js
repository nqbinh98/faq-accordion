const containerContent = document.querySelector(".container-content");

containerContent.addEventListener('click', function (e) {
    if(e.target.closest('.question-section')) {
        const answerWrapper = e.target.closest('.question-item').querySelector('.answer-section');
        const btnPlus = e.target.closest('.question-section').querySelector('.btn-plus');
        const btnMinus = e.target.closest('.question-section').querySelector('.btn-minus');
        if (answerWrapper.classList.contains('show')) {
            btnPlus.classList.remove('hide');
            btnMinus.classList.add('hide');
            answerWrapper.classList.remove('show');
        } else {
            btnPlus.classList.add('hide');
            btnMinus.classList.remove('hide');
            answerWrapper.classList.add('show');
        }
    }
})