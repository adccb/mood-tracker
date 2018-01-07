const React = require('react')

require('./style.scss')

const Navbar = props => (
  <div className='nav-bar'>
    <span className='nav'>
      <img src='img/hamburger.png' />
    </span>

    <h1 className='heading'>mood tracker</h1>
  </div>
)

module.exports = { Navbar }

