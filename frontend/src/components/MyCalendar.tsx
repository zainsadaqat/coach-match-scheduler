import react, { useState } from 'react';
import Calendar from 'react-calendar';
import './MyCalendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const handleDateChange = (value: Date): void => {
    setDate(value);
  };
  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={handleDateChange as any} value={date} />
      </div>
      {/* <p className="">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p> */}
    </div>
  );
};

export default MyCalendar;
