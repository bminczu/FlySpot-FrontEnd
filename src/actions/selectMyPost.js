export const selectMyPost= (post) => {
    return {
        type: "SELECT_MY_POST",
        post: post
    }
}