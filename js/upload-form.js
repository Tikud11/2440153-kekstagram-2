import { isEscapeKey } from './utils';
import { pristineConfig } from './validation';

const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');

const imageUploadInput = imageUploadForm.querySelector('.img-upload__input');
const imageUploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadCancel = imageUploadOverlay.querySelector('.img-upload__cancel');

const textHashtags = imageUploadOverlay.querySelector('.text__hashtags');
const commentInput = imageUploadOverlay.querySelector('.text__description');


const isTextFieldFocused = () => document.activeElement === textHashtags || document.activeElement === commentInput;

const closeUploadOverlay = () => {
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imageUploadForm.reset();
  pristineConfig.reset();
  document.removeEventListener('keydown', onUploadKeydown);
};

const openUploadOverlay = () => {
  imageUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadKeydown);
};

function onUploadKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeUploadOverlay();
  }
}

imageUploadInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  openUploadOverlay();
});

imageUploadCancel.addEventListener('click', () => {
  closeUploadOverlay();
});

imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristineConfig.validate();

  if (isValid) {
    console.log('Форма полностью валидна! Можно отправлять на сервер.');
  } else {
    console.log('Форма не валидна!');
  }
});


