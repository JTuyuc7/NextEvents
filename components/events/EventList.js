import EventItem from './EventItem'
import classess from './EventList.module.css'

const EventList = ({ events }) => {
  return (
    <>
      <ul className={classess.list}>
        {events.map((event, idx) => {
          return <EventItem key={idx} event={event} />
        })}
      </ul>
    </>
  )
}

export default EventList
