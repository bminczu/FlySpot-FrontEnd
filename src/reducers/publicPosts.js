const publicPosts = (state=[], action) => {
    switch(action.type) {
        case "GET_PUBLIC_POSTS":
            return action.publicPosts
        default: 
            return state
    }
}

export default publicPosts