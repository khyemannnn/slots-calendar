// import { alegreya } from "@/app/(calendar)/layout";
import GenerateCalendarDates from "@/utils/generate-dates";
import classes from './calendar-grid.module.css'
import React from 'react';

export default function CalendarGrid({ year, month }) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); 
  const dateToday = today.getDate(); 
  const dayToday = today.getDay();
  
  
  // Generate calendar dates for the given month and year
  const monthDates = GenerateCalendarDates(year, month);

  return (
    <div>
      <div className={classes.dayGrid}>
        {days.map((day, index) => (
          <p key={index} className={
            index === dayToday && year === currentYear && month === currentMonth
              ? classes.daysBold
              : classes.days
          }>{day}</p>
        ))}
      </div>

      <div className={classes.monthGrid}>
        {monthDates.map((date, index) => (
          <div className=
          {
              date === null
                ? classes.monthNull
                : date === dateToday && year === currentYear && month === currentMonth
                ? classes.bold
                : classes.month
            } 
          key={index}>
            <p>{date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
