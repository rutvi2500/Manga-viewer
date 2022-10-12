import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { getChapterDetails } from "../actions";

const ChapterList = ({ activeBook, chapterDetails }) => {
  const dispatch = useDispatch();
  let displayChapterList;
  console.log('detailssssssssssss', chapterDetails)
  // console.log('>>>>>>>>>>ids',activeBook.chapter_ids);
  useEffect(() => {
    dispatch(getChapterDetails(activeBook.chapter_ids?.[0]))
  }, [dispatch, activeBook.chapter_ids]);
  displayChapterList = activeBook.chapter_ids?.map((chapter) => {
    console.log(chapter);
    return (
      <li style={{ display: "inline" }} key={chapter}>
        <button style={{background: chapterDetails.id === chapter ? '#96e196' : ''}} onClick={() => dispatch(getChapterDetails(chapter))}>{activeBook.chapter_ids.indexOf(chapter) + 1}</button>
      </li>
    );
  });
  return <ul>{displayChapterList}</ul>;
};

export default ChapterList;
