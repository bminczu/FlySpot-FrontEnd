const selectReview = (state=null, action) => {
    switch(action.type) {
        case "SELECT_REVIEW":
            return action.review
        default:
            return state
    }
}




export default selectReview