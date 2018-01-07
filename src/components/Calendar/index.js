// @flow

const React = require('react')

const { range } = require('../../util/')
require('./style.scss')

type CalendarProps = {
  daysInMonth: number
}

const Calendar = ({ daysInMonth  }: CalendarProps) => {
  const blocks = range(daysInMonth).map(d => (
      <div className='block hover' key={ d }>
        <span className='date-label'>{ d + 1 }</span>
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

module.exports = { Calendar }

