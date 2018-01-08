const React = require('react')

require('./style.scss')

type NavbarProps = {
  clear: Function,
  monthName: string,
  year: number
}

type NavbarState = {
  menuExpanded: boolean
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props)
    this.props = props
    this.state = {
      menuExpanded: false
    }
  }

  handleClick() {
    const { menuExpanded } = this.state
    this.setState({ menuExpanded: !menuExpanded })
  }

  render() {
    return (
      <div className='nav-bar'>
        <span className='nav' onClick={ () => this.handleClick() }>
          <img src='img/hamburger.png' />
        </span>

        <h1 className='heading'>{ `${ this.props.monthName } ${ this.props.year }` }</h1>

        <div className={ `${this.state.menuExpanded ? 'shown' : ''} menu` }>
          <p className='heading' onClick={ () => this.props.clear() }>clear</p>
        </div>
      </div>
    )
  }
}

module.exports = { Navbar }

