import Image from 'next/image'

const Partners = () => {
  return (
    <section className="text-center text-xl font-semibold uppercase md:text-2xl lg:text-5xl xl:text-6xl" id="patroni">
      <h2 className="py-8 normal-case lg:py-16 lg:text-4xl">
        Partnerami wydarzenia są:
      </h2>

      <div className="mb-12 sm:mb-24">
        <h3 className="mb-6  md:mb-10 lg:mb-12">Partner główny</h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
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
        <h3 className="mb-6  md:mb-10 lg:mb-12 md:text-xl lg:text-4xl xl:text-5xl">Partner złoty</h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
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
        <h3 className="mb-6  md:mb-10 lg:mb-12 md:text-xl lg:text-4xl xl:text-5xl">Partner srebrny</h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
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
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
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
        <h3 className="mb-6  md:mb-10 lg:mb-12 md:text-xl lg:text-3xl xl:text-4xl">Partner strategiczny</h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
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
        <h3 className="mb-6  md:mb-10 lg:mb-12 md:text-xl lg:text-3xl xl:text-4xl">Partner medialny</h3>
        <div className="flex flex-col gap-6 px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-12">
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
              alt="sponsor"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-20 lg:h-36 w-full lg:basis-1/4">
            <Image
              src="/logo.webp"
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
