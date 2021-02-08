const posts = (state=[], action) => {

    let updatedPosts;

    switch(action.type){
        case "SIGN_IN_USER":
            return action.user.posts
        case "CREATE_POST":
        return [...state, action.post]
        case "UPDATE_MY_POST":
            updatedPosts = state.map(postObj => {
                if (postObj.id == action.post.id) {
                    return action.post
                } else {
                    return postObj
                }
            })
            return updatedPosts
    default:
        return state
 }
}

export default posts

// THIS REDUCER IS RESPONIBLE FOR MY POSTS ONLY