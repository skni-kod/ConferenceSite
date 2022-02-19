import ScheduleItem from './ScheduleItem'

const Schedule = () => {
  return (
    <section
      className="bg-blue-900  py-10 px-4 md:px-6 lg:pb-32"
      id="program-wydarzenia"
    >
      <h2 className="mb-4 text-center text-xl font-semibold text-white sm:text-2xl md:py-6 md:text-3xl lg:py-16 lg:text-5xl">
        Harmonogram wydarzenia
      </h2>
      <div>
        <ScheduleItem hour="10:00 - 10:20" event="Rozpoczęcie konferencji" />
        <ScheduleItem hour="10:25 - 11:00" event="Jak zacząć w branży IT" />
        <ScheduleItem
          hour="11:05 - 11:35"
          event="Prezentacja Systemu operacyjnego MicrOS"
        />
        <ScheduleItem
          hour="11:40 - 12:25"
          event="Prezentacja przedstawiciela firmy Deloite"
        />
        <ScheduleItem
          hour="12:45 - 13:15"
          event="Prezentacja dotycząca cyberbezpieczeństwa"
        />
        <ScheduleItem
          hour="13:20 - 14:05"
          event="Prezentacja przedstawiciela firmy Ideo"
        />
        <ScheduleItem hour="14:10 - 14:40" event="Prezentacja Roguelike" />
        <ScheduleItem
          hour="14:45 - 15:15"
          event="Prezentacja przedstawiciela koła naukowego GEST"
        />
        <ScheduleItem
          hour="15:20 - 16:05"
          event="Prezentacja przedstawiciela firmy Sklep E-lektronika"
        />
        <ScheduleItem hour="16:05 - 16:30" event="Zakończenie konferencji" />
      </div>
    </section>
  )
}

export default Schedule
