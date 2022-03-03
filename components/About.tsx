const About = () => {
  return (
    <section
      className="flex  flex-col bg-blue-900 py-10 px-6 text-white md:px-6 lg:pb-32"
      id="o-nas"
    >
      <div className="">
        <h2 className="mb-4 text-center text-xl font-semibold  sm:text-2xl md:py-6 md:text-3xl lg:py-16 lg:text-5xl">
          Czym jest SKNI &quot;KOD&quot;?
        </h2>
        <p className="my-3 mx-auto max-w-5xl rounded-xl text-justify text-sm sm:text-lg md:my-4 lg:text-2xl">
          Celem pracy Koła jest poszerzenie wiedzy z dziedziny optymalnego
          rozwiązywania zagadnień programowania oraz poznawanie nowoczesnych
          technologii informatycznych. W ramach regularnych spotkań studenci
          samodzielnie przygotowują referaty oraz organizują wewnętrzne
          współzawodnictwo w rozwiązywaniu interesujących ich zagadnień.
        </p>
        <div className="my-3 mx-auto max-w-5xl rounded-xl text-justify text-sm sm:text-lg md:my-4 lg:text-3xl lg:mt-8">
          Chcesz dowiedzieć się więcej?
          Odwiedź{' '}
          <a
            href="https://kod.prz.edu.pl/"
            className="font-semibold uppercase text-blue-100 hover:text-blue-50"
          >
            naszą stronę
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
