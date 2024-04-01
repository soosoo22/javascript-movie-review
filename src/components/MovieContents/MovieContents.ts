import './style.css';
import Movie from '../../domain/Movie';
import { PropsType } from '../../types/props';
<<<<<<< HEAD
import Skeleton from '../Skeleton/Skeleton';
import DOM from '../../utils/DOM';
import MovieListManager from '../MovieList/MovieList';

const { $ } = DOM;

const MovieContentManager = {
=======
import skeletonManager from '../Skeleton/Skeleton';
import DOM from '../../utils/DOM';
import movieListManager from '../MovieList/MovieList';

const { $ } = DOM;

const movieContentManager = {
>>>>>>> step2
  renderMain(title: string) {
    const main = document.createElement('main');

    const templates = /* html */ `
      <section class="item-view">
        <h2>${title}</h2>
        <div class="item-container"></div>
<<<<<<< HEAD
        <button class="btn primary full-width">더 보기</button>
=======
        <div class="scroll-end"></div>
>>>>>>> step2
      </section>
      `;

    main.innerHTML = templates;

    return main;
  },

  async renderMovieData({ type, input }: PropsType) {
    const movie = new Movie();
    const { movieList, isLastPage } = await this.setMovieData(movie, { type, input });

<<<<<<< HEAD
    MovieListManager.renderMovieList(movieList, isLastPage);

    if (!isLastPage) {
      this.setEventListener(movie, { type, input });
=======
    movieListManager.renderMovieList(movieList, isLastPage);

    if (!isLastPage) {
      this.setIntersectionObserver(movie, { type, input });
>>>>>>> step2
    }
  },

  async setMovieData(movie: Movie, { type, input }: PropsType) {
<<<<<<< HEAD
    $('.item-container')?.appendChild(Skeleton.render(20));
=======
    $('.item-container')?.appendChild(skeletonManager.render(20));
>>>>>>> step2

    const { movieList, isLastPage } = await movie.handleMovieData(type, input);

    return { movieList, isLastPage };
  },

<<<<<<< HEAD
  setEventListener(movie: Movie, { type, input }: PropsType) {
    $('.btn')?.addEventListener('click', async () => {
      const { movieList, isLastPage } = await this.setMovieData(movie, { type, input });

      MovieListManager.renderMovieList(movieList, isLastPage);
    });
  },
};

export default MovieContentManager;
=======
  setIntersectionObserver(movie: Movie, { type, input }: PropsType) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          const { movieList, isLastPage } = await this.setMovieData(movie, { type, input });
          movieListManager.renderMovieList(movieList, isLastPage);

          if (isLastPage) {
            observer.disconnect();
          }
        }
      });
    });

    const target = $('.scroll-end');
    observer.observe(target!);
  },
};

export default movieContentManager;
>>>>>>> step2
