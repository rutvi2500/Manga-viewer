const initialData = {
  bookDetails: [],
  isLoading: false,
  error: "",
  activeBook: [],
  chapterDetails: [],
  activePage: [],
  chapterLoading: false,
};
const bookListReducer = (state = initialData, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_CHAPTER_REQUEST":
      return {
        ...state,
        chapterLoading: true,
      };
    case "FETCH_BOOKS_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        bookDetails: action.payload,
        isLoading: false,
        activeBook: action.payload[0],
        error: "",
      };
    case "FETCH_CHAPTER_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        chapterDetails: action.payload,
        chapterLoading: false,
        activePage: action.payload.pages[0],
        error: "",
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        bookDetails: [],
        isLoading: false,
        activeBook: [],
        activePage: [],
        error: action.payload,
      };
    case "FETCH_CHAPTER_FAILURE":
      return {
        ...state,
        chapterDetails: [],
        activePage: [],
        chapterLoading: false,
        error: action.payload,
      };
    case "CHANGE_ACTIVE_BOOK":
      console.log(action.payload);
      return {
        ...state,
        activeBook: action.payload,
      };
    case 'CHANGE_ACTIVE_PAGE': 
      return {
        ...state,
        activePage: action.payload
      }
    default:
      return state;
  }
};
export default bookListReducer;
