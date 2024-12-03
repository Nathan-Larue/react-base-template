import { useState } from "react";
import * as S from "./styles";
import { useCalendarData } from "../../context/useCalendarData";
import { formatTimeToPercentage } from "./helpers";

export const EditEvent = () => {
  const [eventName, setEventName] = useState<string>();
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();
  const [isFormIncomplete, setIsFormIncomplete] = useState(false);
  const { addEvent } = useCalendarData();

  const submitForm = () => {
    if (!eventName || !startTime || !endTime || endTime <= startTime) {
      setIsFormIncomplete(true);
      return;
    }
    setIsFormIncomplete(false);

    addEvent({
      startTime: formatTimeToPercentage(startTime),
      endTime: formatTimeToPercentage(endTime),
      name: eventName,
    });
  };

  return (
    <S.EditEventContainer>
      <h2>Add an event</h2>
      <>
        <label>Event Name</label>
        <input type="text" onChange={(e) => setEventName(e.target.value)} />
      </>
      <>
        <label>Event Start Time</label>
        <input type="time" onChange={(e) => setStartTime(e.target.value)} />
      </>
      <>
        <label>Event End Time</label>
        <input type="time" onChange={(e) => setEndTime(e.target.value)} />
      </>
      <button onClick={submitForm}>Submit</button>
      {isFormIncomplete && (
        <S.ErrorLabel>
          Your event is incomoplete, please make sure to fill all the inputs.
        </S.ErrorLabel>
      )}
    </S.EditEventContainer>
  );
};
