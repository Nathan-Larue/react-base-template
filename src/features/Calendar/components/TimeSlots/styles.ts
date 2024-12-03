import styled from "styled-components";

export const TimeSlotsContainer = styled.div`
    width: 100%;
    border-right: 1px solid black;
`;

export const TimeSlot = styled.div`
    display: flex;
    height: 100px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
`;

export const LeftMarker = styled.div`
    height: 100%;
    background-color: lightgrey;
    width: 3rem;
    border-right: 1px solid black;
`;

export const StartTimeWrapper = styled.div`
    padding: 0.5rem;
`;

export const TimeslotBackground = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    height: 100%;
`

export const EventsForeground = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    top: -100%;
    left: 50px;
`

interface EventProps {
    starttime: number
    endtime: number
}

export const Event = styled.div<EventProps>`
    position: relative;
    ${({starttime, endtime}) => `
        top: ${starttime * 100 * 24}px;
        height: ${(endtime - starttime) * 100 * 24}px;
    `}
    background-color: blue;
    color: white;
    border: 1px solid black;
`

export const EventName = styled.div`
    padding: 1rem;
`