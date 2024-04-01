function validateSelector(selector: string) {
  if (selector === '' || selector === undefined) {
    throw new Error('잘못된 셀렉터 값입니다.');
  }
}

const DOM = {
<<<<<<< HEAD
  $: (selector: string, target: HTMLElement | Document = document) => {
    try {
      validateSelector(selector);
      return target.querySelector(selector);
    } catch (error) {
      alert(error);
    }
  },
  $$: (selector: string) => {
    try {
      validateSelector(selector);
      return document.querySelectorAll(selector);
    } catch (error) {
      alert(error);
      return [];
    }
=======
  $: <T extends Element>(selector: string, target: Element | Document = document) => {
    validateSelector(selector);
    return target.querySelector<T>(selector);
  },
  $$: <T extends Element>(selector: string, target: Element | Document = document) => {
    validateSelector(selector);
    return target.querySelectorAll<T>(selector);
>>>>>>> step2
  },
};

export default DOM;
