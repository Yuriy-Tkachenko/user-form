// Переменные для работы с содержимым формы
const userForm = document.querySelector('.user-form');
const comments = document.querySelector('.user-comment');
const userCommentList = comments.querySelector('.user-comment__list');
const userCommentItem = userCommentList.children;
const userName = userForm.querySelector('.user-name-input');
const userMail = userForm.querySelector('.user-mail-input');
const userCommentDate = userForm.querySelector('.user-date-input');
const userComment = userForm.querySelector('.user-form__text');
// Переменные для работы с шаблоном
const commentTemplate = document.querySelector('#comment-template').content;
const commentItem = commentTemplate.querySelector('.user-comment__item');

userForm.onsubmit = function (evt) {
  evt.preventDefault();
  const newCommentItem = commentItem.cloneNode(true);

  const addLike = function () {
    const likeButton = newCommentItem.querySelector('.user-comment__like-button');
    const likesNumber = newCommentItem.querySelector('.likes-number');

    likeButton.addEventListener('click', function () {
      if (likeButton.classList.contains('added')) {
        likesNumber.textContent--;
      } else {
        likesNumber.textContent++;
      }
  
      likeButton.classList.toggle('added');
    });
  }
  
  const removeItemHandler = function (item) {
    const deleteButton = newCommentItem.querySelector('.user-comment__delete-button');

    deleteButton.addEventListener('click', function () {
      item.remove();
    });
  }
  
  for (let i = 0; i < userCommentItem.length; i++) {
    removeItemHandler(userCommentItem[i]);
  }
  
  // Добавление нового имени
  const name = newCommentItem.querySelector('.user-comment__name');
  name.textContent = userName.value;
  // Добавление нового комментария
  const comment = newCommentItem.querySelector('.user-comment__text');
  comment.textContent = userComment.value;
  // Добавление новой даты
  const date = newCommentItem.querySelector('.user-comment__date');
  date.textContent = userCommentDate.value;
  // Добавление функционала кнопок к новому комментарию
  removeItemHandler(newCommentItem);
  addLike ();
  // Добавление нового комментария в список
  userCommentList.appendChild(newCommentItem);
  // Очистка полей
  userName.value = '';
  userMail.value = '';
  userComment.value = '';
  userCommentDate.value = '';
}
