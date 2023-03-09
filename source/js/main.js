// Переменные для счетчика лайков
const likeButton = document.querySelector('.user-comment__like-button');
const likesNumber = document.querySelector('.likes-number');
// Переменные для кнопки удаления
const deleteButton = document.querySelector('.user-comment__delete-button');
// Переменные для добавления нового комментария
const userForm = document.querySelector('.user-form');
const userCommentList = document.querySelector('.user-comment__list');
const userComment = document.querySelector('.user-comment__item');
const userName = document.querySelector('.user-name-input');
const commentLabel = document.querySelector('.user-comment__label');
const userCommentText = document.querySelector('.user-form__text');
const dateLabel = document.querySelector('.user-coment__date-label');

// Добавление комментариев
userForm.onsubmit = function (evt) {
  evt.preventDefault();
  // Создание пункта
  let newCommentItem = document.createElement('li');
  newCommentItem.classList.add('user-comment__item');

  // Создание поля имени
  let newUserName = document.createElement('span');
  newUserName.classList.add('user-comment__name');
  newUserName.textContent = userName.value;
  newCommentItem.append(newUserName);

  // Создание оббертки комментария
  let commentWrapper = document.createElement('div');
  commentWrapper.classList.add('user-comment__wrapper');
  newCommentItem.append(commentWrapper);

  // Создание оббертки текста
  let textWrapper = document.createElement('div');
  textWrapper.classList.add('user-comment-text-wrapper');
  commentWrapper.append(textWrapper);

  // Создание комментария
  let commentText = document.createElement('p');
  commentText.classList.add('user-comment__text');
  commentText.textContent = userCommentText.value;
  commentLabel.classList.add('label');
  textWrapper.append(commentLabel.cloneNode(true));
  textWrapper.append(commentText);

  // Создание оббертки даты
  let dateWrapper = document.createElement('div');
  dateWrapper.classList.add('user-comment__date-wrapper');
  commentWrapper.append(dateWrapper);

  // Создание даты
  let dateValue = document.createElement('time');
  dateValue.classList.add('user-comment__date');
  dateLabel.classList.add('label');
  dateWrapper.append(dateLabel.cloneNode(true));
  dateWrapper.append(dateValue);

  // Создание оббертки кнопок
  let buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('user-comment__button-wrapper');
  commentWrapper.append(buttonWrapper);

  // Создание оббертки кнопки лайка
  let likesWrapper = document.createElement('div');
  likesWrapper.classList.add('user-comment__likes-wrapper');
  buttonWrapper.append(likesWrapper);
  buttonWrapper.append(deleteButton.cloneNode(true));
  
  // Создание счетчика
  likesWrapper.append(likeButton.cloneNode(true));
  likesWrapper.append(likesNumber.cloneNode(true));

  // Добавление нового комментария в список
  userCommentList.append(newCommentItem);
}