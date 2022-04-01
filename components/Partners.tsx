import Image from './Image'

const Partners = () => {
  return (
    <section
      className="p-10 text-center text-xl font-semibold uppercase md:text-2xl lg:text-5xl xl:text-6xl"
      id="patroni"
    >
      <h2 className="py-8 normal-case lg:py-16 lg:text-4xl">
        Partnerami wydarzenia są:
      </h2>

      <div className="mb-12 sm:mb-24">
        <h3 className="mb-6  md:mb-10 lg:mb-12">Patronat honorowy</h3>
        <div className="flex flex-wrap flex-col items-center justify-center gap-12 px-6 lg:gap-20 lg:flex-row">
          <div className='lg:basis-1/3'>
            <div className="relative h-20 w-full lg:h-36">
              <Image
                src="/president.webp"
                alt="sponsor"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="pt-4 normal-case lg:pt-8 lg:text-3xl">
              Prezydent Miasta Rzeszowa
            </div>
          </div>
          <div className='lg:basis-1/3'>
            <div className="relative h-20 w-full lg:h-36">
              <Image
                src="/prz.webp"
                alt="sponsor"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="pt-4 normal-case lg:pt-8 lg:text-3xl">
              JM Rektor PRz
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 sm:mb-24">
        <h3 className="mb-6  md:mb-10 lg:mb-12">Partner główny</h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-20 w-full lg:h-36 lg:basis-1/4">
            <Image
              src="/deloitte.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 w-full lg:h-36 lg:basis-1/4">
            <Image
              src="/fabrity.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 w-full lg:h-36 lg:basis-1/4">
            <Image
              src="/primebit.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 w-full lg:h-36 lg:basis-1/4">
            <Image
              src="/pci.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className="mb-12 sm:mb-24">
        <h3 className="mb-6  md:mb-10 md:text-xl lg:mb-12 lg:text-4xl xl:text-5xl">
          Partner srebrny
        </h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-14 w-full lg:h-24 lg:basis-1/4">
            <Image
              src="/ideo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* <div className="mb-12 sm:mb-24">
        <h3 className="mb-6  md:mb-10 lg:mb-12 md:text-xl lg:text-4xl xl:text-5xl">Partner złoty</h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-14 lg:h-24 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      

      <div className="mb-12 sm:mb-24">
        <h3 className="mb-6  md:mb-10 lg:mb-12 md:text-xl lg:text-3xl xl:text-4xl">Partner brązowy</h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-10 lg:h-16 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div> */}

      <div className="mb-12 sm:mb-24">
        <h3 className="mb-6  md:mb-10 md:text-xl lg:mb-12 lg:text-3xl xl:text-4xl">
          Partner strategiczny
        </h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-10 w-full lg:h-16 lg:basis-1/4">
            <Image
              src="/rzit.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-10 w-full lg:h-16 lg:basis-1/4">
            <Image
              src="/saits.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-10 w-full lg:h-16 lg:basis-1/4">
            <Image
              src="/knml.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className="mb-12 sm:mb-24">
        <h3 className="mb-6  md:mb-10 md:text-xl lg:mb-12 lg:text-3xl xl:text-4xl">
          Partner medialny
        </h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-10 w-full lg:h-16 lg:basis-1/4">
            <Image
              src="/nowiny_1.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-10 w-full lg:h-16 lg:basis-1/4">
            <Image
              src="/nowiny_2.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-10 w-full lg:h-16 lg:basis-1/4">
            <Image
              src="/tvp3.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-10 w-full lg:h-16 lg:basis-1/4">
            <Image
              src="/centrum.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
