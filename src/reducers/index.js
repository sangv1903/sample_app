import sampleReducer from './sampleReducer'
import rootReducer from './rootReducer'
import {combineReducers} from 'redux'

const allReducer=combineReducers(
{
    root:rootReducer,
    sample:sampleReducer 
}
)   

export default allReducer;