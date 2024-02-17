import React from 'react'
import { FaUserTie } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-2">
      <h1 className="text-3xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-lg mb-4">
          Profesyonel hukuki hizmetler sunan bir avukat ekibiyiz.
          </p>
          <p className="text-lg mb-4">
          Deneyimli avukatlarımız, aile hukuku, iş hukuku ve ceza hukuku gibi farklı alanlarda uzmanlaşmıştır.
          </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div>
          <h2 className="text-2xl font-bold mb-4 my-8">Avukatlarımız</h2>
          <div className="flex items-center  mb-4">
            <FaUserTie className="text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Emre Güler</h3>
              <p className="text-lg"></p>
            </div>
          </div>
          <div className="flex items-center">
            <FaUserTie className="text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Sefa Yaman</h3>
              <p className="text-lg"></p>
            </div>
          </div>
        </div>
        <div>
      <h2 className="text-2xl font-bold my-8">Hizmetlerimiz</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-4">Aile Hukuku</li>
          <li className="text-lg mb-4">Ceza Hukuku</li>
          <li className="text-lg mb-4">İş Hukuku</li>
          <li className="text-lg mb-4">Dava Hukuku</li>
          <li className="text-lg mb-4">Gayrimenkul Hukuku</li>
        </ul>
      </div>
      </div>
      
    </div>
  )
}
