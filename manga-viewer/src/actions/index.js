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
export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: books
  }
}
export const fetchChapterSuccess = (chapterDetail) => {
  return {
    type: 'FETCH_CHAPTER_SUCCESS',
    payload: chapterDetail
  }
}
export const fetchBooksFailure = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}
export const fetchChapterFailure = (error) => {
  return {
    type: 'FETCH_CHAPTER_FAILURE',
    payload: error
  }
}
export const changeActiveBook = (id) => {
  return {
    type: 'CHANGE_ACTIVE_BOOK',
    payload: id
  }
}
export const changeActivePage = (page) => {
  return {
    type: 'CHANGE_ACTIVE_PAGE',
    payload: page
  }
}
export const getChapterDetails = (id) => {
  console.log('>>>>chapppppppppppppp',id)
  const url = `http://18.177.140.79:8080/chapters/${id}/`;
  return (dispatch) => {
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
export const requestBooks = () => {
  const url = `http://18.177.140.79:8080/books/`;
  return (dispatch) => {
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