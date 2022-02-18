import Image from 'next/image'

const Footer = () => {
  return (
    <footer
      className="bg-white px-6 py-12 text-black flex flex-col md:px-12 md:text-xl lg:px-36 xl:px-48 xl:flex-row xl:gap-4"
      id="kontakt"
    >
      <div>
        <div className="flex flex-col justify-between gap-2">
          <div>
            Chcesz zostać partnerem konferencji lub masz jakieś pytanie? <br />{' '}
            Napisz do nas:
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="h-6 w-6 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <rect x="3" y="5" width="18" height="14" rx="2" />{' '}
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <a href="mailto:sknikod@47.47" className="underline">
              sknikod@47.47
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-2">
          <div>
            Odwiedź nasze social media, aby dowiedzieć się więcej o naszym Kole
            Naukowym:
          </div>
          <div className="mt-4 flex gap-8 md:gap-12">
            <a href="https://www.facebook.com/skni.kod/" aria-label="Facebook">
              <svg
                className="h-12 w-12 rounded-lg bg-blue-500 p-2 text-white transition-all hover:scale-110 md:h-16 md:w-16"
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
            <a
              href="https://www.youtube.com/channel/UCp5gdqU6815vVn-G_BCKjDQ/featured"
              aria-label="YouTube"
            >
              <svg
                className="h-12 w-12 rounded-lg bg-blue-500 p-2 text-white transition-all hover:scale-110 md:h-16 md:w-16"
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
            <a
              href="https://www.instagram.com/skni.kod/"
              aria-label="Instagram"
            >
              <svg
                className="h-12 w-12 rounded-lg bg-blue-500 p-2 text-white transition-all hover:scale-110 md:h-16 md:w-16"
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
      </div>

      <div className="mx-auto mt-12 w-fit xl:mr-0 xl:self-end">
        <Image src="/logo.webp" alt="logo" width={500} height={155} />
      </div>
    </footer>
  )
}

export default Footer
