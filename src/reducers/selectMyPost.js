const selectMyPost = (state=null, action) => {
    switch(action.type) {
        case "SELECT_MY_POST":
            return action.post
        default:
            return state
    }
}




export default selectMyPost