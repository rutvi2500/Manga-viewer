import axios from 'axios';

export const fetchBooksRequest = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
}
export const fetchChapterRequest = () => {
  return {
    type: 'FETCH_CHAPTER_REQUEST',
  }
}
export const fetchBooksSuccess = (books: any) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: books
  }
}
export const fetchChapterSuccess = (chapterDetail: any) => {
  return {
    type: 'FETCH_CHAPTER_SUCCESS',
    payload: chapterDetail
  }
}
export const fetchBooksFailure = (error: Error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}
export const fetchChapterFailure = (error: Error) => {
  return {
    type: 'FETCH_CHAPTER_FAILURE',
    payload: error
  }
}
export const changeActiveBook = (id : number) => {
  return {
    type: 'CHANGE_ACTIVE_BOOK',
    payload: id
  }
}
export const changeActivePage = (page: number) => {
  return {
    type: 'CHANGE_ACTIVE_PAGE',
    payload: page
  }
}
export const getChapterDetails = (id: number) => {
  console.log('>>>>chap',id)
  const url = `http://18.177.140.79:8080/chapters/${id}/`;
  return (dispatch: any) => {
    dispatch(fetchChapterRequest());
    const { CancelToken } = axios;
    const source = CancelToken.source();
    axios.get(url, {cancelToken: source.token})
      .then((response) => {
        const chapterDetail = response.data
        console.log(chapterDetail)
        dispatch(fetchChapterSuccess(chapterDetail))
      })
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          const errorMsg = thrown.message
          dispatch(fetchChapterFailure(errorMsg))
        }
      });
  }
}
export const requestBooks: any = () => {
  const url = `http://18.177.140.79:8080/books/`;
  return (dispatch: any) => {
    dispatch(fetchBooksRequest());
    const { CancelToken } = axios;
    const source = CancelToken.source();
    axios.get(url, {cancelToken: source.token})
      .then((response) => {
        const books = response.data
        console.log(books)
        dispatch(fetchBooksSuccess(books))
      })
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          const errorMsg = thrown.message
          dispatch(fetchBooksFailure(errorMsg))
        }
      });
  }
}