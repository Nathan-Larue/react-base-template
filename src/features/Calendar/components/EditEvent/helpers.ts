export const formatTimeToPercentage = (dateAsString: string) => {
    const [hour, minute] = dateAsString.split(':').map(timeData => Number(timeData));
    return ((hour + (minute / 60)) / 24);
}