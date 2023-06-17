import { added } from "../actions";

const addBook = (bookDat) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/`, {
            method: "POST",
            body: JSON.stringify(bookDat),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
        const bookData = response.json();
        dispatch(added(bookData))
    }
}
export default addBook;