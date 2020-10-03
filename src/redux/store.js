import {applyMiddleware, createStore, combineReducers} from "redux"
import thunkMiddleware from 'redux-thunk'
import {stockReducers} from './stockReducer'

let rootReducer = combineReducers({
 fetchData: stockReducers
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store