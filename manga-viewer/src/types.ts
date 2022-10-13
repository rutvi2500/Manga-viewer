export interface state {
    [x: string]: any
    bookDetails: Array<bookDetails>,
    isLoading: boolean,
    error: string | Error,
    activeBook: Array<bookDetails>,
    chapterDetails: [],
    activePage: [],
    chapterLoading: boolean,
}
export interface bookDetails {
    id: number,
    title: string,
    chapter_ids: Array<number>
}
export interface chapterDetails {
    id?: number,
    title?: string,
    book?: bookDetails
    chapter_index?: number,
    pages?: Array<activePage>
} 
export interface activePage {
  id: number,
  page_index: number,
  image: {
    id: number,
    file: string,
    width: number,
    height: number,
    created_at: Date,
    updated_at: Date
  }
}