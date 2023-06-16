import { ADDED, DELETED, LOADED } from './actionType'
const initialState = []
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload


        default:
            return state;
    }
}

export default reducer;