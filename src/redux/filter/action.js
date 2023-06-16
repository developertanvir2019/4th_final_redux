import { STATUSCHANGE } from "./actionTypes"


export const statusChange = (status) => {
    return {
        type: STATUSCHANGE,
        payload: status
    }
}