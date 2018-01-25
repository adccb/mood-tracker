// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Calendar } from '../Calendar/'
import { Sidebar } from '../Sidebar/'
import { Navbar } from '../Navbar/'
import './style.scss'

import type { ApplicationState, ApplicationProps } from '../../types'

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  update: data => {
    dispatch({ type: 'UPDATE', data })
  },
  clear: () => {
    dispatch({ type: 'CLEAR', data: [] })
  },
  toggleMenu: () => {
    dispatch({ type: 'MENUTOGGLE' })
  }
})

class App extends React.Component<ApplicationProps, ApplicationState> {
  
  render() {
    return(
      <div>
        <Navbar { ...this.props } />
        <Sidebar { ...this.props } />
        <Calendar { ...this.props } />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App) 

