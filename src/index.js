const React = require('react')
const { render } = require('react-dom')

const { App } = require('./components/App/index.js')

render(
  <App />,
  document.getElementById('root')
)
