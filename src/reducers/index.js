import {combineReducers} from 'redux'
import currentUserReducer from './currentUser'
import postsReducer from './posts'
import publicPostsReducer from './publicPosts'
import selectMyPostReducer from './selectMyPost'

export default combineReducers({
    currentUser: currentUserReducer,
    posts: postsReducer,
    selectMyPost: selectMyPostReducer,
    publicPosts: publicPostsReducer
})