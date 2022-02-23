export type ScheduleItemProps = {
  children?: never
  event: string
  hour: string
  organiser?: string
}

const ScheduleItem = ({ event, hour, organiser }: ScheduleItemProps) => {
  return (
    <div className="my-3 mx-auto flex max-w-5xl justify-between gap-4  rounded-xl bg-blue-50 py-2 px-4 text-sm odd:bg-blue-100 sm:text-lg md:my-4 lg:px-12 lg:py-3 lg:text-2xl">
      <div className="whitespace-nowrap">{hour}</div>
      <div className="text-right">
        <div>
          {event}
        </div>
        <div className="text-gray-400 italic text-xs sm:text-sm md:text-base lg:text-xl">
          {organiser}
        </div>
      </div>
    </div>
  )
}

export default ScheduleItem
