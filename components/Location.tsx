import Image from './Image'

const Location = () => {
  return (
    <section
      className="mx-auto max-w-screen-2xl p-6 md:px-12 md:py-8 lg:py-12 xl:py-16"
      id="lokalizacja"
    >
      <h2 className="mb-6 p-6 text-center text-xl font-semibold sm:text-2xl md:mb-12 md:text-3xl lg:mb-16 lg:text-5xl xl:mb-20">
        Lokalizacja wydarzenia
      </h2>
      {/* <Image src="/logo.webp" width={900} height={825} layout="responsive" alt="lokalizacja" /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.590293749265!2d21.9870063157158!3d50.019033979418204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbb343ad0907%3A0xf25c32d349275186!2sBudynek%20V!5e0!3m2!1spl!2spl!4v1645294596091!5m2!1spl!2spl"
        loading="lazy"
        className='w-full h-96'
      ></iframe>
    </section>
  )
}

export default Location
