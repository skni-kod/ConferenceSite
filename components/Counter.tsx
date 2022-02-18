import useCountDown from 'react-countdown-hook'
import { useEffect } from 'react'

const initialTime = new Date('April 6, 2022 10:00:00').getTime() - Date.now()
const interval = 1000

const Counter = () => {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    initialTime,
    interval
  )

  useEffect(() => {
    start()
  }, [start])

  let days = Math.floor((timeLeft * 0.001) / 86400)
  let hours = Math.floor(((timeLeft * 0.001) / 3600) % 24)
  let minutes = Math.floor(((timeLeft * 0.001) / 60) % 60)
  let seconds = (timeLeft * 0.001) % 60

  return (
    <section className="px-6 py-24 text-center md:py-32 md:text-2xl xl:py-44 xl:text-4xl">
      <h2 className="font-semibold">Do wydarzenia pozostało:</h2>
      <div className="mt-16 flex justify-center gap-6 bg-white md:gap-12 xl:gap-16">
        <div className="w-14 md:w-24 xl:w-48">
          <div className="rounded-lg bg-blue-500 py-8 text-2xl font-semibold text-white shadow-md md:py-12 md:text-4xl xl:py-28 xl:text-8xl">
            {days < 10 ? '0' + days.toFixed(0) : days.toFixed(0)}
          </div>
          <div className="mt-2 font-semibold xl:mt-6">Dni</div>
        </div>
        <div className="w-14 md:w-24 xl:w-48">
          <div className="rounded-lg bg-blue-500 py-8 text-2xl font-semibold text-white shadow-md md:py-12 md:text-4xl xl:py-28 xl:text-8xl">
            {hours < 10 ? '0' + hours.toFixed(0) : hours.toFixed(0)}
          </div>
          <div className="mt-2 font-semibold xl:mt-6">Godzin</div>
        </div>
        <div className="w-14 md:w-24 xl:w-48">
          <div className="rounded-lg bg-blue-500 py-8 text-2xl font-semibold text-white shadow-md md:py-12 md:text-4xl xl:py-28 xl:text-8xl">
            {minutes < 10 ? '0' + minutes.toFixed(0) : minutes.toFixed(0)}
          </div>
          <div className="mt-2 font-semibold xl:mt-6">Minut</div>
        </div>
        <div className="w-14 md:w-24 xl:w-48">
          <div className="rounded-lg bg-blue-500 py-8 text-2xl font-semibold text-white shadow-md md:py-12 md:text-4xl xl:py-28 xl:text-8xl">
            {seconds < 10 ? '0' + seconds.toFixed(0) : seconds.toFixed(0)}
          </div>
          <div className="mt-2 font-semibold xl:mt-6">Sekund</div>
        </div>
      </div>
      <div className='mt-8 md:mt-12 lg:mt-16'>
        Wydarzenie możesz obejrzeć na <a href="#" className='uppercase text-blue-800 font-semibold hover:text-blue-400'>transmisji online</a>
      </div>
    </section>
  )
}

export default Counter
