// @flow

const React = require('react')
const PropTypes = require('prop-types')
const moment = require('moment')

const { Calendar } = require('../Calendar/')
const { Sidebar } = require('../Sidebar/')
const { Navbar } = require('../Navbar/')
require('./style.scss')

type Props = {}

type State = {
  daysInMonth: number,
  monthName: string,
  stateOptions: Array<string>,
  year: number
}

class App extends React.Component<Props, State> {
  state: State

  constructor(props: Props) {
    super(props)
    const m = moment()

    this.state = {
      daysInMonth: m.daysInMonth(),
      monthName: m.format('MMM'),
      stateOptions: ['up', 'ok', 'down', 'anxious'],
      year: m.format('YYYY')
    }
  }

  render() {
    return(
      <React.Fragment>
        <Navbar { ...this.state } />

        <Sidebar { ...this.state } />

        <Calendar { ...this.state }/>
      </React.Fragment>
    )
  }
}

module.exports = { App }

