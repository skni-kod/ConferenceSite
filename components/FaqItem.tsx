import { useState } from 'react'

const FaqItem = (props: any) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="my-3 rounded-xl bg-gray-200 text-sm sm:text-lg md:my-4 lg:text-2xl">
      <div
        className="relative cursor-pointer py-2 px-4 font-semibold lg:px-12 lg:py-4"
        onClick={() => {
          setClicked(!clicked)
        }}
      >
        {props.question}
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
            ? 'h-44 rounded-b-xl bg-white py-2 px-4 transition-[height] duration-200 ease-out lg:px-12 lg:py-6'
            : 'h-0 w-0 overflow-hidden transition-[height] duration-200 ease-out'
        }
      >
        {props.answer}
      </div>
    </div>
  )
}

export default FaqItem
