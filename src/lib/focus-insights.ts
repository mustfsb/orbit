export interface SessionRecord {
  started_at: string | null;
  duration: number | null;
  status?: string | null;
}

export interface WeeklyFocusPoint {
  day: string;
  minutes: number;
}

export interface HeatmapPoint {
  date: string;
  minutes: number;
}

export interface FocusInsights {
  totalFocusMinutes: number;
  totalSessions: number;
  avgSessionLength: number;
  weeklyData: WeeklyFocusPoint[];
  peakHour: string;
  peakHourDesc: string;
  currentStreak: number;
  longestStreak: number;
  heatmapData: HeatmapPoint[];
  todayMinutes: number;
}

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getLocalDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getSessionMinutes(session: SessionRecord): number {
  return Math.max(0, Math.round(session.duration ?? 0));
}

export function formatMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}m`;
  }

  return `${hours}h ${remainingMinutes}m`;
}

export function buildFocusInsights(sessions: SessionRecord[]): FocusInsights {
  const totalFocusMinutes = sessions.reduce((total, session) => total + getSessionMinutes(session), 0);
  const totalSessions = sessions.length;
  const avgSessionLength = totalSessions > 0 ? Math.round(totalFocusMinutes / totalSessions) : 0;

  const hourlyMinutes = new Array<number>(24).fill(0);
  const sessionDayMinutes = new Map<string, number>();

  sessions.forEach((session) => {
    if (!session.started_at) {
      return;
    }

    const startedAt = new Date(session.started_at);
    const dateKey = getLocalDateKey(startedAt);
    const minutes = getSessionMinutes(session);

    hourlyMinutes[startedAt.getHours()] += minutes;
    sessionDayMinutes.set(dateKey, (sessionDayMinutes.get(dateKey) ?? 0) + minutes);
  });

  const today = new Date();
  const todayKey = getLocalDateKey(today);

  const weeklyData: WeeklyFocusPoint[] = [];
  for (let offset = 6; offset >= 0; offset -= 1) {
    const currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() - offset);
    const dateKey = getLocalDateKey(currentDate);

    weeklyData.push({
      day: WEEKDAY_LABELS[currentDate.getDay()],
      minutes: sessionDayMinutes.get(dateKey) ?? 0,
    });
  }

  const heatmapData: HeatmapPoint[] = [];
  for (let offset = 111; offset >= 0; offset -= 1) {
    const currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() - offset);
    const dateKey = getLocalDateKey(currentDate);

    heatmapData.push({
      date: dateKey,
      minutes: sessionDayMinutes.get(dateKey) ?? 0,
    });
  }

  let peakHourIndex = 9;
  let peakHourMinutes = -1;
  hourlyMinutes.forEach((minutes, index) => {
    if (minutes > peakHourMinutes) {
      peakHourMinutes = minutes;
      peakHourIndex = index;
    }
  });

  if (peakHourMinutes <= 0) {
    peakHourIndex = 9;
  }

  const period = peakHourIndex >= 12 ? "PM" : "AM";
  const displayHour = peakHourIndex % 12 || 12;
  const peakHour = `${displayHour} ${period}`;

  let peakHourDesc = "Not enough data yet";
  if (totalSessions > 0) {
    peakHourDesc = "Morning Lark";
    if (peakHourIndex >= 12 && peakHourIndex < 17) {
      peakHourDesc = "Afternoon Flow";
    }
    if (peakHourIndex >= 17 && peakHourIndex < 22) {
      peakHourDesc = "Evening Deep Work";
    }
    if (peakHourIndex >= 22 || peakHourIndex < 5) {
      peakHourDesc = "Night Owl";
    }
  }

  const sortedDays = Array.from(sessionDayMinutes.keys()).sort();
  let longestStreak = 0;
  let rollingStreak = 0;

  sortedDays.forEach((dayKey, index) => {
    if (index === 0) {
      rollingStreak = 1;
    } else {
      const previousDay = new Date(sortedDays[index - 1]);
      const currentDay = new Date(dayKey);
      const differenceInDays = Math.round(
        (currentDay.getTime() - previousDay.getTime()) / (1000 * 60 * 60 * 24)
      );

      rollingStreak = differenceInDays === 1 ? rollingStreak + 1 : 1;
    }

    longestStreak = Math.max(longestStreak, rollingStreak);
  });

  let currentStreak = 0;
  if (sessionDayMinutes.has(todayKey)) {
    const cursor = new Date(today);
    while (sessionDayMinutes.has(getLocalDateKey(cursor))) {
      currentStreak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
  }

  return {
    totalFocusMinutes,
    totalSessions,
    avgSessionLength,
    weeklyData,
    peakHour,
    peakHourDesc,
    currentStreak,
    longestStreak,
    heatmapData,
    todayMinutes: sessionDayMinutes.get(todayKey) ?? 0,
  };
}
