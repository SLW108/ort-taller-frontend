/* eslint-disable jsx-a11y/anchor-is-valid */
import './Stats.css'

const Stats = ({ items }) => {
  const getCompleted = () => items.filter(item => item).length
  const getIncompleted = () => items.filter(item => !item).length

  return (
    <div className='row'>
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Total completed</h5>
            <p className='card-text'>
              <span class='badge bg-success'>{getCompleted()}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Total incompleted</h5>
            <span class='badge bg-warning'>{getIncompleted()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
