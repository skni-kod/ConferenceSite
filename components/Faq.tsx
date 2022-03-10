import FaqItem from './FaqItem'

const Faq = () => {
  return (
    <section className="bg-blue-900 py-10 px-4 md:px-6 lg:pb-32" id="faq">
      <h2 className="mb-4 text-center text-xl font-semibold text-white sm:text-2xl md:py-6 md:text-3xl lg:py-16 lg:text-5xl">
        FAQ
      </h2>
      <FaqItem
        question="Czy wstęp na konferencję jest płatny?"
        answer={`Do wejścia na konferencję wymagany jest bilet wstępu. Jest on <b class="font-semibold">bezpłatny</b>. W celu uzyskania biletu należy skontaktować się z przedstawicielami Studenckiego Koła Naukowego Informatyków "KOD" poprzez adres email lub pisząc wiadomość na nasz <a href="https://www.facebook.com/skni.kod/" class="underline">fanpage</a>. Zastrzegamy iż ilość miejsc stacjonarnych jest <b class="font-semibold">ograniczona!</b>`}
      />
      <FaqItem
        question="Jak mogę uzyskać bilet na konferencję stacjonarną?"
        answer={`W celu otrzymania biletu wstępu należy skontaktować się z naszym kołem przez adres email lub wysłać do nas wiadomość na <a href="https://www.facebook.com/skni.kod/" class="underline">fanpage koła.</a>`}
      />
      <FaqItem
        question="Gdzie i w jakiej formie odbędzie się konferencja?"
        answer={`W konferencji można wziąć udział na dwa sposoby. Pierwszym jest forma stacjonarna czyli przyjazd do Budynku V Politechniki Rzeszowskiej wraz ze swoją wejściówką.
        Drugą jest forma zdalna. Konferencja będzie streamowana w całości na naszych social mediach oraz na stronie wydarzenia <a href="https://www.skni25.pl" class="underline">www.skni25.pl</a>.
        Obie formy uczestnictwa są w pełni darmowe!`}
      />
      <FaqItem
        question="Jakie atrakcje są przewidziane na to wydarzenie?"
        answer="Głównym punktem konferencji będą profesjonalne prelekcje prowadzone przez doświadczonych pracowników branży IT oraz studentów Politechniki Rzeszowskiej. Dodatkowo w sali V18 będzie można spotkać przedstawicieli kół naukowych, poznać tajniki Wirtualnej Rzeczywistości, druku 3D oraz wiele innych.
        Dla najaktywniejszych uczestników prelekcji jak również zwycięzców licznych konkursów przewidzianych na ten dzień organizator przygotował wiele nagród i niespodzianek!"
      />
      <FaqItem
        question="Chcę wesprzeć konferencję lub zostać partnerem wydarzenia. Jak mogę to zrobić?"
        answer={`W tym celu prosimy o kontakt mailowy na adres: <a href="mailto:sknikodprz@gmail.com" className="underline">sknikodprz@gmail.com</a>
        Skontaktujemy się z Państwem najpóźniej w następny dzień.`}
      />
    </section>
  )
}

export default Faq
