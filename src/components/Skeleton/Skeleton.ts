import DOM from '../../utils/DOM';
import './style.css';

const { $ } = DOM;

<<<<<<< HEAD
const Skeleton = {
=======
const skeletonManager = {
>>>>>>> step2
  render(count: number) {
    const skeleton = document.createElement('ul');
    skeleton.classList.add('item-list', 'item-list--skeleton');
    skeleton.innerHTML = this.get(count);

<<<<<<< HEAD
    // const showMoreButton = $('.btn');
    // showMoreButton?.insertAdjacentElement('beforebegin', skeleton);

=======
>>>>>>> step2
    return skeleton;
  },

  get(count: number = 20) {
    return /* html */ `
      <li>
      <a>
        <div class="item-card">
          <div class="item-thumbnail skeleton"></div>
          <div class="item-title skeleton"></div>
          <div class="item-score skeleton"></div>
        </div>
      </a>
    </li>
      `.repeat(count);
  },

  remove() {
    $('.item-list--skeleton')?.remove();
  },
};

<<<<<<< HEAD
export default Skeleton;
=======
export default skeletonManager;
>>>>>>> step2
