import { alegreya } from "@/app/(calendar)/layout";
import { useContext } from "react";
import { DateContext } from "../../utils/date-context";
import classes from './calendar-nav.module.css';

export default function CalNav() {
  const { currentDate, setCurrentDate } = useContext(DateContext);

  if (!currentDate || !(currentDate instanceof Date)) {
    return <p>Loading...</p>; // or handle invalid date state
  }

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const isCurrentMonth = currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear;


  // Function to move to the next month
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // Function to move to the previous month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  // Format the current month and year to display like "Aug 2024"
  const formattedMonthYear = currentDate.toLocaleString('default', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className={classes.calNav}>
      <button className={classes.leftButton} onClick={handlePrevMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#B29079"} fill={"none"}>
          <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Display the current month and year */}
      <span className={`${alegreya.className} ${isCurrentMonth ? classes.underline : ''}`}>{formattedMonthYear}</span>

      <button className={classes.rightButton} onClick={handleNextMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#B29079"} fill={"none"}>
          <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
