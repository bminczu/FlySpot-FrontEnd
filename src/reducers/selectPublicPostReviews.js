const selectPublicPostReviews = (state=[], action) => {
    switch(action.type) {
        case "SELECT_PUBLIC_POST_REVIEWS":
            return action.publicPostReviews
            case "ADD_REVIEW":
                return [...state, action.review]
        default:
            return state
        case "UPDATE_PUBLIC_POST_REVIEW":
            return
    }
}

export default selectPublicPostReviews