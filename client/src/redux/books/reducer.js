import { ADDED, DELETED, LOADED } from './actionType'
const initialState = []
const nextBookId = (books) => {
    const maxid = books.reduce((maxid, book) => Math.max(book.id, maxid), -1)
    return maxid + 1;
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload
        case DELETED:
            return state.filter(book => book?.id !== action.payload)
        case ADDED:
            return [
                ...state,
                { ...action.payload, id: nextBookId(state) }
            ]
        default:
            return state;
    }
}

export default reducer;