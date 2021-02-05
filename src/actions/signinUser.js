export const signinUser = (user) => {
    return {
        type: "SIGN_IN_USER",
        user: user
    }
}
