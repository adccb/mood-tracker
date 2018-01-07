const React = require('react')

require('./style.scss')

type NavbarProps = {
  monthName: string,
  year: number
}

const Navbar = ({ monthName, year }: NavbarProps) => (
  <div className='nav-bar'>
    <span className='nav'>
      <img src='img/hamburger.png' />
    </span>

    <h1 className='heading'>{ `${ monthName } ${ year }` }</h1>
  </div>
)

module.exports = { Navbar }

