import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full dark:text-slate-900 text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          /*src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"*/
          src ="https://www.edgeip.com/images/FCK/Image/202309/SFG-Lawyer.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Esas Hukuk&Avukatlık
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight dark:text-fuchsia-200 text-gray-900 sm:text-4xl sm:leading-none">
          Güvenilir Hukuki Destek
            <br className="hidden md:block" />
            Her Adımda Yanınızdayız{' '}
            <span className="inline-block text-deep-purple-accent-400">
                
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base dark:text-gray-400 text-gray-700 md:text-lg">
          Hukuki ihtiyaçlarınız için çözüm odaklı yaklaşımımız ve güvenilir hizmetlerimizle size destek olmaktan memnuniyet duyarız. İhtiyaçlarınızı en etkili şekilde karşılamak ve haklarınızı korumak için buradayız.
          </p>
          <div className="flex items-center">
            <Link to="/about">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">İletişim</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
