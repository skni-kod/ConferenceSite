import { useState } from 'react'

export type FaqItemProps = {
  answer: string
  children?: never
  question: string
}

const FaqItem = ({ answer, question }: FaqItemProps) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="my-3 rounded-xl bg-blue-50 odd:bg-blue-100 text-sm max-w-5xl mx-auto sm:text-lg md:my-4 lg:text-2xl">
      <div
        className="relative cursor-pointer py-2 pl-4 pr-14 font-semibold lg:px-12 lg:py-4"
        onClick={() => {
          setClicked((prevClicked) => !prevClicked)
        }}
      >
        {question}
        <div className="absolute left-0 top-0 right-0 ml-auto mr-4 flex h-full w-6 items-center">
          {!clicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={
          clicked
            ? 'max-h-48 rounded-b-xl bg-white py-2 px-4 transition-all duration-200 ease-out lg:px-12 lg:py-6'
            : 'max-h-0 overflow-hidden rounded-b-xl bg-white py-0 px-4 transition-all duration-200 ease-out lg:px-12 lg:py-0'
        }
      >
        {answer}
      </div>
    </div>
  )
}

export default FaqItem
