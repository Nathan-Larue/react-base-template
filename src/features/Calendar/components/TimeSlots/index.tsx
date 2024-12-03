import { useCalendarData } from "../../context/useCalendarData";
import * as S from "./styles";

const HOURS_24h = new Array(24).fill(undefined).map((_item, index) => index);

export const TimeSlots = () => {
  const { events } = useCalendarData();

  return (
    <S.TimeSlotsContainer>
      <S.TimeslotBackground>
        {HOURS_24h.map((startingHour) => (
          <S.TimeSlot key={startingHour}>
            <S.LeftMarker>
              <S.StartTimeWrapper>{`${startingHour}H`}</S.StartTimeWrapper>
            </S.LeftMarker>
          </S.TimeSlot>
        ))}
      </S.TimeslotBackground>
      <S.EventsForeground>
        {events.map(({ startTime, endTime, name }) => (
          <S.Event key={name} starttime={startTime} endtime={endTime}>
            <S.EventName>{name}</S.EventName>
          </S.Event>
        ))}
      </S.EventsForeground>
    </S.TimeSlotsContainer>
  );
};
