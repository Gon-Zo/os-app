import {combineReducers} from 'redux';

import Test from './test'
import Search from './search'

const reducer = combineReducers({
  Test,
  Search
})

export default reducer
