import React from 'react'
import { render } from'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import moment from 'moment'

import App from './components/App/'
import { MoodReducer } from './reducers'

const store = createStore(MoodReducer)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
