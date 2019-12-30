export function convertSecondsToDisplay(seconds) {
    const padding = seconds % 60 < 10 ? "0" : "";
    const displayTime = `${Math.floor(seconds / 60)}:${padding}${seconds % 60}`;

    return displayTime;
}
