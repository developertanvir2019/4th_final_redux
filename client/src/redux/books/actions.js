import { ADDED, DELETED, LOADED } from './actionType'

export const loaded = (books) => {
    return {

        type: LOADED,
        payload: books
    }
}


export const deleteBook = (bookId) => {
    return {
        type: DELETED,
        payload: bookId
    }
}

export const added = (bookData) => {
    return {
        type: ADDED,
        payload: bookData
    }
}