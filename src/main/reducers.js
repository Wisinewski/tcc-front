import {combineReducers} from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import UserProfileReducer from '../userProfile/userProfileReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    userProfile: UserProfileReducer,
    tab: TabReducer
})

export default rootReducer