import { combineReducers } from 'redux'
import {
    UPDATE_QUOTE
} from '../actions'

const quote = (state = {
    selectedItems: []
}, action) => {
    switch (action.type) {
        case UPDATE_QUOTE:
            return {
                ...state,
                selectedItems: action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    quote
})

export default rootReducer
