const React = require('react')

require('./style.scss')

const Sidebar = props => {
  const states = ['up', 'ok', 'down', 'anxious'].map(state => (
    <div key={ state } className='key-container'>
      <div className={ `${state} label` }></div>
      <span className='heading'>{ state }</span>
    </div>
  ))

  return(
    <div className='sidebar'>
      <div className='colorscheme'>
        <h2 className='heading'>mood tracking key</h2>
        { states }
      </div>
    </div>
  )
}

module.exports = { Sidebar }

