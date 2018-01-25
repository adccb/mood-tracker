// @flow

const { cloneArray } = require('../util/index.js')
import type { ApplicationState, Action } from '../types.js'
import { defaultState, LOCAL_STORAGE_KEY } from './default-state'

const MoodReducer = (state: ApplicationState = defaultState, action: Action) => {
  switch(action.type) {
    case 'UPDATE': {
      const { date, status } = action.data
      const data = cloneArray(state.data)

      data[date - 1] = status
      
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
      return Object.assign({}, state, { data })
    }
    
    case 'CLEAR': {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([])) 
      return Object.assign({}, state, { data: [] })
    }

    default: {
      return state
    }
  }
}

export { MoodReducer }

