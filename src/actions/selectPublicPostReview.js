export const selectPublicPostReviews = (publicPostReviews) => {
    return {
        type: "SELECT_PUBLIC_POST_REVIEWS",
        publicPostReviews: publicPostReviews
    }
}

export const addReview = (review) => {
    return {
        type: "ADD_REVIEW",
        review: review
    }
}

export const deleteReview = (id) => {
    return {
        type: "DELETE_REVIEW",
        id: id
    }
}

export const updateReview = (review) => {
    return{ 
        type: "UPDATE_REVIEW",
        review: review
    }
}
