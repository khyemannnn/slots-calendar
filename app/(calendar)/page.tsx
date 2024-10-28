import { DateProvider } from "@/utils/date-context";
import { Metadata } from "next";
import CalendarApp from "@/components/calendar/main-content";

export const metadata: Metadata = {
  title: "slots.",
  description: "Manage your bookings in the calendar here!",
};

export default function App() {

  return (
    <DateProvider>
    
    <CalendarApp />
    
    </DateProvider>
    
  )
  
}
