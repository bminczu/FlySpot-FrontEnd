const getMapCoordinates = (state=null, action) => {
    switch(action.type) {
        case "GET_MAP_COORDINATES":
            return action.coordinates
        default:
            return state
    }
}




export default getMapCoordinates