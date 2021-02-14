const selectPublicPostReviews = (state=[], action) => {
    let updatedReviews;
    switch(action.type) {
        case "SELECT_PUBLIC_POST_REVIEWS":
            return action.publicPostReviews

        case "ADD_REVIEW":
                return [...state, action.review]
        case "DELETE_REVIEW":
                    updatedReviews = state.filter(review => review.id !== action.id)
                    return updatedReviews
        case "UPDATE_REVIEW":
                return updatedReviews = state.map(reviewObj => {
                    if (reviewObj.id == action.review.id){
                        return action.review
                    } else {
                         return reviewObj
                     }
                })
                 default:
                     return state
   }
}

export default selectPublicPostReviews