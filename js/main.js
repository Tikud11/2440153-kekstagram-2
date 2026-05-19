import { photosData } from './mock';
import { renderThumbnails } from './photos';
import { renderBigPicture } from './big-picture';
import './upload-form.js';
import './image-effects.js';


renderThumbnails(photosData);

document.body.addEventListener('click', (evt) => {
  const pictureNode = evt.target.closest('.picture');

  if (!pictureNode) {
    return;
  }

  evt.preventDefault();

  const photoId = pictureNode.dataset.id;
  const currentPhoto = photosData.find((photo) => photo.id === Number(photoId));

  if (currentPhoto) {
    renderBigPicture(currentPhoto);
  }

});
