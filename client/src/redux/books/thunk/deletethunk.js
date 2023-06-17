import { deleteBook } from "../actions"

const deleteThunk = (bookId) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "DELETE"
        })
        dispatch(deleteBook)
    }
}
export default deleteThunk;