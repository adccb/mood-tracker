const React = require('react')

const { range } = require('../../util/')
require('./style.scss')

const Calendar = props => {
  const { days, monthName, year } = props

  const getStatus = () => ['up', 'down', 'ok', 'anxious'][Math.floor(Math.random() * 4)]
  const blocks = range(days).map(d => {
    const cn = `block hover ${ getStatus() }`
    return(
      <div className={ cn } key={ d }>
        <span className='date-label'>{ d + 1 }</span>
      </div>
    )
  })

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

