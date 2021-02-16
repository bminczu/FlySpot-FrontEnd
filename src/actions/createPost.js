export const createPost = (post) => {
    return {
        type: "CREATE_POST",
        post: post
    }
}
export const updateMyPost = (post) => {
    return {
        type: "UPDATE_MY_POST",
        post: post
    }
}

export const deletePost = (id) => {
    return {
        type: "DELETE_POST",
        id: id
    }
}