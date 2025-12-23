/**
 * Convert minutes to Xh Ym format
 * @param minutes - Time in minutes
 * @returns Formatted string like "2h 30m" or "45m"
 */
export function formatTime(minutes: number | undefined): string {
  if (minutes === undefined || minutes === 0) {
    return '0m';
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) {
    return `${mins}m`;
  }

  if (mins === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${mins}m`;
}
