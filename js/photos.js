import { findTemplate } from './dom';
import { photosData } from './mock';

/** @type {HTMLAnchorElement}  */
const template = findTemplate('picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createThumbnail = (photo) => {
  /** @type {HTMLAnchorElement}  */

  const thumbnail = template.cloneNode(true);
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  thumbnail.href = photo.url;
  thumbnail.dataset.id = photo.id;

  const image = thumbnail.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.descriotion;

  return thumbnail;
};

photosData.forEach((photoItem) => {
  const thumbnail = createThumbnail(photoItem);
  fragment.appendChild(thumbnail);
});

container.appendChild(fragment);
