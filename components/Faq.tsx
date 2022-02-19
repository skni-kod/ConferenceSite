import FaqItem from './FaqItem'

const Faq = () => {
  return (
    <section className="bg-blue-900 p-10 md:px-6 lg:pb-32" id="faq">
      <h2 className="mb-4 text-center text-xl font-semibold text-white sm:text-2xl md:py-6 md:text-3xl lg:py-16 lg:text-5xl">
        FAQ
      </h2>
      <FaqItem
        question="Czy wstęp na konferencję jest płatny?"
        answer="Nie, nasza konferencja jest zupełnie darmowa."
      />
      <FaqItem
        question="Jak mogę uzyskać bilet na konferencję stacjonarną?"
        answer="Napisz do Nas na mail załączony w zakładce Kontakt. Jeśli zdążysz przed innymi to otrzymasz darmową wejściówkę na wydarzenie!"
      />
      <FaqItem
        question="Nie mogę przyjechać na konferencję mimo że posiadam bilet. Co wtedy?"
        answer="Zawsze możesz uczestniczyć w konferencji zdalnie! Transmisje wydarzenia znajdziesz na naszych mediach społecznościowych oraz na stronie wydarzenia."
      />
      <FaqItem
        question="Nie działa mi transmisja online. Co zrobić?"
        answer="Spróbuj otworzyć transmisje na innym medium. Jeśli to nie pomoże, napisz do Nas a postaramy się Ci pomóc!"
      />
      <FaqItem
        question="Co to za konferencja?"
        answer="Nasze wydarzenie jest konferencją branżową. Podczas licznych prelekcji specjaliści z wieloletnim doświadczeniem w IT opowiedzą o wielu aspektach pracy w branży, a studenci z kół naukowych pokażą ciekawe projekty wykonywane w czasie studiów. "
      />
    </section>
  )
}

export default Faq
