import React from "react";
import { useEffect } from "react";
import { changeActiveBook, requestBooks } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import '../types'
import { bookDetails, state } from "../types";

const BookList = ({ bookDetails, activeBook }: {bookDetails: any, activeBook: bookDetails}) => {
  const { error, isLoading } = useSelector((state: state) => state.bookListReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestBooks());
  }, [dispatch]);
  let displayBookList;
  if (bookDetails.length === 0) {
    displayBookList = <h2>Sorry, there's no book available!</h2>;
  } else {
    displayBookList = bookDetails.map((book: bookDetails) => {
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
      {/* <h2>Manga Viewer</h2> */}
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
