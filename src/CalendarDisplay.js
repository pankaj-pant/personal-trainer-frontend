import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import uuid from 'uuid/v4'

const localizer = momentLocalizer(moment)

function CalendarDisplay() {
  const now = new Date()
  const [events, setEvents] = useState([{
    id: uuid(),
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2019, 9, 28),
    end: new Date(2019, 9, 28),
  },
  {
    id: uuid(),
    title: 'Long Event',
    start: new Date(2019, 9, 31),
    end: new Date(2019, 9, 31),
  },
  {
    id: uuid(),
    title: 'Right now Time Event',
    start: now,
    end: now,
  }])

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
      .then(response => response.json())
      .then(responseData => {
        let appointments = responseData.content
        console.log(appointments)
        let agendaItems = []
        //appointments.map(appointment => setEvents([...events, {id: uuid(), title: appointment.activity, start: new Date(appointment.date), end: new Date("2019-10-14T14:57:59.751+0000")}]));
        for (let i = 0; i < appointments.length; i++){
          const start = new Date(appointments[i].date)
          const end = new Date(appointments[i].date)
          end.setMinutes(end.getMinutes() + appointments[i].duration)
          agendaItems.push( { id: uuid(), title: appointments[i].activity, start: start, end: end })
        }
        console.log(agendaItems)
        const start = new Date()
        const end = new Date()
        end.setMinutes(end.getMinutes() + appointments[0].duration)

        console.log(start)
        console.log(end)

        setEvents(agendaItems)
      })
  }

  React.useEffect(() => {
    fetchData()
  } ,[]
  )



  return (
    <div style={{ height: '500pt' }}>
      <Calendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
      />
    </div>
  )
}

export default CalendarDisplay
