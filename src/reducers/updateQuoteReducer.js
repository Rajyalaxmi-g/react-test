export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_QUOTE':
            return {
                result: action.payload
            }
        default:
            return state
    }
}