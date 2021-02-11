export const selectPublicPost = (publicPost) => {
    return {
        type: "SELECT_PUBLIC_POST",
        publicPost: publicPost
    }
}