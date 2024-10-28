

export function getDaysInMonth(year:number, month: number):number {
    return new Date(year, month+1,0).getDate();
    
}

export default function GenerateCalendarDates(year:number, month: number):(number | null)[] {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(Date.UTC(year, month, 1));
    const startingDayOfWeek = firstDayOfMonth.getUTCDay();
    

    const calendarDates: (number | null)[] = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
        calendarDates.push(null);
    }

    for (let i=1; i <= daysInMonth; i++) {
        const date = new Date(Date.UTC(year, month, i));
        calendarDates.push(i);
    }


    return calendarDates; 
   
}


