import './style.css';
import { MovieListType, MovieType } from '../../types/movie';
<<<<<<< HEAD
import createMovieItem from '../MovieItem/MovieItem';
import DOM from '../../utils/DOM';
import Skeleton from '../Skeleton/Skeleton';

const { $ } = DOM;

const MovieListManager = {
=======
import DOM from '../../utils/DOM';
import skeletonManager from '../Skeleton/Skeleton';
import movieItemManager from '../MovieItem/MovieItem';

const { $ } = DOM;

const movieListManager = {
>>>>>>> step2
  renderMovieList(movieList: MovieListType, isLastPage: boolean) {
    const ul = document.createElement('ul');
    ul.classList.add('item-list');

    movieList.forEach((movie: MovieType) => {
<<<<<<< HEAD
      ul.appendChild(createMovieItem(movie));
    });

    Skeleton.remove();
    this.removeButtonIfLastPage(isLastPage);

    return $('.item-container')?.appendChild(ul);
  },

  removeButtonIfLastPage(isLastPage: boolean) {
    if (isLastPage) $('.btn')?.remove();
  },
};

export default MovieListManager;
=======
      ul.appendChild(movieItemManager.render(movie));
    });

    skeletonManager.remove();

    return $('.item-container')?.appendChild(ul);
  },
};

export default movieListManager;
>>>>>>> step2
