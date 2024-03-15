import {FC} from 'react'
import EventSchedules from './EventSchedule';



const Schedules: FC = () => {
  return (
    <div className='flex'>
        <hr className=' bg-black' />
          <EventSchedules/>

    </div>
  )
}

export default Schedules;