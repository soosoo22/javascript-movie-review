import './style.css';
import DOM from '../utils/DOM';
<<<<<<< HEAD
=======
import errorHandler from './errorHandler';
>>>>>>> step2

const { $ } = DOM;

const errorMessage = {
  apiError(statusCode: number, message?: string) {
    const movieItems = $('main') as HTMLElement;

    if (statusCode >= 500) {
      this.renderTemplates(movieItems, this.serverError(statusCode));
    } else if (statusCode >= 400) {
      this.renderTemplates(movieItems, this.clientError(statusCode));
    } else {
      this.renderTemplates(movieItems, this.noSearchedMovieError(message));
    }
  },

  serverError(statusCode: number) {
    const templates = /* html */ `
    <div class="center-div">
      <h1 class="error-msg">${statusCode}</h1>
<<<<<<< HEAD
      <h2 class="error-description">서버 에러입니다ㅠ <span onClick="window.location.reload()">새로고침</span> 해보고 안되면 알아서 처리하세요~</h2>
=======
      <h2 >서버 에러입니다.<h2> 
      <h2>${errorHandler(statusCode)}</div>
      <h2 >일단 <button onClick="window.location.reload()">새로고침</button> 해보고 안되면 알아서 처리하세요~❤️</h2>
>>>>>>> step2
    </div>
    `;
    return templates;
  },

  clientError(statusCode: number) {
    const templates = /* html */ `
      <div class="center-div">
        <h1 class="error-msg">${statusCode}</h1>
<<<<<<< HEAD
        <h2 class="error-description">클라이언트 에러입니다ㅠ <span onClick="window.location.reload()">새로고침</span> 해보고 안되면 알아서 처리하세요~</h2>
=======
        <h2>클라이언트 에러입니다.<h2> 
        <h2>${errorHandler(statusCode)}</div>
        <h2 class="error-description">일단 <button onClick="window.location.reload()">새로고침</button> 해보고 안되면 알아서 처리하세요~❤️</h2>
>>>>>>> step2
      </div>
      `;
    return templates;
  },

  noSearchedMovieError(message?: string) {
    const templates = /* html */ `
<<<<<<< HEAD
      <div class="search-error-msg center-div">${message}</div>
=======
      <div class="search-error-msg">${message}</div>
      <h2 class="error-description">검색어를 바르게 입력하셨는지 확인해주세요~❤️</h2>

>>>>>>> step2
      `;

    return templates;
  },

  renderTemplates(movieItems: HTMLElement, templates: string) {
    movieItems?.replaceChildren();
    movieItems?.insertAdjacentHTML('beforeend', templates);
  },
};

export default errorMessage;
