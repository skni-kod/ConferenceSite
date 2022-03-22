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
          hour="10:30 - 10:50"
          event="Prezentacja gry Roguelike"
          organiser='SKNI "KOD"'
        />
        <ScheduleItem
          hour="11:00 - 11:45"
          event='"Jak wystartować w IT?"'
          organiser="Fabrity"
        />
        <ScheduleItem
          hour="11:55 - 12:15"
          event="Prezentacja systemu operacyjnego MicrOS"
          organiser='SKNI "KOD"'
        />
        <ScheduleItem hour="12:25 - 13:10" event='"Azure"' organiser='Deloitte' />
        <ScheduleItem
          hour="13:20 - 14:05"
          event='"A może Rust?"'
          organiser="Maciej Sołtys, Mid Rust Developer"
        />
        <ScheduleItem hour="14:30 - 15:00" event='"Akcja dezinformacja, czyli jak nie dać się oszukać"' organiser='Łukasz Sieracki i Jakub Pobuta, SAITS'/>
        <ScheduleItem
          hour="15:10 - 15:55"
          event='"Pisanie oprogramownia w stylu Handmade"'
          organiser="Paweł Dziedzic"
        />
        <ScheduleItem hour="16:05 - 16:35" event='"Interpretowalne AI - Analiza zachowań w sieci"' organiser='Koło Naukowe Machine Learning'/>
        <ScheduleItem
          hour="16:35 - 16:45"
          event="Zakończenie konferencji i rozdanie nagród uczestnikom"
        />
      </div>
      <div className='mt-4 text-center italic text-white sm:text-xl sm:mt-6 md:text-2xl md:mt-10 lg:text-3xl'>Harmonogram może ulec zmianie</div>
    </section>
  )
}

export default Schedule
