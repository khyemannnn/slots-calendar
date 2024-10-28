'use client';
import React, { useState } from 'react';
import CalNav from './calendar-nav';
import CalendarGrid from './calendar-grid';
import { DateContext } from '../../utils/date-context';
import classes from './main-content.module.css'

export default function CalendarApp() {
  // State for the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <DateContext.Provider value={{ currentDate, setCurrentDate }}>
      <div className={classes.contentContainer}>
      <CalNav />
      <CalendarGrid year={currentDate.getFullYear()} month={currentDate.getMonth()} />
      </div>
    </DateContext.Provider>
  );
}
