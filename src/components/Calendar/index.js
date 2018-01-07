// @flow

const React = require('react')

const { range } = require('../../util/')
require('./style.scss')

type CalendarProps = {
  daysInMonth: number,
  monthName: string,
  year: number
}

const Calendar = ({ daysInMonth, monthName, year  }: CalendarProps) => {
  const blocks = range(daysInMonth).map(d => (
      <div className='block hover' key={ d }>
        <span className='date-label'>{ d + 1 }</span>
      </div>
    )
  )

  return(
    <div className='content'>
      <div className='inner-content'>
        <h1 className='heading'>{ `${monthName} ${year}` }</h1>

        { blocks }
      </div>
    </div>
  )
}

module.exports = { Calendar }

