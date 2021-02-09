export const getPublicPosts = (publicPosts) => {
    return {
        type: "GET_PUBLIC_POSTS",
        publicPosts: publicPosts
    }
}