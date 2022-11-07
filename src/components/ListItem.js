import { MoreImage } from './Images';
import Square from './Square';
import Input from './Input';

const Actions = () => {
  const actions = document.createElement('div');
  actions.classList.add('actions');
  const moreImage = MoreImage();
  actions.appendChild(moreImage);
  return actions;
};

const ListItem = (item) => {
  const container = document.createElement('div');
  container.classList.add('item');
  container.setAttribute('draggable', 'true');
  container.addEventListener('dragstart', () => {
    container.classList.add('item-dragging');
  });
  container.addEventListener('dragend', () => {
    container.classList.remove('item-dragging');
  });

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.style.display = 'none';

  const square = Square(item);
  const actions = Actions(item);
  const input = Input(item, actions);

  container.appendChild(checkbox);
  container.appendChild(square);
  container.appendChild(input);
  container.appendChild(actions);

  const targetContainer = document.createElement('div');
  targetContainer.appendChild(container);
  return targetContainer;
};

export default ListItem;