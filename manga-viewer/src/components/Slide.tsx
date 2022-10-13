import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveBook, changeActivePage, getChapterDetails } from "../actions";
import { AppDispatch } from "../store";
import { chapterDetails, state } from "../types";

const Slide = ({ chapterDetails }: {chapterDetails: chapterDetails}) => {
  const { activePage, chapterLoading, activeBook, bookDetails } = useSelector(
    (state: state) => state.bookListReducer
  );
  const dispatch: AppDispatch = useDispatch()
  const nextPage = () => {
    if(activePage.id === chapterDetails?.pages?.slice(-1)?.pop()?.id) {
      if(chapterDetails?.id === activeBook.chapter_ids.at(-1)) {
        if(activeBook?.id === 3) {
          dispatch(changeActiveBook(bookDetails[0]))
        } else {
          dispatch(changeActiveBook(bookDetails[activeBook.id]))
        }
      } else {
        dispatch(getChapterDetails(chapterDetails?.id +1))
      }
    } else {
      dispatch(changeActivePage(chapterDetails?.pages?.[activePage.page_index +1]))
    }
  }
  const previousPage = () => {
    if(activePage.id === chapterDetails?.pages[0].id) {
      if(chapterDetails?.id === activeBook?.chapter_ids[0]) {
        if(activeBook?.id === 1) {
          dispatch(changeActiveBook(bookDetails[2]))
        } else {
          dispatch(changeActiveBook(bookDetails[activeBook.id -2]))
        }
      } else {
        dispatch(getChapterDetails(chapterDetails?.id -1))
      }    } else {
      dispatch(changeActivePage(chapterDetails?.pages?.[activePage?.page_index -1]))
    }
  }
  const leftDiv = {
    gridArea: '1/1', 
    width: '50%'
  }
  const rightDiv = {
    gridArea: '1/1', 
    marginLeft: '50%'
  }
  return (
    <>
      {chapterLoading ? (
        <h2>Loading</h2>
      ) : (
        <div style={{display: 'grid'}}>
          <div style={{gridArea: '1/1'}}>
            <img
              src={activePage?.image?.file}
              alt={activePage?.image?.file}
              style={{ height: "30%" }}
            />
            <div>
              {activePage?.page_index + 1}/{chapterDetails?.pages?.length}
            </div>
          </div>
          <div onClick={() => nextPage()} style={leftDiv}></div>
          <div onClick={() => previousPage()} style={rightDiv}></div>
        </div>
      )}
    </>
  );
};

export default Slide;
