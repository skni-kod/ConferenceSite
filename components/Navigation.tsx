import Image from 'next/image'
import { useState } from 'react'

const Navigation = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div
      className={
        clicked
          ? 'fixed inset-0 z-20 w-full bg-white bg-opacity-95 px-4 py-2 backdrop-blur-sm lg:px-6 lg:py-4'
          : 'fixed z-20 w-full bg-white bg-opacity-95 px-4 py-2 backdrop-blur-sm lg:px-6 lg:py-4'
      }
    >
      <div className="flex w-full flex-wrap items-center justify-between lg:flex-nowrap">
        <Image src="/logo.webp" alt="logo" width={192} height={60} />
        <button
          className="z-40 lg:hidden"
          onClick={() => {
            setClicked((prevClicked) => !prevClicked)
          }}
          aria-label="navigation button"
        >
          {!clicked ? (
            <svg
              className="h-12 w-12 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="h-12 w-12 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
        <nav
          className={
            clicked
              ? 'h-auto w-full  bg-opacity-95 p-6 text-center text-lg transition-all lg:block lg:h-auto lg:w-auto lg:p-0'
              : 'h-0 w-full overflow-hidden  bg-opacity-95 text-center text-lg transition-all lg:block lg:h-auto lg:w-auto lg:p-0'
          }
        >
          <ul className="font-semibold lg:flex lg:items-center lg:gap-6 xl:gap-14">
            <li className="mt-6 lg:mt-0 lg:flex-1">
              <a
                href="#o-konferencji"
                className="text-blue-800 transition-all hover:text-blue-400"
                onClick={() => {
                  setClicked(false)
                }}
              >
                O&nbsp;konferencji
              </a>
            </li>
            <li className="mt-6 lg:mt-0 lg:flex-1">
              <a
                href="#program-wydarzenia"
                className="whitespace-nowrap text-blue-800 transition-all hover:text-blue-400"
                onClick={() => {
                  setClicked(false)
                }}
              >
                Program wydarzenia
              </a>
            </li>
            <li className="mt-6 lg:mt-0 lg:flex-1">
              <a
                href="#patroni"
                className="text-blue-800 transition-all hover:text-blue-400"
                onClick={() => {
                  setClicked(false)
                }}
              >
                Patroni
              </a>
            </li>
            <li className="mt-6 lg:mt-0 lg:flex-1">
              <a
                href="#faq"
                className="text-blue-800 transition-all hover:text-blue-400"
                onClick={() => {
                  setClicked(false)
                }}
              >
                FAQ
              </a>
            </li>

            <li className="mt-6 lg:mt-0 lg:flex-1">
              <a
                href="#lokalizacja"
                className="whitespace-nowrap text-blue-800 transition-all hover:text-blue-400"
                onClick={() => {
                  setClicked(false)
                }}
              >
                Lokalizacja
              </a>
            </li>
            <li className="mt-6 lg:mt-0 lg:flex-1">
              <a
                href="#kontakt"
                className="text-blue-800 transition-all hover:text-blue-400"
                onClick={() => {
                  setClicked(false)
                }}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
