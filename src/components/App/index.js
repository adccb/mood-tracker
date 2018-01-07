const React = require('react')
const moment = require('moment')

const { Calendar } = require('../Calendar/')
const { Sidebar } = require('../Sidebar/')
require('./style.scss')

class App extends React.Component {
  constructor() {
    super()
    this.moment = moment()
  }

  render() {
    const daysInMonth = this.moment.daysInMonth()
    const monthName = this.moment.format('MMM')
    const year = this.moment.format('YYYY')

    return(
      <React.Fragment>
        <div className='nav-bar'>
          <span className='nav'>
            <img src='img/hamburger.png' />
          </span>
          <h1 className='heading'>mood tracker</h1>
        </div>

        <Sidebar />

        <Calendar
          days={ daysInMonth }
          monthName={ monthName }
          year={ year }
        />
      </React.Fragment>
    )
  }
}

module.exports = { App }

