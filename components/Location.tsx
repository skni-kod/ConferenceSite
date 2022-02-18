import Image from 'next/image'

const Location = () => {
  return (
    <section className='p-6 max-w-screen-2xl mx-auto md:px-12 md:py-8 lg:py-12 xl:py-16' id="lokalizacja">
      <h2 className='p-6 text-center text-xl font-semibold mb-6 sm:text-2xl md:text-3xl md:mb-12 lg:text-5xl lg:mb-16 xl:mb-20'>Lokalizacja wydarzenia</h2>
      <Image src="/logo.webp" width={900} height={825} layout="responsive" alt="lokalizacja" />
    </section>
  )
}

export default Location
