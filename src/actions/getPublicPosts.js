export const getPublicPosts= (publicPosts) => {
    return {
        type: "GET_PUBLIC_POST",
        publicPosts: publicPosts
    }
}