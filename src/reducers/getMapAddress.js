const getMapAddress = (state=null, action) => {
    switch(action.type) {
        case "GET_MAP_ADDRESS":
            return action.address
        default:
            return state
    }
}




export default getMapAddress