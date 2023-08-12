import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/en-gb';

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: 'Meeting',
      start: new Date(2023, 6, 20, 10, 0), // July 20, 2023, 10:00 AM
      end: new Date(2023, 6, 20, 12, 0), // July 20, 2023, 12:00 PM
    },
    // Add more events as needed
  ];
  return (
    <div>
      <h3>My Calendar</h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }} // Set a height for the calendar
      />
    </div>
  );
};

export default MyCalendar;
