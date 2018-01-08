// @flow

const React = require('react')

const { range } = require('../../util/')
require('./style.scss')

type CalendarProps = {
  data: Array<string>,
  daysInMonth: number,
  update: Function
}

const Calendar = ({ data, daysInMonth, update  }: CalendarProps) => {
  const blocks = range(daysInMonth).map(d => (
      <div className={`${data[d]} block hover`} key={ d }>
        <span className='date-label'>{ d + 1 }</span>
        <div className='block-layer'>
          <span onClick={ () => update(d + 1, 'up') } className='up layer'></span>
          <span onClick={ () => update(d + 1, 'ok') } className='ok layer'></span>
          <span onClick={ () => update(d + 1, 'down') } className='down layer'></span>
          <span onClick={ () => update(d + 1, 'anxious') } className='anxious layer'></span>
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

module.exports = { Calendar }

