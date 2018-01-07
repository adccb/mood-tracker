const React = require('react')
const moment = require('moment')

const { Calendar } = require('../calendar/')
const { Sidebar } = require('../sidebar/')
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
        <div className='nav-bar'></div>

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

