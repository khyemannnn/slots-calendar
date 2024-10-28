'use client';
import { useState } from "react";

export function DateToday() {

    const [currentDate, setCurrentDate] = useState(() => {
        const now = new Date();
        return {
            month: now.getMonth(),
            year: now.getFullYear(),
        };
    });

    const nextMonth = () => {
        setCurrentDate(prev => {
            const nextMonth = prev.month === 11 ? 0 : prev.month +1;
            const nextYear = prev.month === 11? prev.year +1 : prev.year;
            return {
                month: nextMonth,
                year: nextYear,
            }
        })

        const prevMonth = () => {
            setCurrentDate(next => {
                const prevMonth = next.month === 0 ? 11 : next.month -1;
                const prevYear = next.month === 0 ? next.year -1 : next.year;
                return {
                    month: prevMonth,
                    year: prevYear,
                }
            });

            return { ...currentDate, nextMonth, prevMonth}
    }


}
}