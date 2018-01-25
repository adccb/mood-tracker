// @flow

import moment from 'moment'

import type { ApplicationState } from '../types'

export const LOCAL_STORAGE_KEY = 'mood-tracker-json'

const m = moment()
const daysInMonth = m.daysInMonth()
const lsData = window.localStorage.getItem(LOCAL_STORAGE_KEY)
const data = lsData === null ? new Array(daysInMonth).fill('') : JSON.parse(lsData)

export const defaultState: ApplicationState = {
  data,
  daysInMonth: daysInMonth,
  monthName: m.format('MMM'),
  stateOptions: ['up', 'ok', 'down', 'anxious'],
  year: m.format('YYYY')
}

