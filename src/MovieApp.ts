<<<<<<< HEAD
import HeaderManager from './components/Header/Header';
import MovieContentManager from './components/MovieContents/MovieContents';
import { LOGO } from './images/index';
=======
import headerManager from './components/Header/Header';
import movieScoreManager, { MovieScoreEvent } from './components/Modal/ScoreCheckbox';
import movieContentManager from './components/MovieContents/MovieContents';
import { LOGO } from './images/index';
import storage from './storage';
>>>>>>> step2
import { PropsType } from './types/props';
import DOM from './utils/DOM';

const { $ } = DOM;

class MovieApp {
  constructor() {
    this.start();
    this.renderPopularMovie();
<<<<<<< HEAD
=======
    this.listenModalOpen();
    this.listenMovieScore();
>>>>>>> step2
  }

  start() {
    const container = $('#app');
<<<<<<< HEAD
    const header = HeaderManager.render({
      imageSource: LOGO,
    });
    const main = MovieContentManager.renderMain('지금 인기 있는 영화');
=======
    const header = headerManager.render({
      imageSource: LOGO,
    });
    const main = movieContentManager.renderMain('지금 인기 있는 영화');
>>>>>>> step2

    container?.appendChild(header);
    container?.appendChild(main);
  }

  renderPopularMovie() {
    const props: PropsType = {
      type: 'popular',
      input: '',
    };
<<<<<<< HEAD
    MovieContentManager.renderMovieData(props);
=======
    movieContentManager.renderMovieData(props);
  }

  listenModalOpen() {
    document.addEventListener('openModal', (event: Event) => {
      const scoreEvent = event as MovieScoreEvent;
      const movieInfo = scoreEvent.detail.movie;

      const existData = storage.getData().find((data) => data.movie.title === movieInfo.title);
      if (existData) {
        movieScoreManager.updateMovieScoreUI(existData.score);
      }
    });
  }

  listenMovieScore() {
    document.addEventListener('selectMovieScore', (event: Event) => {
      const scoreEvent = event as MovieScoreEvent;
      const movieInfo = scoreEvent.detail.movie;
      const movieScore = scoreEvent.detail.score;

      storage.setData({ movie: movieInfo, score: movieScore });
    });
>>>>>>> step2
  }
}

export default MovieApp;
