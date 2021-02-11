export const selectPublicPostReviews= (publicPostReviews) => {
    return {
        type: "SELECT_PUBLIC_POST_REVIEWS",
        publicPostReviews: publicPostReviews
    }
}

export const addReview= (review) => {
    return {
        type: "ADD_REVIEW",
        review: review
    }
}