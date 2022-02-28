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
        <ScheduleItem hour="10:00 - 10:30" event="Rozpoczęcie konferencji" />
        <ScheduleItem
          hour="10:30 - 11:00"
          event="Prezentacja projektu Roguelike"
          organiser='SKNI "KOD"'
        />
        <ScheduleItem
          hour="11:05 - 11:50"
          event='Prelekcja - "Jak wystartować w IT?"'
          organiser="Fabrity"
        />
        <ScheduleItem
          hour="11:55 - 12:25"
          event="Prezentacja projektu MicrOS"
          organiser='SKNI "KOD"'
        />
        <ScheduleItem hour="12:30 - 13:00" event="Prelekcja - WKRÓTCE" />
        <ScheduleItem hour="13:05 - 13:50" event='Prelekcja - "A może Rust?"' organiser="Maciej Sołtys, Mid Rust Developer"/>
        <ScheduleItem hour="14:15 - 14:45" event="Prelekcja - WKRÓTCE" />
        <ScheduleItem hour="14:50 - 15:30" event="Prelekcja - WKRÓTCE" />
        <ScheduleItem hour="15:35 - 16:15" event="Prelekcja - WKRÓTCE" />
        <ScheduleItem
          hour="16:15 - 16:30"
          event="Zakończenie konferencji i rozdanie nagród uczestnikom"
        />
      </div>
    </section>
  )
}

export default Schedule
