const selectPublicPost = (state=null, action) => {
    switch(action.type) {
        case "SELECT_PUBLIC_POST":
            return action.publicPost
        default:
            return state
    }
}

export default selectPublicPost