export const signinUser = (user) => {
    return {
        type: "SIGN_IN_USER",
        user: user
    }
}

export const currentUser = (user) => {
    return {
        type: "CURRENT_USER",
        user: user
    }
}
