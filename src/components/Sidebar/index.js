// @flow

const React = require('react')

require('./style.scss')

type SidebarProps = {
  stateOptions: Array<string>
}

const Sidebar = ({ stateOptions }: SidebarProps) => {
  const states = stateOptions.map(state => (
    <div key={ state } className='key-container'>
      <div className={ `${state} label` }></div>
      <span className='heading'>{ state }</span>
    </div>
  ))

  return(
    <div className='sidebar'>
      <div className='colorscheme'>
        <h2 className='heading'>color key</h2>
        { states }
      </div>
    </div>
  )
}

module.exports = { Sidebar }

