const ScheduleItem = (props: any) => {
  return (
    <div className="my-3 flex justify-between rounded-xl bg-blue-50 odd:bg-blue-100  py-2 px-4 text-sm  max-w-5xl mx-auto sm:text-lg md:my-4 lg:px-12 lg:py-3 lg:text-2xl">
      <div>{props.hour}</div>
      <div>{props.event}</div>
    </div>
  )
}

export default ScheduleItem
