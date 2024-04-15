const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    question.classList.toggle('open');
    if (question.classList.contains('open')) {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});
