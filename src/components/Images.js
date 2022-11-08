import More from '../media/more.png';
import Trash from '../media/trash.png';

const MoreImage = () => {
  const moreImage = document.createElement('img');
  moreImage.src = More;
  moreImage.alt = 'more image';
  return moreImage;
};

const TrashImage = (item) => {
  const trashImage = document.createElement('img');
  trashImage.src = Trash;
  trashImage.alt = 'trash image';
  trashImage.addEventListener('mousedown', () => {
    const removeTask = new CustomEvent('removetask', {
      detail: {
        index: item.index,
      },
    });
    const tasksConatiner = document.querySelector('.list-container');
    tasksConatiner.dispatchEvent(removeTask);
  });

  return trashImage;
};

export { MoreImage, TrashImage };