"use client"

interface HeatmapDay {
  date: string
  minutes: number
}

interface ActivityHeatmapProps {
  data: HeatmapDay[]
}

function getColorClass(minutes: number): string {
  if (minutes === 0) return "bg-foreground/5"
  if (minutes < 30) return "bg-accent/20"
  if (minutes < 60) return "bg-accent/40"
  if (minutes < 120) return "bg-accent/70"
  return "bg-accent"
}

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export function ActivityHeatmap({ data }: ActivityHeatmapProps) {
  // data is 112 entries (16 weeks × 7 days), ordered oldest first
  // We need to render in column-major order (day-of-week rows, week columns)
  // gridAutoFlow: column means items fill column by column

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        {/* Day labels */}
        <div
          className="flex flex-col justify-between"
          style={{ height: "calc(7 * 14px + 6 * 3px)" }}
        >
          {DAY_LABELS.map((day) => (
            <span key={day} className="text-[10px] font-sans opacity-30 uppercase tracking-widest leading-none h-[14px] flex items-center">
              {day}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div
          className="grid gap-[3px]"
          style={{
            gridTemplateRows: "repeat(7, 14px)",
            gridTemplateColumns: "repeat(16, 1fr)",
            gridAutoFlow: "column",
            flex: 1,
          }}
        >
          {data.map((day) => (
            <div
              key={day.date}
              className={`rounded-sm ${getColorClass(day.minutes)} transition-colors`}
              title={`${day.date}: ${day.minutes} min`}
              style={{ width: "100%", height: "14px" }}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 justify-end">
        <span className="text-[10px] opacity-30 font-sans">Less</span>
        {[0, 15, 45, 90, 130].map((m) => (
          <div
            key={m}
            className={`w-3 h-3 rounded-sm ${getColorClass(m)}`}
          />
        ))}
        <span className="text-[10px] opacity-30 font-sans">More</span>
      </div>
    </div>
  )
}
