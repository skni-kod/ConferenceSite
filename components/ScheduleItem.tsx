const ScheduleItem = (props: any) => {
  return (
    <div className="my-3 flex justify-between rounded-xl bg-gray-200 py-2 px-4 text-sm sm:text-lg md:my-4 lg:px-12 lg:py-3 lg:text-2xl">
      <div>{props.hour}</div>
      <div>{props.event}</div>
    </div>
  )
}

export default ScheduleItem
