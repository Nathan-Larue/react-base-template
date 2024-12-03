import { createContext, ReactNode, useContext, useState } from "react";
import { CalendarEvent } from "../types";

interface ProviderI {
  events: CalendarEvent[];
  addEvent: (event: CalendarEvent) => void;
}

const Context = createContext({} as ProviderI);

interface Props {
  children: ReactNode;
}

export const CalendarContext = ({ children }: Props) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const addEvent = (event: CalendarEvent) => setEvents([...events, event]);

  return (
    <Context.Provider value={{ events, addEvent }}>{children}</Context.Provider>
  );
};

export const useCalendarData = () => useContext(Context);
