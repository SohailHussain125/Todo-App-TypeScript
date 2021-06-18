import { combineReducers } from 'redux'
import todoReducers from './todoReducers';

const rootReducer = () => combineReducers({
    todo: todoReducers
}as any)

export default rootReducer;

export type State = ReturnType<typeof rootReducer>