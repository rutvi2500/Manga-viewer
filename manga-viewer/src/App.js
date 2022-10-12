import { useSelector } from "react-redux";
import BookList from "./components/BookList";
import ChapterList from "./components/ChapterList";
import Slide from "./components/Slide";
import './App.css';

function App() {
  const bookDetails = useSelector(state => state.bookListReducer.bookDetails)
  const activeBook = useSelector(state => state.bookListReducer.activeBook)
  const chapterDetails = useSelector(state => state.bookListReducer.chapterDetails)
  return (
    <>
      <BookList bookDetails={bookDetails} activeBook={activeBook}/>
      <ChapterList activeBook={activeBook} chapterDetails={chapterDetails}/>
      <Slide chapterDetails={chapterDetails}/>
    </>
  );
}

export default App;
