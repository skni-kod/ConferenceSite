import Image from 'next/image'
import Particles from 'react-tsparticles'

const Header = () => {
  return (
    <header className="text-md relative p-4 text-center text-white min-h-screen" id="o-konferencji">
      <Image
        className="-z-0 brightness-[0.4]"
        src="/background-header.webp"
        alt="tło"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Particles
        className='z-0 absolute inset-0'
        id="tsparticles"
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          fpsLimit: 120,
          interactivity: {
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative sm:text-2xl lg:text-3xl">
        <h1 className="neon pt-32 text-center text-3xl uppercase tracking-widest text-white sm:text-5xl lg:pt-40 lg:text-8xl 2xl:pb-2 2xl:text-8xl">
          Konferencja
        </h1>
        <div className="mt-8 lg:mt-14 2xl:mt-16">
          na 25-lecie Studenckiego Koła Naukowego Informatyków &quot;KOD&quot;
        </div>
        <div className="mt-8 lg:mt-14 2xl:mt-16">
          6 kwietnia 2022 r. <br />
          10:00
        </div>
        <div className="mt-8 lg:mt-14 2xl:mt-16">
          Online / Budynek V Politechniki Rzeszowskiej
        </div>
        <div className="mt-16 flex justify-center gap-8 md:gap-12 lg:gap-20 2xl:mt-24 2xl:gap-24">
          <a href="https://www.facebook.com/skni.kod/" aria-label="Facebook">
            <svg
              className="h-12 w-12 rounded-lg bg-white p-2 text-blue-500 md:h-16 md:w-16 lg:h-20 lg:w-20 lg:rounded-xl lg:p-4 hover:scale-110 transition-all"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCp5gdqU6815vVn-G_BCKjDQ/featured" aria-label="YoutTube">
            <svg
              className="h-12 w-12 rounded-lg bg-white p-2 text-red-500 md:h-16 md:w-16 lg:h-20 lg:w-20 lg:rounded-xl lg:p-4 hover:scale-110 transition-all"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{' '}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
          <a href="https://www.instagram.com/skni.kod/" aria-label="Instagram">
            <svg
              className="h-12 w-12 rounded-lg bg-white p-2 text-indigo-500 md:h-16 md:w-16 lg:h-20 lg:w-20 lg:rounded-xl  lg:p-4 hover:scale-110 transition-all"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{' '}
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{' '}
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
