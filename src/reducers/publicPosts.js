const publicPosts = (state=[], action) => {
    switch(action.type) {
        case "SIGN_IN_USER":
        case "CURRENT_USER":
                return action.user
        case "GET_PUBLIC_POSTS":
            return action.publicPosts
        default: 
            return state
    }
}

export default publicPosts