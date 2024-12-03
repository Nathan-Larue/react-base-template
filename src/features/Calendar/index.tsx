import { EditEvent } from "./components/EditEvent";
import { TimeSlots } from "./components/TimeSlots";
import { CalendarContext } from "./context/useCalendarData";
import * as S from "./styles";

export const Calendar = () => {
  return (
    <CalendarContext>
      <S.CalendarContainer>
        <TimeSlots />
        <EditEvent />
      </S.CalendarContainer>
    </CalendarContext>
  );
};
