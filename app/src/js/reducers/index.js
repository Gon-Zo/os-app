import {combineReducers} from 'redux';

import Test from './test'
import Search from './search'
import Statics from './statics'

const reducer = combineReducers({
  Test,
  Search,
  Statics
})

export default reducer
