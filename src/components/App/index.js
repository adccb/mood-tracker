// @flow

const React = require('react')
const PropTypes = require('prop-types')
const moment = require('moment')

const { Calendar } = require('../Calendar/')
const { Sidebar } = require('../Sidebar/')
const { Navbar } = require('../Navbar/')
require('./style.scss')

const LOCAL_STORAGE_KEY = 'mood-tracker-json'

type Props = {}

type State = {
  data: Array<string>,
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
    const lsData = window.localStorage.getItem(LOCAL_STORAGE_KEY)

    const data = lsData === null ? [] : JSON.parse(lsData)
    this.state = {
      data,
      daysInMonth: m.daysInMonth(),
      monthName: m.format('MMM'),
      stateOptions: ['up', 'ok', 'down', 'anxious'],
      year: m.format('YYYY')
    }
  }

  update(date: number, state: string) {
    const { data } = this.state
    data[date - 1] = state

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
    this.setState({ data })
  }

  deleteAll() {
    const data = []

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
    this.setState({ data })
  }

  render() {
    return(
      <React.Fragment>
        <Navbar
          clear={ () => this.deleteAll() }
          { ...this.state }
          />

        <Sidebar { ...this.state } />

        <Calendar
          update={ (date, state) => this.update(date, state) }
          { ...this.state }
          />
      </React.Fragment>
    )
  }
}

module.exports = { App }

