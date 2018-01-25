// @flow

import React from 'react'

import { range } from '../../util/'
import './style.scss'
import type { CalendarProps } from '../../types'

export const Calendar = ({ data, daysInMonth, update  }: CalendarProps) => {
  const blocks = range(daysInMonth).map(d => (
      <div className={`${data[d]} block hover`} key={ d }>
        <span className='date-label'>{ d + 1 }</span>
        <div className='block-layer'>
          <span onClick={ () => update({ date: d + 1, status: 'up'}) } className='up layer'></span>
          <span onClick={ () => update({ date: d + 1, status: 'ok' }) } className='ok layer'></span>
          <span onClick={ () => update({ date: d + 1, status: 'down' }) } className='down layer'></span>
          <span onClick={ () => update({ date: d + 1, status: 'anxious' }) } className='anxious layer'></span>
        </div>
      </div>
    )
  )

  return(
    <div className='content'>
      <div className='inner-content'>
        { blocks }
      </div>
    </div>
  )
}

