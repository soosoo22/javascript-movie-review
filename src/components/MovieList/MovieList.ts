import './style.css';
import { MovieListType, MovieType } from '../../types/movie';
import DOM from '../../utils/DOM';
import Skeleton from '../Skeleton/Skeleton';
import MovieItemManager from '../MovieItem/MovieItem';

const { $ } = DOM;

const MovieListManager = {
  renderMovieList(movieList: MovieListType, isLastPage: boolean) {
    const ul = document.createElement('ul');
    ul.classList.add('item-list');

    movieList.forEach((movie: MovieType) => {
      ul.appendChild(MovieItemManager.render(movie));
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
