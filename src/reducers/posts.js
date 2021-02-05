const posts = (state=[], action) => {
    switch(action.type){
        case "SIGN_IN_USER":
            return action.user.posts
    default:
        return state
 }
}

export default posts