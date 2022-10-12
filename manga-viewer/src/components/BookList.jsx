import React from "react";
import { useEffect } from "react";
import { changeActiveBook, requestBooks } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const BookList = ({ bookDetails, activeBook }) => {
  const { error, isLoading } = useSelector((state) => state.bookListReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestBooks());
  }, [dispatch]);
  console.log(activeBook?.chapter_ids?.[0])
  let displayBookList;
  if (bookDetails.length === 0) {
    displayBookList = <h2>Sorry, there's no book available!</h2>;
  } else {
    displayBookList = bookDetails.map((book) => {
      const { id, title } = book;
      return (
        <li style={{ display: "inline" }} key={id}>
          <button style={{background: activeBook.id === id ? '#96e196': ''}}
            onClick={() => dispatch(changeActiveBook(bookDetails[id - 1]))}
          >
            {title}
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h2>Manga Viewer</h2>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <ul>{displayBookList}</ul>
        </>
      )}
    </>
  );
};

export default BookList;
