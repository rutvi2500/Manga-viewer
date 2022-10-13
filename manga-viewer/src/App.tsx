import { useSelector } from "react-redux";
import BookList from "./components/BookList";
import ChapterList from "./components/ChapterList";
import Slide from "./components/Slide";
import './App.css';
import {state } from "./types";
import React from "react";

function App() {
  const {bookDetails, activeBook, chapterDetails} = useSelector((state: state) => state.bookListReducer)
  return (
    <>
      <BookList bookDetails={bookDetails} activeBook={activeBook}/>
      <ChapterList activeBook={activeBook} chapterDetails={chapterDetails}/>
      <Slide chapterDetails={chapterDetails}/>
    </>
  );
}

export default App;
