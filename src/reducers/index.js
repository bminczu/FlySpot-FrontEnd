import {combineReducers} from 'redux'
import currentUserReducer from './currentUser'
import postsReducer from './posts'
import publicPostsReducer from './publicPosts'
import selectMyPostReducer from './selectMyPost'
import selectPublicPostReducer from './selectPublicPost'
import selectPublicPostReviewsReducer from './selectPublicPostReviews'
import selectReviewReducer from './selectReview'
import getMapCoordinatesReducer from './getMapCoordinates'
import getMapAddressReducer from './getMapAddress'

export default combineReducers({
    currentUser: currentUserReducer,
    posts: postsReducer,
    selectMyPost: selectMyPostReducer,
    publicPosts: publicPostsReducer,
    selectPublicPost: selectPublicPostReducer,
    selectPublicPostReviews: selectPublicPostReviewsReducer,
    selectReview: selectReviewReducer,
    getMapCoordinates: getMapCoordinatesReducer,
    getMapAddress: getMapAddressReducer
})